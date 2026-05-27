import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import BookDemoModal from './BookDemoModal';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [demoOpen, setDemoOpen] = useState(false);
  const [user, setUser] = useState(null);

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
              <Link to="/enterprise" className={getLinkClass('/enterprise')}>
                Enterprise
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* <button className="px-6 py-2.5 rounded-lg border border-outline hover:bg-surface-container-low transition-all font-label-sm text-label-sm" onClick={() => setDemoOpen(true)}>
              Book a Demo
            </button> */}
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
        </nav>
      </header>
    </>
  );
}
