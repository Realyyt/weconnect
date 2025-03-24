import Image from "next/image"
import Link from "next/link"
import {
  ClockIcon,
  ThumbsUpIcon,
  PiggyBankIcon,
  HouseIcon,
  RefinanceIcon,
  CalendarIcon,
  CircleNumberOne,
  CircleNumberTwo,
  CircleNumberThree,
} from "./icons"

export default function FixAndFlipLoansPage() {
  
  return (
    <main className="w-full">
      {/* Top announcement banner */}
      <div className="w-full bg-pink-600 text-white py-3 px-4 text-center">
        <p className="text-sm md:text-base">
          NEW: Your fast track to financing. Get an instant ARV and Cash to Close estimate now &gt;
        </p>
      </div>

      {/* Fix-and-Flip Loans Header */}
      <div className="w-full bg-pink-300 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-medium text-gray-700 pt-6">Fix-and-Flip Loans</h1>
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full bg-pink-200 pb-16">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Fix & Flip Loans</h1>
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-700 mb-6">
                Short-term financing for your fix-and-flip projects
              </h2>
              <p className="text-gray-700 mb-8">
                we connect investments to capital provides fast, reliable fix-and-flip loans for the purchase and rehab of investment properties with
                high leverage of up to 95% LTC / 80% ARV.
              </p>
              <Link
                href="/get-pre-qualification"
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Get Pre-qualified
              </Link>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-end">
              <div className="relative">
                <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-pink-600 z-0"></div>
                <Image
                  src="/ff.jpg"
                  alt="Contractor working on a fix-and-flip project"
                  width={400}
                  height={200}
                  className="relative z-10 rounded-md shadow-lg"
                />
              </div>
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
                <ClockIcon className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Quick closing</h3>
              <p className="text-gray-600">Close in as few as 7 business days to compete with cash buyers</p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-pink-500 mb-4">
                <ThumbsUpIcon className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">High leverage</h3>
              <p className="text-gray-600">Don&apos;t drain your own funds. We offer up to 95% LTC / 80% ARV</p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-pink-500 mb-4">
                <PiggyBankIcon className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Competitive rates</h3>
              <p className="text-gray-600">
                Maximize your returns with our competitive fix-and-flip loan rates and terms
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fast Funding Section */}
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
                    src="/ff2.jpg"
                    alt="Real estate investor working on laptop"
                    width={500}
                    height={400}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-6">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-700 mb-6">
                Fast funding for real estate investments
              </h2>
              <p className="text-gray-600 mb-4">
                Unlock fast, easy, and reliable financing with fast closings to keep pace with cash buyers. Benefit from
                we connect investments to capital&apos;s in-house servicing, no 3rd party appraisals, and online pricing platform for a seamless and
                efficient experience from beginning to end, personalized for your next deal.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fix-and-Flip Rates + Terms Section */}
      <div className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-pink-300 text-xl tracking-wider uppercase mb-12">
            Fix-and-Flip Rates + Terms
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center">
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

            <div className="border-r border-gray-600 px-4">
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-2">12, 18 + 24 month terms</h3>
                <p className="text-sm text-gray-300">w/ interest-only options</p>
              </div>
            </div>

            <div className="px-4">
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-2">100% of rehab cost</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* No Application Fee Banner */}
      <div className="w-full bg-pink-300 py-4 text-center">
        <p className="text-lg font-medium text-gray-800">No Application Fee / No Appraisal / No Income Verification</p>
        <Link
          href="#"
          className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-md transition-colors mt-4"
        >
          See Your Rate
        </Link>
      </div>

      {/* Loans Tailored Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-700 mb-6 text-center">
            Loans tailored to house flippers
          </h2>
          <p className="text-gray-600 mb-12 text-center max-w-4xl mx-auto">
            we connect investments to capital&apos;s fix-and-flip loans are flexible, supporting a variety of non-owner occupied properties such as
            single-family residences, manufactured homes, 2-4 unit dwellings, condos, and Planned Unit Developments
            (PUDs):
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            {/* Strategy 1 */}
            <div className="flex flex-col">
              <div className="text-pink-500 mb-4">
                <HouseIcon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">New purchase</h3>
              <p className="text-gray-600">
                we connect investments to capital provides the funds to purchase and can close in as fast as 7 days, allowing you to compete against
                cash buyers. Plus, we cover 100% of the rehab costs so you can turn your vision into reality.
              </p>
            </div>

            {/* Strategy 2 */}
            <div className="flex flex-col">
              <div className="text-pink-500 mb-4">
                <RefinanceIcon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Delayed purchase refinance</h3>
              <p className="text-gray-600">
                Using your own cash or home equity to purchase a property, restore your original cash position within 6
                months of the property purchase.
              </p>
            </div>

            {/* Strategy 3 */}
            <div className="flex flex-col">
              <div className="text-pink-500 mb-4">
                <CalendarIcon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Seasoned finance</h3>
              <p className="text-gray-600">
                Owned the investment property 6 months or longer? Our fix-and-flip loans can be a perfect way to provide
                an extra runway to get you across the finish line.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fast Financing Estimate Section */}
      <div className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Image Container */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <Image
                src="/house.jpg"
                alt="Property with financing estimate"
                width={600}
                height={400}
                className="rounded-md shadow-lg w-full"
              />
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 lg:pl-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-700 mb-4 sm:mb-6">
                Get a fast financing estimate
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Stop guessing and start investing with confidence. Quickly estimate your financing options with our platform.
              </p>
              <ul className="mb-6 space-y-2 text-sm sm:text-base">
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
                href="#"
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-md transition-colors text-sm sm:text-base"
              >
                Get Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Kickstart Your Fix-and-Flip Loan Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-700 mb-12 text-center">
            Kickstart your fix-and-flip loan financing
          </h2>

          <div className="grid grid-cols-1 gap-12 max-w-3xl mx-auto">
            {/* Step 1 */}
            <div className="flex">
              <div className="mr-6">
                <CircleNumberOne className="w-16 h-16 text-pink-500" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">Get pre-qualified online</h3>
                <p className="text-gray-600">
                  Start with a soft credit pull for pre-qualification. Our platform assesses property details instantly for favorable terms.
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
                  Share your property details with our team. We&apos;ll help you strategize and optimize your financing.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex">
              <div className="mr-6">
                <CircleNumberThree className="w-16 h-16 text_pink-500" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">Submit your application</h3>
                <p className="text-gray-600">
                  Apply without fees or upfront costs. Enjoy a commitment-free process to move forward.
                </p>
              </div>
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

      {/* In-house Servicing Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="w-full lg:w-2/3 mb-8 lg:mb-0 lg:pr-12">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-700 mb-6">
                Discover the benefits of WCI Capital Funding&apos;s in-house loan servicing
              </h2>
              <p className="text-gray-600 mb-6">
                We handle all servicing internally for seamless support. Experience faster, more consistent service throughout your loan.
              </p>
              <Link
                href="#"
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Visit Our Servicing Page
              </Link>
            </div>
            <div className="w-full lg:w-1/3">
              <div className="bg-pink-100 p-8 rounded-lg relative">
                <h3 className="text-2xl font-medium text-gray-800 mb-4">Did you know?</h3>
                <p className="text-gray-700 mb-4">We service all bridge loans in-house. Enjoy consistent support from close to payoff.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-700 mb-12 text-center">
            WCI Capital Funding Fix-and-Flip Loan FAQ
          </h2>

          <div className="max-w-3xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="border-b border-gray-200 py-4">
              <details className="group">
                <summary className="flex items-center cursor-pointer [&::-webkit-details-marker]:hidden list-none">
                  <span className="text-pink-500 mr-3 transform transition-transform duration-200 group-open:rotate-90">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <h3 className="text-lg font-medium text-gray-800">
                    What loan terms and leverage do we offer for fix-and-flip projects?
                  </h3>
                </summary>
                <p className="pl-9 pt-3 text-gray-600">
                  Our fix-and-flip loans offer high leverage—up to 95% LTC—for purchasing and rehabilitating properties, with terms that support your immediate and long-term investment plans.
                </p>
              </details>
            </div>

            {/* FAQ Item 2 */}
            <div className="border-b border-gray-200 py-4">
              <details className="group">
                <summary className="flex items-center cursor-pointer [&::-webkit-details-marker]:hidden list-none">
                  <span className="text_pink-500 mr-3 transform transition-transform duration-200 group-open:rotate-90">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <h3 className="text-lg font-medium text-gray-800">
                    Which properties qualify for our fix-and-flip loans?
                  </h3>
                </summary>
                <p className="pl-9 pt-3 text-gray-600">
                  Our fix-and-flip loans are suitable for a variety of non-owner occupied properties, including single-family homes, condos, and multi-unit residences.
                </p>
              </details>
            </div>

            {/* FAQ Item 3 */}
            <div className="border-b border-gray-200 py-4">
              <details className="group">
                <summary className="flex items-center cursor-pointer [&::-webkit-details-marker]:hidden list-none">
                  <span className="text-pink-500 mr-3 transform transition-transform duration-200 group-open:rotate-90">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <h3 className="text-lg font-medium text-gray-800">
                    How can our fix-and-flip loans enhance my real estate investments?
                  </h3>
                </summary>
                <p className="pl-9 pt-3 text-gray-600">
                  Our fix-and-flip loans provide up to 95% LTC of your project&apos;s initial costs and cover 100% of rehab expenses. This high leverage, combined with your FICO® score and the property&apos;s after-repair-value (ARV), equips you to maximize your investment&apos;s potential.
                </p>
              </details>
            </div>

            {/* FAQ Item 4 */}
            <div className="border-b border-gray-200 py-4">
              <details className="group">
                <summary className="flex items-center cursor-pointer [&::-webkit-details-marker]:hidden list-none">
                  <span className="text-pink-500 mr-3 transform transition-transform duration-200 group-open:rotate-90">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <h3 className="text-lg font-medium text-gray-800">
                    What are the fees for our fix-and-flip loans?
                  </h3>
                </summary>
                <p className="pl-9 pt-3 text-gray-600">
                  We pride ourselves on transparency with fees. Our fix-and-flip loans come with competitive fees, no prepayment penalties, and no hidden exit points. This approach helps maintain a clear ROI and successful project completion.
                </p>
              </details>
            </div>

            {/* FAQ Item 5 */}
            <div className="border-b border-gray-200 py-4">
              <details className="group">
                <summary className="flex items-center cursor-pointer [&::-webkit-details-marker]:hidden list-none">
                  <span className="text-pink-500 mr-3 transform transition-transform duration-200 group-open:rotate-90">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <h3 className="text-lg font-medium text-gray-800">
                    What are draws in fix-and-flip loans, and how do they relate to covering 100% of rehab costs?
                  </h3>
                </summary>
                <p className="pl-9 pt-3 text-gray-600">
                  In our fix-and-flip loans, &quot;draws&quot; are how you get funds released in parts for your renovation work. As you move forward with your property&apos;s rehab, these draws, which are included in your total loan, get released step by step. This way, you&apos;re covered for the full rehab costs, making managing your budget a lot smoother. After each phase of the renovation, an inspection checks the progress, ensuring everything&apos;s on track as planned, before releasing the next draw of funds.
                </p>
              </details>
            </div>

            {/* FAQ Item 6 */}
            <div className="border-b border-gray-200 py-4">
              <details className="group">
                <summary className="flex items-center cursor-pointer [&::-webkit-details-marker]:hidden list-none">
                  <span className="text-pink-500 mr-3 transform transition-transform duration-200 group-open:rotate-90">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <h3 className="text-lg font-medium text-gray-800">
                    What level of service do we offer for fix-and-flip loans?
                  </h3>
                </summary>
                <p className="pl-9 pt-3 text-gray-600">
                  Expect top-tier service with our dedicated team. We ensure rapid loan approvals and an even swifter process for repeat borrowers, making your fix-and-flip projects smoother and more efficient. Our in-house servicing team provides consistent support from application through closing and beyond.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>

      {/* Transform Fix-and-Flip Section */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-700 mb-6">
            Transform your fix-and-flip real estate investments
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Unlock our flexible loan options, fast online platform, and experienced support for your next deal. Partner
            with we connect investments to capital to make your flipping journey a success story, backed by thousands of successful projects
            nationwide.
          </p>
          <Link
            href="#"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            See Your Rate
          </Link>
        </div>
      </div>

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

      {/* Testimonial Section - REMOVED */}
      {/* Legal Section 
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-xs text-gray-500 mb-4">
            *Fix and flip loan rates are based on loan terms, borrower qualifications, LTV, and property factors and are subject to
            change. Non owner-occupied properties only.
          </p>
        </div>
      </section>*/}

      {/* Feedback button 
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
        <button className="bg-pink-500 text-white py-8 px-4 rounded-l-md transform -rotate-90 translate-x-8 origin-bottom-left">
          Talk to Us
        </button>
      </div>*/}
    </main>
  )
}
