export function CompanyStats() {
  const stats = [
    { label: "Years of Experience", value: "15+" },
    { label: "Projects Delivered", value: "500+" },
    { label: "Cities Covered", value: "30+" },
    { label: "Enterprise Clients", value: "50+" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-4xl font-bold text-hnl-red mb-2">{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
