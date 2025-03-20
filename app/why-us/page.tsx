"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TrendingUp, Building2, BarChart3 } from "lucide-react";

export default function WhyUs() {
  return (
    <main className="w-full">
      {/* Header */}
      <div className="w-full bg-pink-300 pt-20 py-6">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-700 mb-6 mt-4">
            Scale Your Real Estate Business
          </h2>
          <p className="text-gray-700 mb-8">
            Fast, reliable financing powered by technology to help you grow your investment portfolio. Our innovative solutions streamline the entire investment process.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full bg-pink-200 pb-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-700 mb-6 mt-4">
              Access the capital you need to confidently scale
            </h2>
            <p className="text-gray-700 mb-8">
              WeConnectInvestments harnesses the power of data & technology to offer residential real estate investors a simpler, more reliable way to access capital. Our platform streamlines the entire lending process, helping you scale your business efficiently.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-pink-500 mb-4">
                <TrendingUp className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Advanced technology</h3>
              <p className="text-gray-600">
                Our modern platform removes barriers and speeds up funding. We leverage cutting-edge technology to provide a seamless lending experience.
              </p>
            </div>
            
            {/* Pillar 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-pink-500 mb-4">
                <Building2 className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Trusted industry leader</h3>
              <p className="text-gray-600">
                We're a proven partner with 10,000+ successful projects nationwide. Our track record demonstrates our commitment to investor success.
              </p>
            </div>
            
            {/* Pillar 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-pink-500 mb-4">
                <BarChart3 className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Intelligence & support</h3>
              <p className="text-gray-600">
                Our data-driven insights help maximize your investment returns. We provide comprehensive support to guide your investment decisions.
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
              <h2 className="text-3xl font-medium text-gray-700 mb-6">Modern Digital Lending</h2>
              <p className="text-gray-700 mb-4">
                Skip complex applications and long approval times with our automated platform. Get real-time updates and streamlined processes for faster funding.
              </p>
              <p className="text-gray-700 mb-4">
                We combine technology with expert support to offer flexible bridge and rental funding options. Our solutions are tailored to match your investment strategy and goals.
              </p>
              <p className="text-gray-700 mb-6">
                With a wide range of bridge and rental funding options, our team creates personalized solutions for your investment strategy. You get reliable, robust capital designed for today's market and future growth.
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
                <h3 className="text-xl font-medium text-gray-800 mb-4">Estimate Your Rental Rate</h3>
                <div className="border rounded-lg p-4">
                  <Image 
                    src="/4.jpg" 
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

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-12 md:gap-16">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4 text-pink-500">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.31 7L9 9.25V14.75L12.31 17L15.75 14.75V9.25L12.31 7ZM12.31 15L10 13.25V10.75L12.31 9L14.75 10.75V13.25L12.31 15Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-2">$5+ billion</h3>
              <p className="text-gray-600">in funded loans</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-4 text-pink-500">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 11V3H7V7H3V21H11V17H13V21H21V11H17ZM7 19H5V17H7V19ZM7 15H5V13H7V15ZM7 11H5V9H7V11ZM11 15H9V13H11V15ZM11 11H9V9H11V11ZM11 7H9V5H11V7ZM15 15H13V13H15V15ZM15 11H13V9H15V11ZM15 7H13V5H15V7ZM19 19H17V17H19V19ZM19 15H17V13H19V15Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-2">10,000+</h3>
              <p className="text-gray-600">projects completed</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-4 text-pink-500">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-2">47 states +</h3>
              <p className="text-gray-600">nationwide coverage</p>
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
              WeConnectInvestments proudly showcases our clients and their work in revitalizing homes across the country. Our success stories demonstrate the impact of strategic real estate investment.
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
              <h2 className="text-3xl font-medium text-gray-700 mb-6">Revitalizing America's Housing</h2>
              
              <p className="text-gray-700 mb-4">
                With 65% of U.S. housing stock over 30 years old, real estate investors play a crucial role in modernizing homes. Our financing solutions support investors in providing move-in-ready homes for today's buyers.
              </p>
              
              <p className="text-gray-700 mb-4">
                We're committed to supporting investors who provide quality rental housing across America. Our lending programs help transform aging properties into modern, comfortable homes.
              </p>
              
              <p className="text-gray-700 mb-4">
                We're just getting started in transforming America's housing landscape. Join us in creating better living spaces for future generations.
              </p>
              
              <p className="text-gray-700 mt-6">
                Want to read more on the state of the aged U.S. housing stock and the opportunity it provides?
                <Link href="/housing-stock-report" className="text-pink-500 ml-2 hover:underline">
                  Click here.
                </Link>
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
          <h2 className="text-3xl font-medium text-gray-700 mb-6">Ready to fix some houses?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Check out our fast and easy bridge loan options that allow you to compete with cash buyers!
          </p>
          <Link
            href="/bridge-loans"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            Learn More About Our Bridge Loans
          </Link>
        </div>
      </div>

      {/* Resources Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-medium text-gray-700 mb-6">
            Get empowered with industry insights, how-tos, investor tips and more...
          </h2>
          <Link
            href="/resources"
            className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-md transition-colors mt-4"
          >
            View All Resources
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
                  Are you a Broker?
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
                All fields required. By submitting this contact form, I agree to receive information about WeConnectInvestments&apos;s 
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