import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary-container dark:bg-black w-full py-section-gap border-t border-primary-fixed-dim/10 mt-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-stack-lg px-page-margin max-w-max-width mx-auto">
        <div className="col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Ellipa Logo" className="h-8 w-auto brightness-0 invert" />
            <span className="font-display-lg text-headline-md font-bold text-surface-container-lowest">Ellipa</span>
          </Link>
          <p className="font-body-md text-body-md text-on-primary-container mt-4 max-w-xs">
            Building the future of enterprise intelligence through precise, fixed-cost automation.
          </p>
        </div>
        <div>
          <h4 className="font-label-sm text-label-sm text-surface-container-lowest mb-6">
            Product
          </h4>
          <ul className="space-y-4">
            <li>
              <Link to="/features" className="font-body-md text-body-md text-on-primary-container hover:text-surface-bright transition-colors hover:translate-x-1 inline-block">
                Features
              </Link>
            </li>
            <li>
              <Link to="/solutions" className="font-body-md text-body-md text-on-primary-container hover:text-surface-bright transition-colors hover:translate-x-1 inline-block">
                Solutions
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="font-body-md text-body-md text-on-primary-container hover:text-surface-bright transition-colors hover:translate-x-1 inline-block">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/security" className="font-body-md text-body-md text-on-primary-container hover:text-surface-bright transition-colors hover:translate-x-1 inline-block">
                Security
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-sm text-label-sm text-surface-container-lowest mb-6">
            Company
          </h4>
          <ul className="space-y-4">
            <li>
              <Link to="/about" className="font-body-md text-body-md text-on-primary-container hover:text-surface-bright transition-colors hover:translate-x-1 inline-block">
                About
              </Link>
            </li>
            <li>
              <Link to="/careers" className="font-body-md text-body-md text-on-primary-container hover:text-surface-bright transition-colors hover:translate-x-1 inline-block">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="font-body-md text-body-md text-on-primary-container hover:text-surface-bright transition-colors hover:translate-x-1 inline-block">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-sm text-label-sm text-surface-container-lowest mb-6">
            Legal
          </h4>
          <ul className="space-y-4">
            <li>
              <Link to="/privacy" className="font-body-md text-body-md text-on-primary-container hover:text-surface-bright transition-colors hover:translate-x-1 inline-block">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="font-body-md text-body-md text-on-primary-container hover:text-surface-bright transition-colors hover:translate-x-1 inline-block">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-page-margin max-w-max-width mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body-md text-body-md text-on-primary-container">
          © 2024 Ellipa Automation. Precision in Every Process.
        </p>
        <div className="flex gap-6">
          <button className="text-on-primary-container hover:text-white transition-colors">
            <span className="material-symbols-outlined">public</span>
          </button>
          <button className="text-on-primary-container hover:text-white transition-colors">
            <span className="material-symbols-outlined">share</span>
          </button>
          <button className="text-on-primary-container hover:text-white transition-colors">
            <span className="material-symbols-outlined">mail</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
