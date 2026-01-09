"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { MegaMenu } from "@/components/mega-menu"
import { MobileMenu } from "@/components/mobile-menu"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70 shadow-sm">
      <div className="max-w-[1920px] mx-auto flex h-20 items-center justify-between px-4 md:px-6 lg:px-8 2xl:px-16">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/hnl-logo.png"
            alt="HNL - Energy Anytime Anywhere"
            width={48}
            height={48}
            className="h-12 w-12 object-contain group-hover:scale-105 transition-transform duration-300"
            priority
          />
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-[#E31B23]">HNL</span>
            <span className="text-[10px] text-gray-500 font-medium tracking-wide hidden sm:block">
              Energy Anytime Anywhere
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <MegaMenu />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  )
}
