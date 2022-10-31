import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
//import React from "react";
import { useState, Fragment, useEffect } from "react";
//import Wrapper from "./components/Helpers/Wrapper"

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

  //runs only ones when the app starts or in  other words if you refresh the browser
  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");
    if(storedUserLoggedInInfo === "1"){
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
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

    <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
        {isLoggedIn && <NewExpense isAuthenticated={isLoggedIn} onAddExpense={addExpenseHandler}/>}
        {isLoggedIn && <Expenses isAuthenticated={isLoggedIn} items={expenses} />}
      </main>
      
      {/* <NewExpense isAuthenticated={isLoggedIn} onAddExpense={addExpenseHandler}/>
      <Expenses isAuthenticated={isLoggedIn} items={expenses} /> */}
    </Fragment>
  ); 

}

export default App;
