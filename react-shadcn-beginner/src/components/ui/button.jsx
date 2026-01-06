import { cn } from "../../lib/utils";


export function Button({ className, ...props }) {
  return (
    <button
      className={cn("rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800", className)}
      {...props}
    />
  )
}
