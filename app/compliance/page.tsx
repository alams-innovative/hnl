import type { Metadata } from "next"
import Link from "next/link"
import { ClipboardCheck, Mail, Clock, Shield, Users, Globe, FileCheck, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Compliance Policy | HNL",
  description:
    "HNL Compliance Policy - Our commitment to regulatory compliance, ethical conduct, and corporate governance.",
}

export default function CompliancePage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16">
        <div className="container mx-auto px-4 max-w-[1920px]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 mb-6">
              <ClipboardCheck className="h-4 w-4 text-red-500" />
              <span className="text-sm text-red-400">Legal Document</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Compliance Policy</h1>
            <p className="text-xl text-gray-300 mb-6">
              Our commitment to ethical business conduct, regulatory compliance, and corporate governance.
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Compliance</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              HNL Technologies (Private) Limited ("HNL") is committed to conducting business with the highest standards
              of integrity, ethics, and compliance with all applicable laws and regulations. This Compliance Policy
              outlines our principles and expectations for ethical conduct across all our operations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              As a registered entity in the Islamic Republic of Pakistan, HNL operates under the jurisdiction of
              Pakistani law and adheres to all applicable local, national, and international regulations relevant to our
              business operations.
            </p>
          </div>

          {/* Regulatory Framework */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Regulatory Framework</h2>
            </div>

            <p className="text-gray-600 mb-4">HNL operates in compliance with:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
              <li>Companies Act, 2017 (Pakistan)</li>
              <li>Pakistan Telecommunication Authority (PTA) regulations</li>
              <li>National Electric Power Regulatory Authority (NEPRA) guidelines</li>
              <li>Securities and Exchange Commission of Pakistan (SECP) requirements</li>
              <li>Federal Board of Revenue (FBR) tax regulations</li>
              <li>Labor laws and employment regulations of Pakistan</li>
              <li>Environmental protection laws and regulations</li>
              <li>Anti-corruption and anti-bribery laws</li>
              <li>Data protection and privacy regulations</li>
              <li>Industry-specific standards and certifications (ISO, etc.)</li>
            </ul>
          </div>

          {/* Code of Conduct */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 rounded-lg">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Code of Conduct</h2>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">For Employees</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
              <li>Act with honesty, integrity, and professionalism at all times</li>
              <li>Comply with all applicable laws, regulations, and company policies</li>
              <li>Avoid conflicts of interest and disclose any potential conflicts</li>
              <li>Protect confidential and proprietary information</li>
              <li>Report suspected violations through proper channels</li>
              <li>Treat colleagues, clients, and partners with respect and dignity</li>
              <li>Maintain accurate and complete business records</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">For Partners & Vendors</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Adhere to HNL's ethical standards and compliance requirements</li>
              <li>Comply with all applicable laws in their respective jurisdictions</li>
              <li>Maintain appropriate licenses, permits, and certifications</li>
              <li>Provide accurate information and documentation</li>
              <li>Cooperate with compliance audits and due diligence processes</li>
            </ul>
          </div>

          {/* Anti-Corruption */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Anti-Corruption & Anti-Bribery</h2>
            <p className="text-gray-600 mb-4">
              HNL has zero tolerance for corruption, bribery, or any form of unethical payment. We prohibit:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
              <li>Offering, promising, or giving bribes to any person</li>
              <li>Requesting, agreeing to receive, or accepting bribes</li>
              <li>Facilitation payments or "grease payments"</li>
              <li>Improper gifts, entertainment, or hospitality</li>
              <li>Political contributions made to gain business advantage</li>
              <li>Any form of kickbacks or secret commissions</li>
            </ul>
            <p className="text-gray-600">
              All employees, partners, and third parties acting on behalf of HNL must comply with anti-corruption laws,
              including the National Accountability Ordinance, 1999 and related legislation.
            </p>
          </div>

          {/* Project Compliance */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-100 rounded-lg">
                <FileCheck className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Project & Service Compliance</h2>
            </div>

            <p className="text-gray-600 mb-4">
              All projects and services delivered by HNL are executed in compliance with:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
              <li>
                <strong>Contract Specifications:</strong> Terms, conditions, and deliverables specified in individual
                contracts
              </li>
              <li>
                <strong>Technical Standards:</strong> Industry standards, codes, and best practices applicable to the
                specific project
              </li>
              <li>
                <strong>Quality Standards:</strong> ISO 9001 and other relevant quality management standards
              </li>
              <li>
                <strong>Safety Standards:</strong> Occupational health and safety requirements
              </li>
              <li>
                <strong>Environmental Standards:</strong> Environmental protection and sustainability requirements
              </li>
            </ul>

            <div className="bg-gray-100 rounded-lg p-4">
              <p className="text-gray-700">
                <strong>Note:</strong> Where project-specific terms are not defined, HNL's standard compliance policies
                apply. Any deviations must be documented and approved by appropriate authorities.
              </p>
            </div>
          </div>

          {/* Reporting */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-amber-100 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Reporting & Whistleblowing</h2>
            </div>

            <p className="text-gray-600 mb-4">
              HNL encourages the reporting of any suspected compliance violations, unethical conduct, or illegal
              activities. Reports can be made through:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
              <li>Direct supervisor or management chain</li>
              <li>
                Legal Department:{" "}
                <a href="mailto:legal@hnl.com.pk" className="text-red-600 hover:underline">
                  legal@hnl.com.pk
                </a>
              </li>
              <li>Compliance Officer</li>
            </ul>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-green-800 font-medium mb-2">Non-Retaliation Policy</p>
              <p className="text-green-700 text-sm">
                HNL prohibits retaliation against anyone who reports suspected violations in good faith. All reports
                will be investigated thoroughly and handled confidentially to the extent possible.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-amber-800 font-medium mb-2">Investigation Process</p>
              <p className="text-amber-700 text-sm">
                All compliance concerns are investigated according to HNL's internal policies. Please allow a minimum of{" "}
                <strong>3 months</strong> for initial assessment and response. Investigation findings and any resulting
                actions are handled internally and may not be disclosed to the reporting party.
              </p>
            </div>
          </div>

          {/* Third Party */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Compliance</h2>
            <p className="text-gray-600 mb-4">
              HNL conducts due diligence on business partners, vendors, distributors, and agents to ensure they meet our
              compliance standards. Third parties must:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
              <li>Agree to comply with applicable laws and HNL's compliance requirements</li>
              <li>Provide accurate information during the onboarding process</li>
              <li>Maintain appropriate records and documentation</li>
              <li>Permit audits and inspections as required</li>
              <li>Report any compliance concerns or violations</li>
            </ul>
            <p className="text-gray-600">
              HNL reserves the right to terminate relationships with third parties who fail to meet compliance
              standards.
            </p>
          </div>

          {/* Brand Protection */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-100 rounded-lg">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Brand & Trademark Protection</h2>
            </div>

            <p className="text-gray-600 mb-4">
              HNL actively protects its brand, trademarks, and intellectual property. Unauthorized use of HNL's name,
              logo, or trademarks by any party—including staff, partners, vendors, or any known or unknown entities—is
              strictly prohibited.
            </p>
            <p className="text-gray-600 mb-4">
              Any alleged infringement, misuse, or misrepresentation of HNL's brand must be reported to the Legal
              Department. HNL reserves the right to pursue legal action against any party that:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Uses HNL's trademarks without authorization</li>
              <li>Creates confusion in the marketplace</li>
              <li>Damages HNL's reputation or goodwill</li>
              <li>Engages in counterfeit or fraudulent activities using HNL's brand</li>
            </ul>
          </div>

          {/* Jurisdiction */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Jurisdiction & Legal Authority</h2>
            <p className="text-gray-600 mb-4">
              HNL Technologies (Private) Limited is a registered entity under the laws of the{" "}
              <strong>Islamic Republic of Pakistan</strong> and operates under Pakistani jurisdiction. HNL:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
              <li>Only responds to legal requests applicable to Pakistani laws</li>
              <li>Cooperates with legitimate requests from governing authorities</li>
              <li>Requires proper legal documentation and established official channels for any legal communication</li>
              <li>Reserves the right to challenge requests that exceed legal authority</li>
            </ul>
            <p className="text-gray-600">
              International legal requests must be processed through appropriate diplomatic or legal channels as
              recognized under Pakistani law.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-600 rounded-lg">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Compliance Contact</h2>
            </div>

            <p className="text-gray-300 mb-6">For compliance inquiries, concerns, or to report suspected violations:</p>

            <div className="bg-white/10 rounded-lg p-6 mb-6">
              <p className="text-white font-semibold mb-2">Legal & Compliance Department</p>
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
                compliance inquiries. All matters are subject to internal review and investigation processes.
              </p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/privacy" className="text-red-600 hover:underline">
              Privacy Policy
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/terms" className="text-red-600 hover:underline">
              Terms of Service
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
