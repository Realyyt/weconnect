import Link from "next/link"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-pink-300">
                  Careers
                </Link>
              </li>
              
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {/*<li>
                <Link href="/resources" className="text-gray-400 hover:text-pink-300">
                  Resource Center
                </Link>
              </li>*/}
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
             {/*} <li>
                <Link href="/news" className="text-gray-400 hover:text-pink-300">
                  News
                </Link>
              </li>*/}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Mailing Address</h4>
            <div className="text-sm text-gray-400">
              <p>1457 Kelly Rd, #245</p>
              <p>Apex, NC 27502 USA</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <div className="text-sm text-gray-400">
              <p>Wecanhelp@WCIcapitalfunding.com</p>
              <p>+1910-418-0181</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="https://facebook.com/weconnectinvest" className="text-gray-400 hover:text-pink-300">
                <FaFacebook size={24} />
              </Link>
              <Link href="https://twitter.com/weconnectinvest" className="text-gray-400 hover:text-pink-300">
                <FaTwitter size={24} />
              </Link>
              <Link href="https://instagram.com/weconnectinvest" className="text-gray-400 hover:text-pink-300">
                <FaInstagram size={24} />
              </Link>
              <Link href="https://linkedin.com/company/weconnectinvest" className="text-gray-400 hover:text-pink-300">
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-gray-400">
          <p>© WCI Capital Funding, powered by WeConnect Investments, LLC.</p>
        </div>
      </div>
    </footer>
  )
} 