import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fff5f6] via-gray-50 to-white">
      <Loader2 className="h-8 w-8 animate-spin text-[#E31B23]" />
    </div>
  )
}
