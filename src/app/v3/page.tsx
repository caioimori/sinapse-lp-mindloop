import type { Metadata } from "next";
import { SmoothScrollV3 } from "@/components/v3/smooth-scroll-v3";
import { HeaderV3 } from "@/components/v3/header-v3";
import { HeroV3 } from "@/components/v3/hero-v3";
import { ProblemV3 } from "@/components/v3/problem-v3";
import { ServicesV3 } from "@/components/v3/services-v3";
import { CasesV3 } from "@/components/v3/cases-v3";
import { HowItWorksV3 } from "@/components/v3/how-it-works-v3";
import { PricingV3 } from "@/components/v3/pricing-v3";
import { LeadFormV3 } from "@/components/v3/lead-form-v3";
import { FooterV3 } from "@/components/v3/footer-v3";
import { MarqueeV3 } from "@/components/v3/marquee-v3";

const VERTICAL_ITEMS = [
  "SAÚDE",
  "JURÍDICO",
  "FINANCEIRO",
  "VAREJO",
  "AGRONEGÓCIO",
  "INDÚSTRIA",
  "EDUCAÇÃO",
  "SERVIÇOS",
];

const PROMISE_ITEMS = [
  "ATENDE",
  "QUALIFICA",
  "FECHA",
  "MONITORA",
  "APRENDE",
  "ESCALA",
  "24/7",
  "SEM FOLHA",
];

export const metadata: Metadata = {
  title: "MINDLOOP v3 — Editorial Cobalt",
  description:
    "Versão experimental v3 da LP MindLoop. Direção editorial dark + cobalt accent.",
  robots: { index: false, follow: false },
};

export default function V3Page() {
  return (
    <div className="v3">
      <SmoothScrollV3>
        <HeaderV3 />
        <main className="w-full overflow-x-clip">
          <HeroV3 />
          <ProblemV3 />
          <ServicesV3 />
          <MarqueeV3 items={VERTICAL_ITEMS} speed={65} />
          <CasesV3 />
          <HowItWorksV3 />
          <MarqueeV3 items={PROMISE_ITEMS} speed={60} reverse accent />
          <PricingV3 />
          <LeadFormV3 />
        </main>
        <FooterV3 />
      </SmoothScrollV3>
    </div>
  );
}
