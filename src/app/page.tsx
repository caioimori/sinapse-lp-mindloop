import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Services } from "@/components/services";
import { Cases } from "@/components/cases";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { LeadForm } from "@/components/lead-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Cases />
        <HowItWorks />
        <Pricing />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
