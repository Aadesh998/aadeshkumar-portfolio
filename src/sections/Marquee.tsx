export default function Marquee({ items }: { items: string[] }) {
  const row = items.map((t) => `${t}  —  `).join('')
  return (
    <div className="overflow-hidden border-y border-[#121212]/10 bg-[#f4f3f1] py-6 md:py-8">
      <div className="animate-marquee flex w-max whitespace-nowrap">
        {[0, 1].map((i) => (
          <span
            key={i}
            aria-hidden={i === 1}
            className="font-display pr-4 text-6xl font-semibold tracking-tight text-[#121212] md:text-8xl"
          >
            {row}
          </span>
        ))}
      </div>
    </div>
  )
}
