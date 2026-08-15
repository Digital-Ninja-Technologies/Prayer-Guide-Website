import { AmbientOrb } from "@/components/AmbientOrb";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Features } from "@/components/sections/Features";
import { InlineCta } from "@/components/sections/InlineCta";
import { Showcase } from "@/components/sections/Showcase";
import { Voices } from "@/components/sections/Voices";
import { FreePanel } from "@/components/sections/FreePanel";
import { FinalCta } from "@/components/sections/FinalCta";
import { inlineCtaCopy } from "@/lib/content";

export default function LandingPage() {
  return (
    <div style={{ position: "relative", overflow: "clip", paddingTop: 84 }}>
      <AmbientOrb
        style={{
          top: -200,
          right: -160,
          width: 480,
          height: 480,
          background: "radial-gradient(circle, rgba(91,194,179,.16), transparent 62%)",
          animation: "drift 13s ease-in-out infinite",
        }}
      />
      <AmbientOrb
        style={{
          top: 900,
          left: -200,
          width: 420,
          height: 420,
          background: "radial-gradient(circle, rgba(232,179,107,.13), transparent 64%)",
          animation: "drift 17s ease-in-out infinite",
        }}
      />

      <Hero />
      <TrustStrip />
      <Features />
      <InlineCta copy={inlineCtaCopy[0]} />
      <Showcase />
      <InlineCta copy={inlineCtaCopy[1]} />
      <Voices />
      <InlineCta copy={inlineCtaCopy[2]} />
      <FreePanel />
      <FinalCta />
    </div>
  );
}
