import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-6 lg:px-8 2xl:px-16 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 mb-10">
          {/* Column 1: Telecom Infrastructure */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Telecom</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/telecom-infrastructure" className="hover:text-red-500 transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/telecom-infrastructure/fiber-rollout" className="hover:text-red-500 transition-colors">
                  Fiber Rollout
                </Link>
              </li>
              <li>
                <Link href="/telecom-infrastructure/civil-works" className="hover:text-red-500 transition-colors">
                  Civil Works
                </Link>
              </li>
              <li>
                <Link href="/telecom-infrastructure/site-integration" className="hover:text-red-500 transition-colors">
                  Site Integration
                </Link>
              </li>
              <li>
                <Link
                  href="/telecom-infrastructure/operation-maintenance"
                  className="hover:text-red-500 transition-colors"
                >
                  O&M Services
                </Link>
              </li>
              <li>
                <Link href="/telecom-infrastructure/noc-monitoring" className="hover:text-red-500 transition-colors">
                  NOC Monitoring
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Energy & Power */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Energy & Power</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/energy-power" className="hover:text-red-500 transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/energy-power/diesel-generators" className="hover:text-red-500 transition-colors">
                  Diesel Generators
                </Link>
              </li>
              <li>
                <Link href="/energy-power/bess" className="hover:text-red-500 transition-colors">
                  Battery Storage (BESS)
                </Link>
              </li>
              <li>
                <Link href="/energy-power/hybrid-power-systems" className="hover:text-red-500 transition-colors">
                  Hybrid Power
                </Link>
              </li>
              <li>
                <Link href="/energy-power/epc-project-solutions" className="hover:text-red-500 transition-colors">
                  EPC Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/energy-power/energy-operations-maintenance"
                  className="hover:text-red-500 transition-colors"
                >
                  Energy O&M
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Software & Cloud */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Software & Cloud</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/software-cloud-ai" className="hover:text-red-500 transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/software-cloud-ai/cloud-migration" className="hover:text-red-500 transition-colors">
                  Cloud Migration
                </Link>
              </li>
              <li>
                <Link href="/software-cloud-ai/enterprise-it-services" className="hover:text-red-500 transition-colors">
                  Enterprise IT
                </Link>
              </li>
              <li>
                <Link href="/software-cloud-ai/ai-agents" className="hover:text-red-500 transition-colors">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link href="/software-cloud-ai/big-data-analytics" className="hover:text-red-500 transition-colors">
                  Big Data Analytics
                </Link>
              </li>
              <li>
                <Link href="/software-cloud-ai/ict-infrastructure" className="hover:text-red-500 transition-colors">
                  ICT Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Products */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="hover:text-red-500 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products/generators" className="hover:text-red-500 transition-colors">
                  Generators
                </Link>
              </li>
              <li>
                <Link href="/products/solar" className="hover:text-red-500 transition-colors">
                  Solar Systems
                </Link>
              </li>
              <li>
                <Link href="/products/specifications" className="hover:text-red-500 transition-colors">
                  Specifications
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Resources & Media */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources/blog" className="hover:text-red-500 transition-colors">
                  Blog & Articles
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-red-500 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources/faq" className="hover:text-red-500 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/media/project-gallery" className="hover:text-red-500 transition-colors">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link href="/media/videos-demos" className="hover:text-red-500 transition-colors">
                  Videos & Demos
                </Link>
              </li>
              <li>
                <Link href="/media/events" className="hover:text-red-500 transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 6: Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about/vision-mission" className="hover:text-red-500 transition-colors">
                  Our Story & Mission
                </Link>
              </li>
              <li>
                <Link href="/about/leadership" className="hover:text-red-500 transition-colors">
                  Leadership Team
                </Link>
              </li>
              <li>
                <Link href="/about/company" className="hover:text-red-500 transition-colors">
                  Company Profile
                </Link>
              </li>
              <li>
                <Link href="/about/certifications" className="hover:text-red-500 transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/about/sustainability" className="hover:text-red-500 transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-red-500 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact & Social Row */}
        <div className="border-t border-gray-800 pt-8 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center space-x-3">
              <Image src="/hnl-logo.png" alt="HNL" width={44} height={44} className="h-11 w-11 object-contain" />
              <div>
                <span className="text-xl font-bold text-white">HNL</span>
                <p className="text-xs text-gray-500">Energy Anytime Anywhere</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 justify-center text-sm">
              <a href="tel:+924235761999" className="flex items-center gap-2 hover:text-red-500 transition-colors">
                <Phone className="h-4 w-4 text-red-500" />
                +92 42 3576 1999
              </a>
              <a href="mailto:info@hnl.com.pk" className="flex items-center gap-2 hover:text-red-500 transition-colors">
                <Mail className="h-4 w-4 text-red-500" />
                info@hnl.com.pk
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-red-500" />
                Lahore, Karachi, Islamabad
              </span>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-end">
              <a
                href="#"
                className="h-9 w-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-9 w-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-9 w-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 pb-20 md:pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            {/* Legal Links - Left side */}
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start order-2 md:order-1">
              <Link href="/privacy" className="hover:text-red-500 transition-colors">
                Privacy
              </Link>
              <span className="text-gray-700">•</span>
              <Link href="/terms" className="hover:text-red-500 transition-colors">
                Terms
              </Link>
              <span className="text-gray-700">•</span>
              <Link href="/compliance" className="hover:text-red-500 transition-colors">
                Compliance
              </Link>
              <span className="text-gray-700">•</span>
              <Link href="/security" className="hover:text-red-500 transition-colors">
                Security
              </Link>
            </div>

            {/* Copyright - Center */}
            <p className="order-1 md:order-2">
              &copy; {new Date().getFullYear()} HNL Technologies (Pvt) Ltd. All rights reserved.
            </p>

            {/* Partner Credit - Right side */}
            <p className="order-3">
              Digital Growth Partner:{" "}
              <a
                href="https://alamsinnovate.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                Alams Innovate
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
