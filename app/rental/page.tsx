import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ThumbsUpIcon,
  ChartIcon,
  FlexibleIcon,
  MoneyBagIcon,
  ProjectsIcon,
  LocationIcon,
} from "./icons"

export default function Home() {
  return (
    <main className="w-full">
      {/* Header */}
      <div className="w-full bg-pink-300 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-medium text-gray-800 pt-6">Rental Portfolio Loans</h1>
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full bg-pink-200 pb-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-700 mb-6 mt-4">
              Streamline 5+ properties into one loan with ease
            </h2>
            <p className="text-gray-700 mb-8">
              Partner with trusted experts to craft a rental portfolio loan
              as unique as your investment strategy. Save time, money
              and headaches - so you can focus on scaling your portfolio
              with confidence.
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
                src="/2.jpg"
                alt="Rental portfolio management"
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
          <h2 className="text-3xl md:text-4xl font-medium text-gray-700 mb-6 text-center">
            Rental portfolio loans built for investors
          </h2>
          <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Once you&apos;ve acquired 5+ rental properties, it&apos;s time to start thinking about them
            as a portfolio instead of individual units. By aggregating all of your properties
            under a single portfolio umbrella, you&apos;ll see benefits across the board.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-pink-500 mb-4">
                <ThumbsUpIcon className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Peace of Mind</h3>
              <p className="text-gray-600">
                Create more separation between your personal life and your
                business with features like limited recourse and carve out guarantees
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-pink-500 mb-4">
                <ChartIcon className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Cost Savings</h3>
              <p className="text-gray-600">
                With economies of scale across your portfolio, we&apos;ll work with
                you to craft a loan with tangible cost savings
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-pink-500 mb-4">
                <FlexibleIcon className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Operational Efficiency</h3>
              <p className="text-gray-600">
                One monthly payment for all properties with simple processes
                to free up time and cash for growth
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Rates Section */}
      <div className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-pink-300 text-xl tracking-wider uppercase mb-12">
            Rental Portfolio Loan Rates + Terms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
            <div className="border-r border-gray-600 px-4">
              <div className="flex flex-col items-center">
                <h3 className="text-4xl font-bold mb-2">6.625%<sup>+</sup></h3>
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
                <h3 className="text-2xl font-bold mb-2">10-30 year</h3>
                <p className="text-sm text-gray-300">term options</p>
              </div>
            </div>
            <div className="border-r border-gray-600 px-4">
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-2">$500K+</h3>
                <p className="text-sm text-gray-300">loan amounts</p>
              </div>
            </div>
            <div className="px-4">
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-2">Interest-only</h3>
                <p className="text-sm text-gray-300">options available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Large Portfolio Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">The larger your portfolio, the larger your savings</h2>
              <p className="text-gray-600 mb-6">
                When it comes to real estate investing, there is no such
                thing as one-size-fits-all. That&apos;s why we&apos;ll partner with you
                to create a loan uniquely tailored to your portfolio. This
                means customizing a loan for your thriving portfolio with
                lower fees, points, and even quicker closings. And that&apos;s all
                backed by our team of seasoned rental portfolio experts
                dedicated to helping you navigate your options and setting
                you up for long-term success.
              </p>
              <button className="bg-pink-700 hover:bg-pink-800 text-white font-bold py-3 px-6 rounded">
                Contact Our Rental Portfolio Experts
              </button>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-pink-100 p-6 rounded-lg">
                <Image 
                  src="/k3.png"
                  alt="Loan Details Example"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Connect Investments to Capital Video Section */}
      <section className="bg-pink-300 py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="bg-black text-white p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="bg-white rounded-full p-2 mr-2">
                  <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                </div>
                <div>
                  <span className="font-bold">We Connect Investments to Capital&apos;s Rental Portfolio Loans</span>
                  <br />
                  <span className="text-sm">We Connect Investments to Capital</span>
                </div>
              </div>
              <div className="relative pt-[56.25%] bg-gray-900 rounded">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-center">Streamline Your Rental Portfolio<br />with Confidence and Ease</h3>
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-4">
                  <button className="bg-pink-500 hover:bg-pink-600 rounded-full p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </button>
                  <div className="text-sm">01:08</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Rates Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <Image 
                src="/3.jpg"
                alt="Competitive rates and terms"
                width={600}
                height={400}
                className="w-full h-120 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Competitive rates and terms tailored to your portfolio</h2>
              <p className="text-gray-600">
                We Connect Investments to Capital&apos;s Rental Portfolio Loans combine your properties
                under one umbrella with a low monthly payment to make
                managing your growing rental business easier and more
                cost-effective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-pink-300 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl font-medium text-gray-800 mb-6">
              &ldquo;We&apos;ve closed a number of Rental Portfolio Loans
              with We Connect Investments to Capital and love how fast, simple, and smooth the
              process is. It&apos;s clear that We Connect Investments to Capital truly values its
              customers because they&apos;re so flexible and
              collaborative when working with us on a Portfolio
              loan. I&apos;ve worked with many lenders, and We Connect Investments to Capital really
              is the best - and they keep getting better!&rdquo;
            </blockquote>
            <cite className="text-gray-600 font-bold">Lexi Burriel, Nevada-based real estate investor</cite>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <MoneyBagIcon className="w-12 h-12 text-pink-500" />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">$23+ billion</h3>
              <p className="text-gray-600">of loans funded</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <ProjectsIcon className="w-12 h-12 text-pink-500" />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">85,000+</h3>
              <p className="text-gray-600">projects funded</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <LocationIcon className="w-12 h-12 text-pink-500" />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">45 states +</h3>
              <p className="text-gray-600">DC</p>
              <p className="text-gray-600">where we lend</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Legal Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-xs text-gray-500 mb-4">
            *Rental portfolio loan rates are based on loan terms, borrower qualifications, LTV, and property factors and are subject to
            change. Non owner-occupied rental properties only. Interest rates or charges herein are not recommended, approved, set or
            established by the State of Kansas. Loans available in AL, AK, AZ, AR, CA, CO, CT, DE, FL, GA, HI, IA, ID, IL, IN, KS, KY, LA, MA,
            MD, ME, MI, MN, MO, MT, NC, NE, ND, NH, NJ, NV, NY, OH, OK, OR, PA, SC, SD, TN, TX, VA, WA, WI, WV, and WY as well as
            Washington D.C.
          </p>
          <p className="text-xs text-gray-500">
            **Exceptions may apply.
          </p>
        </div>
      </section>
    </main>
  );
}