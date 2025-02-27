import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          SINGH MEDIA SERVICES
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm hover:text-gray-600">
            Home
          </Link>
          <Link href="#about" className="text-sm hover:text-gray-600">
            About
          </Link>
          <Link href="#services" className="text-sm hover:text-gray-600">
            Services
          </Link>
          <Link
            href="#contact"
            className="text-sm px-6 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  )
}

