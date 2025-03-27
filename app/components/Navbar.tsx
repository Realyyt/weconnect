"use client"

import Link from "next/link"
import Button from "@/app/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import LogoWithIcon from "./logo"
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isWhyKiaviOpen, setIsWhyKiaviOpen] = useState(false)
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false)
  const [isMobileWhyOpen, setIsMobileWhyOpen] = useState(false)

  const productCategories = {
    "Rental": [
      {
        title: "DSCR Rental",
        description: "Streamline cash flow with debt service coverage ratio loans",
        href: "/dscr-rental"
      },
      {
        title: "Rental Portfolio",
        description: "Expand your real estate holdings with portfolio financing",
        href: "/rental"
      }
    ],
    "Fix-and-Flip": [
      {
        title: "Bridge",
        description: "Short-term financing for immediate property acquisition",
        href: "/bridge-loans"
      },
      {
        title: "Fix-and-Flip",
        description: "Accelerate property renovations and resale profits",
        href: "/fix-flip"
      }
    ],
    "New Construction": [
      {
        title: "New Construction / Infill",
        description: "Fund ground-up development in high-demand areas",
        href: "/new-construction-infill"
      }
    ]
  }

  const whyKiaviLinks = {
    "About WCI Capital Funding": {
      description: "Discover why investors choose WCI Capital Funding",
      href: "/why-us"
    },
    "News": {
      description: "Latest updates from  WCI Capital",
      href: "/news"
    },
    "States We Lend In": {
      description: "See our nationwide lending coverage",
      href: "/lending-areas"
    },
    "FAQ": {
      description: "Find clear answers to common questions",
      href: "/faq"
    }
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
    setIsProductsOpen(false)
    setIsWhyKiaviOpen(false)
    setIsMobileProductsOpen(false)
    setIsMobileWhyOpen(false)
  }

  return (
    <nav className="fixed w-full bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="">
              <LogoWithIcon />
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center ml-10 space-x-8">
              <div className="relative group">
                <button 
                  className="text-gray-700 hover:text-pink-600 flex items-center"
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                >
                  Products
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Desktop Products Mega Menu */}
                {isProductsOpen && (
                  <div 
                    className="absolute left-0 mt-2 w-[900px] bg-white shadow-lg rounded-lg"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <div className="p-8">
                      <div className="grid grid-cols-3 gap-12 divide-x divide-gray-100">
                        {Object.entries(productCategories).map(([category, items], index) => (
                          <div key={`category-section-${index}`} className={`${index > 0 ? 'pl-12' : ''}`}>
                            <h3 className="text-lg font-semibold text-gray-900 mb-6">{category}</h3>
                            <div className="space-y-6">
                              {items.map((item) => (
                                <Link 
                                  key={item.title}
                                  href={item.href}
                                  className="block group"
                                  onClick={handleLinkClick}
                                >
                                  <h4 className="text-base font-medium text-gray-900 group-hover:text-pink-600">
                                    {item.title}
                                  </h4>
                                  <p className="text-sm text-gray-600 mt-1">
                                    {item.description}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative group">
                <button 
                  className="text-gray-700 hover:text-pink-600 flex items-center"
                  onClick={() => setIsWhyKiaviOpen(!isWhyKiaviOpen)}
                >
                  About US
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Why Kiavi Dropdown */}
                {isWhyKiaviOpen && (
                  <div 
                    className="absolute left-0 mt-2 w-[900px] bg-white shadow-lg rounded-lg"
                    onMouseEnter={() => setIsWhyKiaviOpen(true)}
                    onMouseLeave={() => setIsWhyKiaviOpen(false)}
                  >
                    <div className="p-8">
                      <h2 className="text-lg font-semibold text-gray-900 mb-6">Why WCI Capital Funding</h2>
                      <div className="flex flex-row">
                        {Object.entries(whyKiaviLinks).map(([title, { description, href }], index) => (
                          <div key={`why-kiavi-section-${title.replace(/\s+/g, '-')}`} className={`${index > 0 ? 'pl-12' : ''}`}>
                            <Link 
                              href={href}
                              className="block group"
                              onClick={handleLinkClick}
                            >
                              <h3 className="text-base font-medium text-gray-900 group-hover:text-pink-600">
                                {title}
                              </h3>
                              <p className="text-sm text-gray-600 mt-1">
                                {description}
                              </p>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/*<Link href="/lending-criteria/fix-flip-guide" className="text-gray-700 hover:text-pink-600" onClick={handleLinkClick}>Lending Criteria</Link>
              <Link href="/resources" className="text-gray-700 hover:text-pink-600" onClick={handleLinkClick}>Resources</Link>*/}
            </div>
          </div>
          
          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/get-pre-qualification">
              <Button className="bg-pink-600 hover:bg-pink-700 text-white" onClick={handleLinkClick}>Get Pre-qualified</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-20 bg-white border-t border-gray-100 shadow-lg overflow-y-auto max-h-[calc(100vh-5rem)]">
            <div className="p-6">
              {/* Mobile Products Dropdown */}
              <div className="mb-4">
                <button
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                  className="w-full flex items-center justify-between p-4 text-left text-lg font-semibold text-gray-900 hover:bg-gray-50 rounded-lg"
                >
                  <span>Products</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isMobileProductsOpen ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Products Dropdown Content */}
                {isMobileProductsOpen && (
                  <div className="mt-2 space-y-4 pl-4">
                    {Object.entries(productCategories).map(([category, items], index) => (
                      <div key={`mobile-category-${index}`} className="border-b border-gray-100 pb-4 last:border-0">
                        <h3 className="text-base font-medium text-gray-900 mb-2">{category}</h3>
                        <div className="space-y-3">
                          {items.map((item) => (
                            <Link 
                              key={`mobile-product-${item.title}`}
                              href={item.href}
                              className="block p-2 text-gray-600 hover:text-pink-600 text-sm"
                              onClick={handleLinkClick}
                            >
                              <div className="font-medium">{item.title}</div>
                              <div className="text-xs text-gray-500">{item.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Why We Connect Investments Dropdown */}
              <div className="mb-4">
                <button
                  onClick={() => setIsMobileWhyOpen(!isMobileWhyOpen)}
                  className="w-full flex items-center justify-between p-4 text-left text-lg font-semibold text-gray-900 hover:bg-gray-50 rounded-lg"
                >
                  <span>Why we connect investments</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isMobileWhyOpen ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Why We Connect Investments Dropdown Content */}
                {isMobileWhyOpen && (
                  <div className="mt-2 space-y-3 pl-4">
                    {Object.entries(whyKiaviLinks).map(([title, { description, href }]) => (
                      <Link 
                        key={`mobile-why-${title.replace(/\s+/g, '-')}`}
                        href={href}
                        className="block p-2 text-gray-600 hover:text-pink-600"
                        onClick={handleLinkClick}
                      >
                        <div className="text-sm font-medium">{title}</div>
                        <div className="text-xs text-gray-500">{description}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Navigation Links */}
              <div className="space-y-2 pt-4 border-t border-gray-100">
                <Link 
                  href="/solutions" 
                  className="block p-4 text-gray-700 hover:text-pink-600 hover:bg-gray-50 rounded-lg"
                  onClick={handleLinkClick}
                >
                  Solutions
                </Link>
                <Link 
                  href="/programs" 
                  className="block p-4 text-gray-700 hover:text-pink-600 hover:bg-gray-50 rounded-lg"
                  onClick={handleLinkClick}
                >
                  Programs/Partners
                </Link>
                <Link 
                  href="/resources" 
                  className="block p-4 text-gray-700 hover:text-pink-600 hover:bg-gray-50 rounded-lg"
                  onClick={handleLinkClick}
                >
                  Resources
                </Link>
              </div>

              {/* Mobile CTA Button */}
              <div className="mt-6">
                <Link href="/get-pre-qualification">
                  <Button className="w-full justify-center bg-pink-600 hover:bg-pink-700 text-white py-4 text-lg" onClick={handleLinkClick}>
                    Get Pre-qualified
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 