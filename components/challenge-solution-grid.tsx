export function ChallengeSolutionGrid({
  challenges,
}: {
  challenges: { challenge: string; solution: string }[]
}) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Challenges & Solutions</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {challenges.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-lg mb-3 text-red-600">Challenge</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{item.challenge}</p>
              <h3 className="font-semibold text-lg mb-3 text-gray-900">HNL Solution</h3>
              <p className="text-gray-700 leading-relaxed">{item.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Keep default export for backward compatibility
export default ChallengeSolutionGrid
