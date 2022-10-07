import React from 'react';
import { Text, ScrollView, View, StyleSheet, Button } from 'react-native';
import Colors from '../../components/Colors';
import { globalStyles, LabeledTextInput, Spacer } from '../../components/Core';
import { SESSION } from '../../mock/accounts';
import { BalanceCard } from './Home';

export default function() {
  const [new_pin, set_new_pin] = React.useState<string>('');
  const [confirm_new_pin, set_confirm_new_pin] = React.useState<string>('');
  const [message, set_message] = React.useState<string>('Helo');

  const update_pin = () => {
    if (
      new_pin.length > 0 &&
      confirm_new_pin.length > 0 &&
      new_pin === confirm_new_pin
    ) {
      SESSION!.pin = new_pin;
      set_message('Successful!');
    } else {
      set_message("New pin doesn't match the confirmed pin");
    }
  };

  return (
    <ScrollView style={globalStyles.page}>
      <Text style={globalStyles.header}>Account</Text>
      <Spacer height={20} />
      <BalanceCard />
      <Spacer height={20} />
      <Text style={globalStyles.subtitle}>Change Pin</Text>
      <Spacer height={10} />
      <View style={styles.change_pin_form}>
        <LabeledTextInput
          label="Old Pin"
          value={SESSION?.pin ?? '****'}
          on_change={s => { }}
        />
        <Spacer height={10} />
        <LabeledTextInput
          label="New Pin"
          value={new_pin}
          on_change={s => {
            set_new_pin(s);
          }}
        />
        <Spacer height={10} />
        <LabeledTextInput
          label="Confirm Pin"
          value={confirm_new_pin}
          on_change={s => {
            set_confirm_new_pin(s);
          }}
        />
        <Spacer height={10} />
        <Text>{message}</Text>
        <Spacer height={10} />
        <Button title="Confirm" onPress={update_pin} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  change_pin_form: {
    backgroundColor: Colors.surface,
    width: '100%',
    padding: 10,
    paddingVertical: 20,
    borderRadius: 8,
  },
});
