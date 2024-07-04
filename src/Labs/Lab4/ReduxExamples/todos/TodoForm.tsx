import { useSelector } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm({ }: {
    todo: { id: string; title: string };
    setTodo: (todo: { id: string; title: string }) => void;
    addTodo: (todo: { id: string; title: string }) => void;
    updateTodo: (todo: { id: string; title: string }) => void;
  }) {
    const { todo } = useSelector((state: any) => state.todosReducer);
    return (
      <li className="list-group-item">
        <button onClick={() => addTodo(todo)}
                id="wd-add-todo-click"> Add </button>
        <button onClick={() => updateTodo(todo)}
                id="wd-update-todo-click"> Update </button>
        <input value={todo.title}
          onChange={ (e) => setTodo({ ...todo, title: e.target.value }) }/>
      </li>
    );
  }
  

  