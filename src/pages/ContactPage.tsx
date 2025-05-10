
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import FAQ from "@/components/contact/FAQ";
import LocationMap from "@/components/contact/LocationMap";
import PageHeader from "@/components/contact/PageHeader";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />

      <PageHeader 
        title="Свяжитесь с нами" 
        description="У вас есть вопросы? Мы с радостью на них ответим!"
      />

      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactForm />
            
            <div>
              <ContactInfo />
              <FAQ />
            </div>
          </div>
          
          <LocationMap />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
