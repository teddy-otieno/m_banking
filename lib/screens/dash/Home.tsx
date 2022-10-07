import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import Colors from '../../components/Colors';
import { globalStyles, Spacer, TextButton } from '../../components/Core';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import * as RootNavigator from '../../RootNavigation';
import AvatarImage from '../../../assets/library-of-congress.jpg';
import { Transaction } from '../../models';
import { Account, TRANSACTION } from '../../mock/transactions';

function SendMoneySection() {
  return (
    <View>
      <View style={[styles.row, { justifyContent: 'space-between' }]}>
        <Text style={globalStyles.subtitle}>Send Money</Text>
        <Text>See all</Text>
      </View>
      <Spacer height={10} />
      <View style={styles.row}>
        <View style={styles.image_container}>
          <Image source={AvatarImage} style={styles.avatar} />
        </View>
        <Spacer width={5} />
        <View style={styles.image_container}>
          <Image source={AvatarImage} style={styles.avatar} />
        </View>
        <Spacer width={5} />
        <View style={styles.image_container}>
          <Image source={AvatarImage} style={styles.avatar} />
        </View>
        <Spacer width={5} />
        <View style={styles.image_container}>
          <Image source={AvatarImage} style={styles.avatar} />
        </View>
        <Spacer width={5} />
        <View style={styles.image_container}>
          <MaterialIcons name="add" size={25} color={Colors.violet} />
        </View>
      </View>
    </View>
  );
}

interface ITransactionCardProps {
  transaction: Transaction;
}

function TransactionCard({ transaction }: ITransactionCardProps) {
  const name = `${transaction.user.first_name} ${transaction.user.last_name}`;
  const currentTime = new Date().toLocaleTimeString();

  return (
    <View style={[styles.transaction_card]}>
      <View style={styles.transaction_title}>
        <View style={styles.image_container}>
          <Image
            source={transaction.user.avatar ?? AvatarImage}
            style={styles.avatar}
          />
        </View>
        <Spacer width={20} />
        <View>
          <Text style={styles.transaction_name}>{name}</Text>
          <Text style={styles.transaction_smaller}>{currentTime}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <MaterialIcons
          name={transaction.t_type === 'deposit' ? 'add' : 'remove'}
          color={transaction.t_type === 'deposit' ? 'green' : 'red'}
          size={24}
        />
        <Spacer width={8} />
        <Text
          style={
            styles.transaction_name
          }>{`KES ${transaction.amount.toLocaleString()}`}</Text>
      </View>
    </View>
  );
}

function TransactionHistory() {
  const [transactions, set_transactions] =
    React.useState<Transaction[]>(TRANSACTION);

  const transaction_elements = transactions.map(
    (val: Transaction, index: number) => {
      return (
        <React.Fragment key={index}>
          <TransactionCard transaction={val} />
          <Spacer height={10} />
        </React.Fragment>
      );
    },
  );
  return (
    <View>
      <View style={[styles.row, { justifyContent: 'space-between' }]}>
        <Text style={globalStyles.subtitle}>Overview</Text>
        <Text>See more</Text>
      </View>
      <Spacer height={10} />
      <View>{transaction_elements}</View>
    </View>
  );
}

export function BalanceCard() {
  const { balance } = React.useContext(Account);
  const open_deposit = () => {
    RootNavigator.navigate("deposit", {})
  };

  return (
    <View style={styles.card}>
      <View style={[styles.row, { justifyContent: 'space-between' }]}>
        <View>
          <Text>Current Balance</Text>
          <Spacer height={8} />
          <Text style={styles.currency}>{`KES ${balance}`}</Text>
        </View>
        <View>
          <Text>M-Bank</Text>
        </View>
      </View>
      <Spacer height={30} />
      <View
        style={[
          styles.row,
          { justifyContent: 'space-between', alignItems: 'flex-end' },
        ]}>
        <View>
          <Text>Account</Text>
          <Spacer height={8} />
          <Text style={globalStyles.subtitle}>12***32</Text>
        </View>
        <View>
          <TouchableHighlight onPress={() => open_deposit()}>
            <View style={styles.deposit}>
              <Text style={styles.deposit_text}>Deposit</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

function ActiveCheques() {
  return (
    <View>
      <Text style={globalStyles.subtitle}>Active Cheques</Text>
      <Text>No active cheques</Text>
    </View>
  );
}

export default function() {
  return (
    <SafeAreaView style={globalStyles.background}>
      <ScrollView style={styles.scroll}>
        <View
          style={[
            styles.horizontal,
            { justifyContent: 'space-between', alignItems: 'center' },
          ]}>
          <View>
            <Text style={[globalStyles.subtitle]}>Hello, Goodmorning </Text>
            <Text style={[]}>Teddy</Text>
          </View>
          <View style={styles.image_container}>
            <Image source={AvatarImage} style={styles.avatar} />
          </View>
        </View>
        <Spacer height={30} />
        <BalanceCard />
        {/**Cheques */}
        <Spacer height={30} />
        <ActiveCheques />
        <Spacer height={30} />
        <SendMoneySection />
        <Spacer height={30} />
        <TransactionHistory />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
  },
  scroll: {
    padding: 10,
    paddingHorizontal: 20,
  },

  row: {
    flexDirection: 'row',
  },

  card: {
    borderRadius: 8,
    width: '100%',
    backgroundColor: Colors.surface,
    padding: 15,
  },

  currency: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  avatar: {
    width: 50,
    height: 50,
  },
  image_container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 25,
    width: 50,
    height: 50,
    borderWidth: 3,
    borderColor: Colors.surface,
    elevation: 1,
  },

  deposit: {
    backgroundColor: Colors.alabaster,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  deposit_text: {
    color: Colors.violet,
    fontWeight: '500',
  },
  transaction_card: {
    flexDirection: 'row',
    padding: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  transaction_title: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  transaction_name: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  transaction_smaller: {},
});
