export function VideoSection() {
  return (
    <section className="relative z-10 px-4 py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl border border-[#3C3C3C]">
            <div className="relative aspect-video bg-[#1a1a1a]">
              <img
                src="/fire-and-metal-macro.jpg"
                alt="Fire and Metal Macro"
                className="h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <h3 className="font-heading text-4xl font-bold text-[#e8e8e8] text-balance md:text-5xl">
                    Fire Meets Function
                  </h3>
                  <p className="text-lg text-[#FFBE40] font-heading tracking-wide">
                    Every flame tells a story of endurance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
