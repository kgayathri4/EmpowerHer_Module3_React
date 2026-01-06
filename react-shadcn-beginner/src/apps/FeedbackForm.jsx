import { useState } from "react"
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";


export default function FeedbackForm() {
  const [data, setData] = useState(null)
  const [form, setForm] = useState({ name: "", email: "", feedback: "" })

  const submit = () => setData(form)

  return (
    <Card>
      <h2 className="text-xl font-bold mb-3">Feedback Form</h2>

      <Input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <Input className="mt-2" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <Textarea className="mt-2" placeholder="Feedback" onChange={e => setForm({ ...form, feedback: e.target.value })} />

      <Button className="mt-3" onClick={submit}>Submit</Button>

      {data && (
        <div className="mt-4 text-sm">
          <p><b>Name:</b> {data.name}</p>
          <p><b>Email:</b> {data.email}</p>
          <p><b>Feedback:</b> {data.feedback}</p>
        </div>
      )}
    </Card>
  )
}
