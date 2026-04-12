import type { Metadata } from "next";
import { SmoothScroll } from "@/components/v2/smooth-scroll";
import { HeaderV2 } from "@/components/v2/header-v2";
import { HeroV2 } from "@/components/v2/hero-v2";
import { ProblemV2 } from "@/components/v2/problem-v2";
import { ServicesV2 } from "@/components/v2/services-v2";
import { CasesV2 } from "@/components/v2/cases-v2";
import { HowItWorksV2 } from "@/components/v2/how-it-works-v2";
import { PricingV2 } from "@/components/v2/pricing-v2";
import { LeadFormV2 } from "@/components/v2/lead-form-v2";
import { MarqueeDivider } from "@/components/v2/marquee-divider";
import { Footer } from "@/components/footer";

const VERTICAL_ITEMS = [
  "SA\u00daDE",
  "JUR\u00cdDICO",
  "FINANCEIRO",
  "VAREJO",
  "AGRONEG\u00d3CIO",
  "IND\u00daSTRIA",
  "EDUCA\u00c7\u00c3O",
  "SERVI\u00c7OS",
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
  title: "MINDLOOP v2 \u2014 AI Agents para empresas brasileiras",
  description:
    "Versao experimental da LP MindLoop. Animacoes, full-bleed e direcao editorial.",
  robots: { index: false, follow: false },
};

export default function V2Page() {
  return (
    <SmoothScroll>
      <HeaderV2 />
      <main className="w-full overflow-x-clip">
        <HeroV2 />
        <ProblemV2 />
        <ServicesV2 />
        <MarqueeDivider items={VERTICAL_ITEMS} speed={60} />
        <CasesV2 />
        <HowItWorksV2 />
        <MarqueeDivider items={PROMISE_ITEMS} speed={55} reverse />
        <PricingV2 />
        <LeadFormV2 />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
