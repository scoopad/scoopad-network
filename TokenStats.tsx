const stats = [
  {
    title: "Presale",
    value: "NONE"
  },
  {
    title: "Team Allocation",
    value: "NONE"
  },
  {
    title: "Distribution",
    value: "ON-CHAIN"
  },
  {
    title: "Launch Model",
    value: "FAIR"
  }
];

export default function TokenStats() {
  return (
    <section className="border-y border-white/10">

      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">

        {stats.map((stat) => (

          <div
            key={stat.title}
            className="border-r border-white/10 p-8 last:border-0"
          >

            <p className="text-xs uppercase tracking-widest text-gray-500">
              {stat.title}
            </p>

            <p className="mt-3 text-xl font-black text-yellow-400">
              {stat.value}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}
