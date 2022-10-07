import React from 'react';
import { Text, ScrollView, StyleSheet, View, TouchableHighlight } from 'react-native';
import Colors from '../components/Colors';
import { globalStyles, Spacer } from '../components/Core';
import { Cheque, CHEQUES } from '../mock/transactions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { set_session } from '../mock/accounts';

interface IChequeCardProps {
  cheque: Cheque;
  on_cancel?: (cheque: Cheque) => void;
}

function ChequeCard({ cheque, on_cancel }: IChequeCardProps) {
  return (
    <View style={styles.cheque}>
      <Text>{cheque.no}</Text>
      <Text>{`On ${cheque.date_issue}`}</Text>
      {cheque.active ? (
        <TouchableHighlight onPress={() => { on_cancel?.(cheque) }} underlayColor={Colors.alabaster}>
          <MaterialIcons name="remove" size={24} color={Colors.red} />
        </TouchableHighlight>
      ) : (
        <MaterialIcons name="check" size={24} />
      )}
    </View>
  );
}


//TODO: (teddy) add a confirmation dialog
export default function() {
  const [cheques, set_cheques] = React.useState<Cheque[]>(CHEQUES);
  const cheque_elements = cheques.filter((val: Cheque) => val.active).map((val: Cheque, index: number) => {
    return (
      <React.Fragment key={index}>
        <ChequeCard cheque={val} on_cancel={(cheque: Cheque) => {
          set_cheques([...cheques.filter((val: Cheque) => val.no !== cheque.no), { ...cheque, active: false }])
        }} />
        <Spacer height={10} />
      </React.Fragment>
    );
  });

  const cashed_cheques = cheques.filter((val: Cheque) => !val.active).map((val: Cheque, index: number) => {
    return (
      <React.Fragment key={index}>
        <ChequeCard cheque={val} />
        <Spacer height={10} />
      </React.Fragment>
    );
  });

  return (
    <ScrollView style={styles.page}>
      <Text style={globalStyles.header}>Cheques</Text>
      <Spacer height={30} />
      <View>
        <Text style={globalStyles.subtitle}>Active</Text>
        {cheque_elements}

        <Spacer height={20} />
        <Text style={globalStyles.subtitle}>Cashed</Text>
        {cashed_cheques}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.background,
    padding: 16,
  },

  cheque: {
    backgroundColor: Colors.surface,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
