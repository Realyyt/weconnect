"use client"

import type React from "react"

import { useState } from "react"

import Link from "next/link"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"

// Form steps
type FormStep = "state" | "email" | "name" | "phone" | "success"

// Form data interface
interface FormData {
  state: string
  email: string
  prefix: string
  firstName: string
  lastName: string
  phone: string
}

export default function GetPreQualifiedPage() {
  const [currentStep, setCurrentStep] = useState<FormStep>("state")
  const [formData, setFormData] = useState<FormData>({
    state: "",
    email: "",
    prefix: "Mr",
    firstName: "",
    lastName: "",
    phone: "",
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // List of US states
  const states = [
    "Alabama",
    "Alaska", 
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
    "District of Columbia",
  ]

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when field is updated
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  // Validate current step
  const validateStep = (): boolean => {
    const newErrors: Partial<FormData> = {}

    switch (currentStep) {
      case "state":
        if (!formData.state) newErrors.state = "Please select a state"
        break
      case "email":
        if (!formData.email) {
          newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = "Please enter a valid email"
        }
        break
      case "name":
        if (!formData.firstName) newErrors.firstName = "First name is required"
        if (!formData.lastName) newErrors.lastName = "Last name is required"
        break
      case "phone":
        if (!formData.phone) {
          newErrors.phone = "Phone number is required"
        } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
          newErrors.phone = "Please enter a valid 10-digit phone number"
        }
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle next step
  const handleNext = () => {
    if (!validateStep()) return

    switch (currentStep) {
      case "state":
        setCurrentStep("email")
        break
      case "email":
        setCurrentStep("name")
        break
      case "name":
        setCurrentStep("phone")
        break
      case "phone":
        handleSubmit()
        break
    }
  }

  // Handle previous step
  const handlePrevious = () => {
    switch (currentStep) {
      case "email":
        setCurrentStep("state")
        break
      case "name":
        setCurrentStep("email")
        break
      case "phone":
        setCurrentStep("name")
        break
    }
  }

  // Handle form submission
  const handleSubmit = async () => {
    if (!validateStep()) return

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/submit-pre-qualification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setCurrentStep("success")
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting your information. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Format phone number as user types
  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, "")

    if (phoneNumber.length <= 3) {
      return phoneNumber
    } else if (phoneNumber.length <= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
    } else {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
    }
  }

  // Handle phone input change with formatting
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(e.target.value)
    setFormData((prev) => ({ ...prev, phone: formattedValue }))

    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: undefined }))
    }
  }

  // Render progress indicator
  const renderProgress = () => {
    const steps = ["state", "email", "name", "phone"]
    const currentIndex = steps.indexOf(currentStep)

    return (
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {steps.map((step, index) => (
            <div key={step} className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index <= currentIndex ? "bg-pink-600 text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                {index < currentIndex ? <Check className="w-5 h-5" /> : index + 1}
              </div>
              <span className="text-xs mt-1 text-gray-500 capitalize">{step}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 h-1 bg-gray-200 w-full">
          <div
            className="h-full bg-pink-600 transition-all duration-300"
            style={{ width: `${(currentIndex / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full bg-pink-600 text-white py-4">
        <div className="container mx-auto px-4">
          <Link href="/loans/fix-and-flip" className="flex items-center text-white">
            <ChevronLeft className="mr-2" />
            Back to Fix-and-Flip Loans
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Get Pre-Qualified</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-600 mb-6">Complete this form to get pre-qualified for your fix-and-flip loan.</p>

          {currentStep !== "success" && renderProgress()}

          {/* State Selection Step */}
          {currentStep === "state" && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-700">Select your state</h2>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                  State <span className="text-pink-600">*</span>
                </label>
                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 ${
                    errors.state ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select a state</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state}</p>}
              </div>
            </div>
          )}

          {/* Email Step */}
          {currentStep === "email" && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-700">Enter your email</h2>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-pink-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
            </div>
          )}

          {/* Name Step */}
          {currentStep === "name" && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-700">Enter your name</h2>

              <div>
                <label htmlFor="prefix" className="block text-sm font-medium text-gray-700 mb-1">
                  Prefix
                </label>
                <select
                  id="prefix"
                  name="prefix"
                  value={formData.prefix}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                >
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Ms">Ms</option>
                  <option value="Dr">Dr</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-pink-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name <span className="text-pink-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 ${
                      errors.lastName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Phone Step */}
          {currentStep === "phone" && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-700">Enter your phone number</h2>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-pink-600">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="(123) 456-7890"
                  className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>
            </div>
          )}

          {/* Success Step */}
          {currentStep === "success" && (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-pink-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
              <p className="text-gray-600 mb-6">
                Your pre-qualification request has been submitted successfully. One of our loan specialists will contact
                you shortly.
              </p>
              <Link
                href="/"
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Return to Home page
              </Link>
            </div>
          )}

          {/* Navigation Buttons */}
          {currentStep !== "success" && (
            <div className="flex justify-between mt-8">
              {currentStep !== "state" ? (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  <ChevronLeft className="w-5 h-5 mr-1" />
                  Back
                </button>
              ) : (
                <div></div>
              )}

              <button
                type="button"
                onClick={handleNext}
                disabled={isSubmitting}
                className={`flex items-center px-6 py-2 bg-pink-600 rounded-md text-white hover:bg-pink-700 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    {currentStep === "phone" ? "Submit" : "Next"}
                    {currentStep !== "phone" && <ChevronRight className="w-5 h-5 ml-1" />}
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            By submitting this form, you agree to our{" "}
            <Link href="#" className="text-pink-600 hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-pink-600 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
