import ContactForm from "@/components/contact/ContactForm";
import { MapPin, Mail, Phone, Clock, AlertTriangle } from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";

const contactDetails = [
  { icon: MapPin, label: "Address", value: "Port Moresby, National Capital District, Papua New Guinea" },
  { icon: Mail, label: "Email", value: "info@skproteck.com.pg", href: "mailto:info@skproteck.com.pg" },
  { icon: Phone, label: "Phone", value: "+675 XXX XXXX", href: "tel:+675XXXXXXXX" },
  { icon: Clock, label: "Business Hours", value: "Mon – Fri: 8:00AM – 5:00PM | Emergency: 24/7" },
];

export default function ContactPage() {
  return (
    <div className="bg-[#111217]">

      {/* Page Hero */}
      <section className="bg-[#161719] border-b border-[#2c3235] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Breadcrumb crumbs={[{ label: "Contact" }]} />
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px w-5 bg-[#f59e0b]" />
              <span className="text-[#f59e0b] text-xs font-mono uppercase tracking-widest">Get in Touch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#d0d0d0] leading-tight mb-5">
              Let&apos;s Power<br />
              <span className="text-[#f59e0b]">Your Business</span>
            </h1>
            <p className="text-[#8e9aad] text-base leading-relaxed">
              Whether you need a generator service quote, a maintenance contract, or want to discuss a construction project — our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

            {/* Form panel */}
            <div className="lg:col-span-3">
              <div className="bg-[#1f2329] border border-[#2c3235] rounded-sm" style={{ borderTop: "3px solid #f59e0b" }}>
                <div className="px-6 py-4 border-b border-[#2c3235]">
                  <h2 className="text-sm font-bold text-[#d0d0d0] uppercase tracking-wider">Send Us a Message</h2>
                </div>
                <div className="p-6">
                  <ContactForm />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-4">

              {/* Contact details */}
              <div className="bg-[#1f2329] border border-[#2c3235] rounded-sm">
                <div className="px-5 py-3 border-b border-[#2c3235]">
                  <h2 className="text-xs font-mono text-[#8e9aad] uppercase tracking-widest">Contact Details</h2>
                </div>
                <div className="p-5 space-y-4">
                  {contactDetails.map((detail) => {
                    const Icon = detail.icon;
                    return (
                      <div key={detail.label} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-3.5 h-3.5 text-[#f59e0b]" />
                        </div>
                        <div>
                          <p className="text-xs text-[#5a6374] font-mono uppercase tracking-wider mb-0.5">{detail.label}</p>
                          {detail.href ? (
                            <a href={detail.href} className="text-xs text-[#d0d0d0] hover:text-[#f59e0b] transition-colors">
                              {detail.value}
                            </a>
                          ) : (
                            <p className="text-xs text-[#d0d0d0]">{detail.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-[#1f2329] border border-[#2c3235] rounded-sm overflow-hidden">
                <div className="bg-[#161719] h-44 flex flex-col items-center justify-center text-center p-6 border-b border-[#2c3235]">
                  <MapPin className="w-8 h-8 text-[#f59e0b] mb-2" />
                  <p className="text-[#d0d0d0] font-bold text-sm">Port Moresby, PNG</p>
                  <p className="text-[#5a6374] text-xs font-mono mt-1">National Capital District</p>
                </div>
                <div className="px-4 py-2">
                  <p className="text-[#5a6374] text-xs font-mono text-center">Map integration available on request</p>
                </div>
              </div>

              {/* Emergency box */}
              <div className="bg-[#f59e0b]/5 border border-[#f59e0b]/30 rounded-sm p-5">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-[#f59e0b]" />
                  <h3 className="text-[#f59e0b] font-bold text-sm">Emergency Generator Support</h3>
                </div>
                <p className="text-[#8e9aad] text-xs mb-4 leading-relaxed">Generator failure? Our technicians are on-call 24/7 for emergency response across PNG.</p>
                <a
                  href="tel:+675XXXXXXXX"
                  className="inline-flex items-center gap-2 bg-[#f59e0b] text-[#111217] text-xs font-bold px-4 py-2 rounded-sm hover:bg-[#d97706] transition-colors uppercase tracking-wider"
                >
                  <Phone className="w-3.5 h-3.5" />
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
