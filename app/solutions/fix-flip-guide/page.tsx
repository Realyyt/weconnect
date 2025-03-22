import Link from "next/link"

export default function FixFlipGuidePage() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">5-Point Fix & Flip Guide</h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 mb-8">
              Find the right property with our proven 5-point guide to maximize your real estate investment success.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-pink-600 font-medium">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Location Analysis</h3>
                  <p className="text-gray-600">Focus on neighborhoods with strong growth potential and demand.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-pink-600 font-medium">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Property Condition</h3>
                  <p className="text-gray-600">Look for properties needing cosmetic rather than structural repairs.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-pink-600 font-medium">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">ARV Potential</h3>
                  <p className="text-gray-600">Ensure the after-repair value justifies the investment.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-pink-600 font-medium">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Market Timing</h3>
                  <p className="text-gray-600">Align your purchase with favorable market conditions.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-pink-600 font-medium">5</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Exit Strategy</h3>
                  <p className="text-gray-600">Plan your resale or rental strategy before purchasing.</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/get-pre-qualified"
                className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors"
              >
                Get Pre-qualified
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 