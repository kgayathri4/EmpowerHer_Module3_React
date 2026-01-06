import { useState } from "react"
import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"

const images = ["bg-red-300", "bg-green-300", "bg-blue-300"]

export default function ImageSlider() {
  const [index, setIndex] = useState(0)

  return (
    <Card>
      <h2 className="text-xl font-bold mb-3">Image Slideshow</h2>

      <div className={`h-40 rounded mb-3 ${images[index]}`}></div>

      <div className="flex gap-2">
        <Button onClick={() => setIndex((index + 2) % 3)}>Prev</Button>
        <Button onClick={() => setIndex((index + 1) % 3)}>Next</Button>
      </div>
    </Card>
  )
}
