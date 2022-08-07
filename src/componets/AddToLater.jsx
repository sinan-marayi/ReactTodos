import React from "react";

function AddToLater({ todoList,toProgress }) {
  const list = todoList.map((listItem, index) => {
    return (
      <table key={index}>
        <tbody>
          <tr className="todoItems">
            <td>
              <li className="list-items">
                {listItem.todoItem}{" "}
                <button className="btn-yellow" onClick={()=>toProgress(listItem.id)}>Add to Progress List</button>{" "}
              </li>
            </td>
          </tr>
        </tbody>
      </table>
    );
  });

  return (
    <div className="finished">
      <h2 className="heading-com">To Do</h2>
      {list}
    </div>
  );
}

export default AddToLater;
