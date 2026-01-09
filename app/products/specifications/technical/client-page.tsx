"use client"

import { useState } from "react"
import Breadcrumbs from "@/components/breadcrumbs"
import { Search, Download, FileText, Zap, Battery, Sun, Award, Shield } from "lucide-react"
import Image from "next/image"

// AGG Generator Specifications
const aggGeneratorSpecs = [
  // A Series Small
  {
    model: "AF16.5D5",
    series: "A Series Small",
    power: "16.5 kVA",
    engine: "403A-11G1",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-AF16.5D5-.pdf",
  },
  {
    model: "AF22D5",
    series: "A Series Small",
    power: "22 kVA",
    engine: "404A-22G1",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-AF22D5-.pdf",
  },
  {
    model: "AF33D5",
    series: "A Series Small",
    power: "33 kVA",
    engine: "1103A-33G",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-AF33D5-.pdf",
  },
  {
    model: "AF44D5",
    series: "A Series Small",
    power: "44 kVA",
    engine: "1104A-44TG1",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-AF44D5-.pdf",
  },
  {
    model: "AF55D5",
    series: "A Series Small",
    power: "55 kVA",
    engine: "1104A-44TG2",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-AF55D5-.pdf",
  },
  {
    model: "AF66D5",
    series: "A Series Small",
    power: "66 kVA",
    engine: "1104C-44TAG2",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-AF66D5-.pdf",
  },
  {
    model: "AS94D5",
    series: "A Series Small",
    power: "94 kVA",
    engine: "1106A-70TG1",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-AS94D5-AS4300.pdf",
  },
  {
    model: "AS125D5",
    series: "A Series Small",
    power: "125 kVA",
    engine: "1106A-70TAG2",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-AS125D5-AS4300.pdf",
  },
  {
    model: "AS150D5",
    series: "A Series Small",
    power: "150 kVA",
    engine: "1106A-70TAG3",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-AS150D5-AS4300.pdf",
  },

  // A Series Medium
  {
    model: "AS165D5",
    series: "A Series Medium",
    power: "165 kVA",
    engine: "1106A-70TAG4",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-AS165D5-AS6500.pdf",
  },
  {
    model: "AS206D5",
    series: "A Series Medium",
    power: "206 kVA",
    engine: "1506A-E88TAG5",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-AS206D5-AS6500.pdf",
  },
  {
    model: "AS220D5",
    series: "A Series Medium",
    power: "220 kVA",
    engine: "1706A-E93TAG1",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-AS220D5-AS8900.pdf",
  },
  {
    model: "AS250D5",
    series: "A Series Medium",
    power: "250 kVA",
    engine: "1706A-E93TAG2",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-AS250D5-AS8900.pdf",
  },
  {
    model: "AS275D5",
    series: "A Series Medium",
    power: "275 kVA",
    engine: "2206A-E13TAG2",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-AS275D5-AS8900.pdf",
  },
  {
    model: "AS388D5",
    series: "A Series Medium",
    power: "388 kVA",
    engine: "2206A-E13TAG3",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-AS388D5-AS11800.pdf",
  },

  // P Series Small
  {
    model: "P10D5",
    series: "P Series Small",
    power: "10 kVA",
    engine: "403A-11G1",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P10D5-403A-11G1-1.pdf",
  },
  {
    model: "P15D5",
    series: "P Series Small",
    power: "15 kVA",
    engine: "403A-15G1",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P15D5-403A-15G1-1.pdf",
  },
  {
    model: "P16.5D5",
    series: "P Series Small",
    power: "16.5 kVA",
    engine: "403A-15G2",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P16.5D5-403A-15G2-1.pdf",
  },
  {
    model: "P22D5",
    series: "P Series Small",
    power: "22 kVA",
    engine: "404A-22G1",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P22D5-404A-22G1-1.pdf",
  },
  {
    model: "P33D5",
    series: "P Series Small",
    power: "33 kVA",
    engine: "1103A-33G",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P33D5-1103A-33G-1.pdf",
  },
  {
    model: "P50D5",
    series: "P Series Small",
    power: "50 kVA",
    engine: "1103A-33TG1",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P50D5-1103A-33TG1-1.pdf",
  },
  {
    model: "P66D5",
    series: "P Series Small",
    power: "66 kVA",
    engine: "1103A-33TG2",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P66D5-1103A-33TG2-1.pdf",
  },
  {
    model: "P72D5",
    series: "P Series Small",
    power: "72 kVA",
    engine: "1104A-44TG1",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P72D5-1104A-44TG1-1.pdf",
  },
  {
    model: "P88D5",
    series: "P Series Small",
    power: "88 kVA",
    engine: "1104A-44TG2",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P88D5-1104A-44TG2-1.pdf",
  },
  {
    model: "P110D5",
    series: "P Series Small",
    power: "110 kVA",
    engine: "1104C-44TAG2",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P110D5-1104C-44TAG2-.pdf",
  },
  {
    model: "P150D5",
    series: "P Series Small",
    power: "150 kVA",
    engine: "1106A-70TG1",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P150D5-1106A-70TG1-.pdf",
  },
  {
    model: "P165D5",
    series: "P Series Small",
    power: "165 kVA",
    engine: "1106A-70TAG2",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P165D5-1106A-70TAG2-.pdf",
  },
  {
    model: "P200D5",
    series: "P Series Small",
    power: "200 kVA",
    engine: "1106A-70TAG3",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P200D5-1106A-70TAG3-.pdf",
  },
  {
    model: "P220D5",
    series: "P Series Small",
    power: "220 kVA",
    engine: "1106A-70TAG4",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P220D5-1106A-70TAG4-.pdf",
  },

  // P Series Medium
  {
    model: "P250E5",
    series: "P Series Medium",
    power: "250 kVA",
    engine: "1206A-E70TTAG2",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P250E5-1206A-E70TTAG2-.pdf",
  },
  {
    model: "P275E5",
    series: "P Series Medium",
    power: "275 kVA",
    engine: "1206A-E70TTAG3",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P275E5-1206A-E70TTAG3-.pdf",
  },
  {
    model: "P300E5",
    series: "P Series Medium",
    power: "300 kVA",
    engine: "1506A-E88TAG4",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P300E5-1506A-E88TAG4.pdf",
  },
  {
    model: "P330E5",
    series: "P Series Medium",
    power: "330 kVA",
    engine: "1506A-E88TAG5",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P330E5-1506A-E88TAG5.pdf",
  },
  {
    model: "P330E5A",
    series: "P Series Medium",
    power: "330 kVA",
    engine: "1706A-E93TAG1",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P330E5A-1706A-E93TAG1.pdf",
  },
  {
    model: "P385E5",
    series: "P Series Medium",
    power: "385 kVA",
    engine: "1706A-E93TAG2",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P385E5-1706A-E93TAG2-.pdf",
  },
  {
    model: "P400E5",
    series: "P Series Medium",
    power: "400 kVA",
    engine: "2206C-E13TAG2",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P400E5-2206C-E13TAG2-1.pdf",
  },
  {
    model: "P450E5",
    series: "P Series Medium",
    power: "450 kVA",
    engine: "2206C-E13TAG3",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P450E5-2206C-E13TAG3-.pdf",
  },
  {
    model: "P500E5",
    series: "P Series Medium",
    power: "500 kVA",
    engine: "2506C-E15TAG1",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P500E5-2506C-E15TAG1-.pdf",
  },
  {
    model: "P550E5",
    series: "P Series Medium",
    power: "550 kVA",
    engine: "2506C-E15TAG2",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P550E5-2506C-E15TAG2-.pdf",
  },
  {
    model: "P660E5",
    series: "P Series Medium",
    power: "660 kVA",
    engine: "2806C-E18TAG1A",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P660E5-2806C-E18TAG1A-.pdf",
  },
  {
    model: "P770E5",
    series: "P Series Medium",
    power: "770 kVA",
    engine: "2806A-E18TTAG4",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P770E5-2806A-E18TTAG4-.pdf",
  },
  {
    model: "P825E5",
    series: "P Series Medium",
    power: "825 kVA",
    engine: "2806A-E18TTAG5",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P825E5-2806A-E18TTAG5-.pdf",
  },

  // P Series Large
  {
    model: "P880D5",
    series: "P Series Large",
    power: "880 kVA",
    engine: "4006-23TAG3A",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P880D5-4006-23TAG3A-.pdf",
  },
  {
    model: "P1000D5",
    series: "P Series Large",
    power: "1000 kVA",
    engine: "4008TAG1A",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P1000D5-4008TAG1A-.pdf",
  },
  {
    model: "P1100D5",
    series: "P Series Large",
    power: "1100 kVA",
    engine: "4008-30TAG2",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P1100D5-4008-30TAG2-.pdf",
  },
  {
    model: "P1250D5",
    series: "P Series Large",
    power: "1250 kVA",
    engine: "4008-30TAG3",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P1250D5-4008-30TAG3-.pdf",
  },
  {
    model: "P1375D5",
    series: "P Series Large",
    power: "1375 kVA",
    engine: "4012-46TWG2A",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P1375D5-4012-46TWG2A-.pdf",
  },
  {
    model: "P1500D5",
    series: "P Series Large",
    power: "1500 kVA",
    engine: "4012-46TWG3A",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P1500D5-4012-46TWG3A-.pdf",
  },
  {
    model: "P1650D5",
    series: "P Series Large",
    power: "1650 kVA",
    engine: "4012-46TAG2A",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P1650D5-4012-46TAG2A-.pdf",
  },
  {
    model: "P1800D5",
    series: "P Series Large",
    power: "1800 kVA",
    engine: "4012-46TAG2A",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/82a8b0ee.pdf",
  },
  {
    model: "P1875D5",
    series: "P Series Large",
    power: "1875 kVA",
    engine: "4012-46TAG3A",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P1875D5-4012-46TAG3A-.pdf",
  },
  {
    model: "P2030D5",
    series: "P Series Large",
    power: "2030 kVA",
    engine: "4016TAG1A",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P2030D5-4016TAG1A-.pdf",
  },
  {
    model: "P2260D5",
    series: "P Series Large",
    power: "2260 kVA",
    engine: "4016TAG2A",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P2260D5-4016TAG2A-.pdf",
  },
  {
    model: "P2500D5",
    series: "P Series Large",
    power: "2500 kVA",
    engine: "4016-61TRG3",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/DG-SPEC-P2500D5-4016-61TRG3-.pdf",
  },
  {
    model: "P2750D5",
    series: "P Series Large",
    power: "2750 kVA",
    engine: "4016-61TRG3",
    type: "Diesel Generator",
    pdfUrl: "https://www.aggpower.com/uploads/56bf3d9a.pdf",
  },
]

