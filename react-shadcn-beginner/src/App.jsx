import FeedbackForm from "./apps/FeedbackForm"
import ImageSlider from "./apps/ImageSlider"
import TodoApp from "./apps/TodoApp"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 grid gap-6 md:grid-cols-3">
      <FeedbackForm />
      <ImageSlider />
      <TodoApp />
    </div>
  )
}
