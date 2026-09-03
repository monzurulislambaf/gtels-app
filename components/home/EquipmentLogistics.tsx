"use client";

import Link from "next/link";
import { ArrowRight, Truck, Wrench } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { equipment } from "@/src/data/equipment";
import { fleet } from "@/src/data/fleet";

export default function EquipmentLogistics() {
  const totalEquipment = equipment.reduce((sum, e) => sum + e.quantity, 0);
  const totalVehicles = fleet.reduce((sum, f) => sum + f.count, 0);

  return (
    <section className="py-20 lg:py-28 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          eyebrow="Equipment & Logistics"
          title="Technical Resources & Fleet"
          description="Comprehensive equipment inventory and nationwide logistics capability."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {/* Equipment */}
          <ScrollReveal direction="left">
            <div className="card bg-base-100 shadow-sm border border-base-300 h-full">
              <div className="card-body p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary text-primary-content flex items-center justify-center">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Equipment</h3>
                    <p className="text-sm text-base-content/60">{totalEquipment}+ items across {equipment.length} categories</p>
                  </div>
                </div>
                <div className="space-y-2 mt-2">
                  {equipment.slice(0, 6).map((item) => (
                    <div key={item.id} className="flex items-center justify-between text-sm">
                      <span className="text-base-content/70">{item.name}</span>
                      <span className="font-medium text-primary">{item.quantity}×</span>
                    </div>
                  ))}
                </div>
                <div className="card-actions mt-5">
                  <Link href="/equipment" className="btn btn-outline btn-primary btn-sm gap-2">
                    View All Equipment <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Fleet */}
          <ScrollReveal direction="right">
            <div className="card bg-base-100 shadow-sm border border-base-300 h-full">
              <div className="card-body p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent text-accent-content flex items-center justify-center">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Fleet</h3>
                    <p className="text-sm text-base-content/60">{totalVehicles} vehicles across {fleet.length} types</p>
                  </div>
                </div>
                <div className="space-y-2 mt-2">
                  {fleet.slice(0, 6).map((item) => (
                    <div key={item.id} className="flex items-center justify-between text-sm">
                      <span className="text-base-content/70">{item.vehicleType} ({item.model})</span>
                      <span className="font-medium text-accent">{item.count}×</span>
                    </div>
                  ))}
                </div>
                <div className="card-actions mt-5">
                  <Link href="/logistics" className="btn btn-outline btn-accent btn-sm gap-2">
                    View Fleet & Logistics <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
