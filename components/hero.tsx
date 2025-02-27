import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('/images/singh-media-services.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Elevate your brand</h1>
          <p className="text-xl md:text-2xl mb-8">Transform your brand with strategic media solutions.</p>
          <Link
            href="#services"
            className="inline-block px-8 py-3 bg-[#4CAF50] text-white font-medium hover:bg-[#45a049] transition-colors"
          >
            VIEW SERVICES
          </Link>
        </div>
      </div>
    </section>
  )
}

