import Image from "next/image"
import Link from "next/link"
import {
  ThumbsUpIcon,
  ChartIcon,
  FlexibleIcon,
} from "./icons"
import Button from "../components/ui/button"

export default function NewConstructionLoansPage() {
  return (
    <main className="w-full">
      {/* Top announcement banner */}
      <div className="w-full bg-pink-600 text-white py极3 px-4 text-center">
        <p className="text-sm md:text-base">
          Get instant ARV and Cash to Close estimates now &gt;
        </p>
      </div>

      {/* New Construction Loans Header */}
      <div className="w-full bg-pink-300 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-medium text-gray-800 pt-6">New Construction Loans</h1>
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full bg-pink-200 pb-16">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-700 mb-6 mt-4">
                New Construction Financing
              </h2>
              <p className="text-gray-700 mb-8">
              Funding available for single-family, 2-4 plexes, and Planned Unit Developments (PUDs), including new purchase and/or refinance. Minimum 650 FICO Score required. Collateral loans available for consideration.
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
              <h3 className="text-xl font-medium text-gray-极800 mb-3">Flexible</h3>
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

      {/* New Construction Loan Rates + Terms Section */}
      <div className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-pink-300 text-xl tracking-wider uppercase mb-12">
            New Construction Loan Rates + Terms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
            {/* Rate Item */}
            <div className="border-r border-gray-600 px-4">
              <div className="flex flex-col items-center">
                <p className="text-sm text-gray-300 mb-2">Rates as low as</p>
                <h3 className="text-4xl font-bold">9.45%<sup>+</sup></h3>
              </div>
            </div>

            <div className="border-r border-gray-600 px-4">
              <div className="flex flex-col items-center">
                <p className="text-sm text-gray-300 mb-2">Loans from</p>
                <h3 className="text-2xl font-bold">$150K to $3M</h3>
              </div>
            </div>

            <div className="border-r border-gray-600 px-4">
              <div className="flex flex-col items-center">
                <p className="text-sm text-gray-300 mb-2">(purchase price + construction costs)</p>
                <h3 className="text-2xl font-bold">Up to 85% of total costs</h3>
              </div>
            </div>

            <div className="border-r border-gray-600 px-4">
              <div className="flex flex-col items-center">
                <p className="text-sm text-gray-300 mb-2"> ARV (after-repair-value)</p>
                <h3 className="text-2xl font-bold">Up to 70%</h3>
              </div>
            </div>

            <div className="px-4">
              <div className="flex flex-col items-center">
                <p className="text-sm text-gray-300 mb-2">24-month terms</p>
                <h3 className="text-2xl font-bold">3 or 6 month extension options</h3>
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

      {/* Fund New Purchases Section 
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-700 mb-6 text-center">
            Fund New Projects or Restore Cash
          </h2>
          <p className="text-gray-600 mb-12 text-center max-w-4xl mx-auto">
            Construction loans for investment properties: single-family, 2-4 plexes, and PUDs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 max-w-4xl mx-auto">
           
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
      </div> */}

      {/* Quick and Easy Way Section
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

<section className="py-16 bg-pink-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          GET EMPOWERED WITH INDUSTRY INSIGHTS AND MORE
        </h2>
        <Link href="/blog">
          <Button 
            className="bg-pink-200 hover:bg-pink-400 text-gray-800 px-8 py-3 rounded-md transition-colors"
          >
            Read Our Blog
          </Button>
        </Link>
      </div>
    </section>
       <section className="py-12 md:py-20 bg-pink-50">
      <div className="container mx-auto px-4">
       
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative">
            <Image
              src="/house3.jpg"
              alt="Property with financing estimate"
              width={600}
              height={400}
              className="rounded-md shadow-lg"
            />
            <Link href="/get-pre-qualified" className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <Button className="bg-pink-600 hover:bg-pink-700 text-white">Get Pre-Qualified</Button>
            </Link>
          </div>
          <div>
          <Link href="https://calendly.com/robert-wc247" target="_blank" rel="noopener noreferrer">
              <Button className="mt-8 bg-pink-600 hover:bg-pink-700 text-white">Schedule a Meeting</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

          {/* Disclaimer Section*/}
          <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-xs text-gray-500">
            DISCLAIMER: All loan rates relate to non-owner-occupied rental properties only and are based on lender disposition, loan terms, borrower qualifications, LTV, and property factors. All loan rates are subject to change. Interest rates or charges herein are not recommended, approved, set or established by states. Loans are available in all states, except CA, OR, NV, AZ, UT, ID, ND, SD, MN, NC, NJ, NY and VT.
            **Exceptions may apply.
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
