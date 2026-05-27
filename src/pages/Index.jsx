
import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ScrollVelocity from '../components/ScrollVelocity';

export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      
      <main className="pt-20">
        {/*  Hero Section  */}
        <section className="px-page-margin py-section-gap max-w-max-width mx-auto grid lg:grid-cols-2 gap-stack-lg items-center">
          <div className="space-y-stack-lg">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[18px]">
verified              </span>

                    Precision Automation at Scale
                            </div>
            <h1 className="font-display-xl text-display-xl tracking-tight text-primary">

                    Automate with               <span className="text-secondary">
Precision              </span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">

                    Ellipa provides fixed-cost automation solutions for modern teams who value transparency and reliability. No hidden fees, just pure technical excellence.
                            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/solutions" className="px-8 py-4 rounded-xl bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center gap-2 shadow-lg hover:translate-y-[-2px] transition-transform">

                        Explore Fixed Solutions
                                        <span className="material-symbols-outlined">
arrow_forward                </span>
              </Link>
              <Link to="/pricing" className="px-8 py-4 rounded-xl border border-outline font-label-sm text-label-sm flex items-center justify-center hover:bg-surface-container-low transition-colors">

                        View Pricing
                                  </Link>
            </div>
            <div className="flex items-center gap-6 pt-4 grayscale opacity-60">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">
Compliant with:              </span>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-headline-md">
security                </span>
                <span className="material-symbols-outlined text-headline-md">
verified_user                </span>
                <span className="material-symbols-outlined text-headline-md">
vpn_lock                </span>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-secondary-container/5 rounded-[2rem] blur-3xl group-hover:bg-secondary-container/10 transition-colors" />
            <div className="relative rounded-[2rem] overflow-hidden aspect-square flex items-center justify-center bg-gradient-to-tr from-secondary/5 via-transparent to-primary/5 transition-all">
              <spline-viewer url="https://prod.spline.design/qcE5icNbx-X9H2Zo/scene.splinecode" class="w-full h-full"></spline-viewer>
            </div>
          </div>
        </section>
        {/*  Trusted By Section  */}
        <section className="bg-surface-container-low py-16">
          <div className="px-page-margin max-w-max-width mx-auto">
            <p className="text-center font-label-sm text-label-sm text-outline mb-12 uppercase tracking-[0.2em]">
Trusted by Industry Pioneers            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 grayscale opacity-70">
              <div className="font-display-lg text-headline-md font-extrabold text-on-surface-variant">
MICROSOFT              </div>
              <div className="font-display-lg text-headline-md font-extrabold text-on-surface-variant">
NVIDIA              </div>
              <div className="font-display-lg text-headline-md font-extrabold text-on-surface-variant">
OPENAI              </div>
              <div className="font-display-lg text-headline-md font-extrabold text-on-surface-variant">
GITHUB              </div>
              <div className="font-display-lg text-headline-md font-extrabold text-on-surface-variant">
AKAMAI              </div>
            </div>
          </div>
        </section>
        {/*  The Fixed-Cost Advantage  */}
        <section className="px-page-margin py-section-gap max-w-max-width mx-auto">
          <div className="grid lg:grid-cols-12 gap-stack-lg items-end mb-16">
            <div className="lg:col-span-7">
              <h2 className="font-display-lg text-display-lg text-primary tracking-tight mb-6">
The Fixed-Cost                 <span className="text-secondary">
Advantage                </span>
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">

                        Traditional automation agencies charge by the hour, incentivizing inefficiency. At Ellipa, we believe in radical transparency. Our fixed-cost model ensures your budget is predictable while our precision-driven approach guarantees results.
                                  </p>
            </div>
            <div className="lg:col-span-5 flex lg:justify-end">
              <a className="font-label-sm text-label-sm text-secondary flex items-center gap-2 group" href="#">

                        Explore our pricing tiers
                                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
arrow_right_alt                </span>
              </a>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-gutter">
            <div className="p-10 bg-white border border-outline-variant/40 rounded-2xl hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">
payments                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">
Zero Hidden Fees              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
Our quotes are comprehensive. What you see is what you pay—no surprise maintenance or integration charges.              </p>
            </div>
            <div className="p-10 bg-white border border-outline-variant/40 rounded-2xl hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">
speed                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">
Rapid Integration              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
Standardized workflows allow us to deploy complex automation modules in a fraction of the time.              </p>
            </div>
            <div className="p-10 bg-white border border-outline-variant/40 rounded-2xl hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">
verified                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">
Guaranteed ROI              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
We don't just automate; we optimize. Every project is measured against specific performance benchmarks.              </p>
            </div>
          </div>
        </section>
        {/*  Automation Capabilities Bento Grid  */}
        <section className="bg-primary-container py-section-gap">
          <div className="px-page-margin max-w-max-width mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display-lg text-display-lg text-surface-container-lowest tracking-tight">
