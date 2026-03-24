import ContactForm from "@/components/contact/ContactForm";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: "Port Moresby, National Capital District, Papua New Guinea",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@skproteck.com.pg",
    href: "mailto:info@skproteck.com.pg",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+675 XXX XXXX",
    href: "tel:+675XXXXXXXX",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Fri: 8:00AM – 5:00PM | Emergency: 24/7",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-[#f8fafc]">
      {/* Hero */}
      <section className="bg-[#1a1a2e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[#f59e0b] text-sm font-bold uppercase tracking-widest">Get in Touch</span>
            <h1 className="text-5xl font-black text-white mt-3 mb-6">Let&apos;s Power Your Business</h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you need a generator service quote, a maintenance contract, or want to discuss a construction project — our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <h2 className="text-2xl font-black text-[#1a1a2e] mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Details + Map */}
            <div className="lg:col-span-2 space-y-6">
              {/* Details Card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <h2 className="text-xl font-black text-[#1a1a2e] mb-6">Contact Details</h2>
                <div className="space-y-5">
                  {contactDetails.map((detail) => {
                    const Icon = detail.icon;
                    return (
                      <div key={detail.label} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#f59e0b]/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-5 h-5 text-[#f59e0b]" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">{detail.label}</p>
                          {detail.href ? (
                            <a href={detail.href} className="text-sm text-[#1a1a2e] font-medium hover:text-[#f59e0b] transition-colors">
                              {detail.value}
                            </a>
                          ) : (
                            <p className="text-sm text-[#1a1a2e] font-medium">{detail.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] h-56 flex flex-col items-center justify-center text-center p-6">
                  <MapPin className="w-10 h-10 text-[#f59e0b] mb-3" />
                  <p className="text-white font-bold text-lg">Port Moresby, PNG</p>
                  <p className="text-gray-400 text-sm mt-1">National Capital District</p>
                  <p className="text-gray-500 text-xs mt-3">
                    [Google Maps integration available on request]
                  </p>
                </div>
              </div>

              {/* Emergency Box */}
              <div className="bg-[#f59e0b] rounded-2xl p-6">
                <h3 className="text-[#1a1a2e] font-black text-lg mb-2">Emergency Generator Support</h3>
                <p className="text-[#1a1a2e]/80 text-sm mb-4">Generator failure? Our technicians are on-call 24/7 for emergency response across PNG.</p>
                <a href="tel:+675XXXXXXXX" className="inline-flex items-center gap-2 bg-[#1a1a2e] text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-[#16213e] transition-colors">
                  <Phone className="w-4 h-4" />
                  Call Emergency Line
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
