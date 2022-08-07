import React, { useState } from "react";
import Finished from "./componets/Finished";
import Progress from "./componets/Progress";

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");
  const addTodo = () => {
    setTodoList((prevList) => [...prevList, {
        id:Date.now(),
        todoItem:todo,
        status:"progress"
    }]);
  };
  const finish=(id)=>{
    setTodoList(prevList =>{
        return prevList.map(item =>{
            return item.id === id ? {...item,status:'finished'} : item
        })
    })
  }
  const deleted=(id)=>{
    setTodoList(prevList => {
        return prevList.filter(obj => obj.id !== id )
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
        <Finished todoList={todoList.filter(obj => obj.status==='finished')} />
        <Progress todoList={todoList.filter(obj => obj.status==='progress')} finish={finish} deleted={deleted}/>
      </div>
    </>
  );
}

export default Todo;
