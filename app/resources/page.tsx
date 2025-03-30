'use client'

import React from 'react';
import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Exciting Updates Ahead</h2>
            <p className="text-gray-600 mb-8 text-xl">We&apos;re curating a comprehensive library of valuable resources to empower your investment journey</p>
            <Link
              href="/"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}