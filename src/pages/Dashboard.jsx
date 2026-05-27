import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { motion, AnimatePresence } from 'framer-motion';
import BookDemoModal from '../components/BookDemoModal';

const stats = [
  { label: 'Active Automations', value: '3', icon: 'electric_bolt', color: 'bg-secondary-container text-on-secondary-container' },
  { label: 'Tasks Completed', value: '412', icon: 'task_alt', color: 'bg-tertiary-container text-on-tertiary-container' },
  { label: 'Uptime', value: '99.98%', icon: 'monitoring', color: 'bg-surface-container text-on-surface' },
  { label: 'API Calls Today', value: '18,290', icon: 'api', color: 'bg-surface-container text-on-surface' },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [demoOpen, setDemoOpen] = useState(false);
  const [demoRunning, setDemoRunning] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('auth');
  const [demoLogs, setDemoLogs] = useState([]);
  const simIntervalRef = React.useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
      if (simIntervalRef.current) {
        clearInterval(simIntervalRef.current);
      }
    };
  }, []);

  const runDemoSimulation = (template) => {
    if (simIntervalRef.current) {
      clearInterval(simIntervalRef.current);
    }
    setSelectedTemplate(template);
    setDemoRunning(true);
    setDemoLogs([]);

    const steps = template === 'auth' ? [
      ' Initializing Ellipa Precision Engine v4.0...',
      ' Accessing visual pipeline securely...',
      ' Launching self-healing visual agent...',
      ' Form input fields resolved successfully.',
      ' Generating precision session cryptographic keys...',
      ' Auth test executed. Code: 200 SUCCESS. [Latency: 0.38s]'
    ] : [
      ' Connecting to Database Sync cluster...',
      ' Parsing schema validation rules...',
      ' Executing real-time delta synchronization...',
      ' Processed 14,290 records in parallel...',
      ' Encryption verification completed safely.',
      ' Sync completed successfully. 0 latency flags.'
    ];

    let currentStep = 0;
    simIntervalRef.current = setInterval(() => {
      if (currentStep < steps.length) {
        const logLine = `[${new Date().toLocaleTimeString()}] ${steps[currentStep]}`;
        setDemoLogs(prev => [...prev, logLine]);
        currentStep++;
      } else {
        clearInterval(simIntervalRef.current);
        simIntervalRef.current = null;
        setDemoRunning(false);
      }
    }, 850);
  };

  const handleSignOut = async () => {
    await signOut(auth);
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-surface-bright flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-secondary border-t-transparent rounded-full animate-spin" />
          <p className="font-label-sm text-label-sm text-on-surface-variant">Loading your workspace...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface-bright">
      <BookDemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />

      <main className="max-w-6xl mx-auto px-6 md:px-10 pt-28 pb-20">
        {/* Welcome Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="bg-primary-container rounded-2xl px-8 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border border-outline-variant/20 relative overflow-hidden">
            {/* Welcome content */}
            <div className="relative z-10">
              <p className="font-label-sm text-white text-label-sm text-on-primary-container/60 uppercase tracking-widest mb-2">Dashboard</p>
              <h1 className="font-display-lg text-white text-headline-lg text-primary mb-2">
                {user?.displayName
                  ? `Hello, ${user.displayName.split(' ')[0]} 👋`
                  : `Hey! there ${user?.email?.split('@')[0] || 'User'} `}
              </h1>
              <p className="font-body-md text-white text-on-surface-variant max-w-md">
                Your account is set up and ready. Start by exploring our fixed-cost automation solutions or schedule a free engineer onboarding call.
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                to="/solutions"
                className="px-6 py-3 bg-primary text-on-primary rounded-xl font-label-sm text-label-sm flex items-center gap-2 hover:opacity-90 transition-all shadow-md"
              >
                <span className="material-symbols-outlined text-[18px]">explore</span>
                Explore Solutions
              </Link>
              <button
                onClick={() => setDemoOpen(true)}
                className="px-6 py-3 border border-outline rounded-xl font-label-sm text-label-sm flex items-center gap-2 bg-white hover:bg-surface-container-low transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                Book a Demo
              </button>
            </div>
            {/* Decorative */}
            <div className="absolute right-0 top-0 h-full w-64 bg-gradient-to-l from-secondary/5 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white border border-outline-variant rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md transition-shadow"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                <span className="material-symbols-outlined text-[20px]">{stat.icon}</span>
              </div>
              <div>
                <p className="font-display-lg text-headline-md text-primary">{stat.value}</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white border border-outline-variant rounded-2xl p-8"
        >
          <h2 className="font-headline-md text-headline-md text-primary mb-6">Get Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: 'electric_bolt', title: 'Create First Automation', desc: 'Build a workflow in minutes with our visual editor.', href: '/solutions', cta: 'Explore' },
              { icon: 'payments', title: 'Upgrade Your Plan', desc: 'Unlock unlimited automations with a Pro or Enterprise plan.', href: '/pricing', cta: 'See Plans' },
              { icon: 'calendar_month', title: 'Book an Onboarding Call', desc: 'Schedule a 1-on-1 session with our automation engineers.', href: '/enterprise', cta: 'Book Now' },
            ].map((action) => (
              <Link
                key={action.title}
                to={action.href}
                className="group p-6 rounded-xl border border-outline-variant hover:border-secondary hover:shadow-md transition-all flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-on-secondary-container">{action.icon}</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-label-sm font-bold text-primary mb-1">{action.title}</h3>
                  <p className="text-on-surface-variant text-sm">{action.desc}</p>
                </div>
                <span className="font-label-sm text-label-sm text-secondary flex items-center gap-1 group-hover:gap-2 transition-all">
                  {action.cta}
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Live Sandbox Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 bg-white border border-outline-variant rounded-2xl p-8 shadow-sm"
        >
          <div className="flex flex-col lg:flex-row gap-8 justify-between items-stretch">
            <div className="flex-1 flex flex-col justify-between max-w-md">
              <div>
                <span className="inline-block py-1 px-3 bg-secondary/10 text-secondary text-xs rounded-full font-bold uppercase tracking-wider mb-3">
                  Live Interactive Sandbox
                </span>
                <h2 className="font-headline-md text-headline-md text-primary mb-3">
                  Run an Automation Demo
                </h2>
                <p className="text-on-surface-variant font-body-md mb-6 leading-relaxed">
                  Experience our precision-engineered visual engine live. Choose a workflow template below and witness self-healing automated logic execute in real-time.
                </p>
                
                <div className="space-y-3">
                  <button
                    disabled={demoRunning}
                    onClick={() => runDemoSimulation('auth')}
                    className={`w-full p-4 rounded-xl border flex items-center justify-between text-left transition-all ${
                      selectedTemplate === 'auth' 
                        ? 'border-secondary bg-secondary/5 font-semibold text-secondary' 
                        : 'border-outline-variant hover:border-secondary/60 text-on-surface-variant'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[20px]">vpn_key</span>
                      <span className="font-label-sm text-sm">Multi-factor Auth Flow</span>
                    </span>
                    <span className="material-symbols-outlined text-[18px]">play_circle</span>
                  </button>
                  
                  <button
                    disabled={demoRunning}
                    onClick={() => runDemoSimulation('db')}
                    className={`w-full p-4 rounded-xl border flex items-center justify-between text-left transition-all ${
                      selectedTemplate === 'db' 
                        ? 'border-secondary bg-secondary/5 font-semibold text-secondary' 
                        : 'border-outline-variant hover:border-secondary/60 text-on-surface-variant'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[20px]">database</span>
                      <span className="font-label-sm text-sm">Database Real-time Sync</span>
                    </span>
                    <span className="material-symbols-outlined text-[18px]">play_circle</span>
                  </button>
                </div>
              </div>
              
              <button
                onClick={() => setDemoOpen(true)}
                className="mt-6 px-6 py-3 w-full bg-primary text-on-primary rounded-xl font-label-sm text-label-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                Schedule Personal Onboarding
              </button>
            </div>
            
            <div className="w-full lg:w-[480px] bg-primary-container text-emerald-400 font-mono text-xs rounded-xl p-5 border border-outline-variant/30 shadow-inner min-h-[300px] flex flex-col justify-between overflow-hidden relative">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3 text-white/50 uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-error"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                  <span className="ml-2 font-mono tracking-normal text-[10px] text-white/60">ellipa-sandbox-v4.sh</span>
                </div>
                <span className="text-[10px] font-bold">{demoRunning ? 'Simulating...' : 'Active'}</span>
              </div>
              
              <div className="flex-1 overflow-y-auto space-y-2 pr-2 min-h-[200px] max-h-[220px]">
                {demoLogs.length === 0 ? (
                  <div className="text-on-primary-container/40 italic flex flex-col items-center justify-center h-full min-h-[180px] gap-2">
                    <span className="material-symbols-outlined text-[36px] animate-pulse">terminal</span>
                    <span>Select a template and click play to run simulated automation...</span>
                  </div>
                ) : (
                  demoLogs.map((log, idx) => (
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className="leading-relaxed whitespace-pre-wrap break-all"
                    >
                      {log}
                    </motion.p>
                  ))
                )}
              </div>
              
              {demoRunning && (
                <div className="mt-2 pt-2 border-t border-white/10 flex items-center gap-2 text-[10px] text-emerald-400/80">
                  <div className="w-3 h-3 border-2 border-secondary border-t-transparent rounded-full animate-spin"></div>
                  <span className="font-sans uppercase font-bold tracking-wider">Simulating Execution...</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Account Info */}
        {user && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 bg-surface-container-low rounded-2xl px-8 py-6 border border-outline-variant/30"
          >
            <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-4">Account Details</h3>
            <div className="flex flex-col sm:flex-row gap-6">
              <div>
                <p className="text-xs text-on-surface-variant mb-1">Email</p>
                <p className="font-body-md text-on-surface">{user.email}</p>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant mb-1">User ID</p>
                <p className="font-body-md text-on-surface font-mono text-sm">{user.uid.slice(0, 16)}...</p>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant mb-1">Plan</p>
                <span className="inline-block px-3 py-1 bg-secondary-fixed text-on-secondary-fixed text-xs font-bold rounded-full uppercase tracking-wider">
                  Starter
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
