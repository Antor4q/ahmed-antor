"use client";

import { useState } from "react";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
} from "../ui/resizable-navbar";
import { FiArrowRight } from "react-icons/fi";

const Header = () => {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header>
      {/* 👇 Keep Navbar full width for stickiness */}
      <Navbar>
        {/* 👇 Add container inside so content aligns properly */}
        <div className="mx-auto w-full container px-8 bg-tra">
          {/* Desktop Navigation */}
          <NavBody className="w-full justify-between">
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
              <button className="group relative inline-flex h-[46px] items-center justify-center rounded-full bg-neutral-950 py-1 pl-6 pr-14 font-medium text-neutral-50">
                <span className="z-10 pr-2 font-bold font-sans transition-colors duration-300 group-hover:text-black">
                  Need Help?
                </span>
                <div className="absolute right-1 inline-flex h-[40px] w-[40px] items-center justify-end rounded-full bg-[#d5f139] transition-[width] group-hover:w-[calc(100%-8px)]">
                  <div className="mr-3 flex items-center justify-center">
                    <FiArrowRight className="h-5 w-5 text-black" />
                  </div>
                </div>
              </button>
            </div>
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-black dark:text-neutral-300"
                >
                  <span className="block text-black">{item.name}</span>
                </a>
              ))}
              <div className="flex w-full flex-col gap-4">
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full"
                >
                  Need Help?
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
