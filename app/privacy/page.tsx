import type { Metadata } from "next"
import Link from "next/link"
import { Shield, Mail, Clock, Lock, Database, Eye, FileText, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | HNL",
  description: "HNL Privacy Policy - How we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16">
        <div className="container mx-auto px-4 max-w-[1920px]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 mb-6">
              <Shield className="h-4 w-4 text-red-500" />
              <span className="text-sm text-red-400">Legal Document</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-300 mb-6">
              Your privacy is important to us. This policy explains how HNL collects, uses, and protects your
              information.
            </p>
            <p className="text-sm text-gray-500">Last Updated: December 2024 | Effective: January 1, 2025</p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-white border-b sticky top-[80px] z-40">
        <div className="container mx-auto px-4 max-w-[1920px]">
          <div className="flex flex-wrap gap-4 py-4 text-sm">
            <a href="#collection" className="text-gray-600 hover:text-red-600 transition-colors">
              Data Collection
            </a>
            <a href="#usage" className="text-gray-600 hover:text-red-600 transition-colors">
              Data Usage
            </a>
            <a href="#storage" className="text-gray-600 hover:text-red-600 transition-colors">
              Data Storage
            </a>
            <a href="#rights" className="text-gray-600 hover:text-red-600 transition-colors">
              Your Rights
            </a>
            <a href="#cookies" className="text-gray-600 hover:text-red-600 transition-colors">
              Cookies
            </a>
            <a href="#contact" className="text-gray-600 hover:text-red-600 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Introduction */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              HNL Technologies (Private) Limited ("HNL", "we", "us", or "our"), a company registered under the laws of
              the Islamic Republic of Pakistan, is committed to protecting your privacy. This Privacy Policy describes
              our practices concerning the information we collect from you when you visit our website, use our services,
              or engage with us through any communication channel.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using our website (seo.hnl.com.pk) and related services, you acknowledge that you have
              read, understood, and agree to be bound by this Privacy Policy. If you do not agree with these terms,
              please do not use our services.
            </p>
          </div>

          {/* Data Collection */}
          <div id="collection" className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-100 rounded-lg">
                <Database className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
            <p className="text-gray-600 mb-4">
              We may collect the following personal information when you voluntarily provide it:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
              <li>Full name and job title</li>
              <li>Company/organization name and registration details</li>
              <li>Email address, phone numbers, and WhatsApp contact</li>
              <li>Physical address and location information</li>
              <li>Project requirements, specifications, and tender documents</li>
              <li>Communication history and inquiry details</li>
              <li>Payment and billing information (for commercial transactions)</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>IP address, browser type, and device information</li>
              <li>Pages visited, time spent, and navigation patterns</li>
              <li>Referring website and search terms</li>
              <li>Geographic location (country/city level)</li>
              <li>Chat conversations with our AI assistant (HNL-Ai)</li>
            </ul>
          </div>

          {/* Data Usage */}
          <div id="usage" className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
            </div>

            <p className="text-gray-600 mb-4">Your information is used exclusively for internal purposes including:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
              <li>Responding to inquiries, quotes, and service requests</li>
              <li>Processing orders, contracts, and commercial transactions</li>
              <li>Providing customer support and technical assistance</li>
              <li>Sending relevant communications about products, services, and opportunities</li>
              <li>Improving our website, services, and user experience</li>
              <li>Training internal systems, including AI assistants, to improve service quality</li>
              <li>Conducting internal analytics and business intelligence</li>
              <li>Complying with legal obligations and regulatory requirements</li>
              <li>Protecting our rights, property, and safety</li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="flex gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-amber-800 font-medium">Internal Use Notice</p>
                  <p className="text-amber-700 text-sm">
                    All information collected is retained for internal purposes and may be used to train internal
                    systems to improve our services. We do not sell, rent, or trade your personal information to third
                    parties for marketing purposes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Storage & Security */}
          <div id="storage" className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 rounded-lg">
                <Lock className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Data Storage & Security</h2>
            </div>

            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
              over the Internet or electronic storage is 100% secure.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Retention Period</h3>
            <p className="text-gray-600 mb-6">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this
              policy, unless a longer retention period is required or permitted by law. Business records, contracts, and
              transaction data may be retained for extended periods as required by Pakistani commercial law.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Location</h3>
            <p className="text-gray-600">
              Your data may be stored and processed in Pakistan or other jurisdictions where our service providers
              operate. By using our services, you consent to the transfer of your information to these locations.
            </p>
          </div>

          {/* Your Rights */}
          <div id="rights" className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-100 rounded-lg">
                <FileText className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
            </div>

            <p className="text-gray-600 mb-4">
              Subject to applicable laws of the Islamic Republic of Pakistan, you may have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
              <li>Request access to your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal retention requirements)</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>

            <div className="bg-gray-100 rounded-lg p-4">
              <p className="text-gray-700 text-sm">
                <strong>Response Timeline:</strong> All requests regarding your personal data must be submitted to{" "}
                <a href="mailto:legal@hnl.com.pk" className="text-red-600 hover:underline">
                  legal@hnl.com.pk
                </a>
                . Please note that a minimum of <strong>3 months</strong> is required for first response while we
                assess, understand, and investigate your request. Response is not guaranteed and is subject to internal
                review and applicable law.
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div id="cookies" className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies & Tracking</h2>
            <p className="text-gray-600 mb-4">
              We use cookies and similar tracking technologies to enhance your browsing experience, analyze website
              traffic, and understand user behavior. These include:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
              <li>
                <strong>Essential Cookies:</strong> Required for basic website functionality
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website
              </li>
              <li>
                <strong>Functional Cookies:</strong> Remember your preferences and settings
              </li>
              <li>
                <strong>Marketing Cookies:</strong> May be used to deliver relevant advertisements
              </li>
            </ul>
            <p className="text-gray-600">
              You can control cookie preferences through your browser settings. However, disabling certain cookies may
              affect website functionality.
            </p>
          </div>

          {/* Third Party */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-600 mb-4">
              Our website may contain links to third-party websites or integrate with third-party services. We are not
              responsible for the privacy practices of these third parties. We encourage you to review their privacy
              policies before providing any personal information.
            </p>
            <p className="text-gray-600">
              We may use third-party service providers for hosting, analytics, email communications, and other
              operational purposes. These providers are bound by contractual obligations to protect your information.
            </p>
          </div>

          {/* Jurisdiction */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law & Jurisdiction</h2>
            <p className="text-gray-600 mb-4">
              This Privacy Policy is governed by and construed in accordance with the laws of the{" "}
              <strong>Islamic Republic of Pakistan</strong>. HNL only responds to requests and inquiries that are
              applicable to local Pakistani laws and legitimate requests from governing authorities, legal offices, and
              established official channels of communication.
            </p>
            <p className="text-gray-600">
              Any disputes arising from this Privacy Policy shall be subject to the exclusive jurisdiction of the courts
              in Lahore, Pakistan.
            </p>
          </div>

          {/* Contact */}
          <div id="contact" className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-600 rounded-lg">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Contact Us</h2>
            </div>

            <p className="text-gray-300 mb-6">
              For any questions, concerns, or requests regarding this Privacy Policy or your personal data, please
              contact our Legal Department:
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
                any legal inquiries, reporting, requests, or objections. This timeframe allows for proper assessment,
                understanding, and investigation of your matter. A response is not committed and is subject to internal
                review.
              </p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/terms" className="text-red-600 hover:underline">
              Terms of Service
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
