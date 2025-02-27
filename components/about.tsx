import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[#4CAF50] font-medium mb-4">CRAFTING MEDIA EXCELLENCE</div>
            <h2 className="text-4xl font-bold mb-6">Your partner in brand storytelling</h2>
            <p className="text-gray-600 mb-6">
              In the dynamic landscape of Bengaluru, Singh Media Services stands as a beacon for brands seeking to
              elevate their narrative. We specialize in creating tailored media strategies that resonate with audiences,
              drive engagement, and foster trust. Our expert team combines creativity with data-driven insights to
              ensure your brand not only stands out but also achieves its goals. From impactful advertising to strategic
              public relations, we are dedicated to crafting compelling stories that make an indelible mark in the
              industry.
            </p>
            <Link href="#contact" className="text-black hover:underline underline-offset-4">
              Get in touch
            </Link>
          </div>
          <div>
            <Image
              src="/images/about-img.jpg"
              alt="Brand storytelling showcase"
              width={600}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

