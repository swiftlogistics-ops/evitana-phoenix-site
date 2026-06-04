export default function MedicalCourierPage() {
  return (
    <main className="bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
          Medical Courier
        </p>

        <h1 className="text-4xl font-bold md:text-6xl">
          Reliable Healthcare Delivery Support
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-300">
          Evitana Phoenix Holdings provides professional medical courier support
          for pharmacies, healthcare providers, medical suppliers, and organizations
          that require dependable transportation of healthcare-related items.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            "Prescription Delivery",
            "Medical Supply Transport",
            "Healthcare Route Support",
            "Pharmacy Delivery",
            "Medical Equipment Delivery",
            "Scheduled Medical Runs",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-[#d4af37]/30 bg-[#111] p-6">
              <h3 className="text-xl font-bold text-[#d4af37]">{item}</h3>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                Professional and reliable delivery support with careful handling
                and consistent communication.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}