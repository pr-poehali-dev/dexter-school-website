
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/about/PageHeader";
import TabsContainer from "@/components/about/TabsContainer";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />

      <PageHeader 
        title="О школе Dexter" 
        description="Мы помогаем ученикам полюбить математику и достичь высоких результатов"
      />

      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TabsContainer />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
