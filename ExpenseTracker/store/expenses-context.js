import React, {createContext, useReducer} from 'react';

const DUMMY_OUTPUT = [
  {
    id: 'e1',
    amount: 90.1,
    description: 'Pair of shoes',
    date: new Date('2022-05-02'),
  },
  {
    id: 'e2',
    amount: 120.7,
    description: 'Kurta pajama',
    date: new Date('20221-10-03'),
  },
  {
    id: 'e3',
    amount: 20.0,
    description: 'Whey Protein',
    date: new Date('2021-09-03'),
  },
  {
    id: 'e4',
    amount: 80.0,
    description: 'Macbook Pro',
    date: new Date('2021-06-18'),
  },
  {
    id: 'e5',
    amount: 10.0,
    description: 'T-Shirts',
    date: new Date('2021-12-29'),
  },
  {
    id: 'e6',
    amount: 20.12,
    description: 'Keyboard and Mouse',
    date: new Date('2021-09-03'),
  },
  {
    id: 'e7',
    amount: 60.32,
    description: 'iMac',
    date: new Date('2021-06-18'),
  },
  {
    id: 'e8',
    amount: 100.6,
    description: 'Car',
    date: new Date('2021-12-29'),
  },
];
export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({description, amount, date}) => {},
  deleteExpense: id => {},
updateExpense: (id, {description, amount, date}) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{...action.payload, id: id}, ...state]; //adding new data to new arr where we copy existing state
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        expense => expense.id === action.payload.id,
      );
      const updatableExpense = state[updatableExpenseIndex];
      const udatedItem = {...updatableExpense, ...action.payload.data}; // merging item with new data item
      const updatedExpense = [...state];
      updatedExpense[updatableExpenseIndex] = udatedItem;
      return updatedExpense;
    case 'DELETE':
      return state.filter(expense => expense.id !== action.payload.id);
    default:
      return state;
  }
}
function ExpenseContextProvider({children}) {
  const [expenseState, dispatch] = useReducer(expenseReducer, DUMMY_OUTPUT); // state management //DUMMY_OUTPUT is initial value
  function addExpense(expenseData) {
    dispatch({type: 'ADD', payload: expenseData});
  }
  function deleteExpense(id) {
    dispatch({type: 'DELETE', payload: id});
  }
  function updateExpense(id, expenseData) {
    dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}});
  }
  const value = {
    expenses: expenseState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };
  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}

export default ExpenseContextProvider;
