"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/src/data/testimonials";

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 lg:py-28 bg-base-200/50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          eyebrow="Trusted Partners"
          title="Organizations That Trust GTELS"
          description="Our work is recognized by leading international organizations, government agencies, and development partners across Bangladesh."
        />

        {/* Scrolling carousel */}
        <div ref={ref} className="relative mt-10">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-24 bg-gradient-to-r from-base-200/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-24 bg-gradient-to-l from-base-200/50 to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="flex gap-6 items-center"
              style={{
                animation: "scroll-left 40s linear infinite",
              }}
            >
              {/* Duplicate for infinite scroll effect */}
              {[...testimonials, ...testimonials].map((testimonial, i) => (
                <div
                  key={`${testimonial.id}-${i}`}
                  className="relative flex-shrink-0 w-48 h-64 md:w-56 md:h-72 lg:w-64 lg:h-80 rounded-xl overflow-hidden group"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    <Quote className="w-4 h-4 text-white/60 mb-1" />
                    <p className="text-white text-xs font-medium leading-snug">
                      {testimonial.alt}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>


      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(0);
            }
          }
        }
      `}</style>
    </section>
  );
}
