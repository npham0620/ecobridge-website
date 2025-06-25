import React from "react";
import { Link, Divider, Image } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        { name: "Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" }
      ]
    }
    // ,
    // {
    //   title: "Services",
    //   links: [
    //     { name: "Consulting", href: "#" },
    //     { name: "Legal", href: "#" }
    //   ]
    // },
    // {
    //   title: "Resources",
    //   links: [
    //     { name: "Blog", href: "#" },
    //     { name: "Case Studies", href: "#" },
    //     { name: "Guides", href: "#" },
    //     { name: "FAQ", href: "#" }
    //   ]
    // }
  ];

  return (
    <footer className="bg-content2 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                width={32}
                height={32}
                alt="Ecobridge Logo"
                src="src/assets/ecobridge-logo.png"
              />
              <p className="font-semibold text-foreground ml-2 text-xl">Ecobridge</p>
            </div>
            <p className="text-foreground-500 mb-6 max-w-md">
              Let us be your bridge.
            </p>
            {/* <div className="flex gap-4">
              <Link href="#" aria-label="Facebook" className="text-foreground-400 hover:text-primary transition-colors">
                <Icon icon="lucide:facebook" className="text-xl" />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-foreground-400 hover:text-primary transition-colors">
                <Icon icon="lucide:instagram" className="text-xl" />
              </Link>
              <Link href="#" aria-label="Twitter" className="text-foreground-400 hover:text-primary transition-colors">
                <Icon icon="lucide:twitter" className="text-xl" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-foreground-400 hover:text-primary transition-colors">
                <Icon icon="lucide:linkedin" className="text-xl" />
              </Link>
            </div> */}
          </div>
          
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="font-semibold text-foreground mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href} 
                      className="text-foreground-500 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <Divider className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground-400 text-sm mb-4 md:mb-0">
            © {currentYear} Ecobridge. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-foreground-400 hover:text-primary text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-foreground-400 hover:text-primary text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-foreground-400 hover:text-primary text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};