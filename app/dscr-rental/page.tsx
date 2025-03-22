import Image from "next/image"
import Link from "next/link"
import { MoneyIcon, CloudIcon, HeadphonesIcon } from "./icons"

export default function RentalLoansPage() {
  return (
    <main className="w-full">
      {/* Top announcement banner */}
      <div className="w-full bg-pink-600 text-white py-3 px-4 text-center">
        <p className="text-sm md:text-base">
          Get instant ARV and Cash to Close estimates now &gt;
        </p>
      </div>

      {/* DSCR Rental Loans Header */}
      <div className="w-full bg-pink-300 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-medium text-gray-700 pt-6">DSCR Rental Loans</h1>
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full bg-pink-200 pb-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-700 mb-6">
              Easy Rental Property Financing
            </h2>
            <p className="text-gray-700 mb-8">
              Fast financing for new purchases, refinancing, or portfolio optimization. Our platform makes rental financing simple and efficient.
            </p>
            <Link
              href="/get-pre-qualified"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Get Pre-qualified
            </Link>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-end">
            <div className="relative">
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-pink-600 z-0"></div>
              <Image
                src="/k1.jpg"
                alt="Person handing over keys to a rental property"
                width={600}
                height={400}
                className="relative z-10 rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-pink-500 mb-4">
                <MoneyIcon className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Competitive Rates</h3>
              <p className="text-gray-600">
                High leverage and competitive rates to maximize your returns
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-pink-500 mb-4">
                <CloudIcon className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Fast and simple process</h3>
              <p className="text-gray-600">
                No income verification needed. Our platform streamlines the entire process.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-pink-500 mb-4">
                <HeadphonesIcon className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Flexibility and support</h3>
              <p className="text-gray-600">
                Multiple loan options and expert support to optimize your investment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Rental Investment Loans Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center max-w-5xl mx-auto">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-6">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-pink-400 rounded-lg transform -rotate-2"></div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-pink-200 to-pink-400 rounded-lg transform rotate-2"></div>
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                  <Image
                    src="/k22.jpg"
                    alt="Family moving into a rental property"
                    width={500}
                    height={400}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-6">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-700 mb-6">Rental Investment Loans</h2>
              <p className="text-gray-600 mb-4">
                Available for single-family, manufactured homes, PUDs, 2-4 units, and condos. Purchase, rate and term, or cash-out refinance options.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* DSCR Rental Loan Rates + Terms Section */}
      <div className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-pink-300 text-xl tracking-wider uppercase mb-12">
            DSCR Rental Loan Rates + Terms
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
            <div className="border-r border-gray-600 px-4">
              <div className="flex flex-col items-center">
                <h3 className="text-4xl font-bold mb-2">
                  6.625%<sup>+</sup>
                </h3>
                <p className="text-sm text-gray-300">Rates as low as</p>
              </div>
            </div>

            <div className="border-r border-gray-600 px-4">
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-2">Up to 80%</h3>
                <p className="text-sm text-gray-300">LTV (loan-to-value)</p>
              </div>
            </div>

            <div className="border-r border-gray-600 px-4">
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-2">No prepayment penalty</h3>
                <p className="text-sm text-gray-300">after year 3</p>
              </div>
            </div>

            <div className="border-r border-gray-600 px-4">
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-2">5/1 + 7/1 ARMs</h3>
                <p className="text-sm text-gray-300">fully amortizing</p>
              </div>
            </div>

            <div className="px-4">
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-2">30-year fixed rates</h3>
                <p className="text-sm text-gray-300">Interest-only options</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cash-Out Refinance Banner */}
      <div className="w-full bg-pink-300 py-4 text-center">
        <p className="text-lg font-medium text-gray-800">Ask About our Cash-Out Refinance Options</p>
        <Link
          href="#"
          className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-md transition-colors mt-4"
        >
          See Your Rate
        </Link>
      </div>

      {/* Adjustable-Rate Mortgages Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-700 mb-6 text-center">
            Flexible ARM Options
          </h2>
          <p className="text-gray-600 mb-12 text-center max-w-4xl mx-auto">
            Choose from 5/1 or 7/1 ARMs with fixed initial rates and flexible terms to boost your cash flow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 max-w-4xl mx-auto">
            {/* ARM 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-pink-500 mb-4 border-2 border-pink-500 rounded-full p-4">
                <span className="text-3xl font-bold">5/1</span>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">5/1 ARM</h3>
              <p className="text-gray-600">
                Fixed rate for 5 years with fully amortizing or interest-only options
              </p>
            </div>

            {/* ARM 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-pink-500 mb-4 border-2 border-pink-500 rounded-full p-4">
                <span className="text-3xl font-bold">7/1</span>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">7/1 ARM</h3>
              <p className="text-gray-600">
                Fixed rate for 7 years with fully amortizing or interest-only options
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="#"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              See Your Rate
            </Link>
          </div>
        </div>
      </div>

      {/* Rental Property Financing Made Easy Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-700 mb-6">
                Streamlined Rental Financing
              </h2>
              <p className="text-gray-600 mb-4">
                No income verification or employment checks. Our tech platform makes the process fast and efficient.
              </p>
              <p className="text-gray-600 mb-8">
                Quickly apply with ease, get pre-qualified, and track your loan&apos;s status – the more you do, the easier
                it gets.
              </p>
              <Link
                href="#"
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Get Started Now
              </Link>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-pink-400 rounded-lg transform -rotate-2"></div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-pink-200 to-pink-400 rounded-lg transform rotate-2"></div>
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <Image
                    src="/k3.png"
                    alt="we connect investments to capital loan application platform"
                    width={500}
                    height={400}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section 
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <div className="text-pink-500 mr-4">
                <MoneyBagIcon className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">$23+ billion</h3>
                <p className="text-gray-600">of loans funded</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="text-pink-500 mr-4">
                <ProjectsIcon className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">85,000+</h3>
                <p className="text-gray-600">projects funded</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="text-pink-500 mr-4">
                <LocationIcon className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">45 states + DC</h3>
                <p className="text-gray-600">where we lend</p>
              </div>
            </div>
          </div>
        </div>
      </div>*/}

      {/* DSCR Info Section */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
              <div className="bg-pink-100 p-8 rounded-lg relative">
                <h3 className="text-2xl font-medium text-gray-800 mb-4">Did you know?</h3>
                <p className="text-gray-700 mb-4">
                  DSCR is a ratio that measures and determines the maximum loan amount when you apply for a new loan or
                  refinance an existing one. Because DSCR measures the asset&apos;s ability to pay the property&apos;s mortgage
                  and expenses the higher it is, the more leverage an investor like you can get.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-2/3 lg:pl-12">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-700 mb-6">What is a DSCR loan?</h2>
              <p className="text-gray-600 mb-6">
                we connect investments to capital&apos;s long-term rental loans are also known as debt service coverage ratio (DSCR) loans or no-income
                mortgages. What does this mean to you?
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>No tax or personal income document needed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>Loans are based on rental property cash flow</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>Flexible qualification guidelines</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* BRRRR Strategy Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-700 mb-6">
                Rent and repeat: refinancing your BRRRR
              </h2>
              <p className="text-gray-600 mb-8">
                we connect investments to capital&apos;s rental loan options are ideally suited to supporting your BRRRR strategy. Acquire the property
                with a short-term fix-and-flip / bridge loan to cover the cost of the purchase and the rehab of the
                property. When the rehab is complete, you can refinance to a long-term rental loan at a lower interest
                rate and take a cash-out option to purchase your next property.
              </p>
              <Link
                href="#"
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-pink-400 rounded-lg transform -rotate-2"></div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-pink-200 to-pink-400 rounded-lg transform rotate-2"></div>
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <Image
                    src="/1.png"
                    alt="BRRRR Strategy Diagram"
                    width={500}
                    height={400}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* eBook Section 
      <div className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <p className="text-pink-300 uppercase tracking-wider mb-4 text-center">eBook</p>
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
              <div className="relative">
                <div className="absolute -bottom-4 -left-4 w-full h-full bg-pink-300 z-0"></div>
                <Image
                  src="/placeholder.svg?height=350&width=300"
                  alt="BRRRR eBook preview"
                  width={300}
                  height={350}
                  className="relative z-10 rounded-md shadow-lg"
                />
              </div>
            </div>
            <div className="w-full lg:w-2/3 lg:pl-12">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Want to learn more about BRRRR?</h2>
              <p className="text-gray-300 mb-6">
                Check out we connect investments to capital's new eBook, Breaking Down BRRRR: Your guide to building a rental portfolio quickly and
                profitably using the BRRRR method. In it, we walk you through the financing of BRRRR and illustrate the
                cash-on-cash return of BRRRR vs. turnkey.
              </p>
              <Link
                href="#"
                className="inline-block bg-pink-300 hover:bg-pink-400 text-gray-800 font-medium py-3 px-6 rounded-md transition-colors"
              >
                Get My Copy
              </Link>
            </div>
          </div>
        </div>
      </div>*/}

      {/* Expert Guidance Section 
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-700 mb-6">
            Expert guidance from an industry-leading team
          </h2>
          <p className="text-gray-600 mb-8">
            Whether adding your first rental property or accumulating multiple rentals into a large diversified
            portfolio, we connect investments to capital can help guide you through which rental lending strategy best fits your needs to help you
            grow.
          </p>
          <p className="text-gray-600 mb-8">
            Our industry-leading team of real estate financing professionals is here to support you every step of the
            way. Plus, we love chatting about real estate! So, if you want to discuss financing options for your
            strategies, go over the numbers on a potential property or talk about your long-term goals, contact your
            we connect investments to capital representative. We&apos;re here to help and answer all of your questions.
          </p>
          <Link
            href="#"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            Let&apos;s Get Started Together
          </Link>
        </div>
      </div>*/}

      {/* Resources Section */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-700 mb-6">
          GET EMPOWERED WITH INDUSTRY INSIGHTS AND MORE
          </h2>
          <Link
            href="/news"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md transition-colors mt-4"
          >
            Read WCI Capital funding blog
          </Link>
        </div>
      </div>

      {/* Disclaimer Section 
      <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-xs text-gray-500 mb-4">
            *Rental portfolio loan rates are based on loan terms, borrower qualifications, LTV, and property factors and are subject to
            change. Non owner-occupied rental properties only.
          </p>
        </div>
      </div>*/}

      {/* Feedback button */}
      
    </main>
  )
}