const solarPanelSpecs = [
  // LONGi Solar
  {
    brand: "LONGi",
    model: "Hi-MO 5",
    series: "Hi-MO 5 Series",
    power: "530-550W",
    efficiency: "21.3%",
    type: "Solar Panel",
    pdfUrl: "https://www.longi.com/en/download/datasheet/module/hi-mo-5.pdf",
  },
  {
    brand: "LONGi",
    model: "Hi-MO 6",
    series: "Hi-MO 6 Series",
    power: "575-590W",
    efficiency: "22.8%",
    type: "Solar Panel",
    pdfUrl: "https://www.longi.com/en/download/datasheet/module/hi-mo-6.pdf",
  },
  // JinKo Solar
  {
    brand: "JinKo",
    model: "Tiger Neo",
    series: "Tiger Neo N-type",
    power: "605-625W",
    efficiency: "22.5%",
    type: "Solar Panel",
    pdfUrl: "https://www.jinkosolar.com/uploads/Tiger%20Neo.pdf",
  },
  {
    brand: "JinKo",
    model: "Tiger Pro",
    series: "Tiger Pro Series",
    power: "530-550W",
    efficiency: "21.2%",
    type: "Solar Panel",
    pdfUrl: "https://www.jinkosolar.com/uploads/Tiger%20Pro.pdf",
  },
  // Canadian Solar
  {
    brand: "Canadian Solar",
    model: "HiKu6",
    series: "HiKu6 Series",
    power: "655-670W",
    efficiency: "21.6%",
    type: "Solar Panel",
    pdfUrl: "https://www.canadiansolar.com/downloads/datasheets/en/Canadian_Solar-Datasheet-HiKu6.pdf",
  },
  {
    brand: "Canadian Solar",
    model: "HiHero",
    series: "HiHero Series",
    power: "665-685W",
    efficiency: "22.3%",
    type: "Solar Panel",
    pdfUrl: "https://www.canadiansolar.com/downloads/datasheets/en/Canadian_Solar-Datasheet-HiHero.pdf",
  },
]

