import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import AboutPreview from "@/components/home/AboutPreview";
import CoreCapabilities from "@/components/home/CoreCapabilities";
import WashPreview from "@/components/home/WashPreview";
import WhyGtels from "@/components/home/WhyGtels";
import ProjectPreview from "@/components/home/ProjectPreview";
import NationalCoverage from "@/components/home/NationalCoverage";
import EquipmentLogistics from "@/components/home/EquipmentLogistics";
import TeamPreview from "@/components/home/TeamPreview";
import QualityHSE from "@/components/home/QualityHSE";
import GalleryPreview from "@/components/home/GalleryPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutPreview />
      <CoreCapabilities />
      <WashPreview />
      <WhyGtels />
      <ProjectPreview />
      <NationalCoverage />
      <EquipmentLogistics />
      <TeamPreview />
      <QualityHSE />
      <GalleryPreview />
    </>
  );
}
