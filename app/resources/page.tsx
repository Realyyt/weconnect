'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Resource {
  type: 'video' | 'book';
  title: string;
  source: string;
  link: string;
  description?: string;
}

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch('/api/resources');
        if (!response.ok) throw new Error('Failed to fetch resources');
        const { data } = await response.json(); // Destructure the response
        setResources(data);
      } catch (error) {
        setError('Failed to load resources. Please try again later.');
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Educational Resources</h1>
        
        {error ? (
          <div className="text-center py-8 text-red-500">
            {error}
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
            >
              Retry
            </button>
          </div>
        ) : loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
          </div>
        ) : resources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {resource.type === 'video' ? (
                    <div className="bg-red-100 p-3 rounded-full">
                      <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                      </svg>
                    </div>
                  ) : (
                    <div className="bg-blue-100 p-3 rounded-full">
                      <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
                      </svg>
                    </div>
                  )}
                  <span className="ml-3 font-medium text-gray-500">{resource.type.toUpperCase()}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                  {resource.title}
                </h2>
                <p className="text-gray-500 mb-3">Source: {resource.source}</p>
                {resource.description && (
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {resource.description}
                  </p>
                )}
                <Link 
                  href={resource.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-pink-600 hover:text-pink-800 font-medium"
                >
                  Open {resource.type}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-600 mb-4">No resources available at the moment.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
            >
              Refresh
            </button>
          </div>
        )}
      </div>
    </div>
  );
}