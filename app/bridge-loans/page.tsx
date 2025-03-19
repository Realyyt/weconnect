import Image from "next/image"
import Link from "next/link"
import {
  HandshakeIcon,
  SpeedIcon,
  MoneyIcon,
  HouseIcon,
  RefinanceIcon,
  CalendarIcon,
  MoneyBagIcon,
  ProjectsIcon,
  LocationIcon,
  CircleNumberOne,
  CircleNumberTwo,
  CircleNumberThree,
  ArrowRightCircleIcon,
} from "./icons"

export default function BridgeLoansPage() {
  return (
    <main className="w-full">
      {/* Top announcement banner */}
      <div className="w-full bg-pink-600 text-white py-3 px-4 text-center">
        <p className="text-sm md:text-base">
          NEW: Your fast track to financing. Get an instant ARV and Cash to Close estimate now &gt;
        </p>
      </div>

      {/* Bridge Loans Header */}
      <div className="w-full bg-pink-200 h-24 flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-medium text-gray-700 pt-6">Bridge Loans</h1>
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full bg-gradient-to-b from-pink-50 to-pink-100 min-h-[50vh] pb-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-700 mb-6">
              Bridge the gap with fast short-term financing
            </h2>
            <p className="text-gray-700 mb-8">
              Unlock fast and easy capital, offering high leverage&mdash;up to 95% LTC / 80% ARV. Perfect for investors who
              need to move fast, our loans help you outbid competition and maximize returns.
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
                src="/review.jpg"
                alt="Investors reviewing property plans"
                width={400}
                height={200}
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
                <HandshakeIcon className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Quick closing</h3>
              <p className="text-gray-600">Close in as few as 7 business days to compete with cash buyers</p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-pink-500 mb-4">
                <SpeedIcon className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Tech-driven approach</h3>
              <p className="text-gray-600">
                Fast approvals and personalized pricing that prioritizes the property&apos;s potential
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-pink-500 mb-4">
                <MoneyIcon className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">High leverage</h3>
              <p className="text-gray-600">No need to drain your own funds. We offer up to 95% LTC / 80% ARV</p>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Speed Section */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <Image
                src="/5.jpg"
                alt="Happy real estate investor"
                width={500}
                height={400}
                className="rounded-md shadow-lg"
              />
            </div>
            <div className="w-full lg:w-1/2 lg:pl-12">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-700 mb-6">
                Speed up your real estate investment game
              </h2>
              <p className="text-gray-600 mb-4">
                Our bridge loans outpace conventional banking speeds, setting you up to close in as fast as 7 days with
                an in-house servicing team and no 3rd party appraisals. Say goodbye to tedious paperwork like pay stubs
                and W-2s; our tech-driven platform cuts through the clutter to offer faster approvals and personalized
                pricing to maximize your deal.
              </p>
              <Link
                href="/get-pre-qualified"
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md transition-colors mt-4"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bridge Loan Rates + Terms Section */}
      <div className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-pink-300 text-xl tracking-wider uppercase mb-12">
            Bridge Loan Rates + Terms
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
            <div className="border-r border-gray-600 px-4">
              <div className="flex flex-col items-center">
                <h3 className="text-4xl font-bold mb-2">7.75%*</h3>
                <p className="text-sm text-gray-300">Rates as low as</p>
              </div>
            </div>

            <div className="border-r border-gray-600 px-4">
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-2">$100K to $3MM</h3>
                <p className="text-sm text-gray-300">Loans from</p>
              </div>
            </div>

            <div className="border-r border-gray-600 px-4">
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-2">Up to 95%</h3>
                <p className="text-sm text-gray-300">of purchase price</p>
              </div>
            </div>

            <div className="border-r border-gray-600 px-4">
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-2">Up to 80%</h3>
                <p className="text-sm text-gray-300">of after-repair value</p>
              </div>
            </div>

            <div className="px-4">
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-2">12, 18 + 24 month terms</h3>
                <p className="text-sm text-gray-300">w/ interest-only options</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* No Application Fee Banner */}
      <div className="w-full bg-pink-300 py-4 text-center">
        <p className="text-lg font-medium text-gray-800">No Application Fee / No Appraisal / No Income Verification</p>
        <Link
          href="/get-pre-qualified"
          className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-md transition-colors mt-4"
        >
          Get Pre-qualified Today
        </Link>
      </div>

      {/* Bridge Loans Tailored Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-700 mb-6 text-center">
            Bridge loans tailored for your real estate strategy
          </h2>
          <p className="text-gray-600 mb-12 text-center max-w-4xl mx-auto">
            Get tailored financing that supports three types of transactions on non-owner occupied properties, including
            single-family residences, manufactured homes, 2-4 units, condos, and PUDs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            {/* Strategy 1 */}
            <div className="flex flex-col">
              <div className="text-pink-500 mb-4">
                <HouseIcon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">New purchase</h3>
              <p className="text-gray-600">
                Get the funds for both purchasing properties and up to 100% of the rehab costs. Our quick closing
                capabilities let you compete effectively in a market dominated by cash offers.
              </p>
            </div>

            {/* Strategy 2 */}
            <div className="flex flex-col">
              <div className="text-pink-500 mb-4">
                <RefinanceIcon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Refinancing for flexibility</h3>
              <p className="text-gray-600">
                Leverage your assets with the option to refinance within six months. we connect investments to capital empowers you to maintain
                liquidity and leverage for continuous investment.
              </p>
            </div>

            {/* Strategy 3 */}
            <div className="flex flex-col">
              <div className="text-pink-500 mb-4">
                <CalendarIcon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Seasoned financing options</h3>
              <p className="text-gray-600">
                If you&apos;ve held a property for more than six months, our bridge loans can provide the extra financial
                support needed to achieve your investment goals successfully.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fast Financing Estimate Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 relative">
              <Image
                src="/house.jpg"
                alt="Property with financing estimate"
                width={600}
                height={400}
                className="rounded-md shadow-lg w-full"
              />
              
              {/* Financing Card - Repositioned for mobile */}
              <div className="lg:absolute lg:top-1/2 lg:right-0 lg:transform lg:-translate-y-1/2 
                          bg-white p-4 sm:p-6 rounded-md shadow-lg 
                          w-full lg:w-2/5 mt-4 lg:mt-0 lg:mr-4 
                          border-l-2 border-b-2 lg:border-l-4 lg:border-b-4 border-pink-400" 
                style={{
                  boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.1), 0 4px 10px -5px rgba(236, 72, 153, 0.04)"
                }}>
                <div className="mb-3 sm:mb-4">
                  <p className="text-gray-600 text-sm sm:text-base">Estimated ARV</p>
                  <p className="text-xl sm:text-2xl font-bold">$450,000</p>
                </div>
                <div className="mb-3 sm:mb-4">
                  <p className="text-gray-600 text-sm sm:text-base">Interest Rate</p>
                  <p className="text-xl sm:text-2xl font-bold">7.75%</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm sm:text-base">Cash to Close</p>
                  <p className="text-xl sm:text-2xl font-bold">$45,650</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-12">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-700 mb-6">Get a fast financing estimate</h2>
              <p className="text-gray-600 mb-6">
                Stop guessing and start investing with confidence! we connect investments to capital helps you quickly estimate your financing
                options&mdash;simply add a few project details like the property address and rehab scope to unlock an estimate
                for:
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>After Repair Value (ARV)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>Cash to Close</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>Interest Rate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>Valuation Comparables</span>
                </li>
              </ul>
              <Link
                href="/get-pre-qualified"
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Get Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Kickstart Your Bridge Loan Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-700 mb-12 text-center">
            Kickstart your bridge loan financing
          </h2>

          <div className="grid grid-cols-1 gap-12 max-w-3xl mx-auto">
            {/* Step 1 */}
            <div className="flex">
              <div className="mr-6">
                <CircleNumberOne className="w-16 h-16 text-pink-500" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">Online pre-qualification</h3>
                <p className="text-gray-600">
                  Start by getting pre-qualified easily online with just a soft credit pull. Plus, when you input a
                  property&apos;s address into our online calculator, we connect investments to capital&apos;s technology platform instantly assesses details
                  like square footage and location to pinpoint the most favorable pricing and terms available.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex">
              <div className="mr-6">
                <CircleNumberTwo className="w-16 h-16 text-pink-500" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">Connect with us</h3>
                <p className="text-gray-600">
                  Once you&apos;ve pinpointed the right property, connect with us. We&apos;ll help you crunch the numbers and
                  offer our expertise to guide your bridge loan strategy.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex">
              <div className="mr-6">
                <CircleNumberThree className="w-16 h-16 text-pink-500" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">Submit your application</h3>
                <p className="text-gray-600">
                  Ready to move forward? Apply without any application fees or upfront costs, ensuring a commitment-free
                  process as you take the next step.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/get-pre-qualified"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              See Your Rate
            </Link>
          </div>
        </div>
      </div>

      {/* In-house Servicing Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
              <div className="bg-pink-100 p-8 rounded-lg relative">
                <h3 className="text-2xl font-medium text-gray-800 mb-4">Did you know?</h3>
                <p className="text-gray-700 mb-4">we connect investments to capital services all our bridge loans from close to payoff.</p>
                <p className="text-gray-700">
                  we connect investments to capital&apos;s in-house Servicing Team works to ensure that our customers receive a consistent, fast and easy
                  experience even after their bridge loan closes.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-2/3 lg:pl-12">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-700 mb-6">
                Discover the benefits of we connect investments to capital&apos;s in-house bridge loan servicing
              </h2>
              <p className="text-gray-600 mb-6">
                we connect investments to capital takes pride in servicing all our bridge loans from close to payoff. Unlike others who outsource,
                we ensure a seamless, fast, and consistent experience with our in-house team. See how we keep things
                smooth even after your bridge loan closes.
              </p>
              <Link
                href="/get-pre-qualified"
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Visit Our Servicing Page
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Webinar Section */}
      <div className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <p className="text-pink-300 uppercase tracking-wider mb-4">On-demand webinar</p>
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                Want to learn more on how funding decisions can impact your ROI?
              </h2>
              <p className="text-gray-300 mb-6">
                Real estate investors have more options in investment strategies than ever before. we connect investments to capital walks you
                through the differing factors among these strategies and walks you through real-life examples of the
                impact of funding decisions.
              </p>
              <Link
                href="/get-pre-qualified"
                className="inline-block bg-pink-300 hover:bg-pink-400 text-gray-800 font-medium py-3 px-6 rounded-md transition-colors"
              >
                Watch Our Webinar
              </Link>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-12">
              <div className="relative">
                <Image
                  src="/vid.jpg"
                  alt="Webinar preview"
                  width={600}
                  height={350}
                  className="rounded-md shadow-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-pink-500 rounded-full p-4 shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-700 mb-12 text-center">we connect investments to capital Bridge Loan FAQs</h2>

          <div className="max-w-3xl mx-auto">
            {/* FAQ Item */}
            <div className="border-b border-gray-200 py-4">
              <details className="group">
                <summary className="flex items-center cursor-pointer [&::-webkit-details-marker]:hidden list-none">
                  <ArrowRightCircleIcon className="w-6 h-6 text-pink-500 mr-3" />
                  <h3 className="text-lg font-medium text-gray-800">
                    How can I maximize my real estate investment project with our bridge loans?
                  </h3>
                </summary>
                <p className="pl-9 pt-3 text-gray-600">
                  Tired of traditional bank hurdles and restrictive financing? Our bridge loans offer high leverage and 100% rehab costs, fueling your property purchases and renovations effectively. Your FICO®️ score property exit experience and the property&apos;s after-repair value play a key role in determining your leverage, empowering you to invest boldly and with greater financial freedom.
                </p>
              </details>
            </div>

            {/* FAQ Item */}
            <div className="border-b border-gray-200 py-4">
              <details className="group">
                <summary className="flex items-center cursor-pointer [&::-webkit-details-marker]:hidden list-none">
                  <ArrowRightCircleIcon className="w-6 h-6 text-pink-500 mr-3" />
                  <h3 className="text-lg font-medium text-gray-800">
                    What should I know about the fees associated with our loans?
                  </h3>
                </summary>
                <p className="pl-9 pt-3 text-gray-600">
                  we connect investments to capital prides itself on transparency with fees, ensuring no hidden surprises affect your ROI. For instance, unlike some other lenders, we don&apos;t impose prepayment penalties or exit points. Our team is here to guide you, helping you balance upfront costs with leverage to support your project&apos;s success. Always review the terms for a clear financial picture.
                </p>
              </details>
            </div>

            {/* FAQ Item */}
            <div className="border-b border-gray-200 py-4">
              <details className="group">
                <summary className="flex items-center cursor-pointer [&::-webkit-details-marker]:hidden list-none">
                  <ArrowRightCircleIcon className="w-6 h-6 text-pink-500 mr-3" />
                  <h3 className="text-lg font-medium text-gray-800">
                    What kind of service can I expect with our Bridge Standard loans?
                  </h3>
                </summary>
                <p className="pl-9 pt-3 text-gray-600">
                  Our bridge loans provide premium service with a dedicated team of financing professionals, ensuring fast approvals and even faster processing for repeat borrowers. For more information, check out our guide, Working with us: The Bridge Loan Process - From Start to Close.
                </p>
              </details>
            </div>

            {/* FAQ Item */}
            <div className="border-b border-gray-200 py-4">
              <details className="group">
                <summary className="flex items-center cursor-pointer [&::-webkit-details-marker]:hidden list-none">
                  <ArrowRightCircleIcon className="w-6 h-6 text-pink-500 mr-3" />
                  <h3 className="text-lg font-medium text-gray-800">
                    What are the loan terms and leverage options for our bridge loans?
                  </h3>
                </summary>
                <p className="pl-9 pt-3 text-gray-600">
                  Loan terms offer maximum leverage of up to 95% LTC of the purchase price and up to 80% ARV. we connect investments to capital finances 100% of rehab costs, with loan amounts ranging from $100,000 to $1,000,000. We offer competitive rates and a standard fee that includes processing and third-party fees. There&apos;s no application fee.
                </p>
              </details>
            </div>

            {/* FAQ Item */}
            <div className="border-b border-gray-200 py-4">
              <details className="group">
                <summary className="flex items-center cursor-pointer [&::-webkit-details-marker]:hidden list-none">
                  <ArrowRightCircleIcon className="w-6 h-6 text-pink-500 mr-3" />
                  <h3 className="text-lg font-medium text-gray-800">
                    Which properties are eligible for our bridge loans?
                  </h3>
                </summary>
                <p className="pl-9 pt-3 text-gray-600">
                  Eligible properties include single-family residences, 2-4 units, condos, PUDs, and manufactured homes.
                </p>
              </details>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
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
      </div>

      {/* Transform House-Flipping Section */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-700 mb-6">
            Transform your house-flipping projects
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Unlock our flexible loan options, fast online platform, and experienced support for your next deal. Partner
            with we connect investments to capital to make your flipping journey a success story, backed by thousands of successful projects
            nationwide.
          </p>
          <Link
            href="/get-pre-qualified"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </div>

      {/* Disclaimer Section */}
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
      </div>

      {/* Feedback button 
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
        <button className="bg-pink-500 text-white py-8 px-4 rounded-l-md transform -rotate-90 translate-x-8 origin-bottom-left">
          Talk to Us
        </button>
      </div>*/}
    </main>
  )
}

