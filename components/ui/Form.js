import { Input } from "./input.js";
import { Textarea } from "./textarea.js";
import { Button } from "./button.js";
import React from "react";

function Form({ onSubmit, formData, handleInputChange, buttonLabel }) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Your Name"
        required
        className="w-full p-2 border rounded"
      />
      <Input
        name="mobile"
        value={formData.mobile}
        onChange={handleInputChange}
        placeholder="Mobile Number"
        required
        className="w-full p-2 border rounded"
      />
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
        required
        className="w-full p-2 border rounded"
      />
      <Input
        name="course"
        value={formData.course}
        onChange={handleInputChange}
        placeholder="Course Interested In"
        className="w-full p-2 border rounded"
      />
      <select
        name="mode"
        value={formData.mode}
        onChange={handleInputChange}
        required
        className="w-full p-2 border rounded"
      >
        <option value="">Select Mode</option>
        <option value="Online">Online</option>
        <option value="Offline">Offline</option>
      </select>
      <Textarea
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        placeholder="Your Message"
        rows={4}
        className="w-full p-2 border rounded"
      />
      <Button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        {buttonLabel}
      </Button>
    </form>
  );
}

export default Form; 