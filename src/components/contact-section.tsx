import React from "react";
import { Card, CardBody, Input, Textarea, Button, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Form } from "react-router-dom";

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (field: string, value: string) => {
    setFormState(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(async () => {
      const formData = new FormData();
      formData.append("access_key","4ee62c75-eba7-4289-a8d0-42a49d8dbcc2");
      formData.append("name", formState.name);
      formData.append("email", formState.email);
      formData.append("message", formState.message);
      formData.append("subject", "New Message from Website");
      formData.append("from_name", "Website Contact Form");

      try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormState({
          name: "",
          email: "",
          message: ""
        });

      // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        alert("Submission failed. Please try again.");
        console.error(result);
      }
      } catch (error) {
        alert("An error occurred while submitting the form. Please try again.");
        console.error("Error submitting form:", error);
      } finally {
        setIsSubmitting(false);
      }
    }, 1500);
  };

  const contactInfo = [
    // {
    //   icon: "lucide:map-pin",
    //   title: "Address",
    //   details: "123 Some Street, Some City, VN 12456"
    // },
    {
      icon: "lucide:phone",
      title: "Phone",
      details: ["United States: +1 (656) 241-0093","Vietnam: +84 944 723 759"]
    },
    {
      icon: "lucide:mail",
      title: "Email",
      details: ["Contact@ecobridge.onmicrosoft.com"]
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
        <p className="text-foreground-500 max-w-2xl mx-auto text-lg">
          Have questions or want to collaborate? We'd love to hear from you. 
          Reach out and let's start a conversation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Card className="border border-default-200">
            <CardBody className="p-6">
              <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-success-100 text-success-700 p-4 rounded-medium mb-4"
                >
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:check-circle" className="text-success" />
                    <span className="font-medium">Message sent successfully!</span>
                  </div>
                  <p className="mt-1 text-sm">We'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    label="Name"
                    placeholder="Your name"
                    value={formState.name}
                    onValueChange={(value) => handleChange("name", value)}
                    variant="bordered"
                    isRequired
                    className="max-w-full"
                  />
                  
                  <Input
                    label="Email"
                    placeholder="Your email address"
                    value={formState.email}
                    onValueChange={(value) => handleChange("email", value)}
                    variant="bordered"
                    type="email"
                    isRequired
                    className="max-w-full"
                  />
                  
                  <Textarea
                    label="Message"
                    placeholder="How can we help you?"
                    value={formState.message}
                    onValueChange={(value) => handleChange("message", value)}
                    variant="bordered"
                    isRequired
                    minRows={4}
                    className="max-w-full"
                  />
                  
                  <Button
                    type="submit"
                    color="primary"
                    className="w-full font-medium"
                    isLoading={isSubmitting}
                    isDisabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardBody>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-foreground-500 mb-8">
              We're here to answer any questions you might have. Feel free to reach out 
              through any of the channels below.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon icon={item.icon} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
                    {Array.isArray(item.details) ? (
                      item.details.map((line, idx) => <div key={idx}>{line}</div>)
                    ) : (
                      <div>{item.details}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Divider className="my-8" />
          
          {/* <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Button isIconOnly variant="flat" color="default" aria-label="Facebook" className="bg-default-100">
                <Icon icon="logos:facebook" className="text-xl" />
              </Button>
              <Button isIconOnly variant="flat" color="default" aria-label="Instagram" className="bg-default-100">
                <Icon icon="logos:instagram-icon" className="text-xl" />
              </Button>
              <Button isIconOnly variant="flat" color="default" aria-label="Twitter" className="bg-default-100">
                <Icon icon="logos:twitter" className="text-xl" />
              </Button>
              <Button isIconOnly variant="flat" color="default" aria-label="LinkedIn" className="bg-default-100">
                <Icon icon="logos:linkedin-icon" className="text-xl" />
              </Button>
            </div>
          </div>
          
          <div className="mt-8">
            <Card className="border border-default-200 bg-content2">
              <CardBody className="p-6">
                <h4 className="font-medium text-foreground mb-2">Business Hours</h4>
                <div className="space-y-2 text-foreground-500">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </CardBody>
            </Card>
          </div> */}
        </motion.div>
      </div>
    </div>
  );
};