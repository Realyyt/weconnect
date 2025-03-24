"use client"
import Link from "next/link"
import { Building, Briefcase } from "lucide-react"

interface LogoProps {
  onClick?: () => void
}

export default function LogoWithIcon({ onClick }: LogoProps) {
  return (
    <div className="flex flex-col items-center">
      <Link href="/" className="inline-block" onClick={onClick}>
        <div className="flex items-center">
          <div className="relative h-10 w-10 flex items-center justify-center bg-gradient-to-br from-pink-500 to-pink-700 rounded-lg mr-2 shadow-md">
            <Building className="h-6 w-6 text-white" />
            <Briefcase className="h-4 w-4 text-white absolute bottom-1 right-1" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline">
              <span className="text-xl font-extrabold text-pink-600 leading-tight tracking-tight">WCI</span>
              <span className="text-xl font-bold text-gray-800 leading-tight tracking-tight ml-1">Capital</span>
              <span className="text-xl font-bold text-gray-800 leading-tight tracking-tight ml-1">
                <span className="text-pink-600">Fun</span>ding
              </span>
            </div>
            <span className="text-sm font-semibold text-gray-700 leading-tight">We connect investors to capital</span>
          </div>
        </div>
      </Link>
    </div>
  )
}