const batteryStorageSpecs = [
  // DongJin Battery
  {
    brand: "DongJin",
    model: "DJM 12200",
    series: "Deep Cycle VRLA",
    capacity: "12V 200Ah",
    type: "Battery Storage",
    technology: "AGM VRLA",
    pdfUrl: "https://www.dongjin.co.kr/eng/download/DJM_12200.pdf",
  },
  {
    brand: "DongJin",
    model: "DJW 12-100",
    series: "Telecom Battery",
    capacity: "12V 100Ah",
    type: "Battery Storage",
    technology: "VRLA",
    pdfUrl: "https://www.dongjin.co.kr/eng/download/DJW_12-100.pdf",
  },
  // Leoch Battery
  {
    brand: "Leoch",
    model: "LPG12-200",
    series: "Solar Gel Series",
    capacity: "12V 200Ah",
    type: "Battery Storage",
    technology: "Gel",
    pdfUrl: "https://www.leoch.com/uploads/download/LPG12-200.pdf",
  },
  {
    brand: "Leoch",
    model: "DJM 12-150",
    series: "AGM Deep Cycle",
    capacity: "12V 150Ah",
    type: "Battery Storage",
    technology: "AGM",
    pdfUrl: "https://www.leoch.com/uploads/download/DJM12-150.pdf",
  },
]

