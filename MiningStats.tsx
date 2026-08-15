export default function MiningStats() {

  return (
    <section className="px-6 py-24">

      <div className="mx-auto max-w-7xl">

        <div className="mb-12">

          <p className="text-sm uppercase tracking-widest text-yellow-400">
            ON-CHAIN MINING
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Earn through participation.
          </h2>

        </div>

        <div className="grid gap-5 md:grid-cols-3">

          <Card
            icon="🎮"
            title="Grid Mining"
            text="Interact with the grid and participate in token distribution."
          />

          <Card
            icon="🔒"
            title="Staking"
            text="Lock eligible assets and participate in the reward system."
          />

          <Card
            icon="🔥"
            title="Burning"
            text="Burn tokens and participate in supply-reduction mechanics."
          />

        </div>

      </div>

    </section>
  );
}

function Card({
  icon,
  title,
  text
}: {
  icon: string;
  title: string;
  text: string;
}) {

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">

      <div className="text-4xl">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-gray-500">
        {text}
      </p>

    </div>
  );
}
