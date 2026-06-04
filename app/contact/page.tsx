export default function ContactPage() {
  return (
    <main className="bg-black text-white">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
          Contact Us
        </p>

        <h1 className="text-4xl font-bold md:text-6xl">
          Let&apos;s Discuss Your Delivery Needs
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          Contact Evitana Phoenix Holdings for delivery services, logistics
          support, medical courier solutions, and contract transportation.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-[#d4af37]/30 bg-[#111] p-8">
            <h2 className="text-2xl font-bold text-[#d4af37]">
              Contact Information
            </h2>

            <div className="mt-6 space-y-4 text-gray-300">
              <p>📍 Reading &amp; Lancaster, Pennsylvania</p>
              <p>📞 (717) 594-4681</p>
              <p>📧 swiftlogistics@evitanaphoenixhldgs.com</p>
              <p>🌎 Serving Berks County, Lancaster County &amp; Surrounding Areas</p>
              <p>🕒 Monday - Saturday</p>
            </div>
          </div>

          <form
            action="https://formspree.io/f/xpqewald"
            method="POST"
            className="rounded-2xl border border-[#d4af37]/30 bg-[#111] p-8"
          >
            <div className="space-y-4">
              <input
                name="name"
                className="w-full rounded-lg border border-gray-700 bg-black p-3"
                placeholder="Full Name"
              />

              <input
                name="email"
                type="email"
                className="w-full rounded-lg border border-gray-700 bg-black p-3"
                placeholder="Email Address"
              />

              <input
                name="phone"
                className="w-full rounded-lg border border-gray-700 bg-black p-3"
                placeholder="Phone Number"
              />

              <textarea
                name="message"
                className="h-32 w-full rounded-lg border border-gray-700 bg-black p-3"
                placeholder="Tell us about your delivery needs"
              />

              <button
                type="submit"
                className="w-full rounded-lg bg-[#d4af37] p-4 font-semibold text-black"
              >
                Request a Quote
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}