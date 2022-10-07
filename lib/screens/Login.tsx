import React from 'react';
import {Button, KeyboardAvoidingView, Platform, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../components/Colors';
import {
  globalStyles,
  LabeledTextInput,
  Spacer,
  TextButton,
} from '../components/Core';
import {set_session} from '../mock/accounts';
import {LoginCredentials} from '../models';
import {submit_login_credentials} from '../repo';
import * as RootNavigation from '../RootNavigation';

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

  const open_sign_up = () => {
    RootNavigation.navigate('sign_up', {});
  };

  return (
    <SafeAreaView style={globalStyles.background}>
      <View style={globalStyles.container}>
        <KeyboardAvoidingView
          style={globalStyles.login_form}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Text style={globalStyles.header}>Welcome to M-Bank</Text>
          <Spacer height={30} />
          <Text style={globalStyles.subtitle}>Please login to continue</Text>
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
          <Spacer height={5} />
          <TextButton
            title="Dont Have and Account Yet?"
            on_press={open_sign_up}
          />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}
