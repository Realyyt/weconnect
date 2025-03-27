"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TrendingUp, Building2, BarChart3 , Quote} from "lucide-react";

export default function WhyUs() {
  return (
    <main className="w-full">
      {/* Header */}
      <div className="w-full bg-pink-300 pt-20 py-6">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-700 mb-6 mt-4">
            Scale Your Real Estate Business with Confidence
          </h2>
          <p className="text-gray-700 mb-8">
            WCI Capital Funding revolutionizes real estate financing with fast, reliable capital solutions powered by cutting-edge technology, helping investors grow portfolios efficiently while minimizing risk. We offer tailored financing for fix-and-flip projects to long-term rentals, adapting to your unique investment strategy.
          </p>
        </div>
      </div>

      
      {/* Rest of the existing code remains the same */}
      {/* Hero Section */}
      <div className="w-full bg-pink-200 pb-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-700 mb-6 mt-4">
            About WCI Capital Funding
            </h2>
            <p className="text-gray-700 mb-8">
              WCI Capital Funding is a premier commercial real estate loan brokerage firm, specializing in tailored financing solutions for acquisitions, rental properties, fix-and-flip projects, and new construction. Leveraging an extensive and diverse network of trusted partners, we provide:
              <ul className="list-disc pl-6 mt-4">
                <li>we provide competitive and strategic options for both seasoned investors and newcomers.</li>
                <li>we empower clients to navigate the complexities of real estate financing efficiently and achieve their investment goals with confidence.</li>
                
              </ul>
            </p>
            <Link
              href="/get-pre-qualified"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Get Started
            </Link>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-end">
            <div className="relative">
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-pink-600 z-0"></div>
              <Image
                src="/3.jpg"
                alt="Investor working with WeConnectInvestments"
                width={400}
                height={200}
                className="relative z-10 rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Three Pillars - Value Proposition */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-medium text-gray-700 mb-12 text-center">Why Choose WCI Capital Funding?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-pink-500 mb-4">
                <TrendingUp className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Advanced Technology</h3>
              <p className="text-gray-600">Real-time updates and management
              <ul className="list-disc pl-4 mt-2 text-left">
                  <li>24/7 access to your loan status</li>
                  <li>Secure document uploads</li>
                  <li>Automated progress tracking</li>
                </ul>
              </p>
            </div>
            
            {/* Pillar 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-pink-500 mb-4">
                <Building2 className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Trusted Industry Leader</h3>
              <p className="text-gray-600">
                With over $1 billion in funded projects, we bring:
                <ul className="list-disc pl-4 mt-2 text-left">
                  <li>Proven track record of success</li>
                  <li>Deep market knowledge</li>
                  <li>Strong industry relationships</li>
                </ul>
              </p>
            </div>
            
            {/* Pillar 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-pink-500 mb-4">
                <BarChart3 className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Intelligence & Support</h3>
              <p className="text-gray-600">
                Our team provides:
                <ul className="list-disc pl-4 mt-2 text-left">
                  <li>Market analysis and insights</li>
                  <li>Investment strategy guidance</li>
                  <li>Dedicated account management</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Digital Lending Section */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-medium text-gray-700 mb-6">Modern Digital Lending Experience</h2>
              <p className="text-gray-700 mb-4">
                Our digital-first approach transforms the lending process, offering:
                <ul className="list-disc pl-6 mt-2">
                  <li>Online applications completed in minutes</li>
                  <li>Instant pre-qualification decisions</li>
                  <li>Secure e-signature capabilities</li>
                  <li>Real-time funding status updates</li>
                </ul>
              </p>
              <p className="text-gray-700 mb-4">
                We combine technology with expert support to offer flexible bridge and rental funding options. Our solutions are tailored to match your investment strategy and goals.
              </p>
              <p className="text-gray-700 mb-6">
                With a wide range of bridge and rental funding options, our team creates personalized solutions for your investment strategy. You get reliable, robust capital designed for today&apos;s market and future growth.
              </p>
              
              <Link
                href="/get-pre-qualified"
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                See Your Personalized Rate Now!
              </Link>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="border rounded-lg p-4">
                  <Image 
                    src="/m1.jpeg" 
                    alt="Rate calculator"
                    width={500}
                    height={400}
                    className="rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Showcase */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
              <Image 
                src="/d2.jpg" 
                alt="Customer success story" 
                width={800}
                height={450}
                layout="responsive"
                className="object-cover"
              />
            </div>
            <h2 className="text-3xl font-medium text-gray-700 mb-6 text-center">Scaling Success Stories</h2>
            
            <p className="text-gray-700 mb-4">
              From first-time investors to seasoned professionals, we support entrepreneurs at every stage. Join our community of successful investors who are transforming real estate markets.
            </p>
            
            <p className="text-gray-700 mb-6">
              WCI Capital Funding proudly showcases our clients and their work in revitalizing homes across the country. Our success stories demonstrate the impact of strategic real estate investment.
            </p>
            
            <div className="text-center">
              <Link
                href="/customer-stories"
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Learn more about our customer success stories
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Impact Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-medium text-gray-700 mb-6">Revitalizing America&apos;s Housing</h2>
              
              <p className="text-gray-700 mb-4">
                With nearly 80% of U.S housing stock built before 2000, investors are essential in revitalizing aging homes for modern living. Our financing solutions empower these transformations, creating move-in-ready spaces buyers and renters can cherish.
              </p>
              
              <p className="text-gray-700 mb-4">
                Together, we&apos;re reimagining America&apos;s housing landscape, blending the charm of the past with the needs of the future. Let&apos;s shape better living spaces for the generations to come.
              </p>
            </div>
            
            <div className="md:w-1/2 flex justify-center items-center">
              <Image 
                src="/d.jpg" 
                alt="Home renovation" 
                width={400}
                height={300}
                className="rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-pink-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-medium text-gray-700 mb-6">Ready to get on your next project? </h2>
          
          <Link
            href="/get-pre-qualified"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            Get Pre-Qualified
          </Link>
        </div>
      </div>

      {/* Customer Feedback Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-medium text-gray-700 mb-12 text-center">What Our Clients Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feedback Card 1 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <Quote className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-800">First-Time Investor Success</h3>
              </div>
              <p className="text-gray-600 italic">
                "As a first-time investor, I couldn't have asked for a better partner than WCI Capital Funding. They guided me every step of the way and found the ideal loan for my fix-and-flip project."
              </p>
            </div>

            {/* Feedback Card 2 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <Quote className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-800">Construction Project Made Easy</h3>
              </div>
              <p className="text-gray-600 italic">
                "WCI Capital Funding exceeded my expectations! Their professionalism and connections turned my new construction dreams into reality - seamlessly and quickly."
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Resources Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-medium text-gray-700 mb-6">
          GET EMPOWERED WITH INDUSTRY INSIGHTS AND MORE
          </h2>
          <Link
            href="/resources"
            className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-md transition-colors mt-4"
          >
            Read WCI Capital funding blog
          </Link>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-medium text-gray-700 mb-8 text-center">Let&apos;s Connect</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
              
              <div>
                <p className="block text-sm font-medium text-gray-700 mb-2">
                Are you an Investor?
                </p>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="brokerYes"
                      name="isBroker"
                      value="yes"
                      className="h-4 w-4 text-pink-500 focus:ring-pink-400"
                    />
                    <label htmlFor="brokerYes" className="ml-2 text-gray-700">
                      Yes
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="brokerNo"
                      name="isBroker"
                      value="no"
                      className="h-4 w-4 text-pink-500 focus:ring-pink-400"
                    />
                    <label htmlFor="brokerNo" className="ml-2 text-gray-700">
                      No
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="text-xs text-gray-500">
                All fields required. By submitting this contact form, I agree to receive information about WCI Capital Funding&apos;s 
                products by email and phone. I understand I can opt-out any time.
              </div>
              
              <div className="text-center">
                <Link href="/get-pre-qualified">
                  <button
                    type="submit"
                    className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
                  >
                    Contact me
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
} 