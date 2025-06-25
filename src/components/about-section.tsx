import React from "react";
import { Card, CardBody, Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const AboutSection: React.FC = () => {
  const features = [
    {
      icon: "lucide:star",
      title: "Mission",
      description: "We aim to simplify the legal boulders and minimize the cultural differences to help foster lasting relationships between our foreign and domestic partners."
    },
    {
      icon: "lucide:eye",
      title: "Vision",
      description: "A green future for current youths."
    },
    {
      icon: "lucide:heart",
      title: "Values",
      description: "Integrity, Transparency, Collaboration, and Growth."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Us</h2>
        <p className="text-foreground-500 max-w-2xl mx-auto text-lg">
          We are a consulting firm specialized in facilitating business operations and partnerships in Vietnam. 
          Our sole mission to help Vietnam economy grow sustainably, and we aim to achieve it by simplifying the 
          complex legal and cultural systems in Vietnam for providers of sustainable solutions. 
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Story</h3>
          <p className="text-foreground-600 mb-4">
            Vietnam is a fast-growing country, strategically located in a major economic area. 
            With the Kra Canal in Thailand set to start construction in late of this year, 
            we expect the country to become a new major economic trading hub at a similar level as Singapore.
          </p>
          <p className="text-foreground-600 mb-4">
            Therefore, we believe that there is a lot of opportunities for your growth here in this country.
          </p>
          <p className="text-foreground-600">
            We hope that we were able to pique your interest in expanding your business in Vietnam, and we wish that we can assist you on that journey.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/10 rounded-full z-0"></div>
          <Card className="overflow-hidden shadow-md z-10 relative">
            <CardBody className="p-0">
              <Image
                removeWrapper
                alt="Ecobridge team working together"
                className="w-full h-full object-cover"
                src="/terraces.jpg"
              />
            </CardBody>
          </Card>
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
      >
        {features.map((feature, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="border border-default-200 bg-content1">
              <CardBody className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Icon icon={feature.icon} className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-foreground-500">{feature.description}</p>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};