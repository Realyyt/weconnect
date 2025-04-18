"use client"

import React from 'react';
import Link from 'next/link';




export default function News() {


  // Fetch states where we lend


  return (
    <main className="w-full">
      {/* Header */}
      <div className="w-full bg-pink-300 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-medium text-gray-800 pt-6">In the News</h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="container mx-auto px-4 py-8">
        <div className="border-b border-gray-200">
          <div className="flex space-x-8">
            <Link 
              href="/news" 
              className="text-xl font-medium text-pink-600 pb-4 border-b-2 border-pink-600"
            >
              News
            </Link>
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">In the News</h1>
        <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            WCI Capital Funding: Revolutionizing Real Estate Financing
          </h2>
          <div className="text-pink-600 font-medium mb-2">
            WeConnect Blog
          </div>
          <div className="text-gray-500 mb-6">
            October 15, 2023
          </div>
          <div className="prose text-gray-700">
            <p className="mb-4">
              In today&apos;s fast-paced real estate market, WCI Capital Funding is making waves with its innovative approach to property financing. Our platform connects investors with carefully vetted real estate opportunities, creating a win-win situation for all parties involved.
            </p>
            <p className="mb-4">
              What sets us apart is our commitment to transparency and efficiency. We&apos;ve developed a proprietary system that streamlines the investment process, making it easier than ever for investors to participate in lucrative real estate deals while providing developers with the capital they need to bring their projects to life.
            </p>
            <p>
              Our team of experienced professionals carefully evaluates each opportunity, ensuring that our investors have access to only the most promising projects. From residential developments to commercial properties, we&apos;re reshaping the landscape of real estate investment.
            </p>
          </div>
        </div>
      </div>

      {/* 
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-medium text-gray-800 mb-8">Where We Lend</h2>
          <div className="flex justify-center">
            <Image
              src="/sl.png" // Update with the correct path to your map image
              alt="Map of Lending Areas"
              width={800} // Adjust width as needed
              height={400} // Adjust height as needed
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-6 gap-4 justify-center mb-10">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-yellow-500 mr-2"></div>
              <span className="text-sm text-gray-600">States where we lend to entities only (includes D.C.)</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-700 mr-2"></div>
              <span className="text-sm text-gray-600">States where we currently do not lend</span>
            </div>
          </div>States Where We Lend */}

      {/* Social Media 
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-medium text-gray-800 mb-8">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            <Link href="https://twitter.com/weconnectinvest" className="text-gray-600 hover:text-pink-500">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </Link>
            <Link href="https://instagram.com/weconnectinvest" className="text-gray-600 hover:text-pink-500">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            </Link>
            <Link href="https://facebook.com/weconnectinvest" className="text-gray-600 hover:text-pink-500">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </Link>
            <Link href="https://linkedin.com/company/weconnectinvest" className="text-gray-600 hover:text-pink-500">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>*/}

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