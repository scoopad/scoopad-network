import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link
          href="/"
          className="text-2xl font-black"
        >
          🥄 SCOOPAD
        </Link>

        <div className="hidden gap-7 text-sm text-gray-400 md:flex">

          <Link href="/game" className="hover:text-white">
            Grid
          </Link>

          <Link href="/mine" className="hover:text-white">
            Mine
          </Link>

          <Link href="/stake" className="hover:text-white">
            Stake
          </Link>

          <Link href="/burn" className="hover:text-white">
            Burn
          </Link>

          <Link href="/dashboard" className="hover:text-white">
            Dashboard
          </Link>

        </div>

        <button className="rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-black">
          Connect Wallet
        </button>

      </div>

    </nav>
  );
}
