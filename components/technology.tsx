export function Technology() {
  const specs = [
    { label: "Heat Efficiency", value: "97%", icon: "🔥" },
    { label: "Material", value: "Grade-5 Titanium", icon: "⚡" },
    { label: "Weight", value: "45 g", icon: "⚖️" },
    { label: "Lifetime", value: "25,000 Burns", icon: "♾️" },
  ]

  return (
    <section className="relative z-10 px-4 py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 font-heading text-4xl font-bold text-[#e8e8e8] md:text-5xl">
            Molten{" "}
            <span className="bg-gradient-to-r from-[#FF5C00] via-[#FFBE40] to-[#7B00FF] bg-clip-text text-transparent">
              Precision
            </span>
          </h2>

          <p className="mb-16 text-lg text-[#a0a0a0]">Engineering excellence meets survival demands</p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {specs.map((spec, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border border-[#3C3C3C] bg-[#1a1a1a]/50 p-8 backdrop-blur-sm transition-all hover:border-[#FF5C00] hover:scale-105"
              >
                <div className="space-y-4 text-center">
                  <div className="text-5xl">{spec.icon}</div>
                  <div className="font-heading text-3xl font-bold bg-gradient-to-r from-[#FF5C00] to-[#FFBE40] bg-clip-text text-transparent">
                    {spec.value}
                  </div>
                  <div className="text-sm text-[#a0a0a0] tracking-wide">{spec.label}</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#FF5C00]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
