import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import BookDemoModal from '../components/BookDemoModal';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Enterprise() {
  const navigate = useNavigate();
  const [demoOpen, setDemoOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden bg-surface-bright">
      <BookDemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />

      <main className="pt-20">
        {/*  Hero Section  */}
        <section className="px-page-margin py-section-gap max-w-max-width mx-auto grid lg:grid-cols-2 gap-stack-lg items-center">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-stack-lg"
          >
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                Precision Automation at Scale
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[18px]">cloud_sync</span>
                Firebase Connected
              </div>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="font-display-xl text-display-xl tracking-tight text-primary">
              Automate with <span className="text-secondary">Precision</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Ellipa provides fixed-cost automation solutions for modern teams who value transparency and reliability. No hidden fees, just pure technical excellence.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/signup')}
                className="px-8 py-4 rounded-xl bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center gap-2 shadow-lg hover:translate-y-[-2px] transition-transform"
              >
                Get Started
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button 
                onClick={() => setDemoOpen(true)}
                className="px-8 py-4 rounded-xl border border-outline font-label-sm text-label-sm flex items-center justify-center gap-2 hover:bg-surface-container-low transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                Book a Demo
              </button>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex items-center gap-6 pt-4 grayscale opacity-60">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">Compliant with:</span>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-headline-md">security</span>
                <span className="material-symbols-outlined text-headline-md">verified_user</span>
                <span className="material-symbols-outlined text-headline-md">vpn_lock</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-secondary-container/5 rounded-[2rem] blur-3xl group-hover:bg-secondary-container/10 transition-colors" />
            <div className="relative rounded-[2rem] overflow-hidden aspect-square flex items-center justify-center bg-gradient-to-tr from-secondary/5 via-transparent to-primary/5 transition-all">
              <spline-viewer url="https://prod.spline.design/qcE5icNbx-X9H2Zo/scene.splinecode" class="w-full h-full"></spline-viewer>
            </div>
          </motion.div>
        </section>

        {/*  Trusted By Section  */}
        <section className="bg-surface-container-low py-16">
          <div className="px-page-margin max-w-max-width mx-auto">
            <p className="text-center font-label-sm text-label-sm text-outline mb-12 uppercase tracking-[0.2em]">Trusted by Industry Pioneers</p>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 grayscale opacity-70"
            >
              {['MICROSOFT', 'NVIDIA', 'OPENAI', 'GITHUB', 'AKAMAI'].map((brand) => (
                <div key={brand} className="font-display-lg text-headline-md font-extrabold text-on-surface-variant">
                  {brand}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="px-page-margin py-section-gap max-w-max-width mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display-lg text-display-md text-primary mb-4">Enterprise-Grade Architecture</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Scalable solutions designed for the most demanding technical environments.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Fixed-Cost Delivery', icon: 'payments', desc: 'Predictable pricing models that eliminate budget creep and ensure ROI.' },
              { title: 'Neural Optimization', icon: 'psychology', desc: 'Advanced AI models tailored specifically to your data ecosystem.' },
              { title: 'Zero-Trust Security', icon: 'admin_panel_settings', desc: 'Bank-grade encryption with multi-layer verification protocols.' }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-outline-variant hover:border-secondary transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-on-secondary-container">{feature.icon}</span>
                </div>
                <h3 className="font-display-md text-headline-sm text-primary mb-3">{feature.title}</h3>
                <p className="text-on-surface-variant font-body-md">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-on-primary py-24 mt-section-gap">
          <div className="px-page-margin max-w-max-width mx-auto text-center space-y-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-display-xl text-display-lg tracking-tight"
            >
              Ready to elevate your operational precision?
            </motion.h2>
            <p className="text-on-primary/80 max-w-2xl mx-auto font-body-lg">
              Join the world's most innovative teams using Ellipa to automate the future.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex flex-wrap justify-center gap-4 pt-4"
            >
              <button 
                onClick={() => navigate('/signup')}
                className="px-10 py-5 rounded-xl bg-white text-primary font-label-sm text-label-sm shadow-xl hover:bg-surface-container-lowest transition-all"
              >
                Get Started
              </button>
              <button
                onClick={() => setDemoOpen(true)}
                className="px-10 py-5 rounded-xl border border-white/20 font-label-sm text-label-sm hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                Schedule Consultation
              </button>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
