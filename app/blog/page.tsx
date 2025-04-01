"use client"

import React from 'react';
import Image from 'next/image';

export default function BlogPage() {
  return (
    <main className="w-full">
      {/* Header */}
      <div className="w-full bg-pink-300 pt-20 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-medium text-gray-800">WCI Capital Funding Blog</h1>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="w-full bg-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
            <Image
              src="/house3.jpg"
              alt="Real estate investment tips"
              width={800}
              height={450}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-medium text-gray-800 mb-4">Mastering Real Estate Investment Strategies</h2>
              <p className="text-gray-600 mb-4">
                Real estate investment remains one of the most reliable paths to building long-term wealth. At WCI Capital Funding, we understand that success in this field requires more than just capital - it demands strategic planning, market knowledge, and the right financial partners. Our experience has shown that investors who take the time to understand market trends and develop clear investment goals are more likely to achieve sustainable success.
              </p>
              <p className="text-gray-600 mb-4">
                One of the key aspects of successful real estate investing is understanding your financing options. From fix-and-flip projects to new construction developments, each investment type requires a tailored financial approach. We specialize in providing customized financing solutions that align with your specific investment strategy, whether you&apos;re a first-time investor or a seasoned professional looking to expand your portfolio.
              </p>
              <p className="text-gray-600">
                At WCI Capital Funding, we&apos;re committed to being more than just a lender - we&apos;re your strategic partner in real estate investment. Our team of experts is dedicated to helping you navigate the complexities of real estate financing, providing insights and resources to help you make informed decisions. With our support, you can focus on what matters most: growing your investment portfolio and achieving your financial goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


