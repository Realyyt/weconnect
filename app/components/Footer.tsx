import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Loan Types</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/bridge-loans" className="text-gray-400 hover:text-pink-300">
                  Bridge Loans
                </Link>
              </li>
              <li>
                <Link href="/fix-flip" className="text-gray-400 hover:text-pink-300">
                  Fix & Flip
                </Link>
              </li>
              <li>
                <Link href="/new-construction-infill" className="text-gray-400 hover:text-pink-300">
                  New Construction
                </Link>
              </li>
              <li>
                <Link href="/dscr-rental" className="text-gray-400 hover:text-pink-300">
                  DSCR Rental
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/why-us" className="text-gray-400 hover:text-pink-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="text-gray-400 hover:text-pink-300">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-pink-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-pink-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-pink-300">
                  Resource Center
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-pink-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-pink-300">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-pink-300">
                  News
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-sm text-gray-400">
              <p className="mb-2">2 Allegheny Center, Nova Tower 2, Suite 200</p>
              <p className="mb-2">Pittsburgh, PA 15212</p>
              <p>1 (844) 415-4663</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-gray-400">
          <p>© We Connect Investments to Capital Funding, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 