import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  PeaceOfMindIcon,
  ChartIcon,
  FlexibleIcon,
} from "./icons"
import Button from '../components/ui/button';

export default function Home() {
  return (
    <main className="w-full">
      {/* Header */}
      <div className="w-full bg-pink-300 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-medium text-gray-800 pt-6 text-center">Rental Portfolio Loans</h1>
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full bg-pink-200 pb-16">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Rental Portfolio Loans</h1>
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-700 mb-6 mt-4 text-center">
                One Loan for 5+ Properties
              </h2>
              <p className="text-gray-700 mb-8 text-center">
                Custom rental portfolio loans to streamline your investments. Save time and money while scaling with confidence.
              </p>
              <Link
                href="/get-pre-qualified"
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md transition-colors w-full"
              >
                Get Pre-qualified
              </Link>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
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
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-700 mb-6 text-center">
            Portfolio Loans Built for Growth
          </h2>
          <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Manage 5+ properties efficiently under one portfolio loan for better returns and simpler operations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-pink-500 mb-4">
                <PeaceOfMindIcon className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Peace of Mind</h3>
              <p className="text-gray-600">
                Limited recourse and carve out guarantees for better business separation
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-pink-500 mb-4">
                <ChartIcon className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Cost Savings</h3>
              <p className="text-gray-600">
                Economies of scale across your portfolio for tangible cost reductions
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-pink-500 mb-4">
                <FlexibleIcon className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Operational Efficiency</h3>
              <p className="text-gray-600">
                One monthly payment and streamlined processes for portfolio growth
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
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Bigger Portfolio, Better Savings</h2>
              <p className="text-gray-600 mb-6">
                Custom loan solutions with lower fees and faster closings. Our expert team helps you optimize your portfolio for long-term success.
              </p>
              <Link href="/get-pre-qualified">
                <button className="bg-pink-700 hover:bg-pink-800 text-white font-bold py-3 px-6 rounded">
                  Get Started
                </button>
              </Link>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-pink-100 p-6 rounded-lg">
                <Image 
                  src="/happy.jpg"
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

      <section className="py-12 md:py-20 bg-pink-50">
      <div className="container mx-auto px-4">
       
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative">
            <Image
              src="/house.jpg"
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

      {/* Testimonial Section
      <section className="bg-pink-300 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl font-medium text-gray-800 mb-6">
              &ldquo;We&apos;ve closed a number of Rental Portfolio Loans
              with WCI Capital Funding and love how fast, simple, and smooth the
              process is. It&apos;s clear that WCI Capital Funding truly values its
              customers because they&apos;re so flexible and
              collaborative when working with us on a Portfolio
              loan. I&apos;ve worked with many lenders, and WCI Capital Funding really
              is the best - and they keep getting better!&rdquo;
            </blockquote>
            <cite className="text-gray-600 font-bold">Lexi Burriel, Nevada-based real estate investor</cite>
          </div>
        </div>
      </section> */}

      {/* Stats Section 
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
      </section>*/}
      
     {/* Disclaimer Section*/}
     <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-xs text-gray-500">
            DISCLAIMER: All loan rates relate to non-owner-occupied rental properties only and are based on lender disposition, loan terms, borrower qualifications, LTV, and property factors. All loan rates are subject to change. Interest rates or charges herein are not recommended, approved, set or established by states. Loans are available in all states, except CA, OR, NV, AZ, UT, ID, ND, SD, MN, NC, NJ, NY and VT.
            **Exceptions may apply.
          </p>
        </div>
      </div> 
      
    </main>
  );
}