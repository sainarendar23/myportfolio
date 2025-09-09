import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <section id="hero" className="relative">
          <Hero />
        </section>

        <section id="projects-showcase" className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                Featured Projects
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Explore my recent work and creative solutions across various technologies and industries.
              </p>
            </div>
            <ProjectsShowcase />
          </div>
        </section>

        <section id="about" className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <AboutSection />
          </div>
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}