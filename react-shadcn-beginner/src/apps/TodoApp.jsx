import { useState } from "react"
import { Card } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Checkbox } from "../components/ui/checkbox"


export default function TodoApp() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState("")

  const addTodo = () => {
    setTodos([...todos, { text, done: false }])
    setText("")
  }

  return (
    <Card>
      <h2 className="text-xl font-bold mb-3">Todo List</h2>

      <div className="flex gap-2">
        <Input value={text} onChange={e => setText(e.target.value)} />
        <Button onClick={addTodo}>Add</Button>
      </div>

      {todos.map((todo, i) => (
        <div key={i} className="flex gap-2 mt-2">
          <Checkbox
            checked={todo.done}
            onChange={() =>
              setTodos(todos.map((t, idx) => idx === i ? { ...t, done: !t.done } : t))
            }
          />
          <span className={todo.done ? "line-through" : ""}>{todo.text}</span>
        </div>
      ))}
    </Card>
  )
}
