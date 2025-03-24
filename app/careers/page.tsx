import Link from "next/link"

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Careers</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-6xl mb-6">��</div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Our Team</h2>
          <p className="text-gray-600 mb-8">
            Explore exciting career opportunities with us and contribute to shaping the future of real estate investments.
          </p>
          <Link 
            href="/"
            className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  )
} 