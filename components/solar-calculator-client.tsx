"use client"

import { useState } from "react"
import { Calculator, Home, Zap, Battery, Sun, Leaf, Droplets, TreePine } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

interface ApplianceInput {
  acs: number
  fans: number
  lights: number
  tvs: number
  fridges: number
  washingMachine: number
  iron: number
  waterPump: number
  bedrooms: number
  averageBill: number
}

export default function SolarCalculatorClient() {
  const [inputs, setInputs] = useState<ApplianceInput>({
    acs: 0,
    fans: 0,
    lights: 0,
    tvs: 0,
    fridges: 0,
    washingMachine: 0,
    iron: 0,
    waterPump: 0,
    bedrooms: 0,
    averageBill: 0,
  })

  const [showResults, setShowResults] = useState(false)

  const getApplianceLimits = () => {
    const br = inputs.bedrooms
    if (br === 0) return { acs: 10, tvs: 10, washingMachine: 2, iron: 2, fans: 20 }
    if (br <= 2) return { acs: 2, tvs: 2, washingMachine: 1, iron: 1, fans: 8 }
    if (br <= 4) return { acs: 4, tvs: 4, washingMachine: 2, iron: 2, fans: 12 }
    if (br <= 6) return { acs: 6, tvs: 6, washingMachine: 2, iron: 2, fans: 16 }
    return { acs: 10, tvs: 10, washingMachine: 3, iron: 3, fans: 20 }
  }

  const limits = getApplianceLimits()

  const handleSliderChange = (field: keyof ApplianceInput, value: number[]) => {
    setInputs({ ...inputs, [field]: value[0] })
  }

  const calculateRequirements = () => {
    // Energy consumption calculation (kWh per day)
    const dailyConsumption =
      inputs.acs * 2.5 * 8 +
      inputs.fans * 0.075 * 10 +
      inputs.lights * 0.015 * 6 +
      inputs.tvs * 0.15 * 6 +
      inputs.fridges * 0.15 * 24 +
      inputs.washingMachine * 0.5 * 1 +
      inputs.iron * 1.5 * 0.5 +
      inputs.waterPump * 0.75 * 2

    // System sizing (add 20% buffer)
    const systemSize = Math.ceil((dailyConsumption * 1.2) / 5)
    const numberOfPanels = Math.ceil(systemSize / 0.55)
    const inverterSize = systemSize
    const batterySize = Math.ceil(dailyConsumption * 1.5)

    // Environmental impact (annual)
    const annualGeneration = systemSize * 5 * 365
    const co2Saved = Math.round(annualGeneration * 0.82)
    const treesSaved = Math.round(co2Saved / 20)
    const waterSaved = Math.round(annualGeneration * 2.5)

    return {
      dailyConsumption: dailyConsumption.toFixed(1),
      systemSize,
      numberOfPanels,
      inverterSize,
      batterySize,
      homeSize: inputs.bedrooms > 0 ? `${inputs.bedrooms} Bedroom Home` : "Custom Configuration",
      monthlyBill: inputs.averageBill,
      estimatedSavings: Math.round(inputs.averageBill * 0.85),
      annualGeneration: Math.round(annualGeneration),
      co2Saved,
      treesSaved,
      waterSaved,
      paybackYears: inputs.averageBill > 0 ? ((systemSize * 120000) / (inputs.averageBill * 12)).toFixed(1) : "N/A",
    }
  }

  const results = showResults ? calculateRequirements() : null

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) {
      return `₨${(amount / 1000000).toFixed(2)}M`
    }
    return `₨${amount.toLocaleString()}`
  }

  const generateWhatsAppMessage = () => {
    if (!results) return ""

    const message = `*Solar System Quote Request*

*Home Configuration:*
🏠 Bedrooms: ${inputs.bedrooms}
❄️ Air Conditioners: ${inputs.acs}
🌀 Fans: ${inputs.fans}
💡 Lights: ${inputs.lights}
📺 TVs: ${inputs.tvs}
🧊 Refrigerators: ${inputs.fridges}
🧺 Washing Machines: ${inputs.washingMachine}
👔 Irons: ${inputs.iron}
💧 Water Pumps: ${inputs.waterPump}

*Current Energy Usage:*
⚡ Daily Consumption: ${results.dailyConsumption} kWh
💵 Monthly Bill: ${formatCurrency(results.monthlyBill)}

*Recommended Solar System:*
☀️ System Size: ${results.systemSize} kW
🔆 Solar Panels: ${results.numberOfPanels} panels (550W)
🔌 Inverter: ${results.inverterSize} kW Hybrid
🔋 Battery Storage: ${results.batterySize} kWh (optional)

*Financial Benefits:*
💰 Monthly Savings: ${formatCurrency(results.estimatedSavings)}
📅 Payback Period: ~${results.paybackYears} years
📈 25-Year Savings: ${formatCurrency(results.estimatedSavings * 12 * 25)}

*Environmental Impact (Annual):*
🌱 CO₂ Reduced: ${results.co2Saved.toLocaleString()} kg
🌳 Trees Equivalent: ${results.treesSaved} trees
💧 Water Saved: ${results.waterSaved.toLocaleString()} liters

Please provide me with a custom quote for this solar system. Thank you!`

    return encodeURIComponent(message)
  }

  const handleWhatsAppQuote = () => {
    const phoneNumber = "923001234567" // Replace with actual WhatsApp number
    const message = generateWhatsAppMessage()
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  const SliderControl = ({
    label,
    value,
    onChange,
    max,
    icon: Icon,
  }: {
    label: string
    value: number
    onChange: (value: number[]) => void
    max: number
    icon: any
  }) => (
    <div className="bg-white rounded-lg p-3 border border-amber-200 hover:border-amber-400 transition-all">
      <div className="flex items-center justify-between mb-3">
        <Label className="text-sm text-gray-700 flex items-center gap-1.5">
          <Icon className="h-3.5 w-3.5 text-amber-600" />
          {label}
        </Label>
        <span className="text-lg font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded min-w-[50px] text-center">
          {value}
        </span>
      </div>
      <div className="px-1">
        <Slider
          value={[value]}
          onValueChange={onChange}
          max={max}
          step={1}
          className="cursor-pointer hover:cursor-grab active:cursor-grabbing"
        />
      </div>
    </div>
  )

  const ConsumptionMeter = ({ dailyKwh }: { dailyKwh: number }) => {
    const monthlyKwh = dailyKwh * 30
    const yearlyKwh = dailyKwh * 365
    const tenYearKwh = yearlyKwh * 10

    const maxValue = tenYearKwh
    const monthlyPercent = (monthlyKwh / maxValue) * 100
    const yearlyPercent = (yearlyKwh / maxValue) * 100
    const tenYearPercent = 100

    return (
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border-2 border-blue-300 mt-3">
        <div className="text-center mb-3">
          <p className="text-xs font-semibold text-blue-900 mb-1">Energy Consumption Meter</p>
          <p className="text-3xl font-bold text-blue-600">{dailyKwh.toFixed(1)} kWh</p>
          <p className="text-xs text-blue-600">per day</p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="text-center">
            <div className="relative w-20 h-20 mx-auto mb-2">
              <svg className="transform -rotate-90 w-20 h-20">
                <circle cx="40" cy="40" r="32" stroke="#dbeafe" strokeWidth="8" fill="none" />
                <circle
                  cx="40"
                  cy="40"
                  r="32"
                  stroke="#3b82f6"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 32}`}
                  strokeDashoffset={`${2 * Math.PI * 32 * (1 - monthlyPercent / 100)}`}
                  strokeLinecap="round"
                  className="transition-all duration-500"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-lg font-bold text-blue-600">{monthlyKwh.toFixed(0)}</p>
                </div>
              </div>
            </div>
            <p className="text-xs font-semibold text-gray-700">Monthly</p>
            <p className="text-xs text-gray-500">kWh</p>
          </div>

          <div className="text-center">
            <div className="relative w-20 h-20 mx-auto mb-2">
              <svg className="transform -rotate-90 w-20 h-20">
                <circle cx="40" cy="40" r="32" stroke="#dbeafe" strokeWidth="8" fill="none" />
                <circle
                  cx="40"
                  cy="40"
                  r="32"
                  stroke="#0ea5e9"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 32}`}
                  strokeDashoffset={`${2 * Math.PI * 32 * (1 - yearlyPercent / 100)}`}
                  strokeLinecap="round"
                  className="transition-all duration-500"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-lg font-bold text-cyan-600">{(yearlyKwh / 1000).toFixed(1)}</p>
                </div>
              </div>
            </div>
            <p className="text-xs font-semibold text-gray-700">Yearly</p>
            <p className="text-xs text-gray-500">MWh</p>
          </div>

          <div className="text-center">
            <div className="relative w-20 h-20 mx-auto mb-2">
              <svg className="transform -rotate-90 w-20 h-20">
                <circle cx="40" cy="40" r="32" stroke="#dbeafe" strokeWidth="8" fill="none" />
                <circle
                  cx="40"
                  cy="40"
                  r="32"
                  stroke="#06b6d4"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 32}`}
                  strokeDashoffset={`${2 * Math.PI * 32 * (1 - tenYearPercent / 100)}`}
                  strokeLinecap="round"
                  className="transition-all duration-500"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-lg font-bold text-cyan-700">{(tenYearKwh / 1000).toFixed(1)}</p>
                </div>
              </div>
            </div>
            <p className="text-xs font-semibold text-gray-700">10 Years</p>
            <p className="text-xs text-gray-500">MWh</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
      <div className="text-center mb-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl p-4 text-white">
        <div className="flex items-center justify-center gap-2 mb-1">
          <Sun className="h-6 w-6" />
          <h2 className="text-2xl font-bold">Solar System Calculator</h2>
        </div>
        <p className="text-amber-100 text-sm">Slide to configure your home appliances</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {/* Home Details Column - Moved first for logical flow */}
        <div className="bg-white rounded-xl p-4 shadow border border-amber-200">
          <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2 bg-amber-50 p-2 rounded-lg">
            <Home className="h-5 w-5 text-amber-600" />
            Home Details
          </h3>
          <div className="space-y-3">
            <SliderControl
              label="Number of Bedrooms"
              value={inputs.bedrooms}
              onChange={(val) => handleSliderChange("bedrooms", val)}
              max={10}
              icon={Home}
            />

            <div className="bg-white rounded-lg p-3 border border-amber-200 hover:border-amber-400 transition-all">
              <div className="flex items-center justify-between mb-3">
                <Label className="text-sm text-gray-700 flex items-center gap-1.5">
                  <Zap className="h-3.5 w-3.5 text-amber-600" />
                  Monthly Electricity Bill
                </Label>
                <span className="text-lg font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded min-w-[80px] text-center">
                  {formatCurrency(inputs.averageBill)}
                </span>
              </div>
              <div className="px-1">
                <Slider
                  value={[inputs.averageBill]}
                  onValueChange={(val) => handleSliderChange("averageBill", val)}
                  max={100000}
                  step={1000}
                  className="cursor-pointer hover:cursor-grab active:cursor-grabbing"
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>₨0</span>
                <span>₨100K+</span>
              </div>
            </div>

            {(inputs.acs > 0 || inputs.fans > 0 || inputs.lights > 0) && (
              <>
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-300">
                  <p className="text-xs text-gray-600 mb-1">Estimated Daily Consumption</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {(
                      inputs.acs * 2.5 * 8 +
                      inputs.fans * 0.075 * 10 +
                      inputs.lights * 0.015 * 6 +
                      inputs.tvs * 0.15 * 6 +
                      inputs.fridges * 0.15 * 24 +
                      inputs.washingMachine * 0.5 * 1 +
                      inputs.iron * 1.5 * 0.5 +
                      inputs.waterPump * 0.75 * 2
                    ).toFixed(1)}{" "}
                    kWh
                  </p>
                </div>
                <ConsumptionMeter
                  dailyKwh={
                    inputs.acs * 2.5 * 8 +
                    inputs.fans * 0.075 * 10 +
                    inputs.lights * 0.015 * 6 +
                    inputs.tvs * 0.15 * 6 +
                    inputs.fridges * 0.15 * 24 +
                    inputs.washingMachine * 0.5 * 1 +
                    inputs.iron * 1.5 * 0.5 +
                    inputs.waterPump * 0.75 * 2
                  }
                />
              </>
            )}
          </div>
        </div>

        {/* Appliances Column - With dynamic limits */}
        <div className="bg-white rounded-xl p-4 shadow border border-amber-200">
          <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2 bg-amber-50 p-2 rounded-lg">
            <Zap className="h-5 w-5 text-amber-600" />
            Home Appliances
          </h3>
          {inputs.bedrooms > 0 && (
            <p className="text-xs text-gray-600 mb-3 bg-blue-50 p-2 rounded border border-blue-200">
              Limits adjusted for {inputs.bedrooms} bedroom home
            </p>
          )}
          <div className="space-y-2.5">
            <SliderControl
              label="Air Conditioners"
              value={inputs.acs}
              onChange={(val) => handleSliderChange("acs", val)}
              max={limits.acs}
              icon={Zap}
            />
            <SliderControl
              label="Ceiling Fans"
              value={inputs.fans}
              onChange={(val) => handleSliderChange("fans", val)}
              max={limits.fans}
              icon={Zap}
            />
            <SliderControl
              label="LED Lights"
              value={inputs.lights}
              onChange={(val) => handleSliderChange("lights", val)}
              max={50}
              icon={Sun}
            />
            <SliderControl
              label="TVs"
              value={inputs.tvs}
              onChange={(val) => handleSliderChange("tvs", val)}
              max={limits.tvs}
              icon={Zap}
            />
            <SliderControl
              label="Refrigerators"
              value={inputs.fridges}
              onChange={(val) => handleSliderChange("fridges", val)}
              max={5}
              icon={Zap}
            />
            <SliderControl
              label="Washing Machine"
              value={inputs.washingMachine}
              onChange={(val) => handleSliderChange("washingMachine", val)}
              max={limits.washingMachine}
              icon={Zap}
            />
            <SliderControl
              label="Iron"
              value={inputs.iron}
              onChange={(val) => handleSliderChange("iron", val)}
              max={limits.iron}
              icon={Zap}
            />
            <SliderControl
              label="Water Pump"
              value={inputs.waterPump}
              onChange={(val) => handleSliderChange("waterPump", val)}
              max={3}
              icon={Droplets}
            />
          </div>
        </div>
      </div>

      <Button
        onClick={() => setShowResults(true)}
        className="w-full h-12 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 font-semibold mb-4"
      >
        <Calculator className="mr-2 h-5 w-5" />
        Calculate My Solar System
      </Button>

      {showResults && results && (
        <div className="mt-6 space-y-4 animate-in fade-in duration-500">
          {/* System Requirements */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Sun className="h-6 w-6 text-amber-500" />
              Your Recommended Solar System
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Card className="p-3 bg-white border border-amber-200">
                <div className="text-center">
                  <Sun className="h-6 w-6 text-amber-500 mx-auto mb-1" />
                  <p className="text-xs text-gray-600">System Capacity</p>
                  <p className="text-2xl font-bold text-gray-900">{results.systemSize} kW</p>
                </div>
              </Card>

              <Card className="p-3 bg-white border border-amber-200">
                <div className="text-center">
                  <Zap className="h-6 w-6 text-blue-500 mx-auto mb-1" />
                  <p className="text-xs text-gray-600">Solar Panels</p>
                  <p className="text-2xl font-bold text-gray-900">{results.numberOfPanels}</p>
                  <p className="text-xs text-gray-500">550W</p>
                </div>
              </Card>

              <Card className="p-3 bg-white border border-amber-200">
                <div className="text-center">
                  <Battery className="h-6 w-6 text-green-500 mx-auto mb-1" />
                  <p className="text-xs text-gray-600">Inverter</p>
                  <p className="text-2xl font-bold text-gray-900">{results.inverterSize} kW</p>
                  <p className="text-xs text-gray-500">Hybrid</p>
                </div>
              </Card>

              <Card className="p-3 bg-white border border-amber-200">
                <div className="text-center">
                  <Battery className="h-6 w-6 text-purple-500 mx-auto mb-1" />
                  <p className="text-xs text-gray-600">Battery</p>
                  <p className="text-2xl font-bold text-gray-900">{results.batterySize} kWh</p>
                  <p className="text-xs text-gray-500">Optional</p>
                </div>
              </Card>
            </div>

            <div className="mt-3 grid md:grid-cols-2 gap-2">
              <div className="bg-white rounded-lg p-2 border border-amber-200 text-center">
                <p className="text-xs text-gray-600">Perfect For</p>
                <p className="text-sm font-bold text-gray-900">{results.homeSize}</p>
              </div>
              <div className="bg-white rounded-lg p-2 border border-amber-200 text-center">
                <p className="text-xs text-gray-600">Daily Generation</p>
                <p className="text-sm font-bold text-gray-900">{results.dailyConsumption} kWh</p>
              </div>
            </div>
          </div>

          {/* Financial Value */}
          {results.monthlyBill > 0 && (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Value</h3>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="bg-white rounded-lg p-3 border border-green-200 text-center">
                  <p className="text-xs text-gray-600 mb-1">Current Bill</p>
                  <p className="text-2xl font-bold text-red-600">{formatCurrency(results.monthlyBill)}</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-green-200 text-center">
                  <p className="text-xs text-gray-600 mb-1">New Bill</p>
                  <p className="text-2xl font-bold text-green-600">
                    {formatCurrency(results.monthlyBill - results.estimatedSavings)}
                  </p>
                  <p className="text-xs text-green-600">~85% reduction</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-green-200 text-center">
                  <p className="text-xs text-gray-600 mb-1">Monthly Savings</p>
                  <p className="text-2xl font-bold text-green-600">{formatCurrency(results.estimatedSavings)}</p>
                  <p className="text-xs text-gray-600">ROI: ~{results.paybackYears} yrs</p>
                </div>
              </div>
              <div className="mt-3 bg-white rounded-lg p-2 border border-green-200 text-center">
                <p className="text-sm font-semibold text-gray-900">
                  25-Year Savings: {formatCurrency(results.estimatedSavings * 12 * 25)}
                </p>
              </div>
            </div>
          )}

          {/* Environmental Impact */}
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-4 border border-green-300">
            <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Leaf className="h-6 w-6 text-green-600" />
              Your Environmental Impact
            </h3>
            <p className="text-sm text-gray-700 mb-3">Contributing to Pakistan's green economy</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Card className="p-3 bg-white border border-green-200">
                <div className="text-center">
                  <Leaf className="h-6 w-6 text-green-600 mx-auto mb-1" />
                  <p className="text-xs text-gray-600">CO₂ Reduced</p>
                  <p className="text-xl font-bold text-green-700">{results.co2Saved.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">kg/year</p>
                </div>
              </Card>

              <Card className="p-3 bg-white border border-green-200">
                <div className="text-center">
                  <TreePine className="h-6 w-6 text-green-700 mx-auto mb-1" />
                  <p className="text-xs text-gray-600">Trees Saved</p>
                  <p className="text-xl font-bold text-green-700">{results.treesSaved}</p>
                  <p className="text-xs text-gray-500">equivalent/year</p>
                </div>
              </Card>

              <Card className="p-3 bg-white border border-green-200">
                <div className="text-center">
                  <Droplets className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                  <p className="text-xs text-gray-600">Water Saved</p>
                  <p className="text-xl font-bold text-blue-700">{results.waterSaved.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">liters/year</p>
                </div>
              </Card>

              <Card className="p-3 bg-white border border-green-200">
                <div className="text-center">
                  <Sun className="h-6 w-6 text-yellow-600 mx-auto mb-1" />
                  <p className="text-xs text-gray-600">Clean Energy</p>
                  <p className="text-xl font-bold text-yellow-700">{results.annualGeneration.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">kWh/year</p>
                </div>
              </Card>
            </div>

            <div className="mt-3 bg-white rounded-lg p-3 border border-green-300">
              <p className="text-sm text-center text-gray-700">
                Over 25 years:{" "}
                <span className="font-bold text-green-700">{(results.co2Saved * 25).toLocaleString()} kg CO₂</span>{" "}
                prevented, equivalent to <span className="font-bold text-green-700">{results.treesSaved * 25}</span>{" "}
                trees!
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-3 border border-blue-300">
            <p className="text-xs text-gray-700 text-center">
              <span className="font-semibold">Disclaimer:</span> All figures above are for estimation purposes only.
              Actual specifications and costs may vary based on site assessment, equipment availability, and
              installation requirements. Please consult with our Solar Expert for accurate customized quotation.
            </p>
          </div>

          <Button
            onClick={handleWhatsAppQuote}
            className="w-full h-14 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 font-bold text-lg shadow-lg"
          >
            <svg className="mr-2 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Request Custom Quote via WhatsApp
          </Button>
        </div>
      )}
    </div>
  )
}
