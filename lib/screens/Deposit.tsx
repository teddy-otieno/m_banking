import React, { useContext } from 'react';
import {
  Text,
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Platform,
  Button,
} from 'react-native';
import {
  globalStyles,
  Spacer,
  LabeledTextInput,
  TextButton,
} from '../components/Core';
import Colors from '../components/Colors';
import { Account } from '../mock/transactions';
import { set_session } from '../mock/accounts';
import * as RootNavigator from '../RootNavigation';

export default function() {
  const { balance, set_balance } = useContext(Account);

  const [amount, set_amount] = React.useState<number>(0);

  return (
    <SafeAreaView style={globalStyles.background}>
      <View style={globalStyles.container}>
        <KeyboardAvoidingView
          style={globalStyles.login_form}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Text style={globalStyles.header}>Deposit</Text>
          <Spacer height={30} />
          <LabeledTextInput
            keyboard_type="number-pad"
            value={amount.toLocaleString()}
            on_change={s => {
              set_amount(parseInt(s));
            }}
            label={'Amount'}
          />
          <Spacer height={20} />
          <Button
            color={Colors.violet}
            title="Deposit"
            onPress={() => {
              set_balance(balance + amount);
              RootNavigator.go_back();
            }}
          />
          <Spacer height={10} />
          <TextButton
            title="Go back"
            on_press={() => {
              RootNavigator.go_back();
            }}
          />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}
