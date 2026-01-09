import type { Metadata } from "next"
import Link from "next/link"
import { ShieldCheck, Mail, Clock, Lock, Server, Eye, AlertOctagon, FileWarning } from "lucide-react"

export const metadata: Metadata = {
  title: "Security Policy | HNL",
  description: "HNL Security Policy - Our approach to information security, data protection, and incident response.",
}

export default function SecurityPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16">
        <div className="container mx-auto px-4 max-w-[1920px]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 mb-6">
              <ShieldCheck className="h-4 w-4 text-red-500" />
              <span className="text-sm text-red-400">Legal Document</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Security Policy</h1>
            <p className="text-xl text-gray-300 mb-6">
              Our commitment to protecting information assets and maintaining robust security practices.
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Security Commitment</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              HNL Technologies (Private) Limited ("HNL") is committed to maintaining the confidentiality, integrity, and
              availability of all information assets. This Security Policy outlines our approach to information
              security, data protection, and incident response.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate technical, administrative, and physical safeguards to protect information from
              unauthorized access, disclosure, alteration, or destruction. Our security practices are designed to meet
              industry standards and regulatory requirements.
            </p>
          </div>

          {/* Security Framework */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Server className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Security Framework</h2>
            </div>

            <p className="text-gray-600 mb-4">Our information security program is built on:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Technical Controls</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Encryption of data in transit and at rest</li>
                  <li>• Firewalls and intrusion detection systems</li>
                  <li>• Multi-factor authentication</li>
                  <li>• Regular security updates and patching</li>
                  <li>• Network segmentation and access controls</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Administrative Controls</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Security policies and procedures</li>
                  <li>• Employee security awareness training</li>
                  <li>• Background checks for personnel</li>
                  <li>• Vendor security assessments</li>
                  <li>• Regular security audits and reviews</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Physical Controls</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Secure facility access controls</li>
                  <li>• CCTV surveillance systems</li>
                  <li>• Visitor management procedures</li>
                  <li>• Equipment protection measures</li>
                  <li>• Environmental controls</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Operational Controls</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Change management processes</li>
                  <li>• Backup and recovery procedures</li>
                  <li>• Business continuity planning</li>
                  <li>• Disaster recovery capabilities</li>
                  <li>• Incident response procedures</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Protection */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 rounded-lg">
                <Lock className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Data Protection</h2>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Classification</h3>
            <p className="text-gray-600 mb-4">
              HNL classifies information based on sensitivity and applies appropriate protection measures:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
              <li>
                <strong>Confidential:</strong> Highly sensitive business and customer information with restricted access
              </li>
              <li>
                <strong>Internal:</strong> Information for internal use only, not for external distribution
              </li>
              <li>
                <strong>Public:</strong> Information approved for public disclosure
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Handling</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Access to data is granted on a need-to-know basis</li>
              <li>Sensitive data is encrypted during transmission and storage</li>
              <li>Data retention follows legal requirements and business needs</li>
              <li>Secure disposal methods are used for data destruction</li>
              <li>Third-party data sharing is subject to contractual safeguards</li>
            </ul>
          </div>

          {/* Confidentiality */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Eye className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Confidentiality</h2>
            </div>

            <p className="text-gray-600 mb-4">
              All information received, processed, or stored by HNL is treated as confidential unless explicitly
              designated otherwise. This includes:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
              <li>Customer and client information</li>
              <li>Project specifications and technical documentation</li>
              <li>Business strategies and financial information</li>
              <li>Employee and personnel records</li>
              <li>Proprietary technology and intellectual property</li>
              <li>Partner and vendor information</li>
            </ul>

            <div className="bg-gray-100 rounded-lg p-4">
              <p className="text-gray-700">
                <strong>Internal Use:</strong> All information collected is retained for internal purposes and may be
                used to train internal systems to improve our services. Information is not disclosed to external parties
                except as required by law or with explicit consent.
              </p>
            </div>
          </div>

          {/* Incident Response */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-100 rounded-lg">
                <AlertOctagon className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Security Incident Response</h2>
            </div>

            <p className="text-gray-600 mb-4">
              HNL maintains a comprehensive incident response program to address security events promptly and
              effectively.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-red-900 mb-3">IMPORTANT: Internal Investigation Policy</h4>
              <p className="text-red-800 text-sm mb-3">
                In the event of a security breach, data leakage, cyber attack, or any security incident:
              </p>
              <ul className="text-red-800 text-sm space-y-2 ml-4">
                <li>
                  • HNL conducts <strong>internal investigations</strong> according to its own policies and procedures
                </li>
                <li>
                  • All investigation details are <strong>strictly confidential</strong>
                </li>
                <li>
                  • Resolution is based on <strong>HNL's internal policies</strong>
                </li>
                <li>• External communication regarding incidents is at HNL's sole discretion</li>
                <li>
                  • HNL may respond or react to incidents <strong>if needed but is not obligated</strong> to provide
                  external notifications unless required by law
                </li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">Incident Categories</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Unauthorized access or access attempts</li>
              <li>Malware or ransomware incidents</li>
              <li>Data breaches or leakage</li>
              <li>Denial of service attacks</li>
              <li>Social engineering attacks</li>
              <li>Physical security breaches</li>
              <li>Policy violations</li>
            </ul>
          </div>

          {/* Reporting Security Concerns */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-amber-100 rounded-lg">
                <FileWarning className="h-6 w-6 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Reporting Security Concerns</h2>
            </div>

            <p className="text-gray-600 mb-4">
              If you discover a potential security vulnerability or have concerns about the security of HNL's systems,
              please report it to our Legal Department:
            </p>

            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <p className="text-gray-700">
                Email:{" "}
                <a href="mailto:legal@hnl.com.pk" className="text-red-600 hover:underline">
                  legal@hnl.com.pk
                </a>
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-amber-800 font-medium mb-2">Responsible Disclosure</p>
              <p className="text-amber-700 text-sm">
                We request that security researchers and individuals who discover vulnerabilities practice responsible
                disclosure by:
              </p>
              <ul className="text-amber-700 text-sm mt-2 ml-4 space-y-1">
                <li>• Providing us reasonable time to investigate and address issues</li>
                <li>• Not accessing or modifying data belonging to others</li>
                <li>• Not disrupting our services or systems</li>
                <li>• Not publicly disclosing issues before resolution</li>
              </ul>
            </div>
          </div>

          {/* Third Party Security */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Security</h2>
            <p className="text-gray-600 mb-4">
              HNL requires third parties who access, process, or store HNL information to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
              <li>Implement appropriate security controls</li>
              <li>Comply with HNL's security requirements</li>
              <li>Report security incidents promptly</li>
              <li>Undergo security assessments as required</li>
              <li>Maintain confidentiality of all information</li>
            </ul>
            <p className="text-gray-600">
              Security requirements are incorporated into contracts and agreements with third parties.
            </p>
          </div>

          {/* Employee Responsibilities */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Employee Security Responsibilities</h2>
            <p className="text-gray-600 mb-4">All HNL employees are responsible for:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
              <li>Following security policies and procedures</li>
              <li>Protecting credentials and access rights</li>
              <li>Reporting security incidents and suspicious activities</li>
              <li>Completing required security training</li>
              <li>Using company resources appropriately</li>
              <li>Safeguarding confidential information</li>
            </ul>
            <p className="text-gray-600">
              Violations of security policies may result in disciplinary action, up to and including termination of
              employment and legal action.
            </p>
          </div>

          {/* Jurisdiction */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Jurisdiction & Legal Authority</h2>
            <p className="text-gray-600 mb-4">
              HNL's security practices and incident response procedures are governed by the laws of the{" "}
              <strong>Islamic Republic of Pakistan</strong>. HNL:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Cooperates with legitimate law enforcement requests through proper legal channels</li>
              <li>Requires valid legal process for disclosure of information</li>
              <li>Reserves the right to challenge requests that exceed legal authority</li>
              <li>Handles all security matters according to internal policies and Pakistani law</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-600 rounded-lg">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Security Contact</h2>
            </div>

            <p className="text-gray-300 mb-6">For security-related inquiries, vulnerability reports, or concerns:</p>

            <div className="bg-white/10 rounded-lg p-6 mb-6">
              <p className="text-white font-semibold mb-2">Legal & Security Department</p>
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
                Security concerns are handled according to internal policies. Please allow a minimum of{" "}
                <strong className="text-gray-300">3 months</strong> for initial assessment and response. HNL reserves
                the right to handle all security matters internally and may not provide external updates on
                investigations.
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
            <Link href="/compliance" className="text-red-600 hover:underline">
              Compliance Policy
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
