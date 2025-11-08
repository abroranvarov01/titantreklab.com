export function Reviews() {
  const reviews = [
    {
      text: "I've used it above 3000m — flawless burn.",
      author: "Ethan R.",
      location: "Colorado",
      rating: 5,
    },
    {
      text: "The mouth tape changed my sleep game completely.",
      author: "Lara S.",
      location: "Oslo",
      rating: 5,
    },
    {
      text: "Feels like science forged in magma.",
      author: "Kenji M.",
      location: "Tokyo",
      rating: 5,
    },
  ]

  return (
    <section className="relative z-10 px-4 py-24">
      <div className="container mx-auto">
        <h2 className="mb-16 text-center font-heading text-4xl font-bold text-[#e8e8e8] md:text-5xl">
          Voices from the{" "}
          <span className="bg-gradient-to-r from-[#FF5C00] to-[#FFBE40] bg-clip-text text-transparent">Trail</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-[#3C3C3C] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-8 backdrop-blur-sm transition-all hover:border-[#FF5C00] hover:shadow-xl hover:shadow-[#FF5C00]/20"
            >
              <div className="space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-[#FFBE40]">
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-lg leading-relaxed text-[#e8e8e8]">"{review.text}"</p>

                <div className="pt-4 text-sm">
                  <div className="font-heading font-bold text-[#FF5C00]">{review.author}</div>
                  <div className="text-[#a0a0a0]">{review.location}</div>
                </div>
              </div>

              <div className="absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-[#FF5C00] opacity-5 blur-3xl transition-opacity group-hover:opacity-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
