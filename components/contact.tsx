import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-[#4CAF50] font-medium mb-4">GET IN TOUCH</div>
            <h2 className="text-4xl font-bold mb-8">Lets discuss your media needs</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <Input placeholder="Singh Media Services" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email address <span className="text-red-500">*</span>
                </label>
                <Input type="email" placeholder="singhmediaservice@gmail.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone number <span className="text-red-500">*</span>
                </label>
                <Input type="tel" placeholder="8810352987" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea className="min-h-[120px]" />
              </div>
              <Button type="submit" className="w-full bg-[#4CAF50] hover:bg-[#45a049]">
                SUBMIT
              </Button>
            </form>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
            <div className="space-y-6">
              <div>
                <a
                  href="mailto:singhmediaservice@gmail.com"
                  className="flex items-center gap-2 text-gray-600 hover:text-black"
                >
                  <Mail className="h-5 w-5" />
                  singhmediaservice@gmail.com
                </a>
              </div>
              <div>
                <h4 className="font-bold mb-2">Location</h4>
                <div className="flex items-start gap-2 text-gray-600">
                  <MapPin className="h-5 w-5 mt-1" />
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black"
                  >
                    Noida, Uttar Pradesh 201301 India
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-2">Hours</h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday</span>
                    <span>9:00am — 10:00pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tuesday</span>
                    <span>9:00am — 10:00pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wednesday</span>
                    <span>9:00am — 10:00pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thursday</span>
                    <span>9:00am — 10:00pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday</span>
                    <span>9:00am — 10:00pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00am — 6:00pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>9:00am — 12:00pm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

