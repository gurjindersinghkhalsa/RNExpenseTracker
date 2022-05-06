import React from 'react';
import {Text, View, Pressable, StyleSheet} from 'react-native';
import GlobalStyle from '../../constants/style';
import {getFormattedDate} from '../../util/Date';
import {useNavigation} from '@react-navigation/native';

function ExpenseItem({description, amount, date, id}) {
  const navigation = useNavigation();
  function expensePressHandler() {
    navigation.navigate('ManageExpense', {
      id: id,
    });
  }
  return (
    <View key={id}>
      <Pressable
        onPress={expensePressHandler}
        style={({pressed}) => pressed && style.pressed}>
        <View style={style.expenseItem}>
          <View>
            <Text style={[style.textBase, style.description]}>
              {description}
            </Text>
            <Text style={style.textBase}>{getFormattedDate(date)}</Text>
          </View>
          <View style={style.amountContainer}>
            <Text style={style.amount}>{amount.toFixed(2)}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default ExpenseItem;
const style = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expenseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: GlobalStyle.colors.blue,
    padding: 5,
    marginVertical: 5,
    // marginBottom: 15,
    borderRadius: 5,
    elevation: 3,
    shadowColor: GlobalStyle.colors.blue,
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 5,
    shadowOpacity: 0.6,
  },
  textBase: {
    color: GlobalStyle.colors.wheat,
    padding: 4,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 5,
    backgroundColor: GlobalStyle.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    minWidth: 50,
  },
  amount: {
    color: GlobalStyle.colors.gray,
    fontWeight: 'bold',
  },
});
