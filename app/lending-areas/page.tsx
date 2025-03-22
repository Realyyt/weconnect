"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DollarSign, Cloud, Headphones } from "lucide-react";

export default function LendingAreas() {
  return (
    <main className="w-full">
      {/* Header */}
      <div className="w-full bg-pink-300 py-6 pt-20">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-medium text-gray-800 pt-6">Lending Areas</h1>
        </div>
      </div>

      {/* Hero Image Section with Cutouts */}
      <div className="w-full bg-pink-200">
        <div className="relative">
          <div className="w-full h-[400px] relative overflow-hidden">
            <Image 
              src="/s2.jpg" 
              alt="Aerial view of residential neighborhood" 
              fill
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              className="object-cover"
              priority
            />
            
            {/* Triangular cutouts to create the K shape */}
            <div className="absolute left-0 top-0 w-1/4 h-full bg-pink-200" 
                style={{ clipPath: 'polygon(0 0, 0% 100%, 100% 100%)' }}></div>
            
            <div className="absolute left-1/4 top-0 w-1/4 h-full bg-pink-200" 
                style={{ clipPath: 'polygon(0 0, 100% 0, 0% 100%)' }}></div>
            
            <div className="absolute right-0 top-0 w-1/4 h-full bg-pink-200" 
                style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-medium text-gray-800 mb-6">Our Lending Coverage</h2>
        
        <p className="text-lg text-gray-700 mb-10 max-w-4xl">
          We provide financing solutions across 47 states and Washington D.C. Our nationwide coverage helps investors revitalize America&apos;s housing stock with flexible lending options.
        </p>
        
        <Link
          href="/get-pre-qualified"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
        >
          Get Started
        </Link>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Benefit 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-pink-500 mb-6">
              <DollarSign className="w-16 h-16 stroke-1" />
            </div>
            <h3 className="text-2xl font-medium text-gray-800 mb-4">Competitive rates</h3>
            <p className="text-gray-700">
              Access low rates and flexible terms to maximize your investment returns. Our competitive pricing helps you achieve better profitability on your real estate investments.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-pink-500 mb-6">
              <Cloud className="w-16 h-16 stroke-1" />
            </div>
            <h3 className="text-2xl font-medium text-gray-800 mb-4">Fast and simple processes</h3>
            <p className="text-gray-700">
              Our streamlined platform eliminates paperwork and speeds up closing. We leverage technology to provide a seamless experience from application to funding.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-pink-500 mb-6">
              <Headphones className="w-16 h-16 stroke-1" />
            </div>
            <h3 className="text-2xl font-medium text-gray-800 mb-4">Dedicated support</h3>
            <p className="text-gray-700">
              Get expert guidance and flexible programs to help you grow your portfolio. Our dedicated team provides personalized support throughout your investment journey.
            </p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="w-full">
          <Image 
            src="/sl.png" 
            alt="Map of states where WeConnectInvestments lends" 
            width={1000} 
            height={600}
            className="mx-auto"
          />
          
          <div className="flex flex-col md:flex-row mt-6 gap-4 justify-center">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-yellow-500 mr-2"></div>
              <span className="text-sm text-gray-600">States where we lend to entities only (includes D.C.)</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-700 mr-2"></div>
              <span className="text-sm text-gray-600">States where we currently do not lend</span>
            </div>
          </div>
        </div>
      </div>

      {/* States List Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-700 max-w-4xl mx-auto mb-10">
            We lend to business entities in 47 states plus Washington D.C. Our comprehensive coverage map shows detailed lending availability across the United States.
          </p>
          
          <Link
            href="/get-pre-qualified"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            See My Rate
          </Link>
        </div>
      </div>

      {/* Legal Notes */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-xs text-gray-500 max-w-5xl mx-auto">
          <p className="mb-4">
            *Rates vary by loan terms, borrower qualifications, LTV, and property factors. Non-owner-occupied properties only, available in 47 states + D.C.
          </p>
          
          <p className="mb-4">
            *Contact us to learn how a Rental Portfolio Loan can benefit your investment strategy. Our portfolio loans offer unique advantages for multi-property investors.
          </p>
          
          <p>
            Available in 47 states + D.C. Prepayment penalties apply where allowed by state law.
          </p>
        </div>
      </div>
    </main>
  );
} 