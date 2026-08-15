import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-20">

      <div className="max-w-5xl text-center">

        <div className="mb-6 text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">
          FAIR ONCHAIN LAUNCHPAD
        </div>

        <h1 className="text-6xl font-black leading-none md:text-8xl">

          Play.
          <br />

          <span className="text-yellow-400">
            Mine.
          </span>

          <br />

          Stake. Burn.

        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">

          Launch fair tokens that can be mined through
          grid games, staking & burning.

          <br />

          No presale. No team allocation. Fully on-chain.

        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            href="/game"
            className="rounded-xl bg-yellow-400 px-7 py-4 font-bold text-black hover:bg-yellow-300"
          >
            Play Grid
          </Link>

          <Link
            href="/mine"
            className="rounded-xl border border-white/10 px-7 py-4 font-bold hover:bg-white/5"
          >
            Start Mining
          </Link>

        </div>

      </div>

    </section>
  );
}
