import StakingCard from "@/components/StakingCard";

export default function StakePage() {

  return (
    <main className="min-h-screen px-6 pb-24 pt-36">

      <div className="mx-auto max-w-xl">

        <p className="text-sm uppercase tracking-widest text-yellow-400">
          STAKING
        </p>

        <h1 className="mt-4 text-5xl font-black">
          Stake & earn.
        </h1>

        <p className="mt-5 text-gray-500">
          Participate in the Scoopad ecosystem
          through on-chain staking.
        </p>

        <div className="mt-12">
          <StakingCard />
        </div>

      </div>

    </main>
  );
}
