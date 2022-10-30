import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
//import React from "react";
import { useState, Fragment } from "react";
import Wrapper from "./components/Helpers/Wrapper"

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New Sony TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const[expenses, setExpenses] = useState(DUMMY_EXPENSES);

  /*   
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Let's get started!"),
    React.createElement(Expenses, { items: expenses})
  ); 
  */

  const addExpenseHandler = (expense) => {
    //console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };
  
  return (
    <Fragment>
    {/* <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div> */}
    {/* <Wrapper>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </Wrapper> */}
    {/* <>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </> */}

    {/* <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main> */}
      
      <NewExpense isAuthenticated={isLoggedIn} onAddExpense={addExpenseHandler}/>
      <Expenses isAuthenticated={isLoggedIn} items={expenses} />
    </Fragment>
  ); 

}

export default App;
