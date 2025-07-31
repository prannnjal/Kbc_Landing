"use client"

import { useState } from "react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  BookOpen,
  Users,
  Award,
  MapPin,
  Mail,
  Clock,
  Play,
  Download,
  Calendar,
} from "lucide-react"
import { Button } from "@/components/ui/button.js"
import { Input } from "@/components/ui/input.js"
import { Textarea } from "@/components/ui/textarea.js"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.js"
import { Badge } from "@/components/ui/badge.js"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog.js"
import Form from "@/components/ui/Form.js"
console.log("Form import:", Form)

export default function KBCIASAcademy() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    course: "",
    mode: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [year, setYear] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [isFacultyDialogOpen, setIsFacultyDialogOpen] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await fetch("/api/proxy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("✅ Submitted successfully!");
        setForm({
          name: "",
          mobile: "",
          email: "",
          course: "",
          mode: "",
          message: "",
        });
        // Redirect to thank you page after successful submission
        // setTimeout(() => {
        setTimeout(() => {
          router.push("/thank-you");
        }, 1000);
      } else {
        setStatus("❌ Submission failed: " + data.message);
      }
    } catch (error) {
      setStatus("⚠️ Error: " + error.message);
    }
  };
  



  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const courses = [
    {
      title: "UPSC Foundation Course",
      duration: "12 Months",
      fee: "₹45,000",
      mode: "Online/Offline",
      description: "Complete foundation course covering Prelims + Mains + Interview preparation",
      features: ["NCERT Based", "Current Affairs", "Test Series", "Personal Mentorship"],
    },
    {
      title: "BPSC Complete Course",
      duration: "10 Months",
      fee: "₹35,000",
      mode: "Online/Offline",
      description: "Comprehensive BPSC preparation with focus on Bihar-specific topics",
      features: ["Bihar Focus", "Mains Writing", "Interview Prep", "Mock Tests"],
    },
    {
      title: "Optional Subjects",
      duration: "6 Months",
      fee: "₹25,000",
      mode: "Online/Offline",
      description: "Specialized coaching for UPSC optional subjects",
      features: ["PSIR", "History", "Sociology", "Geography"],
    },
    {
      title: "Test Series",
      duration: "Ongoing",
      fee: "₹8,000",
      mode: "Online",
      description: "Comprehensive test series for Prelims and Mains",
      features: ["Weekly Tests", "Performance Analysis", "All India Ranking", "Detailed Solutions"],
    },
  ]

  const faculty = [
    {
      name: "Rohit Kumar",
      subject: "Economics Faculty",
      qualification: "Expert in Economics",
      experience: "Experienced Educator",
      image: "/fac5.png",
      description: `I am Rohit Kumar, the visionary behind KBC IAS Academy, dedicated to shaping the future of aspirants preparing for UPSC, BPSC, and other State PCS exams. With a strong commitment to quality education and result-oriented guidance, I've designed structured programs that simplify preparation and build a strong conceptual foundation.

🔹 Passionate Educator & Mentor
🔹 Focused on UPSC & BPSC Success
🔹 Pioneer of structured Mains Answer Writing Programs
🔹 Known for innovative teaching methods and student-friendly approach
🔹 Believer in discipline, consistency, and mentorship as keys to cracking civil services

At KBC IAS Academy, we don't just teach—we mentor, support, and lead students to their dream careers in civil services.`
    },
    {
      name: "Mrityunjay Rai",
      subject: "History Faculty",
      qualification: "BAHUBALI SIR",
      experience: "Expert in History",
      image: "/fac1.jpg",
      description: `I am Mrityunjay Rai, fondly known as Bahubali Sir, a committed History faculty at KBC IAS Academy, where I guide aspirants through the intricate layers of Indian and World History for UPSC, BPSC, and other State PCS exams. My mission is to turn History from a subject of facts to a story of power, struggle, and legacy—making it meaningful and memorable for students.

🔹 Expert in Modern, Ancient & Medieval History
🔹 Known for engaging storytelling and simplified timelines
🔹 Focused on both Prelims and Mains strategy
🔹 Strong emphasis on cause-effect analysis in historical events
🔹 Dedicated to building analytical thinking through historical perspective

At KBC IAS Academy, I don't just teach history—I bring it alive to empower future civil servants with perspective and understanding.`
    },
    {
      name: "D K Upadhyay",
      subject: "Geography Faculty",
      qualification: "Expert in Geography",
      experience: "Experienced Educator",
      image: "/fac2.jpg",
      description: `I am D K Upadhyay, Geography faculty at KBC IAS Academy, dedicated to transforming how aspirants approach both Physical and Human Geography for UPSC, BPSC, and State PCS examinations. My teaching integrates real-world relevance with theoretical clarity to help students master this scoring subject.

🔹 Specialist in Physical, Human & Indian Geography
🔹 Focused on map-based learning and answer enrichment
🔹 Believer in concept clarity with current affairs integration
🔹 Extensive experience with Prelims & Mains trends
🔹 Passionate about visual learning and practical application

At KBC IAS Academy, I mentor students to decode geography not just for exams, but as a tool to understand the world better.`
    },
    {
      name: "Akash Bhattacharya",
      subject: "General Studies",
      qualification: "Faculty at Shubhra Ranjan IAS | ALS IAS | IAS Baba",
      experience: "Expert Educator",
      image: "/fac3.jpg",
      description: `I am Akash Bhattacharya, a dedicated mentor with teaching experience at Shubhra Ranjan IAS, ALS IAS, and IAS Baba, now associated with KBC IAS Academy. With a passion for Polity, Governance, and Current Affairs, I aim to deliver impactful lectures and strategic insights to help aspirants navigate dynamic topics with ease.

🔹 Faculty with national-level IAS institutions
🔹 Expert in Polity, Governance & Current Affairs
🔹 Known for clarity, precision, and relevance in teaching
🔹 Emphasis on answer writing and linking theory with practice
🔹 Driven by the goal of making aspirants exam-ready and policy-aware

At KBC IAS Academy, I strive to bridge textbook knowledge with real-time understanding to produce confident and competent civil servants.`
    },
    {
      name: "Imteyaz Ahmad Karimi",
      subject: "Public Administration",
      qualification: "Former Chairman, Bihar Public Service Commission (BPSC)",
      experience: "Ex-BPSC Chairman",
      image: "/fac4.jpg",
      description: `Imteyaz Ahmad Karimi is a distinguished civil servant and administrator who served as the Chairman of the Bihar Public Service Commission (BPSC). Known for his integrity, administrative acumen, and commitment to transparency in recruitment, Mr. Karimi played a vital role in reforming the functioning of BPSC during his tenure.

🔹 Former IAS Officer with extensive administrative experience
🔹 Introduced reforms to ensure timely and fair conduct of exams
🔹 Promoted digitalization and process transparency in BPSC
🔹 Advocated merit-based selections and strict adherence to examination standards
🔹 Respected for his ethical leadership and student-friendly orientation

His tenure is remembered for streamlining the examination process and ensuring accountability in the state's civil services recruitment. His expertise provides invaluable insights into the examination system and administrative processes.`
    },
  ]

  const toppers = [
    {
      name: "Ankit Kumar",
      rank: "AIR 45",
      year: "2023",
      service: "IAS",
      image: "/placeholder.svg?height=150&width=150",
      quote: "KBC IAS Academy provided me with the right guidance and strategy.",
    },
    {
      name: "Priyanka Singh",
      rank: "AIR 78",
      year: "2023",
      service: "IPS",
      image: "/placeholder.svg?height=150&width=150",
      quote: "The faculty here is exceptional and truly cares about student success.",
    },
    {
      name: "Rajesh Gupta",
      rank: "BPSC Rank 12",
      year: "2023",
      service: "BAS",
      image: "/placeholder.svg?height=150&width=150",
      quote: "Best coaching institute in Bihar for civil services preparation.",
    },
  ]

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
          <button onClick={() => scrollToSection("home")} className="flex items-center space-x-1 hover:text-yellow-300" suppressHydrationWarning={true}>
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
                  onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
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
                      onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
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

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 lg:mb-6 leading-tight">
                Achieve Your <span className="text-blue-600">Civil Services Dream</span> with KBC IAS Academy
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 lg:mb-8">
                Bihar's most trusted coaching institute for UPSC, BPSC, and State PCS preparation with proven results
                and expert faculty.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 lg:mb-8">
                <div className="text-center sm:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Selections</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-blue-600">8+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-blue-600">5000+</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
              </div>

              {/* CTA Buttons - Hidden on mobile to avoid clutter */}
              <div className="hidden sm:flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  onClick={() => scrollToSection("courses")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 lg:px-8 py-2 lg:py-3 text-base lg:text-lg"
                >
                  View Courses
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 lg:px-8 py-2 lg:py-3 text-base lg:text-lg bg-transparent"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Watch Demo
                </Button>
              </div>

              {/* Course Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {["UPSC", "BPSC", "State PCS", "Optional Subjects"].map((course) => (
                  <Badge key={course} variant="outline" className="px-3 py-1 text-sm">
                    {course}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Hero Form */}
            <div className="order-1 lg:order-2">
              <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl lg:text-2xl text-gray-800">Start Your Journey Today</CardTitle>
                  <CardDescription className="text-gray-600">
                    Get personalized guidance from our experts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form onSubmit={handleSubmit} formData={form} handleInputChange={handleChange} buttonLabel="Get Free Counseling" />

                  {/* Quick Contact Options */}
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <p className="text-center text-sm text-gray-600 mb-3">Or contact us directly</p>
                    <div className="flex justify-center space-x-4">
                      <a
                        href="tel:+917050117555"
                        className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                      >
                        <Phone className="h-4 w-4" />
                        <span>Call Now</span>
                      </a>
                      <a
                        href="https://wa.me/917033907555"
                        className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Offered */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Courses We Offer</h2>
            <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
              {["UPSC", "BPSC", "State PCS", "Optional Subjects"].map((course) => (
                <Badge key={course} variant="outline" className="px-3 lg:px-4 py-1 lg:py-2 text-sm lg:text-lg">
                  {course}
                </Badge>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base lg:text-lg">{course.title}</CardTitle>
                  <CardDescription className="text-sm">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Fee:</span>
                      <span className="font-medium text-green-600">{course.fee}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Mode:</span>
                      <span className="font-medium">{course.mode}</span>
                    </div>
                  </div>
                  <div className="space-y-1 mb-4">
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                        <span className="text-xs lg:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={() => scrollToSection("admission")}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-sm"
                  >
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">About KBC IAS Academy</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg lg:text-xl font-semibold text-blue-600 mb-2">Our Vision</h3>
                  <p className="text-gray-600 text-sm lg:text-base">
                    To become the most trusted and result-oriented civil services coaching institution in India,
                    empowering students from every background to achieve success in UPSC, BPSC, and other PCS
                    examinations.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-semibold text-blue-600 mb-2">Our Mission</h3>
                  <ul className="text-gray-600 space-y-1 text-sm lg:text-base">
                    <li>• To deliver high-quality, affordable, and value-based education</li>
                    <li>• To build a knowledge-driven ecosystem with discipline, guidance, and mentorship</li>
                    <li>• To ensure every student has the opportunity to transform dreams into achievements</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 lg:p-6 rounded-lg">
                  <h3 className="text-base lg:text-lg font-semibold text-gray-800 mb-3">Director's Message</h3>
                  <p className="text-gray-600 italic text-sm lg:text-base mb-4">
                    "Civil services is not just an exam, it is a responsibility. At KBC IAS Academy, we are not just
                    preparing students for exams, we are shaping future administrators of the nation."
                  </p>
                  <p className="text-xs lg:text-sm text-gray-500 mb-4">— Rohit Kumar, Founder & Director</p>
                  
                  <div className="border-t pt-4">
                    <p className="text-gray-700 text-sm lg:text-base leading-relaxed mb-4">
                      Rohit Kumar, the visionary behind KBC IAS Academy, is a dynamic mentor, motivational speaker, and seasoned educator with years of experience in mentoring UPSC/BPSC aspirants. His teaching style is known for its clarity, in-depth analysis, and student-centered approach. Under his leadership, KBC IAS Academy has grown into a leading name in Bihar and beyond.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 lg:p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-base lg:text-lg font-semibold text-gray-800 mb-3">Our Journey</h3>
                  <p className="text-gray-700 text-sm lg:text-base leading-relaxed mb-4">
                    KBC IAS Academy started with a single classroom and a powerful idea: to make civil services preparation accessible to every serious aspirant in Bihar. Over the years:
                  </p>
                  <ul className="text-gray-700 space-y-2 text-sm lg:text-base">
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2">•</span>
                      We have mentored thousands of aspirants, many of whom are now serving as officers in various departments.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2">•</span>
                      We introduced bilingual content (Hindi-English) for inclusive learning.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2">•</span>
                      Partnered with KBC Nano Publication, ensuring high-quality and updated study material for competitive exams.
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2">•</span>
                      Conducted live test series, online-offline hybrid classes, and specialized foundation + mains programs.
                    </li>
                  </ul>
                  <p className="text-gray-700 text-sm lg:text-base leading-relaxed mt-4 italic">
                    From humble beginnings to becoming a trusted name in UPSC/BPSC coaching, our journey reflects dedication, innovation, and a commitment to excellence.
                  </p>
                </div>

              </div>
            </div>
            <div className="space-y-4 lg:space-y-6 order-1 lg:order-2">
              <img
                src="/channels4_profile.jpg"
                alt="KBC IAS Academy"
                className="rounded-lg shadow-lg w-full object-contain bg-white p-4"
              />
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                <div className="bg-white p-3 lg:p-4 rounded-lg shadow">
                  <Users className="h-6 w-6 lg:h-8 lg:w-8 text-blue-600 mb-2" />
                  <h4 className="font-semibold text-sm lg:text-base">Expert Faculty</h4>
                  <p className="text-xs lg:text-sm text-gray-600">Experienced mentors with proven track record</p>
                </div>
                <div className="bg-white p-3 lg:p-4 rounded-lg shadow">
                  <BookOpen className="h-6 w-6 lg:h-8 lg:w-8 text-blue-600 mb-2" />
                  <h4 className="font-semibold text-sm lg:text-base">Updated Content</h4>
                  <p className="text-xs lg:text-sm text-gray-600">Latest syllabus and current affairs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guidance */}
      <section className="py-12 lg:py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Under Expert Guidance</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm lg:text-base">
              KBC IAS Academy operates under the mentorship and guidance of distinguished civil servants
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
                <div className="flex-shrink-0">
                  <img
                    src="/5acf3515-6b05-4ba9-b310-5f8b5b83aafa.jpg"
                    alt="Ashish Bharati IPS"
                    className="w-48 h-48 lg:w-64 lg:h-64 rounded-full object-cover shadow-xl border-4 border-green-100"
                  />
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-green-700 mb-2">Ashish Bharati (IPS)</h3>
                    <p className="text-lg lg:text-xl text-gray-600 font-medium mb-4">Indian Police Service Officer</p>
                    <div className="w-24 h-1 bg-green-500 mx-auto lg:mx-0 mb-6"></div>
                  </div>
                  <div className="space-y-4 text-gray-700 text-sm lg:text-base leading-relaxed">
                    <p>
                      KBC IAS Academy is privileged to operate under the expert guidance of Ashish Bharati, 
                      a distinguished Indian Police Service (IPS) officer. His invaluable insights and 
                      administrative experience provide our students with a unique perspective on civil services.
                    </p>
                    <p>
                      With his deep understanding of governance, law enforcement, and public administration, 
                      Mr. Bharati ensures that our academy maintains the highest standards of excellence 
                      and prepares students not just for examinations, but for the responsibilities of 
                      public service.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mt-6">
                      <p className="text-green-800 font-medium italic">
                        "The guidance of experienced civil servants like Ashish Bharati IPS ensures that 
                        our students receive authentic insights into the world of public administration."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section id="faculty" className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Our Expert Faculty</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm lg:text-base">
              Learn from experienced educators who have guided thousands of students to success in civil services
              examinations.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {faculty.map((teacher, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <img
                    src={teacher.image || "/placeholder.svg"}
                    alt={teacher.name}
                    className="w-24 h-24 lg:w-32 lg:h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2">{teacher.name}</h3>
                  <p className="text-blue-600 font-medium mb-2 text-sm lg:text-base">{teacher.subject}</p>
                  <p className="text-gray-600 text-xs lg:text-sm mb-1">{teacher.qualification}</p>
                  <p className="text-gray-600 text-xs lg:text-sm mb-4">{teacher.experience}</p>
                  <Button 
                    variant="outline" 
                    className="w-full bg-transparent text-sm"
                    onClick={() => {
                      setSelectedFaculty(teacher);
                      setIsFacultyDialogOpen(true);
                    }}
                  >
                    Know More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure & Facilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Infrastructure & Facilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              KBC IAS Academy provides a modern and conducive learning environment that supports academic growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Classrooms</h3>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">•</span>
                    Fully air-conditioned, spacious smart classrooms
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">•</span>
                    Projector-based visual learning aids
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">•</span>
                    Limited batch size for individual attention
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Library</h3>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">•</span>
                    Well-stocked with standard NCERTs, reference books, and journals
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">•</span>
                    Separate reading rooms for boys and girls
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">•</span>
                    Open 7 days a week for registered students
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Digital Support</h3>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">•</span>
                    Mobile App and Student Portal access
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">•</span>
                    Recorded lectures, PDF notes, and current affairs modules
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">•</span>
                    Online live doubt sessions and performance tracking
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Extra Support</h3>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">•</span>
                    Weekly tests & mentorship sessions
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">•</span>
                    Essay writing and interview preparation guidance
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">•</span>
                    Motivational and strategy seminars by toppers & officers
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Powered by KBC Nano Publication */}
          <div className="bg-blue-50 rounded-xl p-8 lg:p-12 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Powered by KBC Nano Publication</h3>
              <p className="text-gray-600 max-w-3xl mx-auto text-sm lg:text-base">
                KBC IAS Academy is proudly powered by KBC Nano Publication, a trusted name in educational publishing. 
                This collaboration allows our students to access concise, accurate, and exam-relevant materials designed 
                specifically for UPSC and State PCS exams.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Updated Current Affairs Capsules</h4>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Exam-Focused NCERT-Based Notes</h4>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Bilingual Mock Tests and PYQs</h4>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Compact Revision Booklets</h4>
              </div>
            </div>
          </div>

          {/* Why Choose KBC IAS Academy */}
          <div className="bg-gray-50 rounded-xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Why Choose KBC IAS Academy?</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Expert Faculty</h4>
                <p className="text-sm text-gray-600">With proven track records</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Individual Mentorship</h4>
                <p className="text-sm text-gray-600">And career guidance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Affordable Fees</h4>
                <p className="text-sm text-gray-600">With scholarships for meritorious students</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Bihar's Trusted Platform</h4>
                <p className="text-sm text-gray-600">With excellent results in UPSC/BPSC exams</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-700 text-lg font-medium mb-4">
                Let us be a part of your journey towards becoming an officer.
              </p>
              <p className="text-blue-600 text-xl font-bold">
                Join KBC IAS Academy – where dedication meets direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Test Series */}
      <section id="test-series" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Test Series</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive test series designed to evaluate your preparation and improve your performance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "UPSC Prelims Test Series",
                type: "MCQ Based",
                tests: "25 Tests",
                price: "₹3,000",
                features: ["All India Ranking", "Detailed Analysis", "Performance Tracking"],
              },
              {
                title: "UPSC Mains Test Series",
                type: "Answer Writing",
                tests: "20 Tests",
                price: "₹4,000",
                features: ["Expert Evaluation", "Personalized Feedback", "Writing Practice"],
              },
              {
                title: "BPSC Test Series",
                type: "Complete Package",
                tests: "30 Tests",
                price: "₹2,500",
                features: ["Bihar Specific", "Prelims + Mains", "Interview Guidance"],
              },
            ].map((test, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{test.title}</CardTitle>
                  <CardDescription>{test.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-green-600">{test.price}</span>
                    <Badge variant="outline">{test.tests}</Badge>
                  </div>
                  <div className="space-y-2 mb-4">
                    {test.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Join Test Series</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Toppers */}
      <section id="toppers" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our successful students who achieved their dreams with KBC IAS Academy's guidance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toppers.map((topper, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <img
                    src={topper.image || "/placeholder.svg"}
                    alt={topper.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{topper.name}</h3>
                  <div className="flex justify-center items-center space-x-2 mb-2">
                    <Badge className="bg-yellow-500 text-white">{topper.rank}</Badge>
                    <span className="text-sm text-gray-600">{topper.year}</span>
                  </div>
                  <p className="text-blue-600 font-medium mb-3">{topper.service}</p>
                  <p className="text-gray-600 text-sm italic">"{topper.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Free Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access our comprehensive collection of study materials, strategies, and preparation resources.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "UPSC Strategy Guide",
                description: "Complete preparation strategy for all three stages",
                icon: BookOpen,
                type: "PDF",
              },
              {
                title: "Current Affairs",
                description: "Monthly current affairs compilation",
                icon: Calendar,
                type: "PDF",
              },
              {
                title: "Previous Year Questions",
                description: "Last 10 years solved papers",
                icon: Award,
                type: "PDF",
              },
              {
                title: "Video Lectures",
                description: "Free demo classes and strategy sessions",
                icon: Play,
                type: "Video",
              },
            ].map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <resource.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Download className="h-4 w-4 mr-2" />
                    Download {resource.type}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Form */}
      <section id="admission" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Admission Form</h2>
              <p className="text-gray-600">
                Take the first step towards your civil services dream. Fill out the form below and we'll contact you
                soon.
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <Form onSubmit={handleSubmit} formData={form} handleInputChange={handleChange} buttonLabel="Submit Application" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm lg:text-base">
              Get in touch with us for any queries or visit our campus for a personal consultation.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 lg:h-6 lg:w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1 text-sm lg:text-base">Address</h3>
                    <p className="text-gray-600 text-sm lg:text-base">
                      Indraprasth Apartment, Besides, West Boring Canal Rd, below Vasa Cafe, near Panchmukhi Mandir,
                      Anandpuri, Patna, Bihar 800001
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-5 w-5 lg:h-6 lg:w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1 text-sm lg:text-base">Phone Numbers</h3>
                    <p className="text-gray-600 text-sm lg:text-base">+91-7050117555</p>
                    <p className="text-gray-600 text-sm lg:text-base">7033907555</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-5 w-5 lg:h-6 lg:w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1 text-sm lg:text-base">Email</h3>
                    <p className="text-gray-600 text-sm lg:text-base">kbciasacademy@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-5 w-5 lg:h-6 lg:w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1 text-sm lg:text-base">Office Hours</h3>
                    <p className="text-gray-600 text-sm lg:text-base">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-600 text-sm lg:text-base">Sunday: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
              {/* Google Map Embed */}
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.123456789!2d85.1204224!3d25.6165465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59e54def407d:0x464e2835519606b1!2sIndraprasth%20Apartment%2C%20Besides%2C%20West%20Boring%20Canal%20Rd%2C%20below%20Vasa%20Cafe%2C%20near%20Panchmukhi%20Mandir%2C%20Anandpuri%2C%20Patna%2C%20Bihar%20800001!5e0!3m2!1sen!2sin!4v1718030000000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: "0.5rem", marginTop: "1rem" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KBC IAS Academy Location"
                />
              </div>
              <div className="mt-8">
                <h3 className="font-semibold text-gray-800 mb-4 text-sm lg:text-base">Follow Us</h3>
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3">
                  <a
                    href="https://www.facebook.com/photo.php?fbid=3250332385118141&set=a.354260511392024&type=3"
                    className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 text-center text-sm"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCKU0vgz6FCXRO83vyhdyy1Q"
                    className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 text-center text-sm"
                    target="_blank" rel="noopener noreferrer"
                  >
                    YouTube
                  </a>
                  <a
                    href="https://www.instagram.com/p/DKcG9u1Npaa/"
                    className="bg-pink-600 text-white px-3 py-2 rounded-lg hover:bg-pink-700 text-center text-sm"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Instagram
                  </a>

                </div>
              </div>
            </div>
            <div>
              <div className="bg-white p-4 lg:p-6 rounded-lg shadow-lg">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">Send us a Message</h3>
                <Form onSubmit={handleSubmit} formData={form} handleInputChange={handleChange} buttonLabel="Send Message" />
                  </div>
                  </div>
          </div>
        </div>
      </section>

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
                <button onClick={() => scrollToSection("about")} className="block text-gray-400 hover:text-white" suppressHydrationWarning={true}>
                  About Us
                </button>
                <button onClick={() => scrollToSection("courses")} className="block text-gray-400 hover:text-white" suppressHydrationWarning={true}>
                  Courses
                </button>
                <button onClick={() => scrollToSection("faculty")} className="block text-gray-400 hover:text-white" suppressHydrationWarning={true}>
                  Faculty
                </button>
                <button onClick={() => scrollToSection("toppers")} className="block text-gray-400 hover:text-white" suppressHydrationWarning={true}>
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

      {/* Faculty Details Dialog */}
      <Dialog open={isFacultyDialogOpen} onOpenChange={setIsFacultyDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-800">
              {selectedFaculty?.name}
            </DialogTitle>
          </DialogHeader>
          {selectedFaculty && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={selectedFaculty.image}
                    alt={selectedFaculty.name}
                    className="w-48 h-48 rounded-lg object-cover shadow-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    {selectedFaculty.subject}
                  </h3>
                  <p className="text-gray-600 font-medium mb-1">
                    {selectedFaculty.qualification}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {selectedFaculty.experience}
                  </p>
                </div>
              </div>
              <div className="border-t pt-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">About</h4>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedFaculty.description}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
