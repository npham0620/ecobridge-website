import React from "react";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url("public/hanoi-ho-hoan-kiem.jpg")`,
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      <div className="relative h-full w-full flex items-center">
        <div className="container mx-auto px-4 pt-16 lg:ml-36">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Let us be <br />
                <span className="text-primary-200">your bridge</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                Ecobridge was formed with the sole mission to help Vietnam economy grow sustainably, 
                and we aim to achieve it by connecting providers of sustainable solutions to companies 
                with the ability to make a difference.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                color="primary" 
                size="lg" 
                className="font-medium text-white"
                onPress={scrollToContact}
              >
                Get Started
              </Button>
              <Button 
                variant="flat" 
                color="default" 
                size="lg" 
                className="bg-white/20 text-white backdrop-blur-sm font-medium"
                onPress={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};