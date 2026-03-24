"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle, Send } from "lucide-react";

const serviceOptions = [
  "Generator Filtering",
  "Generator Cleaning",
  "Oil Services",
  "Maintenance & Repair",
  "Power Consulting",
  "Community / Construction Projects",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: send to API or email service
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-[#1a1a2e]">Message Sent!</h3>
        <p className="text-gray-500 max-w-sm text-sm">
          Thank you for reaching out. Our team will get back to you within one business day.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", company: "", email: "", phone: "", service: "", message: "" });
          }}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Full Name <span className="text-[#f59e0b]">*</span>
          </label>
          <Input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            required
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Company / Organisation
          </label>
          <Input
            id="company"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Your Company Ltd"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Email Address <span className="text-[#f59e0b]">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@company.com"
            required
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+675 XXX XXXX"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="service" className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Service of Interest <span className="text-[#f59e0b]">*</span>
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          required
          className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f59e0b] focus-visible:ring-offset-2 text-gray-700"
        >
          <option value="">Select a service...</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Message <span className="text-[#f59e0b]">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your generator, project, or requirements..."
          rows={5}
          required
          className="resize-none"
        />
      </div>

      <Button type="submit" size="lg" className="w-full group font-bold">
        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        Send Message
      </Button>

      <p className="text-xs text-gray-400 text-center">
        By submitting you agree to our privacy policy. We never share your details.
      </p>
    </form>
  );
}
