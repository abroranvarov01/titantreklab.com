export function About() {
  return (
    <section className="relative z-10 px-4 py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center font-heading text-4xl font-bold text-[#e8e8e8] md:text-5xl">
            The Fusion of{" "}
            <span className="bg-gradient-to-r from-[#FF5C00] to-[#FFBE40] bg-clip-text text-transparent">Science</span>{" "}
            and{" "}
            <span className="bg-gradient-to-r from-[#7B00FF] to-[#FF5C00] bg-clip-text text-transparent">
              Endurance
            </span>
          </h2>

          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-[#e8e8e8]">
                At TitanTrekLab, we merge material science with survival experience — every gram, every flame, every
                breath is tested.
              </p>
              <p className="text-lg leading-relaxed text-[#a0a0a0]">
                Our gear isn't just equipment. It's the result of rigorous laboratory testing combined with real-world
                adventures across the harshest terrains on Earth.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-[#FFBE40]">
                  <span className="text-2xl">⚗️</span>
                  <span className="font-heading">Lab Tested</span>
                </div>
                <div className="flex items-center gap-2 text-[#FF5C00]">
                  <span className="text-2xl">🏔️</span>
                  <span className="font-heading">Trail Proven</span>
                </div>
                <div className="flex items-center gap-2 text-[#7B00FF]">
                  <span className="text-2xl">🔬</span>
                  <span className="font-heading">Science Backed</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-lg border border-[#3C3C3C] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-8">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="font-heading text-7xl font-bold bg-gradient-to-br from-[#FF5C00] via-[#FFBE40] to-[#7B00FF] bg-clip-text text-transparent">
                      Ti
                    </div>
                    <div className="text-[#a0a0a0] font-heading tracking-widest">TITANIUM</div>
                    <div className="text-sm text-[#FFBE40]">22 • 47.867</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#FF5C00]/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
