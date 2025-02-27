import { ArrowRight } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "Digital advertising",
      description: "Engage your audience through targeted online campaigns.",
      image: "/images/digitalmarketing.jpg?height=300&width=400",
    },
    {
      title: "Public relations",
      description: "Cultivate a strong brand image and foster connections.",
      image: "/images/pr.jpg?height=300&width=400",
    },
    {
      title: "Content marketing",
      description: "Craft compelling narratives that engage and inform.",
      image: "/images/content-marketing.jpg?height=300&width=400",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-[#4CAF50] font-medium mb-4">MEDIA SOLUTIONS</div>
        <h2 className="text-4xl font-bold mb-12">Transforming brands with impactful strategies</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="aspect-video mb-6">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                {service.title} <ArrowRight className="h-5 w-5" />
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

