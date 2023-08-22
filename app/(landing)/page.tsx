import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";
import WorksSection from "../components/WorksSection";
import ContactSection from "../components/ContactSection";
import Heading from "../components/Heading";
import WhatIDoSection from "../components/WhatIDoSection";

export default function Home() {
  return (
    <main className="carousel carousel-vertical h-screen w-full">
      <div className="carousel-item h-full">
        <HomeSection />
      </div>
      <div id="about" className="carousel-item relative h-full">
        <Heading title="About me" />
        <AboutSection />
      </div>
      <div id="whatIDo" className="carousel-item relative h-full">
        <Heading title="What i do" />
        <WhatIDoSection />
      </div>
      <div id="works" className="carousel-item relative h-full">
        <Heading title="Works" />
        <WorksSection />
      </div>
      <div id="contact" className="carousel-item relative h-full">
        <Heading title="Contact me" />
        <ContactSection />
      </div>
    </main>
  );
}
