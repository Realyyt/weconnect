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
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-700 mb-10 max-w-4xl">
          Get clear answers about our financing process and services. Our comprehensive FAQ section addresses common questions about our lending solutions.
        </p>

        <div className="max-w-4xl mx-auto">
          <FAQItem 
            question="Who is WeConnectInvestments?" 
            answer={
              <div>
                <p>
                  WeConnectInvestments is a leading private lender with $5+ billion in funded loans. We leverage technology to provide fast, reliable financing for real estate investors while helping revitalize America&apos;s housing stock.
                </p>
              </div>
            } 
          />

          <FAQItem 
            question="What is hard money and how does it help real estate investors?" 
            answer={
              <div>
                <p className="mb-4">
                  Hard money loans are based on property value rather than financial position. These loans provide quick capital access, flexible terms, up to 90% financing, and loyalty rewards for real estate investors.
                </p>
              </div>
            } 
          />

          <FAQItem 
            question="What types of loans do you offer?" 
            answer={
              <div>
                <p>
                  We offer bridge loans for short-term renovation projects and rental loans for long-term investments. Our bridge loans enable quick flips, while rental loans support buy-and-hold strategies for property investors.
                </p>
              </div>
            } 
          />

          <FAQItem 
            question="What types of properties do you finance?" 
            answer={
              <p>
                We finance 2-4plex, attached/detached-PUD, and single-family properties. Our lending program currently excludes mixed-use, commercial, mobile homes, and rural properties over 4 acres.
              </p>
            } 
          />

          <FAQItem 
            question="What states do you lend in?" 
            answer={
              <div>
                <p>
                  We lend in 47 states plus Washington D.C. <Link href="/lending-areas" className="text-pink-600 hover:underline">View our lending areas.</Link>
                </p>
              </div>
            } 
          />

          <FAQItem 
            question="Do I need a business entity?" 
            answer={
              <p>
                Yes, we only lend to business entities in all states. This requirement ensures proper legal structure and protection for all parties involved.
              </p>
            } 
          />

          <FAQItem 
            question="Will I qualify for a loan?" 
            answer={
              <p>
                Apply online for a quick response with personalized rates and terms based on your experience and property details. While we don&apos;t offer pre-approvals, you&apos;ll receive a pre-qualification summary after application.
              </p>
            } 
          />

          <FAQItem 
            question="Why choose WeConnectInvestments?" 
            answer={
              <p>
                We offer competitive terms, fast processing, and expert support for real estate investors. Our technology and data-driven approach helps you make better decisions and close deals quickly.
              </p>
            } 
          />

          <FAQItem 
            question="Do you require appraisals?" 
            answer={
              <p>
                Appraisals are required for rental loans but not for bridge loans. This policy helps streamline the process for short-term renovation projects while ensuring proper valuation for long-term investments.
              </p>
            } 
          />

          <FAQItem 
            question="Are there any financing fees?" 
            answer={
              <p>
                No application fee is required to get started. All fees are collected at closing, with the origination fee based on the loan amount.
              </p>
            } 
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Access flexible financing for your next real estate investment. Get your personalized rate today and start your investment journey with confidence.
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