const dcPowerSpecs = [
  // Huawei DC Power
  {
    brand: "Huawei",
    model: "NetPower 48V/3000A",
    series: "NetPower Series",
    capacity: "48V 3000A",
    type: "DC Power System",
    application: "Telecom & Data Center",
    pdfUrl: "https://e.huawei.com/en/material/industry/dc/NetPower.pdf",
  },
  // ELTEK Flatpack2
  {
    brand: "ELTEK",
    model: "Flatpack2 48/3000 HE",
    series: "Flatpack2 Series",
    capacity: "48V 3000W",
    type: "DC Power System",
    application: "Telecom Rectifier",
    pdfUrl: "https://www.vertiv.com/globalassets/documents/product-datasheets/eltek-flatpack2-datasheet.pdf",
  },
  // HAIWU 48V DC Distribution
  {
    brand: "HAIWU",
    model: "48V DC Distribution Frame",
    series: "DC Power Distribution",
    capacity: "48V Custom",
    type: "DC Power System",
    application: "Data Center Power Distribution",
    pdfUrl: "https://www.haiwu.com/uploads/48V-DC-Distribution.pdf",
  },
]

// Partner Companies Information
const partnerCompanies = [
  {
    name: "AGG Power Solutions",
    category: "Diesel Generators",
    logo: "/images/agg-logo.png",
    description:
      "AGG Power Solutions is a leading manufacturer of diesel generators ranging from 10 kVA to 2750 kVA. With Perkins, Cummins, Deutz, Doosan, Volvo Penta, Scania, and Kubota engines, AGG offers reliable power generation solutions for industrial, commercial, and residential applications.",
    origin: "China",
    established: "2008",
    capacity: "10-2750 kVA",
    specialization: "Diesel Generator Sets with Premium Engine Options",
  },
  {
    name: "Huawei",
    category: "Solar Inverters & Energy Storage",
    logo: "/images/huawei-logo.png",
    description:
      "Huawei is a global leader in solar inverters and smart energy storage solutions. Their FusionSolar smart PV solutions integrate cutting-edge digital and AI technologies to provide reliable, efficient, and intelligent solar power systems for residential, commercial, and utility-scale applications.",
    origin: "China",
    established: "1987",
    capacity: "Residential to Utility Scale",
    specialization: "String Inverters, Hybrid Inverters, Smart Energy Storage",
  },
  {
    name: "ELTEK",
    category: "DC Power Systems",
    logo: "/images/eltek-logo.png",
    description:
      "ELTEK (Vertiv) is a world-leading provider of intelligent power solutions for mission-critical infrastructure. Specializing in DC power systems, rectifiers, and battery management for telecom, data centers, and industrial applications.",
    origin: "Norway",
    established: "1971",
    capacity: "Custom DC Solutions",
    specialization: "Flatpack Rectifiers, DC Power Distribution, Battery Management",
  },
  {
    name: "Sorotec Power Solutions",
    category: "Solar & Energy Storage",
    logo: "/images/sorotec-logo.png",
    description:
      "Sorotec is a pioneer in renewable energy solutions, offering advanced solar inverters, hybrid systems, and energy storage solutions. Their products are designed for maximum efficiency and reliability in harsh environmental conditions.",
    origin: "Germany",
    established: "2005",
    capacity: "1kW - 250kW",
    specialization: "Hybrid Inverters, Off-Grid Systems, Energy Storage",
  },
  {
    name: "LONGi Solar",
    category: "Solar Panels",
    logo: "/images/longi-logo.png",
    description:
      "LONGi is the world's leading solar technology company, specializing in monocrystalline silicon products. With industry-leading efficiency and reliability, LONGi solar panels are trusted globally for residential, commercial, and utility-scale projects.",
    origin: "China",
    established: "2000",
    capacity: "Up to 580W+ modules",
    specialization: "Monocrystalline PERC & HJT Solar Modules",
  },
  {
    name: "JinKo Solar",
    category: "Solar Panels",
    logo: "/images/jinko-logo.png",
    description:
      "JinKo Solar is one of the largest and most innovative solar module manufacturers globally. Their Tiger series panels offer exceptional power output and efficiency for diverse applications worldwide.",
    origin: "China",
    established: "2006",
    capacity: "Up to 615W+ modules",
    specialization: "High-Efficiency Monocrystalline Solar Modules",
  },
  {
    name: "Canadian Solar",
    category: "Solar Panels",
    logo: "/images/canadian-solar-logo.png",
    description:
      "Canadian Solar is a leading manufacturer of solar PV modules and provider of solar energy solutions. Known for reliability and performance, their products are deployed in over 160 countries worldwide.",
    origin: "Canada",
    established: "2001",
    capacity: "Up to 670W+ modules",
    specialization: "Bifacial, PERC, and TOPCon Solar Modules",
  },
  {
    name: "Solis",
    category: "Solar Inverters",
    logo: "/images/solis-logo.png",
    description:
      "Solis (Ginlong Technologies) is a top-tier inverter manufacturer with a focus on residential and commercial string inverters. Their products feature advanced MPPT algorithms and smart monitoring capabilities.",
    origin: "China",
    established: "2005",
    capacity: "0.7kW - 255kW",
    specialization: "String Inverters, Hybrid Inverters, Storage Solutions",
  },
  {
    name: "HAIWU",
    category: "Data Center Cooling & Containment",
    logo: "/images/haiwu-logo.png",
    description:
      "HAIWU specializes in precision air conditioning for data centers and IDC applications. Their solutions include DX air-cooled units, row-based and rack-based precision ACs, along with 48V DC power distribution frames and containment solutions (CRACs, raised floor, in-row configurations).",
    origin: "China",
    established: "2010",
    capacity: "Custom Solutions",
    specialization: "Precision Air Conditioners, Containment Systems, DC Power Distribution",
  },
  {
    name: "DongJin Battery",
    category: "Batteries",
    logo: "/images/dongjin-logo.png",
    description:
      "DongJin specializes in high-quality lead-acid and VRLA batteries for telecom, UPS, solar, and backup power applications. Their batteries offer long lifespan and exceptional reliability.",
    origin: "South Korea",
    established: "1965",
    capacity: "12V - 200Ah+",
    specialization: "VRLA, Deep Cycle, Telecom Batteries",
  },
  {
    name: "Leoch Battery",
    category: "Batteries",
    logo: "/images/leoch-logo.png",
    description:
      "Leoch International is a leading battery manufacturer providing energy storage solutions for solar, UPS, telecom, and automotive applications. Their advanced AGM and gel batteries deliver superior performance and longevity.",
    origin: "China",
    established: "1999",
    capacity: "12V - 250Ah+",
    specialization: "AGM, Gel, Lithium Batteries for Energy Storage",
  },
]

