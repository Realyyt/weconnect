"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from "lucide-react";
// FAQ Item component with toggle functionality
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
          <h1 className="text-2xl md:text-3xl font-medium text-gray-800 pt-6">Frequently Asked Questions</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <p className="text-lg text-gray-700 mb-10 max-w-4xl">
          Our goal is to keep you informed on processes, updates, and more to ensure you feel confident through every step of the financing process.
        </p>

        <div className="max-w-4xl mx-auto">
          <FAQItem 
            question="Who is WeConnectInvestments?" 
            answer={
              <div>
                <p className="mb-4">
                  With more than $5+ billion in funded loans, WeConnectInvestments is one of the nation&apos;s fastest-growing private lenders to residential real estate investors (REIs). WeConnectInvestments harnesses the power of data & technology to offer REIs a simpler, more reliable, and faster way to access the capital they need to scale their businesses.
                </p>
                <p>
                  WeConnectInvestments is committed to helping its customers revitalize the approximately $25 trillion worth of aged U.S. housing stock to provide move-in ready homes and rental housing for millions of Americans across the country. For more information, visit www.weconnectinvestments.com.
                </p>
              </div>
            } 
          />

          <FAQItem 
            question="What is hard money and how does it help real estate investors?" 
            answer={
              <div>
                <p className="mb-4">
                  Unlike traditional conventional bank loans, a hard money loan is based on the value of the property being used as collateral, not just your financial position. While the rates are typically higher, hard money loans are attractive for real estate investors because they tend to close much faster, provide flexible terms and you can pay them off quickly to offset costs, allowing you to scale your business faster. Here are just a few additional benefits of hard money loans:
                </p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Access to quick capital and fast turn times</li>
                  <li>Flexible terms with various repayment schedules and loan durations</li>
                  <li>Up to 90% money financed based on the property value and your renovation budget</li>
                  <li>The more you work with the same lender, the more benefits you may receive such as reduced origination fee, rate, and more</li>
                </ul>
              </div>
            } 
          />

          <FAQItem 
            question="What types of loans does WeConnectInvestments offer?" 
            answer={
              <div>
                <p className="mb-4">
                  WeConnectInvestments offers bridge and rental loans for purchases or refinances. A bridge loan is a short-term loan for real estate investors who prefer to finance the purchase and/or rehabilitation of their investment property rather than buying it fully in cash or taking a traditional bank loan. Real estate investors renovate these properties to either quickly sell back in the market or refinance into a rental loan.
                </p>
                <p>
                  A rental loan is for investment properties in which the real estate investor will buy and hold (and rent out to generate passive income), rather than fixing and flipping it quickly for a profit. These need to be turn-key, livable condition properties. Real estate investors use both bridge and rental loans for the BRRRR strategy to increase their portfolio and long-term cash flow.
                </p>
              </div>
            } 
          />

          <FAQItem 
            question="What types of properties does WeConnectInvestments offer loans for?" 
            answer={
              <p>
                WeConnectInvestments offers single asset bridge and rental property loans for 2-4plex, attached/detached-pud, and single-family properties. We are rapidly growing and anticipate adding more property types and portfolios soon. At the moment, we do not lend on mixed-use, commercial, mobile homes, and rural properties (zoned as agricultural/rural property with 4+ acres).
              </p>
            } 
          />

          <FAQItem 
            question="What states do you lend in?" 
            answer={
              <div>
                <p className="mb-4">
                  We currently offer loans in AL, AK, AZ, AR, CA, CO, CT, DE, FL, GA, HI, IA, ID, IL, IN, KS, KY, LA, MA, MD, ME, MI, MN, MO, MT, NC, NE, ND, NH, NJ, NV, NY, OH, OK, OR, PA, SC, SD, TN, TX, VA, WA, WI, WV, and WY as well as Washington D.C.
                </p>
                <p>
                  <Link href="/lending-areas" className="text-pink-600 hover:underline">Learn more about the States we lend in.</Link>
                </p>
              </div>
            } 
          />

          <FAQItem 
            question="Do I need a business entity to secure a loan with WeConnectInvestments?" 
            answer={
              <div>
                <p>
                  Yes. We lend to business entities in all states we offer loans. <Link href="/lending-areas" className="text-pink-600 hover:underline">Learn more about the States we lend in.</Link>
                </p>
              </div>
            } 
          />

          <FAQItem 
            question="Will I qualify for a WeConnectInvestments loan?" 
            answer={
              <p>
                The first step is to apply online. If approved, you will receive your personalized rate in just a few minutes! Begin by answering a few short questions about your experience and the investment property you wish to purchase/finance, and we&apos;ll provide customized estimated terms for you to choose the best loan option for your needs. Please note that we do not offer pre-approvals, but will provide you with a pre-qualification summary once you submit your application.
              </p>
            } 
          />

          <FAQItem 
            question="Why should I partner with WeConnectInvestments for fix-and-flip or rental loans?" 
            answer={
              <p>
                WeConnectInvestments provides competitive terms, a fast technology-powered process, and dedicated industry support. With our data and innovative financing programs, we empower you to make informed decisions, close deals faster, and realize the full potential of your real estate investment strategies.
              </p>
            } 
          />

          <FAQItem 
            question="Do you require appraisals?" 
            answer={
              <p>
                Appraisals vary on your financing needs. We do not require appraisals on bridge loans, but we do require them for rental loans.
              </p>
            } 
          />

          <FAQItem 
            question="Are there any financing fees?" 
            answer={
              <p>
                We pride ourselves on transparency throughout the loan process and all fees are collected at closing. We do not require an application fee and the origination fee is based on the final loan amount.
              </p>
            } 
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-6">Capital ready when you are</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            WeConnectInvestments offers both flexible short-term financing as well as long-term financing options designed to fit a multitude of investment strategies. Take advantage of today&apos;s low rates and experience the easier way to access funding on your next project.
          </p>
          <Link
            href="/get-pre-qualified"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            See Your Personalized Rate
          </Link>
        </div>
      </div>
    </main>
  );
}