import React, { useState } from "react";
import AddToLater from "./componets/AddToLater";
import Finished from "./componets/Finished";
import Progress from "./componets/Progress";

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");
  const addTodo = () => {
    todo &&
      setTodoList((prevList) => [
        ...prevList,
        {
          id: Date.now(),
          todoItem: todo,
          status: "progress",
        },
      ]);
  };
  const finish = (id) => {
    setTodoList((prevList) => {
      return prevList.map((item) => {
        return item.id === id ? { ...item, status: "finished" } : item;
      });
    });
  };
  const deleted = (id) => {
    setTodoList((prevList) => {
      return prevList.filter((obj) => obj.id !== id);
    });
  };
  const addToLater = (id) => {
    setTodoList((prevList) => {
      return prevList.map((item) => {
        return item.id === id ? { ...item, status: "addToLater" } : item;
      });
    });
  };
  const toProgress=(id)=>{
    setTodoList(prevList=>{
        return prevList.map(item=>{
            return item.id === id ? {...item,status :"progress"}:item
        })
    })
  }
  console.log(todoList);
  return (
    <>
      <div className="todos-section">
        <div className="input-main">
          <input
            className="input-sec"
            onChange={(e) => setTodo(e.target.value)}
            type="text"
          />
          <button className="btn btn-add" onClick={addTodo}>
            Add To Progress
          </button>
        </div>
      </div>
      <div className="list-area">
        <Finished
          todoList={todoList.filter((obj) => obj.status === "finished")}
        />
        <Progress
          todoList={todoList.filter((obj) => obj.status === "progress")}
          finish={finish}
          deleted={deleted}
          addToLater={addToLater}
        />
        <AddToLater
          todoList={todoList.filter((obj) => obj.status === "addToLater")}
          toProgress={toProgress}
        />
      </div>
    </>
  );
}

export default Todo;
