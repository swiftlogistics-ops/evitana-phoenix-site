export default function ServicesPage() {
  const services = [
    "Cargo Van Delivery",
    "Same-Day Courier Service",
    "Last-Mile Delivery",
    "Scheduled Route Delivery",
    "Warehouse Delivery Support",
    "Retail & Furniture Delivery",
    "Contract Logistics",
    "Medical Courier Support",
  ];

  return (
    <main className="bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
          Our Services
        </p>

        <h1 className="text-4xl font-bold md:text-6xl">
          Professional Delivery & Logistics Solutions
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          Evitana Phoenix Holdings provides reliable courier, cargo van delivery,
          last-mile logistics, and business transportation support for companies
          throughout Pennsylvania and surrounding regions.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-2xl border border-[#d4af37]/30 bg-[#111] p-6"
            >
              <h3 className="text-xl font-bold text-[#d4af37]">{service}</h3>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                Reliable, professional, and flexible delivery support designed
                for business operations.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}