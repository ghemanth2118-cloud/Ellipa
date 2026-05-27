import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import BookDemoModal from './BookDemoModal';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [demoOpen, setDemoOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await signOut(auth);
    navigate('/');
  };

  const isActive = (path) => location.pathname === path;

  const getLinkClass = (path) => {
    return isActive(path) 
      ? "font-label-sm text-label-sm tracking-tight text-secondary font-bold border-b-2 border-secondary"
      : "font-label-sm text-label-sm tracking-tight text-on-surface-variant hover:text-primary transition-colors";
  };

  return (
    <>
      <BookDemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
      <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-md shadow-sm border-b border-outline-variant/30">
        <nav className="flex justify-between items-center h-20 px-page-margin max-w-max-width mx-auto">
          <div className="flex items-center gap-12">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Ellipa Logo" className="h-8 w-auto" />
              <span className="font-display-lg text-headline-md font-bold tracking-tighter text-primary">Ellipa</span>
            </Link>
            <div className="hidden md:flex gap-8">
              <Link to="/solutions" className={getLinkClass('/solutions')}>
                Solutions
              </Link>
              <Link to="/process" className={getLinkClass('/process')}>
                Process
              </Link>
              <Link to="/pricing" className={getLinkClass('/pricing')}>
                Pricing
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              {user ? (
                <>
                  <span className="font-label-sm text-label-sm text-secondary font-bold mr-2">
                    Hey! there {user.displayName ? user.displayName.split(' ')[0] : user.email.split('@')[0]}
                  </span>
                  <Link to="/dashboard" className="px-6 py-2.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-all font-label-sm text-label-sm inline-block">
                    Dashboard
                  </Link>
                  <button 
                    onClick={handleSignOut}
                    className="px-6 py-2.5 rounded-lg bg-primary text-on-primary hover:opacity-90 transition-all font-label-sm text-label-sm flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[18px]">logout</span>
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link to="/signin" className="px-6 py-2.5 font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors">
                    Sign In
                  </Link>
                  <Link to="/signup" className="px-6 py-2.5 rounded-lg bg-primary text-on-primary hover:opacity-90 transition-all font-label-sm text-label-sm inline-block">
                    Get Started
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex md:hidden items-center justify-center p-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors"
              aria-label="Toggle mobile menu"
            >
              <span className="material-symbols-outlined text-[28px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-40 bg-surface-container-lowest border-b border-outline-variant/30 shadow-xl md:hidden px-6 py-8 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              <Link 
                to="/solutions" 
                className={`text-lg font-semibold tracking-tight pb-2 border-b border-outline-variant/10 ${isActive('/solutions') ? 'text-secondary font-bold' : 'text-on-surface-variant'}`}
              >
                Solutions
              </Link>
              <Link 
                to="/process" 
                className={`text-lg font-semibold tracking-tight pb-2 border-b border-outline-variant/10 ${isActive('/process') ? 'text-secondary font-bold' : 'text-on-surface-variant'}`}
              >
                Process
              </Link>
              <Link 
                to="/pricing" 
                className={`text-lg font-semibold tracking-tight pb-2 border-b border-outline-variant/10 ${isActive('/pricing') ? 'text-secondary font-bold' : 'text-on-surface-variant'}`}
              >
                Pricing
              </Link>
            </div>
            
            {/* Mobile Authentication & Profile Actions */}
            <div className="pt-4 border-t border-outline-variant/20 flex flex-col gap-4">
              {user ? (
                <>
                  <div className="text-center font-bold text-secondary text-sm py-1">
                    Hey! there {user.displayName ? user.displayName.split(' ')[0] : user.email.split('@')[0]}
                  </div>
                  <Link 
                    to="/dashboard" 
                    className="w-full py-3 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-all text-center font-bold text-sm"
                  >
                    Dashboard
                  </Link>
                  <button 
                    onClick={handleSignOut}
                    className="w-full py-3 rounded-lg bg-primary text-on-primary hover:opacity-90 transition-all flex items-center justify-center gap-2 font-bold text-sm"
                  >
                    <span className="material-symbols-outlined text-[18px]">logout</span>
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/signin" 
                    className="w-full py-3 text-center font-semibold text-on-surface-variant hover:text-primary transition-colors text-sm"
                  >
                    Sign In
                  </Link>
                  <Link 
                    to="/signup" 
                    className="w-full py-3 rounded-lg bg-primary text-on-primary hover:opacity-90 transition-all text-center font-bold text-sm inline-block"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
