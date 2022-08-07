import React,{useState} from 'react'

function Todo() {
    const [todoList,setTodoList] = useState([])
    const [todo,setTodo] = useState('')
console.log(todo)
  return (
    <div className='todos-section'>
        <div className='input-main'>
            <input className='input-sec' onChange={(e)=>setTodo(e.target.value)} type="text" />
            <button className='btn btn-add'>Add</button>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Todo
