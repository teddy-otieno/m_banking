import React from 'react';
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  globalStyles,
  LabeledTextInput,
  Spacer,
  TextButton,
} from '../components/Core';
import * as RootNavigator from '../RootNavigation';
import {User} from '../models';
import {create_user_acccount} from '../repo';

export default function () {
  const [new_user, set_new_user] = React.useState<Partial<User>>({});
  const sign_up_user = () => {
    const response = create_user_acccount(new_user);

    if (response === null) {
      //TODO: (teddy) show account already exists
      return;
    }

    RootNavigator.navigate('dashboard', {});
  };
  const open_login = () => {
    RootNavigator.navigate('login', {});
  };

  return (
    <SafeAreaView style={globalStyles.background}>
      <View style={globalStyles.container}>
        <KeyboardAvoidingView
          enabled={false}
          style={globalStyles.login_form}
          behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
          <Text style={globalStyles.header}>Welcome to M-Bank</Text>
          <Spacer height={30} />
          <Text style={globalStyles.subtitle}>Please signup to continue</Text>
          <Spacer height={10} />

          <LabeledTextInput
            label="First Name"
            value={new_user.first_name ?? ''}
            on_change={s => set_new_user({...new_user, first_name: s})}
          />
          <LabeledTextInput
            label="LastName"
            value={new_user.last_name ?? ''}
            on_change={s => set_new_user({...new_user, last_name: s})}
          />
          <LabeledTextInput
            label="Account No"
            value={new_user.account_no ?? ''}
            on_change={s => set_new_user({...new_user, account_no: s})}
          />
          <LabeledTextInput
            label="Pin"
            value={new_user.pin ?? ''}
            is_password={true}
            on_change={s => set_new_user({...new_user, pin: s})}
          />

          <Spacer height={20} />
          <Button color={Colors.violet} title="SignUp" onPress={sign_up_user} />
          <Spacer height={5} />
          <TextButton title="Already have an account?" on_press={open_login} />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}
