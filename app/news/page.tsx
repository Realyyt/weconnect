"use client"

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from "lucide-react";

export default function News() {
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
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* News Item 1 */}
          <div className="bg-gray-100 p-6 rounded-md">
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              2025 Finance Leader: John Smith
            </h2>
            <div className="text-pink-600 font-medium mb-2">
              Housingwire
            </div>
            <div className="text-gray-500 mb-6">
              03 March 2025
            </div>
            <Link href="/news/2025-finance-leader" className="flex items-center text-pink-500 hover:text-pink-700">
              Read more <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* News Item 2 */}
          <div className="bg-gray-100 p-6 rounded-md">
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              Fix-and-Flip Turnaround Is in Sight
            </h2>
            <div className="text-pink-600 font-medium mb-2">
              Scotsman Guide
            </div>
            <div className="text-gray-500 mb-6">
              01 March 2025
            </div>
            <Link href="/news/fix-and-flip-turnaround" className="flex items-center text-pink-500 hover:text-pink-700">
              Read more <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* News Item 3 */}
          <div className="bg-gray-100 p-6 rounded-md">
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              WeConnectInvestments extends private lending reach as real estate investo...
            </h2>
            <div className="text-pink-600 font-medium mb-2">
              Mortgage Professional America
            </div>
            <div className="text-gray-500 mb-6">
              11 February 2025
            </div>
            <Link href="/news/extends-private-lending" className="flex items-center text-pink-500 hover:text-pink-700">
              Read more <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* News Item 4 */}
          <div className="bg-gray-100 p-6 rounded-md">
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              WeConnectInvestments expands investment lending options to 13 more states
            </h2>
            <div className="text-pink-600 font-medium mb-2">
              Housingwire
            </div>
            <div className="text-gray-500 mb-6">
              10 February 2025
            </div>
            <Link href="/news/expands-investment-lending" className="flex items-center text-pink-500 hover:text-pink-700">
              Read more <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* News Item 5 */}
          <div className="bg-gray-100 p-6 rounded-md">
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              Fed Holds Rates Steady in First Meeting of 2025
            </h2>
            <div className="text-pink-600 font-medium mb-2">
              MortgagePoint
            </div>
            <div className="text-gray-500 mb-6">
              29 January 2025
            </div>
            <Link href="/news/fed-holds-rates" className="flex items-center text-pink-500 hover:text-pink-700">
              Read more <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* News Item 6 */}
          <div className="bg-gray-100 p-6 rounded-md">
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              7 Signs You&apos;re Ready To Invest in Real Estate
            </h2>
            <div className="text-pink-600 font-medium mb-2">
              GOBankingRates
            </div>
            <div className="text-gray-500 mb-6">
              16 January 2025
            </div>
            <Link href="/news/7-signs-ready-to-invest" className="flex items-center text-pink-500 hover:text-pink-700">
              Read more <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* News Item 7 */}
          <div className="bg-gray-100 p-6 rounded-md">
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              Improve Your Balance Sheet With Portfolio Financing
            </h2>
            <div className="text-pink-600 font-medium mb-2">
              Think Realty
            </div>
            <div className="text-gray-500 mb-6">
              08 January 2025
            </div>
            <Link href="/news/improve-balance-sheet" className="flex items-center text-pink-500 hover:text-pink-700">
              Read more <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* News Item 8 */}
          <div className="bg-gray-100 p-6 rounded-md">
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              Real Estate Investing: Build-to-Rent vs. Build-to-Sell
            </h2>
            <div className="text-pink-600 font-medium mb-2">
              citybiz
            </div>
            <div className="text-gray-500 mb-6">
              20 December 2024
            </div>
            <Link href="/news/build-to-rent-vs-build-to-sell" className="flex items-center text-pink-500 hover:text-pink-700">
              Read more <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* News Item 9 */}
          <div className="bg-gray-100 p-6 rounded-md">
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              What will mortgage interest rates be in 2025? Experts weigh in
            </h2>
            <div className="text-pink-600 font-medium mb-2">
              CBS News
            </div>
            <div className="text-gray-500 mb-6">
              22 November 2024
            </div>
            <Link href="/news/mortgage-interest-rates-2025" className="flex items-center text-pink-500 hover:text-pink-700">
              Read more <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center space-x-2">
          <Link 
            href="/news?page=1" 
            className="flex items-center justify-center w-10 h-10 bg-pink-600 text-white rounded-md"
          >
            1
          </Link>
          <Link 
            href="/news?page=2" 
            className="flex items-center justify-center w-10 h-10 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md"
          >
            2
          </Link>
          <Link 
            href="/news?page=3" 
            className="flex items-center justify-center w-10 h-10 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md"
          >
            3
          </Link>
          <Link 
            href="/news?page=4" 
            className="flex items-center justify-center w-10 h-10 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md"
          >
            4
          </Link>
          <Link 
            href="/news?page=5" 
            className="flex items-center justify-center w-10 h-10 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md"
          >
            5
          </Link>
          <Link 
            href="/news?page=2" 
            className="flex items-center justify-center px-4 h-10 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md"
          >
            Next
          </Link>
          <Link 
            href="/news?page=10" 
            className="flex items-center justify-center px-4 h-10 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md"
          >
            Last
          </Link>
        </div>
      </div>

      {/* Key Company Information */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-medium text-gray-800 mb-16 text-center">Key Company Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col items-center text-center">
              <div className="text-pink-500 mb-4">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5 13C15.3 13 14.1 13.3 13 13.8V10.8C14.1 11.3 15.3 11.6 16.5 11.6C17.7 11.6 18.9 11.3 20 10.8V18.8C18.9 19.3 17.7 19.6 16.5 19.6C15.3 19.6 14.1 19.3 13 18.8V16H11V18.8C9.9 19.3 8.7 19.6 7.5 19.6C6.3 19.6 5.1 19.3 4 18.8V10.8C5.1 11.3 6.3 11.6 7.5 11.6C8.7 11.6 9.9 11.3 11 10.8V13.8C9.9 13.3 8.7 13 7.5 13C6.3 13 5.1 13.3 4 13.8V11.8C2.9 11.3 2 10.2 2 9C2 7.4 3.3 6.2 4.9 6.2C5.4 6.2 5.9 6.3 6.3 6.6C8.1 4.6 11.1 4.5 13 6.5C13.4 6.2 13.9 6.1 14.4 6.1C16 6.1 17.3 7.3 17.3 8.9C17.3 10.1 16.4 11.2 15.3 11.7V13.7C14.2 13.2 13.4 12.9 12.8 12.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-800 mb-1">
                October 2013
              </h3>
              <p className="text-gray-600">company founded</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="text-pink-500 mb-4">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 19C11.5 17 12 16 12 14V6.5C12 4.5 10 2.5 8 2.5C6 2.5 4 4.5 4 6.5V14C4 16 4.5 17 6.5 19C8.5 21 14 21 16 19C18 17 18.5 16 18.5 14V10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6.5H14C16 6.5 18 8.5 18 10.5C18 12.5 16 14.5 14 14.5H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-800 mb-1">
                $200+ million
              </h3>
              <p className="text-gray-600">in venture funding</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="text-pink-500 mb-4">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 20.9999V18.9999C22.9986 17.1971 21.7033 15.6054 19.94 15.1699" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.12988C17.7695 3.56453 19.0693 5.16056 19.0693 6.96988C19.0693 8.7792 17.7695 10.3752 16 10.8099" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-800 mb-1">
                500+
              </h3>
              <p className="text-gray-600">full-time employees</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="text-pink-500 mb-4">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 17V17.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 13.5C11.9816 13.1977 12.0692 12.8991 12.25 12.6625C12.4289 12.4313 12.6351 12.2224 12.8625 12.0375C13.0612 11.8624 13.236 11.663 13.3836 11.4443C13.5312 11.2255 13.6496 10.9897 13.7353 10.7425C13.8211 10.4953 13.8732 10.2395 13.8902 9.98C13.9071 9.72048 13.8888 9.46021 13.8356 9.20625C13.7825 8.95229 13.6953 8.70728 13.5769 8.4779C13.4585 8.24852 13.3104 8.03718 13.1366 7.85C12.9627 7.66282 12.7651 7.50202 12.5499 7.37284C12.3347 7.24366 12.1044 7.14783 11.8654 7.08868C11.6265 7.02953 11.3814 7.00777 11.1371 7.02412C10.8929 7.04046 10.6525 7.09474 10.425 7.185L9 9H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-800 mb-1">
                $5+ billion
              </h3>
              <p className="text-gray-600">of loans funded</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="text-pink-500 mb-4">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-800 mb-1">
                10,000+
              </h3>
              <p className="text-gray-600">projects funded</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="text-pink-500 mb-4">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-800 mb-1">
                30 states +
              </h3>
              <p className="text-gray-600">where we lend</p>
            </div>
          </div>
          
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-gray-700">
              WeConnectInvestments harnesses the power of data & technology to offer residential real estate 
              investors a simpler, more reliable, and faster way to access the capital they need to scale 
              their businesses.
            </p>
          </div>
        </div>
      </div>

      {/* Media Contact */}
      <div className="py-16 bg-pink-300">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-medium text-gray-800 mb-6">Media Contact</h2>
          <p className="text-gray-700 text-xl mb-2">Sarah Johnson</p>
          <p className="text-gray-700 mb-2">press@weconnectinvestments.com</p>
          <p className="text-gray-700">555-123-4567</p>
        </div>
      </div>

      {/* Social Media */}
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
      </div>

      {/* Legal Note */}
      <div className="py-8 bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <p className="text-xs text-gray-500 max-w-5xl mx-auto text-center">
            *Rates are based on loan terms, borrower qualifications, LTV, and property factors and are subject to change. Non owner-occupied rental properties only. Interest rates or charges herein are not recommended, approved, set or established by the State of Kansas. Loans available in AL, AK, AZ, AR, CA, CO, CT, DE, FL, GA, HI, IA, ID, IL, IN, KS, KY, LA, MA, MD, ME, MI, MN, MO, MT, NC, NE, ND, NH, NJ, NV, NY, OH, OK, OR, PA, SC, SD, TN, TX, VA, WA, WI, WV, and WY as well as Washington D.C.
          </p>
        </div>
      </div>
    </main>
  );
}