'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 py-4'
          : 'bg-white dark:bg-slate-900 border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center space-x-3"
            >
              <Image
                src="/logo.svg"
                alt="Infomone Consulting"
                width={140}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-normal transition-colors text-sm"
            >
              Services
            </a>
            <a
              href="#economies"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('economies');
              }}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-normal transition-colors text-sm"
            >
              Économies
            </a>
            <a
              href="#simulator"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('simulator');
              }}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-normal transition-colors text-sm"
            >
              Simulateur
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-normal transition-colors text-sm"
            >
              À propos
            </a>
            <ThemeToggle />
            <a
              href="https://calendly.com/infomone-consulting/reservation-d-appel"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-[#2563eb] text-white font-normal rounded-sm hover:bg-[#1d4ed8] transition-colors text-sm"
            >
              Prendre RDV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 dark:text-slate-300 hover:text-blue-600"
              aria-label="Toggle menu"
            >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-col space-y-3 pt-4">
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('services');
                }}
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-normal py-2 text-sm"
              >
                Services
              </a>
              <a
                href="#economies"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('economies');
                }}
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-normal py-2 text-sm"
              >
                Économies
              </a>
              <a
                href="#simulator"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('simulator');
                }}
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-normal py-2 text-sm"
              >
                Simulateur
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-normal py-2 text-sm"
              >
                À propos
              </a>
              <a
                href="https://calendly.com/infomone-consulting/reservation-d-appel"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-[#2563eb] text-white font-normal rounded-sm hover:bg-[#1d4ed8] transition-colors text-center text-sm"
              >
                Prendre RDV
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

