"use client"
import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  onClick?: () => void
}

export default function LogoWithIcon({ onClick }: LogoProps) {
  return (
    <div className="flex flex-col items-center">
      <Link href="/" className="inline-block" onClick={onClick}>
        <div className="flex items-center">
          <div className="relative h-10 w-10 flex items-center justify-center rounded-lg mr-2 shadow-md overflow-hidden">
            <Image
              src="/het.jpeg"
              alt="WCI Capital Funding Logo"
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline">
              <span className="text-xl font-extrabold text-black leading-tight tracking-tight">WCI</span>
              <span className="text-xl font-bold text-black leading-tight tracking-tight ml-1">Capital</span>
              <span className="text-xl font-bold text-black leading-tight tracking-tight ml-1">Funding</span>
              
            </div>
            <span className="text-[10px] sm:text-[11px] font-semibold text-red-600 leading-tight">We Connect Investors to Capital</span>
          </div>
        </div>
      </Link>
    </div>
  )
}
