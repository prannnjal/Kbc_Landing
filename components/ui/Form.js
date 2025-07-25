import { Input } from "./input"
import { Textarea } from "./textarea"
import { Button } from "./button"
import React from "react"

export default function Form({ onSubmit, formData, handleInputChange, buttonLabel }) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          placeholder="Full Name *"
          className="h-12 text-base"
        />
      </div>
      <div>
        <Input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleInputChange}
          required
          placeholder="Mobile Number *"
          className="h-12 text-base"
        />
      </div>
      <div>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          placeholder="Email Address *"
          className="h-12 text-base"
        />
      </div>
      <div>
        <select
          name="course"
          value={formData.course}
          onChange={handleInputChange}
          required
          className="w-full h-12 px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        >
          <option value="">Select Course *</option>
          <option value="upsc-foundation">UPSC Foundation Course</option>
          <option value="bpsc-complete">BPSC Complete Course</option>
          <option value="optional-subjects">Optional Subjects</option>
          <option value="test-series">Test Series Only</option>
          <option value="counseling">Need Counseling</option>
        </select>
      </div>
      <div>
        <select
          name="mode"
          value={formData.mode}
          onChange={handleInputChange}
          required
          className="w-full h-12 px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        >
          <option value="">Preferred Mode *</option>
          <option value="offline">Offline Classes</option>
          <option value="online">Online Classes</option>
          <option value="hybrid">Hybrid (Online + Offline)</option>
        </select>
      </div>
      <div>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Any specific questions or requirements?"
          rows={3}
        />
      </div>
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-base font-semibold">
        {buttonLabel}
      </Button>
    </form>
  )
} 