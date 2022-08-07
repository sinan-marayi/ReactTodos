import React, { useState } from "react";
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
            return item.id === id ? {...item,status:'finish'} : item
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
            Add
          </button>
        </div>
      </div>
      <div className="list-area">
        
        <Progress todoList={todoList.filter(obj => obj.status==='progress')} finish={finish} />
      </div>
    </>
  );
}

export default Todo;
