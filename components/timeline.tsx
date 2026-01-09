interface TimelineItem {
  year: string
  title: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200" />
      <div className="space-y-12">
        {items.map((item, index) => (
          <div
            key={item.year}
            className={`relative flex flex-col md:flex-row gap-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="md:w-1/2" />
            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-hnl-red rounded-full -ml-[7px] md:-ml-2" />
            <div className="md:w-1/2 pl-8 md:pl-0">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="text-hnl-red font-bold text-lg mb-2">{item.year}</div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
