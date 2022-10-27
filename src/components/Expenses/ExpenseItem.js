import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

function ExpenseItem(props) {
  /* const expenseDate = new Date(2022, 10, 26);
  const expenseTitle = "Home Insurance";
  const expenseAmount = 12500; */

  /* const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { month: "2-digit" });
  const year = props.date.getFullYear(); */

  //const [title, setTitle] = useState(props.title);

  /* const clickHandler = () => {
    //title = "Updated!";
    setTitle("Updated!");
    console.log(title);
  } */

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
