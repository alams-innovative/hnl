import { Card, CardContent } from "@/components/ui/card"

interface LeadershipCardProps {
  name: string
  position: string
  bio: string
  image?: string
}

export function LeadershipCard({ name, position, bio }: LeadershipCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="w-20 h-20 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-400">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>
        <h3 className="font-bold text-xl mb-1">{name}</h3>
        <div className="text-hnl-red font-semibold mb-3">{position}</div>
        <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
      </CardContent>
    </Card>
  )
}
