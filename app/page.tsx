"use client"

import Image from "next/image"
import Link from "next/link"
import { BarChart3, Building2,  RefreshCcw, Scale, Handshake, Zap } from "lucide-react"
import Button from "@/app/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen">
    {/* Hero Section with Curvy Backgrounds */}
    <section className="pt-20 bg-gradient-to-b from-pink-50 to-white overflow-hidden min-h-[70vh] relative">
      {/* Background Images with Enhanced Animation */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/w4.jpg"
            alt="Background Image 1"
            fill
            className="opacity-0 animate-fade-in-1 object-cover object-[center_30%]"
            quality={100}
            priority
          />
        </div>
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/w5.jpg"
            alt="Background Image 2"
            fill
            className="opacity-0 animate-fade-in-2 object-cover object-[center_30%]"
            quality={100}
            priority
          />
        </div>
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/w6.jpg"
            alt="Background Image 3"
            fill
            className="opacity-0 animate-fade-in-3 object-cover object-[center_30%]"
            quality={100}
            priority
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 h-[70vh]">
          {/* Content Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Smart Real Estate Financing
            </h1>
            <p className="text-base sm:text-lg text-gray-800 mb-6 leading-relaxed">
              We provide fast and reliable financing solutions for real estate investors. Our technology-powered platform streamlines the entire investment process.
            </p>
            <Link href="/get-pre-qualified">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">
                Get Pre-qualified
              </Button>
            </Link>
          </div>

          {/* Video Section */}
          <div className="w-full lg:w-1/2 relative h-[30vh] sm:h-[40vh] lg:h-[50vh] rounded-xl overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>

    {/* Products Grid - Improved grid responsiveness */}
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Fix and Flip Card */}
          <div className="group p-8 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-pink-200">
            <div className="h-12 w-12 mb-6 text-pink-600">
              <RefreshCcw className="h-full w-full" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Fix and Flip / Bridge</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Access quick closings with high leverage for renovation projects. Our bridge loans help you seize opportunities in the real estate market.
            </p>
            <Link
              href="/learn-more"
              className="inline-flex items-center text-pink-600 font-semibold group-hover:text-pink-700"
            >
              Learn More
              <span className="ml-2">→</span>
            </Link>
          </div>

          {/* New Construction Card */}
          <div className="group p-8 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-pink-200">
            <div className="h-12 w-12 mb-6 text-pink-600">
              <Building2 className="h-full w-full" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">New Construction</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Get streamlined financing for new construction projects. Our flexible terms support your development goals from ground breaking to completion.
            </p>
            <Link
              href="/learn-more"
              className="inline-flex items-center text-pink-600 font-semibold group-hover:text-pink-700"
            >
              Learn More
              <span className="ml-2">→</span>
            </Link>
          </div>

          {/* DSCR Rental Card */}
          <div className="group p-8 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-pink-200">
            <div className="h-12 w-12 mb-6 text-pink-600">
              <BarChart3 className="h-full w-full" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">DSCR Rental</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Optimize your rental income with flexible terms and competitive rates. Our DSCR loans are designed for long-term rental property investments.
            </p>
            <Link
              href="/learn-more"
              className="inline-flex items-center text-pink-600 font-semibold group-hover:text-pink-700"
            >
              Learn More
              <span className="ml-2">→</span>
            </Link>
          </div>

          {/* Rental Portfolio Card */}
          <div className="group p-8 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-pink-200">
            <div className="h-12 w-12 mb-6 text-pink-600">
              <Building2 className="h-full w-full" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Rental Portfolio</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Consolidate multiple properties under one loan with customizable terms. Our portfolio loans simplify managing your real estate investments.
            </p>
            <Link
              href="/learn-more"
              className="inline-flex items-center text-pink-600 font-semibold group-hover:text-pink-700"
            >
              Learn More
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>



            
    {/* Fast Financing Section - Better mobile layout */}
    <section className="py-12 md:py-20 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Financing Estimate</h2>
          <p className="text-base md:text-lg text-gray-600">
          Get instant financing estimates for your property investment. Our calculator provides tailored options based on your property details and renovation scope to unlock:
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative">
            <Image
              src="/house.jpg"
              alt="Property with financing estimate"
              width={600}
              height={400}
              className="rounded-md shadow-lg"
            />
            
          </div>
          <div>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center space-x-3">
                <span className="h-6 w-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center">
                  ✓
                </span>
                <span>After Repair Value (ARV)</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="h-6 w-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center">
                  ✓
                </span>
                <span>Cash to Close</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="h-6 w-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center">
                  ✓
                </span>
                <span>Interest Rate</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="h-6 w-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center">
                  ✓
                </span>
                <span>Valuation Comparables</span>
              </li>
            </ul>
            <Link href="/get-pre-qualified">
              <Button className="mt-8 bg-pink-600 hover:bg-pink-700 text-white">Get Estimate</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <Zap className="h-12 w-12 mx-auto mb-6 text-pink-600" />
            <h3 className="text-xl font-bold mb-4">Fast lending processes</h3>
            <p className="text-gray-600">
              Apply for flexible financing, get visibility into the process, and receive funding more quickly. It&apos;s
              that easy!
            </p>
          </div>
          <div className="text-center">
            <Scale className="h-12 w-12 mx-auto mb-6 text-pink-600" />
            <h3 className="text-xl font-bold mb-4">Competitive rates</h3>
            <p className="text-gray-600">
              Make confident offers and maximize returns with reliable capital, high leverage, and flexible loan
              options.
            </p>
          </div>
          <div className="text-center">
            <Handshake className="h-12 w-12 mx-auto mb-6 text-pink-600" />
            <h3 className="text-xl font-bold mb-4">Trusted support</h3>
            <p className="text-gray-600">
              Grow your business with experienced support from an industry-leading team from application to closing.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Webinar Section */}
    <section className="py-12 md:py-20 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <span className="text-pink-600 font-medium mb-3 md:mb-4 block text-sm md:text-base">
              WATCHOUT FOR LIVE WEBINAR
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Getting to Know we connect investment to capital: Successfully Funding Your Real Estate Investment
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8">
              Sign up for our next weekly live webinar to walk through the entire we connect investment to capital process and speak with our experienced team.
            </p>
            <Link href="/get-pre-qualified">
              <Button className="w-full md:w-auto bg-pink-600 hover:bg-pink-700 text-white font-medium">
                Save My Seat
              </Button>
            </Link>
          </div>
          
          {/* Video Container */}
          <div className="relative w-full aspect-video max-w-2xl mx-auto md:mx-0">
            <div className="absolute inset-0 transform md:rotate-3 bg-gray-800 rounded-lg p-2 shadow-xl">
              <div className="relative w-full h-full bg-gray-700 rounded-lg overflow-hidden">
                <video
                  src="/webinar-preview.mp4"
                  poster="/vid.jpg"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Custom play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center shadow-lg transition-colors cursor-pointer">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-2xl mx-auto">
         
          <div className="space-y-12">
          
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 text-pink-600">
                  <svg className="h-full w-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">$23+ billion</h3>
                <p className="text-gray-600">
                  in loans originated to real estate investors to help them scale their businesses.
                </p>
              </div>
            </div>

            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 text-pink-600">
                  <Building2 className="h-full w-full" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">85,000+</h3>
                <p className="text-gray-600">
                  move-in ready homes and rentals funded for our customers across the country
                </p>
              </div>
            </div>
          </div>

          
          <div className="space-y-12">
           
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 text-pink-600">
                  <svg className="h-full w-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">45 states + DC</h3>
                <p className="text-gray-600">
                  where we lend to real estate investors so they can revitalize neighborhoods
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 text-pink-600">
                  <BarChart3 className="h-full w-full" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">95%</h3>
                <p className="text-gray-600">
                  of our transactions have successful exits, compared to the 75% industry average
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>*/}

    {/* 
    <section className="py-12 md:py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          See why 17,000+ real estate investors trust we connect investment to capital
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-pink-100">
              <div className="flex text-pink-500 mb-4">{"★".repeat(5)}</div>
              <p className="text-gray-600 mb-6">
                {`We connect investments to capital have been an awesome partner in helping me achieve my Real Estate investment dreams. I have
worked with other companies but they completely standout in professionalism, timeliness and flexible
rates options.`}
              </p>
              <div className="text-sm text-gray-500">
                <div className="font-semibold">Oracle F.</div>
                <div>12/01/24 via Trustpilot</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

   Testimonials Section - Improved mobile layout */}

    {/* Get Insights Section */}
    <section className="py-16 bg-pink-200">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          GET EMPOWERED WITH INDUSTRY INSIGHTS AND MORE
        </h2>
        <p className="text-gray-600 text-lg mb-8">
        Read WCI Capital funding blog
        </p>
        <Link href="/get-pre-qualified">
          <Button 
            className="bg-pink-200 hover:bg-pink-400 text-gray-800 px-8 py-3 rounded-md transition-colors"
          >
            Read The we connect investment to capital Blog
          </Button>
        </Link>
      </div>
    </section>

    {/* Awards/Recognition Section 
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          
          <div className="text-center">
            <Image
              src="/inc-best-workplaces.png"
              alt="2022 Best Workplaces"
              width={150}
              height={100}
              className="mb-4 mx-auto"
            />
            <h3 className="text-sm font-medium text-gray-800">2022 Best Workplaces</h3>
            <p className="text-xs text-gray-600">2022 Inc. Magazine</p>
          </div>

          
          <div className="text-center">
            <Image
              src="/inc-500.png"
              alt="500 Fastest Growing Companies"
              width={150}
              height={100}
              className="mb-4 mx-auto"
            />
            <h3 className="text-sm font-medium text-gray-800">500 Fastest Growing Companies</h3>
            <p className="text-xs text-gray-600">2021 Inc. Magazine</p>
          </div>

        
          <div className="text-center">
            <Image
              src="/tech-100.png"
              alt="2025 HousingWire Tech100 Winner"
              width={150}
              height={100}
              className="mb-4 mx-auto"
            />
            <h3 className="text-sm font-medium text-gray-800">2025 HousingWire Tech100 Winner</h3>
            <p className="text-xs text-gray-600">Winner Eight Years in a Row!</p>
          </div>

          
          <div className="text-center">
            <Image
              src="/best-loan.png"
              alt="Best Loan Origination Platform"
              width={150}
              height={100}
              className="mb-4 mx-auto"
            />
            <h3 className="text-sm font-medium text-gray-800">Best Loan Origination Platform</h3>
            <p className="text-xs text-gray-600">2021 Fintech Breakthrough Award</p>
          </div>

          
          <div className="text-center">
            <Image
              src="/forbes-fintech.png"
              alt="Forbes Fintech 50"
              width={150}
              height={100}
              className="mb-4 mx-auto"
            />
            <h3 className="text-sm font-medium text-gray-800">Forbes Fintech 50</h3>
            <p className="text-xs text-gray-600">2019 Forbes Fintech 50</p>
          </div>
        </div>
      </div>
    </section>*/}

     {/* Disclaimer Section
     <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-xs text-gray-500 mb-4">
            *Bridge loan rates are based on loan terms, borrower qualifications, LTV, and property factors and are
            subject to change. Non owner-occupied rental properties only. Interest rates or charges herein are not
            recommended, approved, set or established by the State of Kansas. Loans available in AL, AK, AZ, AR, CA, CO,
            CT, DE, FL, GA, HI, IA, ID, IL, IN, KS, KY, LA, MA, MD, ME, MI, MN, MO, MT, NC, NE, ND, NH, NJ, NV, NY, OH,
            OK, OR, PA, SC, SD, TN, TX, VA, WA, WI, WV, and WY as well as Washington D.C.
          </p>
          <p className="text-xs text-gray-500">
            **Loans in which the borrower uses secondary financing sources do not qualify for interest as drawn. If
            secondary financing is obtained, borrowers will be unable to obtain draws until cured.
          </p>
        </div>
      </div> */}

    </div>
  )
}

