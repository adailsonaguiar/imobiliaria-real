import { MainSection, Header, AboutSection, AdvertsSection, ServicesSection, CompanyValuesSection, Footer } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-white">
      <Header>
        <MainSection />
      </Header>
      <AboutSection />
      <AdvertsSection />
      <ServicesSection />
      <CompanyValuesSection />
      <Footer />
    </main>
  );
}
