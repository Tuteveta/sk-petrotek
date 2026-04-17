"use client";

import { useState } from "react";
import type { ChangeEvent } from "react";
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

const inputClass = "w-full h-9 bg-[#111217] border border-[#2c3235] rounded-sm px-3 text-xs text-[#d0d0d0] placeholder:text-[#3d4450] focus:outline-none focus:border-[#f59e0b] transition-colors";
const labelClass = "text-xs font-mono text-[#5a6374] uppercase tracking-widest";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", service: "", message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <div className="w-14 h-14 bg-[#73bf69]/10 border border-[#73bf69]/30 rounded-sm flex items-center justify-center">
          <CheckCircle className="w-7 h-7 text-[#73bf69]" />
        </div>
        <h3 className="text-base font-bold text-[#d0d0d0]">Message Sent</h3>
        <p className="text-[#8e9aad] max-w-sm text-xs font-mono">
          Thank you for reaching out. Our team will get back to you within one business day.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", company: "", email: "", phone: "", service: "", message: "" });
          }}
          className="h-8 px-4 text-xs font-mono uppercase tracking-wider border border-[#2c3235] text-[#8e9aad] rounded-sm hover:border-[#f59e0b] hover:text-[#f59e0b] transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-[#f59e0b]">*</span>
          </label>
          <input id="name" name="name" value={form.name} onChange={handleChange}
            placeholder="John Smith" required className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className={labelClass}>Company / Organisation</label>
          <input id="company" name="company" value={form.company} onChange={handleChange}
            placeholder="Your Company Ltd" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-[#f59e0b]">*</span>
          </label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
            placeholder="john@company.com" required className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className={labelClass}>Phone Number</label>
          <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
            placeholder="+675 XXX XXXX" className={inputClass} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="service" className={labelClass}>
          Service of Interest <span className="text-[#f59e0b]">*</span>
        </label>
        <select id="service" name="service" value={form.service} onChange={handleChange} required
          className="w-full h-9 bg-[#111217] border border-[#2c3235] rounded-sm px-3 text-xs text-[#d0d0d0] focus:outline-none focus:border-[#f59e0b] transition-colors">
          <option value="" className="text-[#3d4450]">Select a service...</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt} className="bg-[#1f2329] text-[#d0d0d0]">{opt}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-[#f59e0b]">*</span>
        </label>
        <textarea id="message" name="message" value={form.message} onChange={handleChange}
          placeholder="Tell us about your generator, project, or requirements..."
          rows={5} required
          className="w-full bg-[#111217] border border-[#2c3235] rounded-sm px-3 py-2 text-xs text-[#d0d0d0] placeholder:text-[#3d4450] focus:outline-none focus:border-[#f59e0b] transition-colors resize-none" />
      </div>

      <button type="submit"
        className="group w-full h-10 inline-flex items-center justify-center gap-2 bg-[#f59e0b] text-[#111217] text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#d97706] transition-colors">
        <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        Send Message
      </button>

      <p className="text-xs text-[#5a6374] text-center font-mono">
        By submitting you agree to our privacy policy. We never share your details.
      </p>
    </form>
  );
}
