import { useState } from "react";
import TodosList from "./components/TodosList";

function App() {
  const [showTodos, setShowTodos] = useState(true);

  return (
    <div>
      <h2>Todos App</h2>
      <button onClick={() => setShowTodos(false)}>Unmount Todos</button>
      <hr />
      {showTodos && <TodosList />}
    </div>
  );
}

export default App;
