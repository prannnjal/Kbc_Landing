"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { 
  ArrowLeft, 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  BookOpen 
} from "lucide-react"

export default function PrivacyPolicy() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [year, setYear] = useState("")

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

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
      <div className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <div className="mb-6">
            <button
              onClick={() => router.back()}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors bg-white px-4 py-2 rounded-lg shadow-sm"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back</span>
            </button>
          </div>

          {/* Privacy Policy Content */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: August 11, 2025</p>
            
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-6">
                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
              </p>
              
              <p className="text-gray-700 mb-6">
                We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the <a href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Free Privacy Policy Generator</a>.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Interpretation and Definitions</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Interpretation</h3>
              <p className="text-gray-700 mb-4">
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Definitions</h3>
              <p className="text-gray-700 mb-4">For the purposes of this Privacy Policy:</p>
              
              <ul className="list-disc pl-6 space-y-3 mb-6">
                <li className="text-gray-700">
                  <strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.
                </li>
                <li className="text-gray-700">
                  <strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                </li>
                <li className="text-gray-700">
                  <strong>Application</strong> refers to kbciasacademy, the software program provided by the Company.
                </li>
                <li className="text-gray-700">
                  <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to kbciasacademy.
                </li>
                <li className="text-gray-700">
                  <strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.
                </li>
                <li className="text-gray-700">
                  <strong>Country</strong> refers to: Bihar, India
                </li>
                <li className="text-gray-700">
                  <strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.
                </li>
                <li className="text-gray-700">
                  <strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.
                </li>
                <li className="text-gray-700">
                  <strong>Service</strong> refers to the Application or the Website or both.
                </li>
                <li className="text-gray-700">
                  <strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.
                </li>
                <li className="text-gray-700">
                  <strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
                </li>
                <li className="text-gray-700">
                  <strong>Website</strong> refers to kbciasacademy, accessible from <a href="https://kbciasacademy.in/" rel="external nofollow noopener" target="_blank" className="text-blue-600 hover:text-blue-800 underline">https://kbciasacademy.in/</a>
                </li>
                <li className="text-gray-700">
                  <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Collecting and Using Your Personal Data</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Types of Data Collected</h3>
              
              <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Personal Data</h4>
              <p className="text-gray-700 mb-4">
                While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li className="text-gray-700">Email address</li>
                <li className="text-gray-700">First name and last name</li>
                <li className="text-gray-700">Phone number</li>
                <li className="text-gray-700">Address, State, Province, ZIP/Postal code, City</li>
                <li className="text-gray-700">Usage Data</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Usage Data</h4>
              <p className="text-gray-700 mb-4">
                Usage Data is collected automatically when using the Service.
              </p>
              <p className="text-gray-700 mb-4">
                Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
              </p>
              <p className="text-gray-700 mb-4">
                When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
              </p>
              <p className="text-gray-700 mb-4">
                We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Tracking Technologies and Cookies</h4>
              <p className="text-gray-700 mb-4">
                We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-4">
                <li className="text-gray-700">
                  <strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.
                </li>
                <li className="text-gray-700">
                  <strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).
                </li>
              </ul>
              
              <p className="text-gray-700 mb-4">
                Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. Learn more about cookies on the <a href="https://www.freeprivacypolicy.com/blog/sample-privacy-policy-template/#Use_Of_Cookies_And_Tracking" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Free Privacy Policy website</a> article.
              </p>
              
              <p className="text-gray-700 mb-4">
                We use both Session and Persistent Cookies for the purposes set out below:
              </p>
              
              <ul className="list-disc pl-6 space-y-4 mb-6">
                <li className="text-gray-700">
                  <strong>Necessary / Essential Cookies</strong><br/>
                  Type: Session Cookies<br/>
                  Administered by: Us<br/>
                  Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.
                </li>
                <li className="text-gray-700">
                  <strong>Cookies Policy / Notice Acceptance Cookies</strong><br/>
                  Type: Persistent Cookies<br/>
                  Administered by: Us<br/>
                  Purpose: These Cookies identify if users have accepted the use of cookies on the Website.
                </li>
                <li className="text-gray-700">
                  <strong>Functionality Cookies</strong><br/>
                  Type: Persistent Cookies<br/>
                  Administered by: Us<br/>
                  Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.
                </li>
              </ul>
              
              <p className="text-gray-700 mb-6">
                For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Use of Your Personal Data</h3>
              <p className="text-gray-700 mb-4">
                The Company may use Personal Data for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-4">
                <li className="text-gray-700">
                  <strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.
                </li>
                <li className="text-gray-700">
                  <strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.
                </li>
                <li className="text-gray-700">
                  <strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.
                </li>
                <li className="text-gray-700">
                  <strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.
                </li>
                <li className="text-gray-700">
                  <strong>To provide You</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.
                </li>
                <li className="text-gray-700">
                  <strong>To manage Your requests:</strong> To attend and manage Your requests to Us.
                </li>
                <li className="text-gray-700">
                  <strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.
                </li>
                <li className="text-gray-700">
                  <strong>For other purposes</strong>: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.
                </li>
              </ul>
              
              <p className="text-gray-700 mb-4">
                We may share Your personal information in the following situations:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-6">
                <li className="text-gray-700">
                  <strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.
                </li>
                <li className="text-gray-700">
                  <strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.
                </li>
                <li className="text-gray-700">
                  <strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.
                </li>
                <li className="text-gray-700">
                  <strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.
                </li>
                <li className="text-gray-700">
                  <strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.
                </li>
                <li className="text-gray-700">
                  <strong>With Your consent</strong>: We may disclose Your personal information for any other purpose with Your consent.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Retention of Your Personal Data</h3>
              <p className="text-gray-700 mb-4">
                The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
              </p>
              <p className="text-gray-700 mb-6">
                The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Transfer of Your Personal Data</h3>
              <p className="text-gray-700 mb-4">
                Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.
              </p>
              <p className="text-gray-700 mb-4">
                Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
              </p>
              <p className="text-gray-700 mb-6">
                The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Delete Your Personal Data</h3>
              <p className="text-gray-700 mb-4">
                You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.
              </p>
              <p className="text-gray-700 mb-4">
                Our Service may give You the ability to delete certain information about You from within the Service.
              </p>
              <p className="text-gray-700 mb-6">
                You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.
              </p>
              <p className="text-gray-700 mb-6">
                Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Disclosure of Your Personal Data</h3>
              
              <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Business Transactions</h4>
              <p className="text-gray-700 mb-4">
                If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
              </p>
              
              <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Law enforcement</h4>
              <p className="text-gray-700 mb-4">
                Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
              </p>
              
              <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Other legal requirements</h4>
              <p className="text-gray-700 mb-4">
                The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li className="text-gray-700">Comply with a legal obligation</li>
                <li className="text-gray-700">Protect and defend the rights or property of the Company</li>
                <li className="text-gray-700">Prevent or investigate possible wrongdoing in connection with the Service</li>
                <li className="text-gray-700">Protect the personal safety of Users of the Service or the public</li>
                <li className="text-gray-700">Protect against legal liability</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Security of Your Personal Data</h3>
              <p className="text-gray-700 mb-6">
                The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.
              </p>
              <p className="text-gray-700 mb-6">
                If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Links to Other Websites</h2>
              <p className="text-gray-700 mb-4">
                Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.
              </p>
              <p className="text-gray-700 mb-6">
                We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to this Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
              </p>
              <p className="text-gray-700 mb-4">
                We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.
              </p>
              <p className="text-gray-700 mb-6">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">No Refund Policy</h2>
              <p className="text-gray-700 mb-4">
                All purchases made through our Service are non-refundable. Once a payment has been processed for any product, service, or subscription offered by the Company, no refunds will be issued, regardless of the reason for cancellation or non-usage.
              </p>
              <p className="text-gray-700 mb-6">
                We strongly encourage users to review all information, terms, and conditions before making any purchase. If you have any questions regarding a product or service, please contact us prior to completing your transaction.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, You can contact us:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li className="text-gray-700">
                  By visiting this page on our website: <a href="https://kbciasacademy.in/privacypolicy.html" rel="external nofollow noopener" target="_blank" className="text-blue-600 hover:text-blue-800 underline">https://kbciasacademy.in/privacypolicy.html</a>
                </li>
              </ul>
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
                href="/privacypolicy.html" 
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
