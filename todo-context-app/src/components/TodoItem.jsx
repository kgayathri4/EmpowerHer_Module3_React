import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoItem({ id, title }) {
  const { deleteTodo } = useContext(TodoContext);

  return (
    <div>
      <span>{title}</span>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
