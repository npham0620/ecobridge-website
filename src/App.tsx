import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Divider, Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";

export default function App() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-background shadow-sm" : "bg-transparent"
        }`}
        maxWidth="xl"
      >
        <NavbarBrand>
          <div className="relative w-8 h-8">
            <Image
              width={32}
              height={32}
              alt="Ecobridge Logo"
              src="/ecobridge-logo.png"
              className={`object-contain ${isScrolled ? "opacity-100" : "hidden"}`}
            />
            <Image
              width={32}
              height={32}
              alt="Ecobridge Logo White"
              src="/ecobridge-logo.png"
              className={`object-contain brightness-0 invert ${isScrolled ? "hidden" : "opacity-100"}`}
            />
          </div>
          <p className={`font-semibold ${isScrolled ? "text-foreground" : "text-white"} ml-2 text-xl`}>Ecobridge</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-8" justify="center">
          <NavbarItem>
            <Link 
              className={`${isScrolled ? "text-foreground-700 hover:text-primary" : "text-white hover:text-primary-200"} cursor-pointer`}
              onPress={() => scrollToSection("home")}
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              className={`${isScrolled ? "text-foreground-700 hover:text-primary" : "text-white hover:text-primary-200"} cursor-pointer`}
              onPress={() => scrollToSection("about")}
            >
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              className={`${isScrolled ? "text-foreground-700 hover:text-primary" : "text-white hover:text-primary-200"} cursor-pointer`}
              onPress={() => scrollToSection("contact")}
            >
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <Button 
            color={isScrolled ? "primary" : "default"}
            variant={isScrolled ? "flat" : "solid"}
            radius="full"
            className={`font-medium ${!isScrolled && "bg-white/20 backdrop-blur-sm text-white border-white/30"}`}
            onPress={() => scrollToSection("contact")}
          >
            Get in Touch
          </Button>
        </NavbarContent>
      </Navbar>

      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="about" className="section-padding">
          <AboutSection />
        </section>
        
        <Divider className="max-w-5xl mx-auto opacity-50" />
        
        <section id="contact" className="section-padding">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}