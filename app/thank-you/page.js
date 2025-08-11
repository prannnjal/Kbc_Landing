"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { 
  CheckCircle, 
  Home, 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  BookOpen 
} from "lucide-react"
import { Button } from "@/components/ui/button.js"

export default function ThankYouPage() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [year, setYear] = useState("")

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky CTA Bar */}
      <div className="fixed top-0 w-full bg-red-600 text-white py-2 px-4 z-50">
        <div className="container mx-auto flex justify-center items-center space-x-2 sm:space-x-4 text-xs sm:text-sm">
          <a href="tel:+917050117555" className="flex items-center space-x-1 hover:text-yellow-300">
            <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Call Now</span>
            <span className="sm:hidden">Call</span>
          </a>
          <span className="text-yellow-300">|</span>
          <a href="https://wa.me/917033907555" className="flex items-center space-x-1 hover:text-yellow-300">
            <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
          <span className="text-yellow-300">|</span>
          <button onClick={() => router.push("/")} className="flex items-center space-x-1 hover:text-yellow-300" suppressHydrationWarning={true}>
            <BookOpen className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Enroll Now</span>
            <span className="sm:hidden">Enroll</span>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full top-8 sm:top-10 z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3 lg:py-4">
            <div className="flex items-center space-x-2">
              <img
                src="/channels4_profile.jpg"
                alt="KBC IAS Academy Logo"
                className="h-10 w-10 lg:h-12 lg:w-12 rounded-lg object-contain bg-white p-1 shadow"
              />
              <div>
                <h1 className="text-lg lg:text-xl font-bold text-gray-800">KBC IAS Academy</h1>
                <p className="text-xs text-gray-600 hidden sm:block">Powered by KBC Nano Publication</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-6">
              {["Home", "About", "Courses", "Faculty", "Test Series", "Toppers", "Resources", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => router.push("/")}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm xl:text-base"
                  suppressHydrationWarning={true}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} suppressHydrationWarning={true}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t">
              <div className="py-2">
                {["Home", "About", "Courses", "Faculty", "Test Series", "Toppers", "Resources", "Contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => router.push("/")}
                      className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-100 last:border-b-0"
                      suppressHydrationWarning={true}
                    >
                      {item}
                    </button>
                  ),
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 sm:p-8 text-center">
          <div className="mb-6">
            <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Thank You!</h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Your application has been submitted successfully. We will contact you soon.
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h2 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">What's Next?</h2>
            <ul className="text-xs sm:text-sm text-gray-600 space-y-1 text-left">
              <li>• Our team will review your application</li>
              <li>• You'll receive a call within 24 hours</li>
              <li>• We'll discuss your course requirements</li>
              <li>• Get started with your preparation journey</li>
            </ul>
          </div>

          <div className="space-y-3">
            <Button 
              onClick={() => router.push("/")} 
              className="w-full bg-blue-600 hover:bg-blue-700 text-sm sm:text-base"
            >
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <a
                href="tel:+917050117555"
                className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center text-sm sm:text-base"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </a>
              <a
                href="https://wa.me/917033907555"
                className="flex-1 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors flex items-center justify-center text-sm sm:text-base"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>


        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/channels4_profile.jpg"
                  alt="KBC IAS Academy Logo"
                  className="h-12 w-12 rounded-lg object-contain bg-white p-1 shadow"
                />
                <div>
                  <h3 className="text-xl font-bold">KBC IAS Academy</h3>
                  <p className="text-sm text-gray-400">Powered by KBC Nano Publication</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Bihar's most trusted coaching institute for civil services preparation with proven results.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => router.push("/")} className="block text-gray-400 hover:text-white" suppressHydrationWarning={true}>
                  About Us
                </button>
                <button onClick={() => router.push("/")} className="block text-gray-400 hover:text-white" suppressHydrationWarning={true}>
                  Courses
                </button>
                <button onClick={() => router.push("/")} className="block text-gray-400 hover:text-white" suppressHydrationWarning={true}>
                  Faculty
                </button>
                <button onClick={() => router.push("/")} className="block text-gray-400 hover:text-white" suppressHydrationWarning={true}>
                  Results
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Courses</h4>
              <div className="space-y-2 text-sm">
                <div className="text-gray-400">UPSC Foundation</div>
                <div className="text-gray-400">BPSC Complete</div>
                <div className="text-gray-400">Optional Subjects</div>
                <div className="text-gray-400">Test Series</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>+91-7050117555</div>
                <div>7033907555</div>
                <div>kbciasacademy@gmail.com</div>
                <div>Anandpuri, Patna, Bihar</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p suppressHydrationWarning={true}>
              &copy; {year} KBC IAS Academy. All rights reserved. | Powered by KBC Nano Publication
            </p>
            <div className="mt-4">
              <a 
                href="/privacypolicy" 
                className="text-gray-400 hover:text-white transition-colors underline"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 right-4 lg:bottom-6 lg:right-6 flex flex-col space-y-2 lg:space-y-3 z-50">
        <a
          href="https://wa.me/917033907555"
          className="bg-green-500 text-white p-2.5 lg:p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          title="WhatsApp"
        >
          <MessageCircle className="h-5 w-5 lg:h-6 lg:w-6" />
        </a>
        <a
          href="tel:+917050117555"
          className="bg-blue-600 text-white p-2.5 lg:p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          title="Call Now"
        >
          <Phone className="h-5 w-5 lg:h-6 lg:w-6" />
        </a>
      </div>
    </div>
  )
} 