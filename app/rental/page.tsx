import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ThumbsUpIcon,
  ChartIcon,
  FlexibleIcon,
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
              One Loan for 5+ Properties
            </h2>
            <p className="text-gray-700 mb-8">
              Custom rental portfolio loans to streamline your investments. Save time and money while scaling with confidence.
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
            Portfolio Loans Built for Growth
          </h2>
          <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Manage 5+ properties efficiently under one portfolio loan for better returns and simpler operations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-pink-500 mb-4">
                <ThumbsUpIcon className="w-16 h-16" />
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
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Competitive Rates for Your Portfolio</h2>
              <p className="text-gray-600">
                Combine properties under one loan with low monthly payments for easier portfolio management.
              </p>
            </div>
          </div>
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
      
      {/* Legal Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-xs text-gray-500 mb-4">
            *Rental portfolio loan rates are based on loan terms, borrower qualifications, LTV, and property factors and are subject to
            change. Non owner-occupied rental properties only.
          </p>
        </div>
      </section>
    </main>
  );
}