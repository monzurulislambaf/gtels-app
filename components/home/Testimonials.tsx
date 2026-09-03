"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/src/data/testimonials";

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [paused, setPaused] = useState(false);

  const items = [...testimonials, ...testimonials];

  return (
    <section className="py-20 lg:py-28 bg-base-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          eyebrow="Trusted Partners"
          title="Organizations That Trust GTELS"
          description="Our work is recognized by leading international organizations, government agencies, and development partners across Bangladesh."
        />

        {/* Round-card scrolling marquee */}
        <div
          ref={ref}
          className="relative mt-12 lg:mt-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-28 bg-gradient-to-r from-base-200/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-28 bg-gradient-to-l from-base-200/50 to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden py-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-8 sm:gap-10 lg:gap-14 w-max"
              style={{
                animation: "scroll-left 45s linear infinite",
                animationPlayState: paused ? "paused" : "running",
              }}
            >
              {items.map((testimonial, i) => {
                const duplicated = i >= testimonials.length;
                return (
                  <div
                    key={`${testimonial.id}-${i}`}
                    aria-hidden={duplicated}
                    className="flex items-center flex-shrink-0 w-28 sm:w-36 md:w-44 group cursor-pointer"
                  >
                    {/* Circular framed image */}
                    <div className="rounded-full bg-base-100 p-1.5 md:p-2 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.25)] ring-1 ring-base-300 transition-transform duration-300 group-hover:scale-105 group-hover:ring-primary/30">
                      <img
                        src={testimonial.src}
                        alt={duplicated ? "" : testimonial.alt}
                        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                );
              })}
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
