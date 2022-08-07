import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'


function Finished({ todoList, finish }) {
    const list = todoList.map((listItem, index) => {
      return (
        <table key={index}>
          <tbody>
            <tr className="todoItems">
              <td>
                <li className='list-items'>{listItem.todoItem} <FontAwesomeIcon icon={faCircleCheck} /> </li>
                             
                </td>
            </tr>
          </tbody>
        </table>
      );
    });
  
    return (
      <div className="finished"> 
        <h2 className='heading-com'>Completed  Todos</h2>
        {list}
      </div>
    );
  }

export default Finished
