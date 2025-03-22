import Image from "next/image"
import Link from "next/link"
import {
  ThumbsUpIcon,
  ChartIcon,
  FlexibleIcon,
  MoneyIcon,
  RefinanceIcon,
  MoneyBagIcon,
  ProjectsIcon,
  LocationIcon,
} from "./icons"

export default function NewConstructionLoansPage() {
  return (
    <main className="w-full">
      {/* Top announcement banner */}
      <div className="w-full bg-pink-600 text-white py-3 px-4 text-center">
        <p className="text-sm md:text-base">
          Get instant ARV and Cash to Close estimates now &gt;
        </p>
      </div>

      {/* New Construction / Infill Loans Header */}
      <div className="w-full bg-pink-300 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-medium text-gray-800 pt-6">New Construction / Infill Loans</h1>
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full bg-pink-200 pb-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-700 mb-6 mt-4">
              New Construction Financing
            </h2>
            <p className="text-gray-700 mb-8">
              Streamlined lending process with competitive rates for developers. Simple, fast financing for your next construction project.
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
                src="/cw.jpg"
                alt="Construction worker reviewing plans"
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
                <ThumbsUpIcon className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Easy</h3>
              <p className="text-gray-600">
                No permits needed before closing.* Quick draws and streamlined processes save time.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-pink-500 mb-4">
                <ChartIcon className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Competitive</h3>
              <p className="text-gray-600">
                Low origination fees and competitive rates. No hidden adjustments or closing appraisals.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-pink-500 mb-4">
                <FlexibleIcon className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Flexible</h3>
              <p className="text-gray-600">
                Single or dual closes. Build-to-sell or build-to-rent options. Reliable capital with consistent processes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Plan-ready Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <div className="relative h-[200px] md:h-[400px]">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-pink-400 rounded-lg transform -rotate-2"></div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-pink-200 to-pink-400 rounded-lg transform rotate-2"></div>
                <div className="relative overflow-hidden rounded-lg shadow-2xl h-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                  <Image
                    src="/cw22.jpg"
                    alt="Developers reviewing construction plans"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-12">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-700 mb-6">Plan-Ready Construction Loans</h2>
              <p className="text-gray-600 mb-4">
                Fast financing from application to completion. No permits needed for funding, quick draws, and in-house servicing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* New Construction / Infill Loan Rates + Terms Section */}
      <div className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-pink-300 text-xl tracking-wider uppercase mb-12">
            New Construction / Infill Loan Rates + Terms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
            {/* Rate Item */}
            <div className="border-r border-gray-600 px-4">
              <div className="flex flex-col items-center">
                <h3 className="text-4xl font-bold mb-2">9.45%<sup>+</sup></h3>
                <p className="text-sm text-gray-300">Rates as low as</p>
              </div>
            </div>

            <div className="border-r border-gray-600 px-4">
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-2">$150K to $3MM</h3>
                <p className="text-sm text-gray-300">Loans from</p>
              </div>
            </div>

            <div className="border-r border-gray-600 px-4">
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-2">Up to 85% of total costs**</h3>
                <p className="text-sm text-gray-300">(purchase price + construction costs)</p>
              </div>
            </div>

            <div className="border-r border-gray-600 px-4">
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-2">Up to 70%</h3>
                <p className="text-sm text-gray-300">of ARV (after-repair-value)</p>
              </div>
            </div>

            <div className="px-4">
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-2">24-month terms</h3>
                <p className="text-sm text-gray-300">with 3 or 6 month extension options</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* No Application Fee Banner */}
      <div className="w-full bg-pink-300 py-4 text-center">
        <p className="text-lg font-medium text-gray-800">
          No Application Fee / No Appraisal / No Income Verification / No Prepayment Penalties
        </p>
        <Link
          href="/get-pre-qualification"
          className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-md transition-colors mt-4"
        >
          Get a Quote Today
        </Link>
      </div>

      {/* Fund New Purchases Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-700 mb-6 text-center">
            Fund New Projects or Restore Cash
          </h2>
          <p className="text-gray-600 mb-12 text-center max-w-4xl mx-auto">
            Construction loans for investment properties: single-family, 2-4 plexes, and PUDs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 max-w-4xl mx-auto">
            {/* Transaction 1 */}
            <div className="flex">
              <div className="text-pink-500 mr-4 flex-shrink-0">
                <MoneyIcon className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">New purchase</h3>
                <p className="text-gray-600">
                  Quick closing for property purchase and building costs. Compete effectively with cash buyers.
                </p>
              </div>
            </div>

            {/* Transaction 2 */}
            <div className="flex">
              <div className="text-pink-500 mr-4 flex-shrink-0">
                <RefinanceIcon className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">Refinance</h3>
                <p className="text-gray-600">
                  Use your own cash to purchase a property and restore your original cash position within 6 months of
                  the purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick and Easy Way Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-700 mb-6">
                The quick and easy way to finance your new build projects
              </h2>
              <p className="text-gray-600 mb-8">
                Kiavi offers a faster closing experience than traditional banks, providing you with a competitive edge
                in the market. Forget searching for pay stubs and old W-2s - we do not verify your income or employment.
                On top of that, our tech platform eliminates time-consuming tasks, speeding up the process to close so
                you can compete with cash buyers. For example, rather than waiting on an appraisal, we use our platform
                to underwrite the deal - getting you to the closing table quicker!
              </p>
              <Link
                href="/get-pre-qualification"
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Get A Quote
              </Link>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <Image
                src="/cw3.jpg"
                alt="Construction workers reviewing plans"
                width={500}
                height={400}
                className="rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
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
      </div>

      {/* Resources Section */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-700 mb-6">
            Get empowered with industry insights, how-tos, investor tips and more...
          </h2>
          <Link
            href="/get-pre-qualification"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md transition-colors mt-4"
          >
            View Our Resources
          </Link>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-xs text-gray-500 mb-4">
            **Total project costs are defined as the sum of: Land/Structure, Soft Costs (i.e. permitting, GC, etc.), and
            Hard Costs (i.e. cost to &ldquo;go vertical&rdquo;).
          </p>
          <p className="text-xs text-gray-500 mb-4">
            +In order to receive their first draw, borrowers must have permits secured. Permits not required for
            closing.
          </p>
          <p className="text-xs text-gray-500 mb-4">
            ***Loans in California are eligible for a maximum loan size of $3M and maximum rehab budget of $2M. All
            other states have a maximum loan size of $2M and maximum rehab budget of $1.5M. Rates are based on loan
            terms, borrower qualifications, LTV, and property factors and are subject to change. Non owner-occupied
            properties only.
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
