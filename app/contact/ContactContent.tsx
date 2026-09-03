"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { company } from "@/src/data/company";

export default function ContactContent() {
  const shouldReduceMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-neutral text-neutral-content py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-contact.jpg"
            alt="GTELS project site with community members"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-content/60 mb-3 block">
              Get in Touch
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              Contact <span className="text-primary">GTELS</span>
            </h1>
            <p className="text-lg text-neutral-content/70 max-w-2xl">
              Talk to GTELS about your next engineering, WASH, logistics, or infrastructure project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <ScrollReveal direction="left" className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary text-primary-content flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Address</h3>
                    <p className="text-sm text-base-content/70">{company.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary text-primary-content flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Phone</h3>
                    <a href={`tel:${company.phone}`} className="text-sm text-base-content/70 hover:text-primary transition-colors">
                      {company.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary text-primary-content flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Email</h3>
                    <a href={`mailto:${company.email}`} className="text-sm text-base-content/70 hover:text-primary transition-colors">
                      {company.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-base-200 rounded-xl p-6">
                <h3 className="font-semibold text-sm mb-2">Head Office</h3>
                <p className="text-sm text-base-content/60">{company.address}</p>
                <p className="text-sm text-base-content/60 mt-1">Bangladesh</p>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="right" className="lg:col-span-3">
              {submitted ? (
                <div className="bg-base-200 rounded-2xl p-10 text-center">
                  <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-2">Message Received</h2>
                  <p className="text-base-content/60 mb-6">
                    Thank you for contacting GTELS. We will respond to your inquiry as soon as possible.
                  </p>
                  <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-base-200 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="label">
                        <span className="label-text font-medium">Name *</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="input input-bordered w-full"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="organization" className="label">
                        <span className="label-text font-medium">Organization</span>
                      </label>
                      <input
                        type="text"
                        id="organization"
                        className="input input-bordered w-full"
                        placeholder="Organization name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="label">
                        <span className="label-text font-medium">Email *</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="input input-bordered w-full"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="label">
                        <span className="label-text font-medium">Phone</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="input input-bordered w-full"
                        placeholder="+880..."
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="subject" className="label">
                      <span className="label-text font-medium">Subject *</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      className="input input-bordered w-full"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="label">
                      <span className="label-text font-medium">Message *</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      className="textarea textarea-bordered w-full min-h-[140px]"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                  <button type="submit" className="btn btn-primary gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                  <p className="text-xs text-base-content/50 mt-3">
                    This form is for demonstration purposes. Backend integration required for actual message delivery.
                  </p>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
