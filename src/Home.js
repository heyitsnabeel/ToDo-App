import React, { useState } from "react";
import "./index.css";
import Comp1 from "./Components/Comp1";
import Comp2 from "./Components/Comp2";
import ErrorComponent from "./Components/ErrorComponent";

const Home = () => {

  const [toDoItem,SetToDoItem]=useState([]);

  const handlerAdd = (itemName,itemDate) =>{
    const newToDoItem = [...toDoItem,{name:itemName,dueDate:itemDate}];
    SetToDoItem(newToDoItem);
  }

  const handlerDelete = (toDoItemName) =>{
    const newItems = toDoItem.filter((item) => item.name!=toDoItemName);
    SetToDoItem(newItems);
  }

  return (
    <>
      <Comp1 handlerAdd={handlerAdd}/>
      {toDoItem.length==0 && <ErrorComponent/>}
      <Comp2 todoItems={toDoItem} handlerDelete={handlerDelete}/>
    </>
  );
};

export default Home;
