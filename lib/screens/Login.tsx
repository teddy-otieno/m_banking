import React from 'react';
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../components/Colors';
import {LabeledTextInput, Spacer} from '../components/Core';
import {set_session} from '../mock/accounts';
import {LoginCredentials} from '../models';
import {submit_login_credentials} from '../repo';

export default function () {
  const [login_creds, set_login_creds] = React.useState<
    Partial<LoginCredentials>
  >({});

  const login_user = async () => {
    const user = await submit_login_credentials(login_creds);
    if (user) {
      set_session(user);
    }
  };

  return (
    <SafeAreaView style={containerStyles.background}>
      <View style={containerStyles.container}>
        <KeyboardAvoidingView
          style={containerStyles.login_form}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Text style={containerStyles.header}>Welcome to M-Bank</Text>
          <Spacer height={30} />
          <Text style={containerStyles.subtitle}>Please login to continue</Text>
          <Spacer height={10} />
          <LabeledTextInput
            value={login_creds.account_no ?? ''}
            on_change={s => set_login_creds({...login_creds, account_no: s})}
            label={'Account No'}
          />
          <Spacer height={10} />
          <LabeledTextInput
            value={login_creds.pin ?? ''}
            label="Pin"
            on_change={s => set_login_creds({...login_creds, pin: s})}
          />
          <Spacer height={20} />
          <Button color={Colors.violet} title="Login" onPress={login_user} />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}

const containerStyles = StyleSheet.create({
  background: {
    backgroundColor: Colors.background,
    color: Colors.text,
  },
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.violet,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  login_form: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    height: '50%',
    width: '80%',
  },
});
