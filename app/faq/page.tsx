"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQItem = ({ question, answer }: { question: string; answer: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button 
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-medium text-gray-800">{question}</h3>
        <span className="text-pink-500">
          {isOpen ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-600 prose max-w-none">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function FAQ() {
  return (
    <main className="w-full">
      {/* Header */}
      <div className="w-full bg-pink-300 py-6 pt-20">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-medium text-gray-800 pt-6">WCI Capital Funding Solutions</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Investment Financing FAQ</h1>
        <p className="text-lg text-gray-700 mb-10 max-w-4xl mx-auto text-center">
          Comprehensive answers about our real estate lending programs, loan products, and investment financing process.
        </p>

        <div className="max-w-4xl mx-auto">
          <FAQItem 
            question="What financing solutions do you offer real estate investors?" 
            answer={
              <div>
                <p className="mb-4">
                  WCI Capital Funding specializes in flexible financing solutions for both short-term projects and long-term holdings:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Bridge Financing</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Up to 90% of purchase price</li>
                      <li>12-24 month terms</li>
                      <li>Interest-only payments</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Rental Property Loans</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>30-year amortization</li>
                      <li>DSCR underwriting</li>
                      <li>Portfolio consolidation</li>
                    </ul>
                  </div>
                </div>
              </div>
            } 
          />

          <FAQItem 
            question="How quickly can I secure funding for a property?" 
            answer={
              <div>
                <p className="mb-4">
                  Our accelerated approval process enables:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>24-48 hour</strong> preliminary approval</li>
                  <li><strong>10-14 day</strong> average closing timeline</li>
                  <li>Same-day term sheet issuance</li>
                </ul>
                <p className="mt-4">
                  Speed varies based on property type and documentation completeness. 
                  {/*<Link href="/process-timeline" className="text-pink-600 hover:underline ml-2">
                    View our funding timeline
                  </Link>*/}
                </p>
              </div>
            } 
          />

          <FAQItem 
            question="What property types do you finance?" 
            answer={
              <div>
                <p className="mb-4">We finance residential investment properties including:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold">Eligible Properties</h4>
                    <ul className="list-disc pl-5">
                      <li>Single-family homes</li>
                      <li>2-4 unit multifamily</li>
                      <li>Townhomes & condos</li>
                      <li>Mixed-use (residential portion)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Excluded Properties</h4>
                    <ul className="list-disc pl-5">
                      <li>Commercial-only buildings</li>
                      <li>Raw land</li>
                      <li>Manufactured homes</li>
                      <li>Properties over 4 acres</li>
                    </ul>
                  </div>
                </div>
              </div>
            } 
          />

          <FAQItem 
            question="What are your minimum borrower requirements?" 
            answer={
              <div>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Minimum 650 FICO score</li>
                  <li>Established business entity</li>
                  <li>Minimum 2 years investment experience</li>
                  <li>Property insurance coverage</li>
                </ul>
                <p className="mt-4">
                  {/*<Link href="/eligibility" className="text-pink-600 hover:underline">
                    Complete eligibility requirements
                  </Link>*/}
                </p>
              </div>
            } 
          />

          <FAQItem 
            question="How does your pricing compare to traditional lenders?" 
            answer={
              <div>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Product</th>
                        <th className="text-left py-2">Rate Range</th>
                        <th className="text-left py-2">LTV</th>
                        <th className="text-left py-2">Term</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2">Fix & Flip</td>
                        <td className="py-2">8.99% - 12.99%</td>
                        <td className="py-2">Up to 90%</td>
                        <td className="py-2">12-24 mo</td>
                      </tr>
                      <tr>
                        <td className="py-2">Rental</td>
                        <td className="py-2">7.50% - 9.99%</td>
                        <td className="py-2">Up to 80%</td>
                        <td className="py-2">30 yr</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm">
                  Rates subject to change. Contact us for current pricing.
                </p>
              </div>
            } 
          />

          <FAQItem 
            question="What documentation is required for loan approval?" 
            answer={
              <div>
                <p className="mb-4">Streamlined documentation process:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Purchase contract (if applicable)</li>
                  <li>Renovation budget (bridge loans)</li>
                  <li>Entity formation documents</li>
                  <li>Insurance declarations</li>
                  <li>Title commitment</li>
                </ul>
                <p className="mt-4">
                  {/*<Link href="/documentation-checklist" className="text-pink-600 hover:underline">
                    Download complete checklist
                  </Link>*/}
                </p>
              </div>
            } 
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-6">Start Your Investment Today</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Get instant pre-qualification and access to competitive financing solutions within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-pre-qualified"
              className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-8 rounded-md transition-colors"
            >
              Get Pre-Qualified Now
            </Link>
           
          </div>
        </div>
      </div>
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