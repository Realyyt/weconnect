"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {  Quote} from "lucide-react";
import Button from '../components/ui/button';

export default function WhyUs() {
  return (
    <main className="w-full">
      {/* Header */}
      <div className="w-full bg-pink-300 pt-20 py-6">
        <div className="container mx-auto px-4">
          
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
            WCI Capital Funding is a premier commercial real estate loan brokerage firm, specializing in tailored financing solutions for acquisitions, rental properties, fix-and-flip projects, and new construction. Leveraging an extensive and diverse network of trusted partners, we provide competitive and strategic options for both seasoned investors and newcomers. Committed to excellence, we empower clients to navigate the complexities of real estate financing efficiently and achieve their investment goals with confidence.
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
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 text-lg">
              WCI Capital Funding stands out as a top choice for private money brokerage due to its commitment to providing fast, reliable, and tailored financing solutions. With in-house servicing and proprietary online platforms owned by its partners, WCI ensures a seamless and efficient process from start to finish. Their expertise in private money lending, combined with a focus on personalized service, makes them a trusted partner for real estate investors looking to close deals quickly and effectively.
            </p>
          </div>
        </div>
      </div>

      {/* Digital Lending Section 
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
      </div>*/}

      {/* Customer Showcase 
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
      </div>*/}

      {/* Industry Impact Section */}
      <div className="py-16 bg-pink-50">
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


      <section className="py-12 md:py-20 ">
      <div className="container mx-auto px-4">
       
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative">
            <Image
              src="/house4.jpg"
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
                &ldquo;As a first time investor, I couldn&apos;t have asked for a better partner than WCI Capital Funding. They guided me every step of the way and found the ideal loan for my fix and flip project.&rdquo;
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
                &ldquo;WCI Capital Funding exceeded my expectations. Their professionalism and connections turned my new construction dreams into reality seamlessly and quickly.&rdquo;
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
            href="/blog"
            className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-md transition-colors mt-4"
          >
            Read Our Blog
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