Enterprise Grade Capabilities              </h2>
              <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl mx-auto mt-4">
Powerful, modular, and built to scale with your business's expanding needs.              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-stack-md">
              {/*  Bento Item 1  */}
              <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-tertiary-fixed-dim text-[40px] mb-6">
robot_2                  </span>
                  <h3 className="font-headline-md text-headline-md text-surface-container-lowest mb-2">
Autonomous AI Agents                  </h3>
                  <p className="font-body-md text-body-md text-on-primary-container">
Deploy self-correcting agents that manage end-to-end operational workflows without human oversight.                  </p>
                </div>
                <div className="mt-8 flex gap-2">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/60">
Llama 3                  </span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/60">
GPT-4o                  </span>
                </div>
              </div>
              {/*  Bento Item 2  */}
              <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-secondary-container rounded-3xl p-8 flex flex-col justify-between group overflow-hidden relative">
                <div className="relative z-10">
                  <h3 className="font-headline-md text-headline-md text-on-secondary mb-2">
Cloud Infrastructure                  </h3>
                  <p className="font-body-md text-body-md text-on-secondary/80">
Scalable compute resources that automatically adjust based on process complexity and demand.                  </p>
                </div>
                <div className="mt-8 flex justify-end relative z-10">
                  <span className="material-symbols-outlined text-[64px] text-white/20 group-hover:scale-125 transition-transform duration-500">
cloud_done                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              </div>
              {/*  Bento Item 3  */}
              <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                <span className="material-symbols-outlined text-secondary-fixed text-[40px] mb-6">
analytics                </span>
                <h3 className="font-headline-md text-headline-md text-surface-container-lowest mb-2">
Predictive Logic                </h3>
                <p className="font-body-md text-body-md text-on-primary-container">
Analyze historical patterns to automate decisions before issues arise.                </p>
              </div>
              {/*  Bento Item 4  */}
              <div className="col-span-1 md:col-span-2 lg:col-span-4 bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 flex items-center gap-8 group">
                <div className="flex-1">
                  <h3 className="font-headline-md text-headline-md text-surface-container-lowest mb-2">
Legacy Modernization                  </h3>
                  <p className="font-body-md text-body-md text-on-primary-container">
Bridge the gap between 20-year-old legacy systems and modern API-driven architectures with smart wrappers.                  </p>
                </div>
                <div className="hidden sm:block w-32 h-32 bg-white/10 rounded-2xl rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  <img alt="Hardware Integration Close-up" className="w-full h-full object-cover rounded-2xl" data-alt="A macro photography shot of high-tech server hardware components with glowing microchips and precision fiber optic wiring. The image features a cool-toned industrial aesthetic with deep navy shadows and sharp electric blue accent lights. The focus is incredibly tight on the circuitry, emphasizing professional-grade engineering and complexity. The overall lighting is moody yet clear, fitting for an immersive high-tech enterprise environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2aSaAhNIDGisHp8o45by_8kCHh83ILEj4fGNDPoB9WWKdwdx0Ggw_xNMpEAJ3aYxLMuB_H3D6v_w-Y9vmhMM4YhVN_KPyeyhlUQT8Pj-949sIiSk6cWcNKnF7mDZKhhNXRnhJZoKThmXpCLwFMsLkAad20eDjm_IvDsSZsOyN55UeLnXC8VgLnmGgjsJpiO9oCx69YlxkoNsE9WW0IsQXRcNaqwPD9l5ejIPRBm-xqypM-XF0QgF7cIn88M2_BNHQO4PFwIhYGl_R" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Interactive Product Walkthrough  */}
        <section className="px-page-margin py-section-gap max-w-[1440px] mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-10 pointer-events-none" />
            <div className="relative aspect-video flex items-center justify-center group cursor-pointer">
              <img alt="Interactive Product Video Walkthrough" className="w-full h-full object-cover" data-alt="An ultra-wide cinematic shot of a futuristic control room with multiple holographic displays showing complex data analytics and automated workflow charts. The lighting is low-key with vibrant blue and teal neon accents illuminating the sleek, minimalist architecture. A single person is silhouetted against the bright displays, conveying a sense of mastery over sophisticated technology. The visual style is crisp and premium, evoking a high-budget tech presentation." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpIo8oBX3nB6k2KKEBNmqsJrPGjd4csRsmfTWNFcw2U2AR9EL767WtayvQm2m420ikWwfpHy_exZrp1CrwUSVxXgQbZ9o129ZW-aZldSqLTQGUuemZOvXfVa4GOX2vB07ySIUygmpEZCFGoiE9VHBRRiZ__9mQCnmdOnR2WfuQaZLHc4INSLwt0H0d9StGkPq_-0Fr1pmXEtLRcn313yJHx0nUBv1N8tix_VyEOWF2iYWa7Xv7FTT6XnpjUtqvkSpzzCtEea79GFou" />
              <div className="absolute z-20 flex flex-col items-center gap-6">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform group-hover:bg-white/30">
                  <span className="material-symbols-outlined text-[48px] text-white" style={{"fontVariationSettings":"'FILL' 1"}}>
