import type { Metadata } from "next"
import Link from "next/link"
import { Scale, Mail, Clock, AlertTriangle, CheckCircle, XCircle, Building } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | HNL",
  description: "HNL Terms of Service - Legal terms and conditions governing the use of our website and services.",
}

export default function TermsPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16">
        <div className="container mx-auto px-4 max-w-[1920px]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 mb-6">
              <Scale className="h-4 w-4 text-red-500" />
              <span className="text-sm text-red-400">Legal Document</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-300 mb-6">
              These terms govern your use of HNL's website, products, and services.
            </p>
            <p className="text-sm text-gray-500">Last Updated: December 2024 | Effective: January 1, 2025</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Introduction */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              These Terms of Service ("Terms") constitute a legally binding agreement between you and HNL Technologies
              (Private) Limited ("HNL", "Company", "we", "us", or "our"), a company duly registered under the laws of
              the Islamic Republic of Pakistan.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              By accessing our website (seo.hnl.com.pk), using our products, engaging our services, or communicating
              with us through any channel, you acknowledge that you have read, understood, and agree to be bound by
              these Terms. If you do not agree, you must immediately cease use of our services.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800 font-medium">
                THESE TERMS INCLUDE LIMITATIONS OF LIABILITY, DISCLAIMERS OF WARRANTIES, AND AN ARBITRATION AGREEMENT.
                PLEASE READ CAREFULLY.
              </p>
            </div>
          </div>

          {/* Definitions */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Definitions</h2>
            <ul className="space-y-3 text-gray-600">
              <li>
                <strong>"Services"</strong> means all products, services, solutions, and offerings provided by HNL
                including but not limited to telecom infrastructure, energy solutions, software services, and managed
                services.
              </li>
              <li>
                <strong>"Website"</strong> means seo.hnl.com.pk and all associated subdomains and pages.
              </li>
              <li>
                <strong>"User"</strong> means any individual or entity accessing our Website or using our Services.
              </li>
              <li>
                <strong>"Content"</strong> means all information, text, graphics, images, videos, software, and other
                materials on our Website.
              </li>
              <li>
                <strong>"Confidential Information"</strong> means any non-public information disclosed by either party.
              </li>
            </ul>
          </div>

          {/* Services & Deliverables */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Building className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Services & Project Deliverables</h2>
            </div>

            <p className="text-gray-600 mb-4">All projects, products, and services delivered by HNL are governed by:</p>
            <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-6 ml-4">
              <li>
                <strong>Specific Contract Terms:</strong> Individual contracts, work orders, or service agreements that
                take precedence over general terms
              </li>
              <li>
                <strong>Project Specifications:</strong> Technical specifications, scope of work, and deliverables
                defined in project documentation
              </li>
              <li>
                <strong>Industry Standards:</strong> Applicable industry standards, codes, and best practices
              </li>
              <li>
                <strong>Company Compliance Policies:</strong> HNL's internal compliance policies and procedures
              </li>
            </ol>

            <div className="bg-gray-100 rounded-lg p-4">
              <p className="text-gray-700">
                <strong>Project-Specific Terms:</strong> Where specific project terms conflict with these general Terms,
                the project-specific terms shall prevail. All deliverables are subject to acceptance criteria defined in
                the applicable contract.
              </p>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">HNL's Intellectual Property</h3>
            <p className="text-gray-600 mb-4">
              All Content on our Website, including but not limited to text, graphics, logos, images, audio, video,
              software, data compilations, and the design, selection, and arrangement thereof, is the exclusive property
              of HNL or its licensors and is protected by Pakistani and international copyright, trademark, and other
              intellectual property laws.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-green-800">Permitted</span>
                </div>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>View Content for personal, non-commercial use</li>
                  <li>Share links to our Website</li>
                  <li>Reference with proper attribution</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="h-5 w-5 text-red-600" />
                  <span className="font-semibold text-red-800">Prohibited</span>
                </div>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>Copy, reproduce, or redistribute Content</li>
                  <li>Modify or create derivative works</li>
                  <li>Use for commercial purposes without permission</li>
                  <li>Remove copyright or proprietary notices</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Trademarks</h3>
            <p className="text-gray-600">
              "HNL", the HNL logo, "Energy Anytime Anywhere", and all related names, logos, product and service names,
              designs, and slogans are trademarks of HNL. You may not use these marks without our prior written
              permission. All other names, logos, product and service names, designs, and slogans on this Website are
              the trademarks of their respective owners.
            </p>
          </div>

          {/* User Obligations */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">User Obligations</h2>
            <p className="text-gray-600 mb-4">By using our Services, you agree to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Use our Services only for lawful purposes</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
              <li>Not transmit any malicious code, viruses, or harmful data</li>
              <li>Not interfere with or disrupt our Services or servers</li>
              <li>Not impersonate any person or entity</li>
              <li>Not use our Services for competitive intelligence gathering</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-amber-100 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Limitation of Liability</h2>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
              <p className="text-amber-900 font-medium mb-3">DISCLAIMER OF WARRANTIES</p>
              <p className="text-amber-800 text-sm">
                OUR WEBSITE AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND,
                WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. HNL DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT
                LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
                NON-INFRINGEMENT.
              </p>
            </div>

            <p className="text-gray-600 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, HNL AND ITS DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, PARTNERS, AND
              AFFILIATES SHALL NOT BE LIABLE FOR:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
              <li>Any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, revenue, data, or business opportunities</li>
              <li>Damages arising from reliance on information provided</li>
              <li>Any damages resulting from unauthorized access to our systems</li>
              <li>Any damages arising from third-party content or services</li>
            </ul>

            <p className="text-gray-600">
              IN NO EVENT SHALL HNL'S TOTAL LIABILITY EXCEED THE AMOUNT PAID BY YOU, IF ANY, FOR ACCESSING OUR WEBSITE
              IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
            </p>
          </div>

          {/* Indemnification */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
            <p className="text-gray-600">
              You agree to defend, indemnify, and hold harmless HNL and its directors, officers, employees, agents,
              partners, and affiliates from and against any and all claims, damages, obligations, losses, liabilities,
              costs, and expenses (including attorney's fees) arising from: (a) your use of our Services; (b) your
              violation of these Terms; (c) your violation of any third-party rights; or (d) any content you submit or
              transmit through our Services.
            </p>
          </div>

          {/* Governing Law */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law & Dispute Resolution</h2>
            <p className="text-gray-600 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the{" "}
              <strong>Islamic Republic of Pakistan</strong>, without regard to its conflict of law provisions.
            </p>
            <p className="text-gray-600 mb-4">
              HNL only responds to legal requests, notices, and communications that are:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
              <li>Applicable to local Pakistani laws</li>
              <li>Received from governing authorities with proper jurisdiction</li>
              <li>Submitted through established official channels of communication</li>
              <li>Accompanied by proper legal documentation and authority</li>
            </ul>
            <p className="text-gray-600">
              Any disputes arising from these Terms shall be resolved through binding arbitration in Lahore, Pakistan,
              in accordance with the Arbitration Act, 1940. The decision of the arbitrator(s) shall be final and
              binding.
            </p>
          </div>

          {/* Modifications */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Modifications to Terms</h2>
            <p className="text-gray-600">
              HNL reserves the right to modify these Terms at any time at our sole discretion. Changes will be effective
              immediately upon posting to our Website. Your continued use of our Services after any modifications
              constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-600 rounded-lg">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Legal Contact</h2>
            </div>

            <p className="text-gray-300 mb-6">
              For legal inquiries, notices, or questions regarding these Terms, please contact:
            </p>

            <div className="bg-white/10 rounded-lg p-6 mb-6">
              <p className="text-white font-semibold mb-2">Legal Department</p>
              <p className="text-gray-300">HNL Technologies (Private) Limited</p>
              <p className="text-gray-300">
                Email:{" "}
                <a href="mailto:legal@hnl.com.pk" className="text-red-400 hover:underline">
                  legal@hnl.com.pk
                </a>
              </p>
            </div>

            <div className="flex items-start gap-3 text-sm text-gray-400">
              <Clock className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p>
                Please allow a minimum of <strong className="text-gray-300">3 months</strong> for initial response to
                any legal inquiries. Response is subject to internal review and is not guaranteed.
              </p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/privacy" className="text-red-600 hover:underline">
              Privacy Policy
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/compliance" className="text-red-600 hover:underline">
              Compliance Policy
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/security" className="text-red-600 hover:underline">
              Security Policy
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
