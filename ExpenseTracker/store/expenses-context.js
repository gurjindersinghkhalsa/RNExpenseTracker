import React, {createContext, useReducer} from 'react';

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({description, amount, date}) => {},
  deleteExpense: id => {},
  setExpenses: expenses => {},
  updateExpense: (id, {description, amount, date}) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case 'SET':
      return action.payload.reverse();
    case 'ADD':
      return [action.payload, ...state]; //adding new data to new arr where we copy existing state
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
  const [expenseState, dispatch] = useReducer(expenseReducer, []); // state management //DUMMY_OUTPUT is initial value
  function addExpense(expenseData) {
    dispatch({type: 'ADD', payload: expenseData});
  }
  function setExpenses(expenses) {
    dispatch({type: 'SET', payload: expenses});
  }
  function deleteExpense(id) {
    dispatch({type: 'DELETE', payload: id});
  }
  function updateExpense(id, expenseData) {
    dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}});
  }
  const value = {
    expenses: expenseState,
    setExpenses: setExpenses,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };
  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}

export default ExpenseContextProvider;
