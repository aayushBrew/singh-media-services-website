export default function Footer() {
  return (
    <footer className="py-6 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Singh Media Services. All rights reserved.
          </p>
          <div className="text-sm text-gray-600">
            <a href="tel:8810352987" className="hover:text-black">
              +91 8810352987
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