play_arrow                  </span>
                </div>
                <h2 className="text-white font-display-lg text-headline-lg text-center drop-shadow-lg">
Experience Ellipa in Action                </h2>
              </div>
              {/*  Video Controls Mockup  */}
              <div className="absolute bottom-10 left-10 right-10 z-20 hidden md:flex items-center gap-6 text-white/80">
                <span className="font-label-sm text-label-sm">
03:45 / 12:00                </span>
                <div className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-secondary" />
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined">
settings                  </span>
                  <span className="material-symbols-outlined">
fullscreen                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Testimonials  */}
        <section className="px-page-margin py-section-gap max-w-max-width mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display-lg text-display-lg text-primary tracking-tight">
              Voices of Precision
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-4">
              See how our core leadership and integration team is driving automation forward.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-gutter mb-16">
            <div className="p-8 bg-surface-container-low rounded-2xl border border-outline-variant/30 flex flex-col justify-between hover:shadow-lg transition-all">
              <p className="font-body-lg text-body-lg italic text-on-surface mb-8">
                "Ellipa was built on the principle of absolute precision. We've replaced billing by the hour with guaranteed, high-performance fixed-cost automation modules."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed overflow-hidden flex items-center justify-center font-bold text-secondary text-lg">
                  GV
                </div>
                <div>
                  <p className="font-label-sm text-label-sm text-primary">
                    Gyana Vardhan
                  </p>
                  <p className="text-xs text-on-surface-variant font-semibold">
                    Founder, Ellipa
                  </p>
                </div>
              </div>
            </div>
            <div className="p-8 bg-surface-container-low rounded-2xl border border-outline-variant/30 flex flex-col justify-between hover:shadow-lg transition-all">
              <p className="font-body-lg text-body-lg italic text-on-surface mb-8">
                "With zero hidden fees and predictable flat-rate options, we ensure that modern enterprise teams receive unmatched technical ROI and budget certainty."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed overflow-hidden flex items-center justify-center font-bold text-secondary text-lg">
                  M
                </div>
                <div>
                  <p className="font-label-sm text-label-sm text-primary">
                    Manahor
                  </p>
                  <p className="text-xs text-on-surface-variant font-semibold">
                    CFO, Ellipa
                  </p>
                </div>
              </div>
            </div>
            <div className="p-8 bg-surface-container-low rounded-2xl border border-outline-variant/30 flex flex-col justify-between hover:shadow-lg transition-all">
              <p className="font-body-lg text-body-lg italic text-on-surface mb-8">
                "Building and scaling workflows on Ellipa is a developer's dream. The custom components and lightning-fast engine let us automate complex logic effortlessly."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed overflow-hidden flex items-center justify-center font-bold text-secondary text-lg">
                  H
                </div>
                <div>
                  <p className="font-label-sm text-label-sm text-primary">
                    Hemanth
                  </p>
                  <p className="text-xs text-on-surface-variant font-semibold">
                    Lead Developer & Partner
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scrolling Ticker using React Bits ScrollVelocity */}
          <div className="border-t border-b border-outline-variant/20 py-8 bg-surface-container-low/20 rounded-3xl overflow-hidden">
            <ScrollVelocity 
              texts={[
                'MICROSOFT • NVIDIA • OPENAI • GITHUB • STRIPE • VERCEL • GOOGLE',
                'META • AMAZON • APPLE • DISCORD • VITE • ELLIPA • REACT'
              ]} 
              velocity={30} 
            />
          </div>
        </section>
        {/*  Final CTA  */}
        <section className="px-page-margin pb-section-gap max-w-max-width mx-auto">
          <div className="bg-primary rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-tertiary-fixed-dim/10 rounded-full blur-[100px]" />
            <h2 className="font-display-xl text-headline-lg md:text-display-lg text-on-primary mb-6 relative z-10">
Ready to automate with precision?            </h2>
            <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl mx-auto mb-10 relative z-10">
Join over 500 enterprises who have scaled their operations with Ellipa's intelligent, fixed-cost solutions.            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="px-10 py-5 rounded-xl bg-white text-primary font-label-sm text-label-sm hover:bg-surface-bright transition-all">
Book Your Technical Demo              </button>
              <button className="px-10 py-5 rounded-xl border border-white/20 text-white font-label-sm text-label-sm hover:bg-white/10 transition-all">
Download Capability Deck              </button>
            </div>
          </div>
        </section>
      </main>
      
      

    </>
  );
}