function TechnicalSpecsClient() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("All")
  const [filterSeries, setFilterSeries] = useState("All")

  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: "Specifications", href: "/products/specifications" },
    { label: "Technical Specs", href: "/products/specifications/technical" },
  ]

  const allSpecs = [
    ...aggGeneratorSpecs,
    // Map solar panel specs to the common structure, extracting relevant info
    ...solarPanelSpecs.map((s) => ({
      brand: s.brand,
      model: s.model,
      series: `${s.brand} Solar (${s.series})`, // Add brand for clearer series distinction
      power: s.power,
      engine: s.efficiency, // Use 'engine' for 'efficiency' in the generic model
      type: s.type,
      pdfUrl: s.pdfUrl,
    })),
    // Map battery storage specs to the common structure
    ...batteryStorageSpecs.map((s) => ({
      brand: s.brand,
      model: s.model,
      series: `${s.brand} Battery (${s.series})`, // Add brand for clearer series distinction
      power: s.capacity, // Use 'power' for 'capacity'
      engine: s.technology, // Use 'engine' for 'technology'
      type: s.type,
      pdfUrl: s.pdfUrl,
    })),
    // Map DC power specs to the common structure
    ...dcPowerSpecs.map((s) => ({
      brand: s.brand,
      model: s.model,
      series: `${s.brand} DC Power (${s.series})`, // Add brand for clearer series distinction
      power: s.capacity, // Use 'power' for 'capacity'
      engine: s.application, // Use 'engine' for 'application'
      type: s.type,
      pdfUrl: s.pdfUrl,
    })),
  ]

  // Filter logic
  const filteredSpecs = allSpecs.filter((spec) => {
    const matchesSearch =
      spec.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      spec.series.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (spec.engine && spec.engine.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (spec.power && spec.power.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesType = filterType === "All" || spec.type === filterType
    const matchesSeries = filterSeries === "All" || spec.series.includes(filterSeries) // Adjusted for the new series format

    return matchesSearch && matchesType && matchesSeries
  })

  const uniqueSeries = ["All", ...Array.from(new Set(allSpecs.map((s) => s.series)))]
  const uniqueTypes = ["All", "Diesel Generator", "Solar Panel", "Battery Storage", "DC Power System"]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Breadcrumbs items={breadcrumbItems} />

      <section className="relative bg-gradient-to-r from-gray-900 via-red-900 to-gray-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/industrial-power-equipment-technical-background-wi.jpg"
            alt="Technical Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-balance">Technical Specifications Hub</h1>
            <p className="text-xl text-gray-300 mb-8 text-pretty">
              Browse and download comprehensive technical specifications for AGG diesel generators, solar panels,
              batteries, and AC/DC power solutions. HNL is the official distributor partner in Pakistan, providing
              cutting-edge energy solutions for commercial, industrial, and residential applications.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Zap className="h-5 w-5 text-red-400" />
                <span className="font-semibold">50+ Generator Models</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Sun className="h-5 w-5 text-yellow-400" />
                <span className="font-semibold">Premium Solar Panels</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Battery className="h-5 w-5 text-green-400" />
                <span className="font-semibold">Energy Storage Systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by model, series, engine, or specifications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-4 w-full lg:w-auto">
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  {uniqueTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <select
                  value={filterSeries}
                  onChange={(e) => setFilterSeries(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  {uniqueSeries.map((series) => (
                    <option key={series} value={series}>
                      {series}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-4 text-gray-600 text-center lg:text-left">
              Showing <span className="font-semibold text-red-600">{filteredSpecs.length}</span> specification
              {filteredSpecs.length !== 1 ? "s" : ""}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-gray-800 to-gray-700 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Model</th>
                      <th className="px-6 py-4 text-left font-semibold">Series</th>
                      <th className="px-6 py-4 text-left font-semibold">Type</th>
                      <th className="px-6 py-4 text-left font-semibold">Power/Capacity</th>
                      <th className="px-6 py-4 text-left font-semibold">Engine/Tech</th>
                      <th className="px-6 py-4 text-center font-semibold">Specification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredSpecs.map((spec, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-gray-900">{spec.model}</td>
                        <td className="px-6 py-4 text-gray-700">{spec.series}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                              spec.type === "Diesel Generator"
                                ? "bg-red-100 text-red-700"
                                : spec.type === "Solar Panel"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : spec.type === "Battery Storage"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-blue-100 text-blue-700"
                            }`}
                          >
                            {spec.type === "Diesel Generator" && <Zap className="h-3 w-3" />}
                            {spec.type === "Solar Panel" && <Sun className="h-3 w-3" />}
                            {spec.type === "Battery Storage" && <Battery className="h-3 w-3" />}
                            {spec.type === "DC Power System" && <FileText className="h-3 w-3" />}
                            {spec.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-700">{spec.power}</td>
                        <td className="px-6 py-4 text-gray-600 text-sm">{spec.engine || "N/A"}</td>
                        <td className="px-6 py-4 text-center">
                          <a
                            href={spec.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                          >
                            <Download className="h-4 w-4" />
                            Download
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {filteredSpecs.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No specifications found matching your search criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* AC & DC Power Solutions Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">AC & DC Power Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
                HNL partners with world-leading manufacturers to deliver comprehensive AC and DC power solutions for
                telecom, data centers, industrial, and renewable energy applications across Pakistan.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12">
              <Image
                src="/images/image.png"
                alt="AC & DC Power Solutions - HNL Partner Companies"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>

            {/* Partner Companies Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {partnerCompanies.map((company, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center">
                      {company.category === "Diesel Generators" && <Zap className="h-6 w-6 text-red-600" />}
                      {company.category.includes("Solar") && <Sun className="h-6 w-6 text-yellow-600" />}
                      {company.category.includes("Batteries") && <Battery className="h-6 w-6 text-green-600" />}
                      {company.category.includes("DC Power") && <FileText className="h-6 w-6 text-blue-600" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{company.name}</h3>
                      <p className="text-sm text-gray-600">{company.category}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{company.description}</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-500">Origin:</span>
                      <span className="ml-1 font-semibold">{company.origin}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Est:</span>
                      <span className="ml-1 font-semibold">{company.established}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-500">Capacity:</span>
                      <span className="ml-1 font-semibold">{company.capacity}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-500">Specialization:</span>
                      <span className="ml-1 font-semibold text-red-600">{company.specialization}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* HAIWU Partnership Section */}
            <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
              <h3 className="text-3xl font-bold mb-6 text-center">HAIWU - HNL Partnership</h3>
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <Image
                    src="/images/image.png"
                    alt="HAIWU Precision Air Conditioners"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
                <div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    HNL has partnered with HAIWU to deliver precision air conditioning solutions for IDC (Internet Data
                    Center) applications in Pakistan. HAIWU specializes in DX air-cooled and water-cooled precision ACs,
                    row-based and rack-based cooling systems, along with 48V DC power distribution frames.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✓</span>
                      <span>Precision Air Conditioners (DX air-cooled, water-cooled, chilled water)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✓</span>
                      <span>Row-based and Rack-based Precision ACs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✓</span>
                      <span>48V DC Power Distribution Frame (custom monitoring and control)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✓</span>
                      <span>Containment Solutions: CRACs, Raised Floor, In-Row configurations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional HAIWU Solutions */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg shadow-xl p-8">
              <h3 className="text-3xl font-bold mb-6 text-center">HAIWU Containment Solutions</h3>
              <Image
                src="/images/image.png"
                alt="HAIWU Containment Solutions"
                width={1200}
                height={400}
                className="rounded-lg shadow-md mb-6 w-full"
              />
              <p className="text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
                HNL, in partnership with HAIWU, provides both imported and locally manufactured containment solutions
                for data centers. These include fire-retardant poly carbonate material blanking panels, fire nozzles
                extensions, and custom solutions for CRACs (Computer Room Air Conditioners), raised floor setups, and
                in-row cooling configurations. All solutions are designed to optimize airflow, improve cooling
                efficiency, and meet international data center standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Certifications & Licenses</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
                HNL holds all necessary certifications and licenses to operate as an authorized distributor and
                implementation partner in Pakistan.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* PEC License */}
              <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-green-200 hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-6">
                  <div className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center">
                    <Award className="h-12 w-12 text-green-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-3">PEC License</h3>
                <p className="text-center text-gray-700 font-semibold mb-2">Pakistan Engineering Council</p>
                <p className="text-center text-sm text-gray-600 mb-4">
                  Constructor & Operator License for electrical and mechanical engineering works.
                </p>
                <div className="bg-green-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-green-800 font-semibold">Specializations: EE01-EE11, ME01-ME07</p>
                </div>
              </div>

              {/* AEDB Certification */}
              <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-200 hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-6">
                  <div className="h-24 w-24 bg-blue-100 rounded-full flex items-center justify-center">
                    <Shield className="h-12 w-12 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-3">AEDB Certified</h3>
                <p className="text-center text-gray-700 font-semibold mb-2">Alternative Energy Development Board</p>
                <p className="text-center text-sm text-gray-600 mb-4">
                  C1-Category certification for implementation of renewable energy solutions 500 KW & above.
                </p>
                <div className="bg-blue-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-blue-800 font-semibold">Valid until June 30, 2025</p>
                </div>
              </div>

              {/* ISO Certification */}
              <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-red-200 hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-6">
                  <div className="h-24 w-24 bg-red-100 rounded-full flex items-center justify-center">
                    <FileText className="h-12 w-12 text-red-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-3">ISO Certified</h3>
                <p className="text-center text-gray-700 font-semibold mb-2">Quality Management System</p>
                <p className="text-center text-sm text-gray-600 mb-4">
                  ISO 9001 certified for quality management systems and operational excellence.
                </p>
                <div className="bg-red-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-red-800 font-semibold">International Standards Compliance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-black">Need Assistance Finding the Right Specification?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-balance text-gray-700">
            Our technical team is ready to help you select the perfect power solution for your specific requirements.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
          >
            Contact Technical Support
            <FileText className="h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  )
}

export { TechnicalSpecsClient }
export default TechnicalSpecsClient
