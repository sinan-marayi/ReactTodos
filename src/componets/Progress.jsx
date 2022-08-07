import React from "react";

function Progress({ todoList, finish,deleted }) {
  const list = todoList.map((listItem, index) => {
    return (
      <table key={index}>
        <tbody>
          <tr className="todoItems">
            <td>
              <li className='list-items'>{listItem.todoItem}</li>
            </td>
            <td>
              <button className="btn-green" onClick={() => finish(listItem.id)}>
                Finished
              </button>
            </td>
            <td>
              <button className="btn-red" onClick={()=>deleted(listItem.id)}>delete</button>
            </td> 
            <td>
              <button className="btn-gray">Add to later</button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  });

  return (
    <div className="progressing">
      <h2>Progressing Todos</h2>
      {list}
    </div>
  );
}

export default Progress;
