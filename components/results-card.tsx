export default function ResultsCard({
  metric,
  value,
  description,
}: {
  metric: string
  value: string
  description: string
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6">
      <div className="text-sm font-medium text-gray-600">{metric}</div>
      <div className="mt-2 text-3xl font-bold text-hnl-red">{value}</div>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  )
}
