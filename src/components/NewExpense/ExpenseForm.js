import "./ExpenseForm.css";
import { useRef, useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const ExpenseForm = (props) => {
  const amountInputRef = useRef();

  const [isValidTitle, setIsValidTitle] = useState(true);
  const [isValidAmount, setIsValidAmount] = useState(true);
  const [isValidDate, setIsValidDate] = useState(true);

  const [enteredTitle, setEnteredTitle] = useState("");
  //const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const[error, setError] = useState();

  /* const[userInput, setUserInput] = useState({
    enteredTitle:"",
    enteredAmount:"",
    enteredDate:""
  }); */

  const titleChangeHandler = (event) => {
    if(event.target.value.trim().length > 0){
      setIsValidTitle(true);
    }
    setEnteredTitle(event.target.value);
  };

  /* const amountChangeHandler = (event) => {
    if(event.target.value.trim().length > 0){
      setIsValidAmount(true);
    }
    setEnteredAmount(event.target.value);
  }; */

  const dateChangeHandler = (event) => {
    if(event.target.value.trim().length > 0){
      setIsValidDate(true);
    }
    setEnteredDate(event.target.value);
  };

  /* const titleChangeHandler = (event) => {
    setUserInput({
        ...userInput,
        enteredTitle: event.target.value
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput({
        ...userInput,
        enteredAmount: event.target.value
    });
  }; */

  /* const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
        return {
            ...prevState,
            enteredTitle: event.target.value
        }
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
        return {
            ...prevState,
            enteredAmount: event.target.value
        }
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
        return {
            ...prevState,
            enteredDate: event.target.value
        }
    });
  }; */

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredExpenseAmount = amountInputRef.current.value;

    if (enteredTitle.trim().length == 0) {
      setError({
        title:"Invalid Input",
        message:"Please enter a valid title (non empty value)"
      });
      setIsValidTitle(false);
      return;
    }

    /* if (enteredAmount.trim().length == 0) {
      setIsValidAmount(false);
      return;
    } */

    if (enteredExpenseAmount.trim().length == 0) {
      setIsValidAmount(false);
      return;
    }

    if (enteredDate.trim().length == 0) {
      setIsValidDate(false);
      return;
    }

    /* const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }; */

    const expenseData = {
      title: enteredTitle,
      amount: enteredExpenseAmount,
      date: new Date(enteredDate),
    };

    //console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    //setEnteredAmount("");
    amountInputRef.current.value = "";
    setEnteredDate("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className={`new-expense__control ${!isValidTitle ? "invalid" : ""}`}>
          <label>Title</label>
          <input
            /* style={{
              borderColor: !isValidTitle ? "red" : "#ccc",
              backgroundColor: !isValidTitle ? "salmon" : "white",
            }} */
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
          style={{
            borderColor: !isValidAmount ? "red" : "#ccc",
            backgroundColor: !isValidAmount ? "#fee5e5" : "white",
          }}
            type="number"
            min="0.01"
            step="0.01"
            /* value={enteredAmount}
            onChange={amountChangeHandler} */
            ref={amountInputRef}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
          style={{
            borderColor: !isValidDate ? "red" : "#ccc",
            backgroundColor: !isValidDate ? "#fee5e5" : "white",
          }}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
    </div>
  );
};

export default ExpenseForm;
