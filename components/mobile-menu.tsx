"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import {
  ChevronDown,
  Server,
  Factory,
  BookOpen,
  Users,
  Mail,
  Package,
  Phone,
  X,
  Radio,
  Zap,
  Briefcase,
  Shield,
  FileText,
  HelpCircle,
  BookText,
  GraduationCap,
  ImageIcon,
  Play,
  Newspaper,
  Target,
  Building2,
  Award,
  Leaf,
  Calendar,
} from "lucide-react"
import { siteConfig } from "@/lib/site-config"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.width = "100%"
      document.body.style.top = `-${window.scrollY}px`
    } else {
      const scrollY = document.body.style.top
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
      document.body.style.top = ""
      if (scrollY) {
        window.scrollTo(0, Number.parseInt(scrollY || "0") * -1)
      }
    }
    return () => {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
      document.body.style.top = ""
    }
  }, [isOpen])

  const toggleItem = (item: string) => {
    setExpandedItems((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]))
  }

  if (!isOpen) return null

  const industries = [
    { name: "Telecom", href: "/industries/telecom", icon: Radio },
    { name: "Energy", href: "/industries/energy", icon: Zap },
    { name: "Enterprise", href: "/industries/enterprise", icon: Briefcase },
    { name: "Government", href: "/industries/government", icon: Shield },
    { name: "Manufacturing", href: "/industries/manufacturing", icon: Factory },
  ]

  const resources = [
    { name: "Blog & Articles", href: "/resources/blog", icon: BookOpen },
    { name: "Case Studies", href: "/case-studies", icon: FileText },
    { name: "FAQs", href: "/resources/faq", icon: HelpCircle },
    { name: "Technical Guides", href: "/resources/technical-guides", icon: BookText },
    { name: "Glossary", href: "/resources/glossary", icon: GraduationCap },
  ]

  const media = [
    { name: "Project Gallery", href: "/media/project-gallery", icon: ImageIcon },
    { name: "Videos & Demos", href: "/media/videos-demos", icon: Play },
    { name: "Press & Features", href: "/media/press-features", icon: Newspaper },
    { name: "Events", href: "/media/events", icon: Calendar },
  ]

  const aboutSections = [
    { name: "Our Story & Mission", href: "/about/vision-mission", icon: Target },
    { name: "Leadership & Team", href: "/about/leadership", icon: Users },
    { name: "Company Profile", href: "/about/company", icon: Building2 },
    { name: "Certifications & Partners", href: "/about/certifications", icon: Award },
    { name: "Sustainability", href: "/about/sustainability", icon: Leaf },
    { name: "Careers", href: "/careers", icon: Briefcase },
    { name: "Contact Us", href: "/contact", icon: Mail },
  ]

  return (
    <div
      id="mobile-menu-root"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 99999,
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      />

      {/* Menu Panel */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          maxWidth: "384px",
          height: "100vh",
          backgroundColor: "#ffffff",
          boxShadow: "-4px 0 20px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header - 60px */}
        <div
          style={{
            height: "60px",
            padding: "0 16px",
            borderBottom: "1px solid #e5e7eb",
            backgroundColor: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: "18px", fontWeight: "bold", color: "#111827" }}>Menu</span>
          <button
            onClick={onClose}
            style={{
              padding: "8px",
              borderRadius: "50%",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Close menu"
          >
            <X style={{ height: "24px", width: "24px", color: "#4b5563" }} />
          </button>
        </div>

        {/* Quick Contact - 48px */}
        <div
          style={{
            height: "48px",
            padding: "0 16px",
            backgroundColor: "#f9fafb",
            borderBottom: "1px solid #e5e7eb",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "14px",
            flexShrink: 0,
          }}
        >
          <a
            href={`tel:${siteConfig.phone.primary.replace(/-/g, "")}`}
            style={{ display: "flex", alignItems: "center", gap: "4px", color: "#4b5563", textDecoration: "none" }}
          >
            <Phone style={{ height: "16px", width: "16px" }} />
            <span>{siteConfig.phone.primary}</span>
          </a>
          <a
            href={`mailto:${siteConfig.email.info}`}
            style={{ display: "flex", alignItems: "center", gap: "4px", color: "#4b5563", textDecoration: "none" }}
          >
            <Mail style={{ height: "16px", width: "16px" }} />
            <span>Email</span>
          </a>
        </div>

        {/* Scrollable Content */}
        <div
          style={{
            height: "calc(100vh - 180px)",
            overflowY: "auto",
            overflowX: "hidden",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <nav style={{ padding: "16px" }}>
            {/* Products */}
            <div style={{ borderBottom: "1px solid #f3f4f6", paddingBottom: "8px", marginBottom: "8px" }}>
              <button
                onClick={() => toggleItem("products")}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 0",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      display: "flex",
                      height: "36px",
                      width: "36px",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "8px",
                      backgroundColor: "#fee2e2",
                      color: "#dc2626",
                    }}
                  >
                    <Package style={{ height: "20px", width: "20px" }} />
                  </div>
                  <span style={{ fontWeight: 500, color: "#111827" }}>Products</span>
                </div>
                <ChevronDown
                  style={{
                    height: "20px",
                    width: "20px",
                    color: "#9ca3af",
                    transition: "transform 0.2s",
                    transform: expandedItems.includes("products") ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              {expandedItems.includes("products") && (
                <div style={{ paddingLeft: "48px", paddingBottom: "12px" }}>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#6b7280",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: "8px",
                    }}
                  >
                    Generators
                  </p>
                  <Link
                    href="/products/generators/a-series-small"
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "6px 0",
                      fontSize: "14px",
                      color: "#4b5563",
                      textDecoration: "none",
                    }}
                  >
                    A Series 16.5-150 kVA
                  </Link>
                  <Link
                    href="/products/generators/p-series-small"
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "6px 0",
                      fontSize: "14px",
                      color: "#4b5563",
                      textDecoration: "none",
                    }}
                  >
                    P Series 10-220 kVA
                  </Link>
                  <Link
                    href="/products/generators/a-series-medium"
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "6px 0",
                      fontSize: "14px",
                      color: "#4b5563",
                      textDecoration: "none",
                    }}
                  >
                    A Series 165-388 kVA
                  </Link>
                  <Link
                    href="/products/generators/p-series-medium"
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "6px 0",
                      fontSize: "14px",
                      color: "#4b5563",
                      textDecoration: "none",
                    }}
                  >
                    P Series 250-1100 kVA
                  </Link>
                  <Link
                    href="/products/generators/p-series-large"
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "6px 0",
                      fontSize: "14px",
                      color: "#4b5563",
                      textDecoration: "none",
                    }}
                  >
                    P Series 825-1880 kVA
                  </Link>

                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#6b7280",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginTop: "16px",
                      marginBottom: "8px",
                    }}
                  >
                    Solar Energy
                  </p>
                  <Link
                    href="/products/solar/residential"
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "6px 0",
                      fontSize: "14px",
                      color: "#4b5563",
                      textDecoration: "none",
                    }}
                  >
                    Residential Solar
                  </Link>
                  <Link
                    href="/products/solar/commercial"
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "6px 0",
                      fontSize: "14px",
                      color: "#4b5563",
                      textDecoration: "none",
                    }}
                  >
                    Commercial Solar
                  </Link>
                  <Link
                    href="/products/solar/industrial"
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "6px 0",
                      fontSize: "14px",
                      color: "#4b5563",
                      textDecoration: "none",
                    }}
                  >
                    Industrial Solar
                  </Link>

                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#6b7280",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginTop: "16px",
                      marginBottom: "8px",
                    }}
                  >
                    Specifications
                  </p>
                  <Link
                    href="/products/specifications/technical"
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "6px 0",
                      fontSize: "14px",
                      color: "#4b5563",
                      textDecoration: "none",
                    }}
                  >
                    Technical Specs
                  </Link>
                  <Link
                    href="/products/specifications/epa"
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "6px 0",
                      fontSize: "14px",
                      color: "#4b5563",
                      textDecoration: "none",
                    }}
                  >
                    EPA Certification
                  </Link>
                  <Link
                    href="/products/specifications/performance"
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "6px 0",
                      fontSize: "14px",
                      color: "#4b5563",
                      textDecoration: "none",
                    }}
                  >
                    Performance Data
                  </Link>
                  <Link
                    href="/products/specifications/field-strength"
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "6px 0",
                      fontSize: "14px",
                      color: "#4b5563",
                      textDecoration: "none",
                    }}
                  >
                    Field Strength Overview
                  </Link>

                  <Link
                    href="/products"
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "8px 0",
                      marginTop: "8px",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#dc2626",
                      textDecoration: "none",
                    }}
                  >
                    View All Products →
                  </Link>
                </div>
              )}
            </div>

            {/* Services */}
            <div style={{ borderBottom: "1px solid #f3f4f6", paddingBottom: "8px", marginBottom: "8px" }}>
              <button
                onClick={() => toggleItem("services")}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 0",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      display: "flex",
                      height: "36px",
                      width: "36px",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "8px",
                      backgroundColor: "#dbeafe",
                      color: "#2563eb",
                    }}
                  >
                    <Server style={{ height: "20px", width: "20px" }} />
                  </div>
                  <span style={{ fontWeight: 500, color: "#111827" }}>Services</span>
                </div>
                <ChevronDown
                  style={{
                    height: "20px",
                    width: "20px",
                    color: "#9ca3af",
                    transition: "transform 0.2s",
                    transform: expandedItems.includes("services") ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              {expandedItems.includes("services") && (
                <div style={{ paddingLeft: "48px", paddingBottom: "12px" }}>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#6b7280",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: "8px",
                    }}
                  >
                    Telecom Infrastructure
                  </p>
                  <Link
                    href="/telecom-infrastructure"
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "6px 0",
                      fontSize: "14px",
                      color: "#4b5563",
                      textDecoration: "none",
                    }}
                  >
                    Overview
                  </Link>
                  <Link
                    href="/telecom-infrastructure/fiber-rollout"
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "6px 0",
                      fontSize: "14px",
                      color: "#4b5563",
                      textDecoration: "none",
                    }}
                  >
                    Fiber Rollout
                  </Link>
                  <Link
                    href="/telecom-infrastructure/civil-works"
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "6px 0",
                      fontSize: "14px",
                      color: "#4b5563",
                      textDecoration: "none",
                    }}
                  >
                    Civil Works
                  </Link>
                  <Link
                    href="/telecom-infrastructure/site-integration"
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "6px 0",
                      fontSize: "14px",
                      color: "#4b5563",
                      textDecoration: "none",
                    }}
                  >
                    Site Integration
                  </Link>
                  <Link
                    href="/telecom-infrastructure/operation-maintenance"
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "6px 0",
                      fontSize: "14px",
                      color: "#4b5563",
                      textDecoration: "none",
                    }}
                  >
                    Operation & Maintenance
                  </Link>
                  <Link
                    href="/telecom-infrastructure/noc-monitoring"
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "6px 0",
                      fontSize: "14px",
                      color: "#4b5563",
                      textDecoration: "none",
                    }}
                  >
                    NOC Monitoring
                  </Link>

                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#6b7280",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginTop: "16px",
                      marginBottom: "8px",
                    }}
                  >
                    Energy & Power
                  </p>
                  <Link
                    href="/energy-power"
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "6px 0",
                      fontSize: "14px",
                      color: "#4b5563",
                      textDecoration: "none",
                    }}
                  >
                    Overview
                  </Link>
                  <Link
                    href="/energy-power/diesel-generators"
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "6px 0",
                      fontSize: "14px",
                      color: "#4b5563",
                      textDecoration: "none",
                    }}
                  >
                    Diesel Generators
                  </Link>
                  <Link
                    href="/energy-power/bess"
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "6px 0",
                      fontSize: "14px",
                      color: "#4b5563",
                      textDecoration: "none",
                    }}
                  >
                    Battery Storage (BESS)
                  </Link>
                  <Link
                    href="/energy-power/hybrid-power-systems"
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "6px 0",
                      fontSize: "14px",
                      color: "#4b5563",
                      textDecoration: "none",
                    }}
                  >
                    Hybrid Power Systems
                  </Link>
                  <Link
                    href="/energy-power/epc-project-solutions"
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "6px 0",
                      fontSize: "14px",
                      color: "#4b5563",
                      textDecoration: "none",
                    }}
                  >
                    EPC Solutions
                  </Link>
                  <Link
                    href="/energy-power/energy-operations-maintenance"
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "6px 0",
                      fontSize: "14px",
                      color: "#4b5563",
                      textDecoration: "none",
                    }}
                  >
                    Energy O&M
                  </Link>

                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#6b7280",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginTop: "16px",
                      marginBottom: "8px",
                    }}
                  >
                    Software, Cloud & AI
                  </p>
                  <Link
                    href="/software-cloud-ai"
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "6px 0",
                      fontSize: "14px",
                      color: "#4b5563",
                      textDecoration: "none",
                    }}
                  >
                    Overview
                  </Link>
                  <Link
                    href="/software-cloud-ai/cloud-migration"
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "6px 0",
                      fontSize: "14px",
                      color: "#4b5563",
                      textDecoration: "none",
                    }}
                  >
                    Cloud Migration
                  </Link>
                  <Link
                    href="/software-cloud-ai/enterprise-it-services"
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "6px 0",
                      fontSize: "14px",
                      color: "#4b5563",
                      textDecoration: "none",
                    }}
                  >
                    Enterprise IT Services
                  </Link>
                  <Link
                    href="/software-cloud-ai/ai-agents"
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "6px 0",
                      fontSize: "14px",
                      color: "#4b5563",
                      textDecoration: "none",
                    }}
                  >
                    AI Agents
                  </Link>
                  <Link
                    href="/software-cloud-ai/big-data-analytics"
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "6px 0",
                      fontSize: "14px",
                      color: "#4b5563",
                      textDecoration: "none",
                    }}
                  >
                    Big Data Analytics
                  </Link>
                  <Link
                    href="/software-cloud-ai/ict-infrastructure"
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "6px 0",
                      fontSize: "14px",
                      color: "#4b5563",
                      textDecoration: "none",
                    }}
                  >
                    ICT Infrastructure
                  </Link>
                </div>
              )}
            </div>

            {/* Industries - CHANGE: Updated to match desktop mega-menu */}
            <div style={{ borderBottom: "1px solid #f3f4f6", paddingBottom: "8px", marginBottom: "8px" }}>
              <button
                onClick={() => toggleItem("industries")}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 0",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      display: "flex",
                      height: "36px",
                      width: "36px",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "8px",
                      backgroundColor: "#d1fae5",
                      color: "#059669",
                    }}
                  >
                    <Factory style={{ height: "20px", width: "20px" }} />
                  </div>
                  <span style={{ fontWeight: 500, color: "#111827" }}>Industries</span>
                </div>
                <ChevronDown
                  style={{
                    height: "20px",
                    width: "20px",
                    color: "#9ca3af",
                    transition: "transform 0.2s",
                    transform: expandedItems.includes("industries") ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              {expandedItems.includes("industries") && (
                <div style={{ paddingLeft: "48px", paddingBottom: "12px" }}>
                  {industries.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "6px 0",
                        fontSize: "14px",
                        color: "#4b5563",
                        textDecoration: "none",
                      }}
                    >
                      <item.icon style={{ height: "16px", width: "16px", color: "#9ca3af" }} />
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/industries"
                    onClick={onClose}
                    style={{
                      display: "block",
                      padding: "8px 0",
                      marginTop: "8px",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#dc2626",
                      textDecoration: "none",
                    }}
                  >
                    View All Industries →
                  </Link>
                </div>
              )}
            </div>

            {/* Resources - CHANGE: Updated to match desktop mega-menu */}
            <div style={{ borderBottom: "1px solid #f3f4f6", paddingBottom: "8px", marginBottom: "8px" }}>
              <button
                onClick={() => toggleItem("resources")}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 0",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      display: "flex",
                      height: "36px",
                      width: "36px",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "8px",
                      backgroundColor: "#fef3c7",
                      color: "#d97706",
                    }}
                  >
                    <BookOpen style={{ height: "20px", width: "20px" }} />
                  </div>
                  <span style={{ fontWeight: 500, color: "#111827" }}>Resources</span>
                </div>
                <ChevronDown
                  style={{
                    height: "20px",
                    width: "20px",
                    color: "#9ca3af",
                    transition: "transform 0.2s",
                    transform: expandedItems.includes("resources") ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              {expandedItems.includes("resources") && (
                <div style={{ paddingLeft: "48px", paddingBottom: "12px" }}>
                  {resources.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "6px 0",
                        fontSize: "14px",
                        color: "#4b5563",
                        textDecoration: "none",
                      }}
                    >
                      <item.icon style={{ height: "16px", width: "16px", color: "#9ca3af" }} />
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Media - CHANGE: Made expandable with sub-items from desktop */}
            <div style={{ borderBottom: "1px solid #f3f4f6", paddingBottom: "8px", marginBottom: "8px" }}>
              <button
                onClick={() => toggleItem("media")}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 0",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      display: "flex",
                      height: "36px",
                      width: "36px",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "8px",
                      backgroundColor: "#fce7f3",
                      color: "#db2777",
                    }}
                  >
                    <ImageIcon style={{ height: "20px", width: "20px" }} />
                  </div>
                  <span style={{ fontWeight: 500, color: "#111827" }}>Media</span>
                </div>
                <ChevronDown
                  style={{
                    height: "20px",
                    width: "20px",
                    color: "#9ca3af",
                    transition: "transform 0.2s",
                    transform: expandedItems.includes("media") ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              {expandedItems.includes("media") && (
                <div style={{ paddingLeft: "48px", paddingBottom: "12px" }}>
                  {media.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "6px 0",
                        fontSize: "14px",
                        color: "#4b5563",
                        textDecoration: "none",
                      }}
                    >
                      <item.icon style={{ height: "16px", width: "16px", color: "#9ca3af" }} />
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About - CHANGE: Updated to match desktop mega-menu */}
            <div style={{ paddingBottom: "8px" }}>
              <button
                onClick={() => toggleItem("about")}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 0",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      display: "flex",
                      height: "36px",
                      width: "36px",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "8px",
                      backgroundColor: "#ede9fe",
                      color: "#7c3aed",
                    }}
                  >
                    <Users style={{ height: "20px", width: "20px" }} />
                  </div>
                  <span style={{ fontWeight: 500, color: "#111827" }}>About</span>
                </div>
                <ChevronDown
                  style={{
                    height: "20px",
                    width: "20px",
                    color: "#9ca3af",
                    transition: "transform 0.2s",
                    transform: expandedItems.includes("about") ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              {expandedItems.includes("about") && (
                <div style={{ paddingLeft: "48px", paddingBottom: "12px" }}>
                  {aboutSections.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "6px 0",
                        fontSize: "14px",
                        color: "#4b5563",
                        textDecoration: "none",
                      }}
                    >
                      <item.icon style={{ height: "16px", width: "16px", color: "#9ca3af" }} />
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Footer CTA - 72px */}
        <div
          style={{
            height: "72px",
            padding: "12px 16px",
            borderTop: "1px solid #e5e7eb",
            backgroundColor: "#ffffff",
            flexShrink: 0,
          }}
        >
          <Link
            href="/contact/quote"
            onClick={onClose}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "48px",
              backgroundColor: "#dc2626",
              color: "#ffffff",
              borderRadius: "8px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  )
}
