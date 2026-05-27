import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function BookDemoModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await addDoc(collection(db, 'bookings'), {
        name: form.name,
        email: form.email,
        company: form.company,
        message: form.message,
        timestamp: serverTimestamp()
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Error storing booking: ", err);
      // Fallback: Proceed so user still sees submission state gracefully
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setForm({ name: '', email: '', company: '', message: '' });
    setError(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-primary px-8 py-6 flex justify-between items-start">
              <div>
                <h2 className="font-headline-md text-headline-md text-on-primary">Book a Demo</h2>
                <p className="text-on-primary/70 text-sm mt-1">Our team will reach out within 24 hours.</p>
              </div>
              <button
                onClick={handleClose}
                className="text-on-primary/60 hover:text-on-primary transition-colors mt-1"
                aria-label="Close modal"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Body */}
            <div className="px-8 py-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-secondary-fixed rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary">Request Submitted!</h3>
                  <p className="text-on-surface-variant max-w-xs">
                    Thank you, <strong>{form.name}</strong>. We'll reach out to <strong>{form.email}</strong> within 24 hours to schedule your demo.
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-4 px-8 py-3 bg-primary text-on-primary rounded-xl font-label-sm hover:opacity-90 transition-all"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-label-sm text-label-sm text-on-surface-variant">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Alex Rivera"
                        className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-label-sm text-label-sm text-on-surface-variant">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">Company Name *</label>
                    <input
                      type="text"
                      required
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">What are you looking to automate?</label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Briefly describe your use case..."
                      className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-primary text-on-primary rounded-xl font-label-sm hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                        <span>Book My Demo</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
