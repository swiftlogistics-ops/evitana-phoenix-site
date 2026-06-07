export default function ThankYouPage() {
  return (
    <main className="bg-black text-white">
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
          Request Received
        </p>

        <h1 className="text-4xl font-bold md:text-6xl">
          Thank You for Contacting Evitana Phoenix Holdings
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-300">
          Your quote request has been received successfully.
          A member of our team will review your transportation needs
          and contact you as soon as possible.
        </p>

        <div className="mt-12 rounded-2xl border border-[#d4af37]/30 bg-[#111] p-8">
          <p className="text-xl font-semibold text-[#d4af37]">
            Need Immediate Assistance?
          </p>

          <p className="mt-4 text-gray-300">
            Call us directly:
          </p>

          <a
            href="tel:7175944681"
            className="mt-3 block text-2xl font-bold text-[#d4af37]"
          >
            (717) 594-4681
          </a>

          <p className="mt-6 text-gray-300">
            Email:
          </p>

          <a
            href="mailto:swiftlogistics@evitanaphoenixhldgs.com"
            className="text-[#d4af37]"
          >
            swiftlogistics@evitanaphoenixhldgs.com
          </a>
        </div>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/"
            className="rounded-full bg-[#d4af37] px-8 py-4 font-semibold text-black"
          >
            Return Home
          </a>

          <a
            href="/services"
            className="rounded-full border border-[#d4af37] px-8 py-4 font-semibold text-[#d4af37]"
          >
            View Services
          </a>
        </div>

        <p className="mt-12 text-gray-400">
          Delivering Reliability. Building Trust.
        </p>
      </section>
    </main>
  );
}