import { v4 as uuid } from "uuid";
import { useRef, useState } from "react";
import {FaClipboardList} from "react-icons/fa";
import {ImCross} from "react-icons/im";
export function Todo(){
    const todoInput = useRef("");
    const [todoTasks, setTodoTasks] = useState([]);
    const [todoDisplay, setTodoDisplay] = useState(false);
    function todoUpdate() {
        todoInput.current.value &&
          setTodoTasks([
            ...todoTasks,
            { _id: uuid(), name: todoInput.current.value, todoStrike: true },
          ]);
          
    }
    return(
    <div> 
        <button className="floating-btn" onClick={() => setTodoDisplay((prev) => !prev)}>
            <span className="floating-btn-icon">
                <FaClipboardList/>
            </span>
        </button>
        
        {todoDisplay ? (
          <div className="todo-menu">
            <div className="todo-tasks">
              {todoTasks !== [] &&
                todoTasks.map((item) => {
                  return (
                    <div className="task-list">
                      <div
                        className={`tasks ${item.todoStrike ? "" : "strike"}`}
                      >
                        <input
                          type="checkbox"
                          id="todo-check"
                          onChange={() => {
                            const temp = todoTasks.map((obj) => {
                              return obj._id === item._id
                                ? { ...obj, todoStrike: !item.todoStrike }
                                : obj;
                            });
                            setTodoTasks(temp);
                          }}
                          
                          checked={item.todoStrike ? false : true}
                        />
                        {item.name}
                      </div>
                      <ImCross
                        className="close-btn"
                        onClick={() => {
                          const taskArr = todoTasks
                            .map((obj) => obj)
                            .filter((obj) => obj._id !== item._id);
                          setTodoTasks(taskArr);
                        }}
                      />
                    </div>
                  );
                })}
            </div>
            <div className="todo-footer">
              <input
                type="text"
                className="todo-input"
                placeholder="Add todo"
                ref={todoInput}
                // value={todoTasks}
                // onChange={(e)=>setTodoTasks(e.target.value)}
              />
              <button
                className="add-button"
                onClick={() => {
                  todoUpdate();
                }}
              >
                Add
              </button>
              <button className="add-button" onClick={() => setTodoDisplay((prev) => !prev)}>X
              </button>
              
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    )
} 