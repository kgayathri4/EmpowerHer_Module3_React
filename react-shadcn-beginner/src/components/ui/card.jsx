import { cn } from "../../lib/utils";


export function Card({ className, ...props }) {
  return <div className={cn("rounded-lg border bg-white shadow p-4", className)} {...props} />
}
