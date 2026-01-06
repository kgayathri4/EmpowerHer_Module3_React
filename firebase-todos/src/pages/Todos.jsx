import { useEffect, useState } from "react"
import { useAuth } from "../context/AuthContext"
import * as todoService from "../services/todo.service"

export default function Todos() {
  const { user, logout } = useAuth()
  const [todos, setTodos] = useState([])
  const [text, setText] = useState("")

  useEffect(() => {
    todoService.getTodos(user.uid).then(setTodos)
  }, [])

  const add = async () => {
    await todoService.addTodo(user.uid, text)
    setTodos(await todoService.getTodos(user.uid))
    setText("")
  }

  return (
    <div className="p-6">
      <button onClick={logout}>Logout</button>

      <div className="flex gap-2 mt-4">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          className="border px-2"
        />
        <button onClick={add}>Add</button>
      </div>

      {todos.map(todo => (
        <div key={todo.id} className="mt-2">
          {todo.title}
        </div>
      ))}
    </div>
  )
}
