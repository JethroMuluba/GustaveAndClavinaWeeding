"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone, AlignRight } from "lucide-react"
// import { Button } from "@/components/ui/button"
import data from "@/data/data.json"
import { HeaderButton } from "./ui/headerButton"
import { Button } from "./ui/button"
import MenuHamburger from "./MenuHamburger"
import DesktopMenu from "./desktopMenu"
import { usePathname } from "next/navigation";
import { motion } from 'framer-motion'


export default function Header() {
  const pathname = usePathname();
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const logoEnywork = data.header[0].logo || '/default-logo.svg';
  const logoEnyworkAlt = data.header[0]["logo-alt"] || 'Default Logo Alt Text';

  

  return (
    <motion.header 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className=" fixed top-0 left-0 w-full z-50">
      {/* Top Header */}
      <div className=" bg-[#1E73B9] py-2 lg:px-20 3xl:px-45 hidden lg:block">
        <div className="container-custom flex flex-col md:flex-row justify-between font-light items-center gap-2 md:gap-0">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-white" />
            <span className="text-xs text-white  ">contact@mainteliatechnologies.com</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-white" />
            <span className="text-xs text-white">
            51 Avenue de L&apos;OUA Quartier Basoko, GB, Kinshasa/Ngaliema
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-white" />
            <span className="text-xs text-white">+243 828 050 018</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full bg-white backdrop-blur-xl py-4 px-8 lg:px-20 3xl:px-45 shadow-sm text-sm">
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}

          <motion.div
            initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness:100,
                      damping:10,
                      delay:0.4,
                    
            }}
          >
            <Link href="/" className="relative h-[60px] w-[151px]">
              <Image src={logoEnywork} alt={logoEnyworkAlt} width={151} height={60} priority />
            </Link>
          </motion.div>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 font-normal">
            <Link 
              href="/" 
              className={`text-[#1E73B9] transition-colors px-1 py-1.5 ${
                pathname === "/" ? "text-[#FAB613]" : "hover:text-[#FAB613]"
              }`}
            >
              ACCUEIL
            </Link>
            <Link 
              href="/about" 
              className={`text-[#1E73B9] transition-colors ${
                pathname === "/about" ? "text-[#FAB613]" : "hover:text-[#FAB613]"
              }`}
            >
              A PROPOS
            </Link>
            <Link 
              href="/realizations" 
              className={`text-[#1E73B9] transition-colors ${
                pathname === "/realizations" ? "text-[#FAB613]" : "hover:text-[#FAB613]"
              }`}
            >
              RÉALISATIONS
            </Link>
            <Link 
              href="/services" 
              className={`text-[#1E73B9] transition-colors ${
                pathname === "/services" ? "text-[#FAB613]" : "hover:text-[#FAB613]"
              }`}
            >
              SERVICES
            </Link>
            <Link 
              href="/team" 
              className={`text-[#1E73B9] transition-colors ${
                pathname === "/team" ? "text-[#FAB613]" : "hover:text-[#FAB613]"
              }`}
            >
              ÉQUIPE
            </Link>
            <Link 
              href="/blogs" 
              className={`text-[#1E73B9] transition-colors ${
                pathname.startsWith("/blogs") ? "text-[#FAB613]" : "hover:text-[#FAB613]"
              }`}
            >
              BLOGS
            </Link>
            {/* <Link 
              href="/contact" 
              className={`text-[#1E73B9] transition-colors ${
                pathname === "/contact" ? "text-[#FAB613]" : "hover:text-[#FAB613]"
              }`}
            >
              CONTACT
            </Link> */}
          </nav>

          {/* Contact Button & Mobile Menu */}

          <div className="flex items-center gap-4">
            <HeaderButton />

          {/* Desktop menu */}
            <Button
              variant="default"
              size="icon"
              className=" hidden lg:block bg-[#FAB613] hover:bg-[#D89A1E]  rounded-full cursor-pointer"
              onClick={() => setIsDesktopMenuOpen(true)}
              
            >
              <AlignRight className="w-5 h-5 text-white m-2"  />
            </Button>

            <DesktopMenu isOpen={isDesktopMenuOpen} onClose={() => setIsDesktopMenuOpen(false)} />

          {/* Mobile menu */}
            <MenuHamburger />
            
          </div>
        </div>
      </div>

    </motion.header>
  )
}

