
import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Process() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/*  TopNavBar  */}
      
      {/*  Hero Section  */}
      
      {/*  Vertical Process Steps  */}
      <main className="pt-40 max-w-max-width mx-auto px-page-margin pb-section-gap">
        {/* Process Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm mb-6 shadow-sm">
            <span className="material-symbols-outlined text-[18px]">account_tree</span>
            MODULAR ENGAGEMENT MODEL
          </span>
          <h1 className="font-display-xl text-display-xl tracking-tight text-primary mb-6">
            Our High-Fidelity <span className="text-secondary">Methodology</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            From initial discovery to self-correcting autonomous operations, our step-by-step process guarantees 100% predictable fixed-cost delivery and continuous optimization.
          </p>
        </div>

        <div className="space-y-section-gap">
          {/*  Step 1: Discovery  */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-section-gap items-center relative">
            <div className="order-2 lg:order-1">
              <div className="relative pl-16 step-line">
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center z-10">
                  <span className="font-bold">
01                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg mb-stack-md">
Discovery &amp; Mapping                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg">

                            Our AI-driven engine analyzes your existing workflows to identify high-impact automation opportunities. We map every touchpoint, ensuring no detail is overlooked before we begin the design phase.
                                        </p>
                <ul className="space-y-stack-sm mb-stack-lg">
                  <li className="flex items-center gap-2 text-on-surface">
                    <span className="material-symbols-outlined text-secondary" style={{"fontVariationSettings":"'FILL' 1"}}>
check_circle                    </span>

                                Workflow Audit
                                              </li>
                  <li className="flex items-center gap-2 text-on-surface">
                    <span className="material-symbols-outlined text-secondary" style={{"fontVariationSettings":"'FILL' 1"}}>
check_circle                    </span>

                                ROI Prediction Modeling
                                              </li>
                  <li className="flex items-center gap-2 text-on-surface">
                    <span className="material-symbols-outlined text-secondary" style={{"fontVariationSettings":"'FILL' 1"}}>
check_circle                    </span>

                                Bottleneck Identification
                                              </li>
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2 rounded-xl overflow-hidden shadow-lg bg-surface-container-highest aspect-video group">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A clean, professional dashboard interface showing a complex node-based workflow map. The UI is minimalist with a white background and sharp blue accents, illustrating a process of data mapping and discovery in a high-end enterprise software environment. The lighting is soft and consistent with a modern corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDct31Woqaaqhh2mcOT425ec3RWD4UXrKW1igbbaCRbdWVaKKOPOa_kZcE-Yxi2ZwWgkWrYDlgOn6j6CPt5qgj2F5IoM4wW5RS_DWh7w9u51W_Ih2sfzMy-O3l0suaQqrnjuwZZfCgsLlGclpP-9V-nGvCjS4X469gK5bEnULYMI1NE8OUbUW_QeFz31sdW4A4WnPMbQw63k88QdAbR3waUSbm5zzxxgiAI-_vW62eC5jVBlMQISaRC_D8ngCPek_GFNlwFeKuF8YbP" />
            </div>
          </section>
          {/*  Step 2: Design  */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-section-gap items-center relative">
            <div className="order-1 rounded-xl overflow-hidden shadow-lg bg-primary-container aspect-video relative group">
              <div className="absolute inset-0 bg-black/20 z-10 flex items-center justify-center group-hover:bg-black/10 transition-all">
                <button className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                  <span className="material-symbols-outlined text-4xl" style={{"fontVariationSettings":"'FILL' 1"}}>
play_arrow                  </span>
                </button>
              </div>
              <img className="w-full h-full object-cover" data-alt="A cinematic close-up of a high-tech automation designer interface. A dark, immersive background features glowing blue wireframes of automated processes being constructed. The visual style is premium and sophisticated, suggesting precision engineering and intelligent software design for global industrial applications." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4ctQL-lMgyk2uCg84wjmiTS2TiqWRW952OK0rVYKmzW_tX2gISNCaC3Zcym8ru9Mj9MmGEOP8W-UUpCAOVda3oUiNc2gWM1dU2ClVpk6U2rwvPmuvwGmbg_WdOs95c_-Rqt0RHjECCyywVjEth9YwO9rOlUWP87AlEa8Uv7ORLRyPOuX9I_cnOV7pDLO6PMnUjWABa98ebVV_8QvskKH2o2-Z3gLg7uuwf2skTWw01-sEX3LsfhFXEX2ikjGGPrwc_J5kIrgLJR2y" />
            </div>
            <div className="order-2">
              <div className="relative pl-16 step-line">
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center z-10">
                  <span className="font-bold">
02                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg mb-stack-md">
Intelligent Design                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg">

                            We translate mapped workflows into precise, executable automation logic. Our low-code designer allows for rapid iteration while maintaining the rigor of enterprise-grade architecture.
                                        </p>
                <div className="grid grid-cols-2 gap-stack-md">
                  <div className="p-stack-md bg-white border border-outline-variant rounded-lg">
                    <span className="material-symbols-outlined text-secondary mb-stack-sm">
architecture                    </span>
                    <p className="font-label-sm text-label-sm">
Modular Logic                    </p>
                  </div>
                  <div className="p-stack-md bg-white border border-outline-variant rounded-lg">
                    <span className="material-symbols-outlined text-secondary mb-stack-sm">
terminal                    </span>
                    <p className="font-label-sm text-label-sm">
Custom Scripts                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*  Step 3: Automation  */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-section-gap items-center relative">
            <div className="order-2 lg:order-1">
              <div className="relative pl-16 step-line">
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center z-10">
                  <span className="font-bold">
03                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg mb-stack-md">
Precision Execution                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg">

                            The core Ellipa engine takes over, executing tasks with sub-millisecond latency. Whether it's processing millions of transactions or managing intricate supply chain logistics, the system operates with unwavering reliability.
                                        </p>
                <div className="p-stack-lg bg-surface-container rounded-xl border-l-4 border-secondary">
                  <p className="italic text-on-surface font-body-md">
"The speed of transition from design to full-scale automation was 4x faster than our previous legacy provider."                  </p>
                  <p className="mt-stack-sm font-label-sm text-label-sm opacity-60">
— CTO, FinTech Global                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 rounded-xl overflow-hidden shadow-lg bg-surface-container-highest aspect-video group">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Abstract macro photography of a high-performance computer circuit board with glowing electric blue paths representing data flow and automation execution. The image is clean, sharp, and modern, utilizing a color palette of deep navies and vibrant blues to convey speed, reliability, and technical precision." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPLcML9LZDJdNcpR4rIz7EENa9HDWw5tZlUg4krBbtgoQyJMAK3_3rTJKGirPK3h64Lp32Vh_NMQrowlBKCfcntyOffLQXvuA_r7Xs6nxC9SaJe59pi-Zlma1EGy9XuNhQfQ_eixkT6E6pXVIUoU5X5yI7JsMW3f44SbSYt13E2oGHOnandDMGvxAOmxNy7tlR3d9XZGyUByqlY4Jt2Ulu4MZqudiWZx-y53bBt4DoEkOj0ZXxKeX3LCR09EhUe8AYech7Dm8MfqvR" />
            </div>
          </section>
          {/*  Step 4: Deployment  */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-section-gap items-center relative">
            <div className="order-1 rounded-xl overflow-hidden shadow-lg bg-surface-container-highest aspect-video group">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A stunning global visualization showing interconnected nodes across a world map. The lighting is low-key with bright, focused data points representing a worldwide deployment of technology. The style is editorial and premium, emphasizing global reach and large-scale enterprise impact within a minimalist digital landscape." src="https://lh3.googleusercontent.com/aida-public/AB6AXuByXx8o-ymtXnal84AH43iI7Q241WIgKywXV3UVyqZUAT6w7QAZWZjA95Oapb4kXYmwOYoGWETcWZ3quJVVM3uUbkwCIwodnmvz3A_U_E3z8qlFTtnizBpA_TRo5DtRkxIofY_3_mVXayBwfBWfNouFoXZKkVrUlLVlX2xJAgPqlaRFcZymDGrSmwBLBtlmXyPBlUwX5Oi6Yh657pL56lnQEWZsSPGykDJ0beaHt7Ng50B6P8CK9oD7qSzrRhX55_i2-qFgrnolD19Y" />
            </div>
            <div className="order-2">
              <div className="relative pl-16 step-line">
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center z-10">
                  <span className="font-bold">
04                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg mb-stack-md">
Global Deployment                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg">

                            Scale your automations across regions and business units with a single click. Our cloud-native infrastructure ensures consistent performance and compliance, no matter the scale of your operation.
                                        </p>
                <div className="flex flex-wrap gap-stack-sm">
                  <span className="px-3 py-1 bg-white border border-outline-variant rounded-full text-[12px] font-semibold">
Multi-Region                  </span>
                  <span className="px-3 py-1 bg-white border border-outline-variant rounded-full text-[12px] font-semibold">
ISO 27001                  </span>
                  <span className="px-3 py-1 bg-white border border-outline-variant rounded-full text-[12px] font-semibold">
Auto-Scaling                  </span>
                </div>
              </div>
            </div>
          </section>
          {/*  Step 5: Continuous Optimization  */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-section-gap items-center relative">
            <div className="order-2 lg:order-1">
              <div className="relative pl-16 step-line">
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center z-10">
                  <span className="font-bold">
05                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg mb-stack-md">
Continuous Optimization                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg">

                            Post-deployment, our AI agents continuously monitor performance, suggesting and automatically implementing micro-adjustments to maximize efficiency.
                                        </p>
                <ul className="space-y-stack-sm mb-stack-lg">
                  <li className="flex items-center gap-2 text-on-surface">
                    <span className="material-symbols-outlined text-secondary">
monitoring                    </span>

                                Real-time Performance Tuning
                                              </li>
                  <li className="flex items-center gap-2 text-on-surface">
                    <span className="material-symbols-outlined text-secondary">
psychology                    </span>

                                Autonomous Refinement
                                              </li>
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2 rounded-xl overflow-hidden shadow-lg bg-surface-container-highest aspect-video group">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Advanced digital visualization of AI neural networks optimizing a data stream. Vibrant neon lines connecting nodes in a 3D space, suggesting high-speed processing and intelligent optimization." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPLcML9LZDJdNcpR4rIz7EENa9HDWw5tZlUg4krBbtgoQyJMAK3_3rTJKGirPK3h64Lp32Vh_NMQrowlBKCfcntyOffLQXvuA_r7Xs6nxC9SaJe59pi-Zlma1EGy9XuNhQfQ_eixkT6E6pXVIUoU5X5yI7JsMW3f44SbSYt13E2oGHOnandDMGvxAOmxNy7tlR3d9XZGyUByqlY4Jt2Ulu4MZqudiWZx-y53bBt4DoEkOj0ZXxKeX3LCR09EhUe8AYech7Dm8MfqvR" />
            </div>
          </section>
          {/*  Step 6: Enterprise Governance  */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-section-gap items-center relative">
            <div className="order-1 rounded-xl overflow-hidden shadow-lg bg-surface-container-highest aspect-video group">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A sophisticated security dashboard interface showing encrypted data streams and compliance certificates. Minimalist dark UI with high-contrast security indicators." src="https://lh3.googleusercontent.com/aida-public/AB6AXuByXx8o-ymtXnal84AH43iI7Q241WIgKywXV3UVyqZUAT6w7QAZWZjA95Oapb4kXYmwOYoGWETcWZ3quJVVM3uUbkwCIwodnmvz3A_U_E3z8qlFTtnizBpA_TRo5DtRkxIofY_3_mVXayBwfBWfNouFoXZKkVrUlLVlX2xJAgPqlaRFcZymDGrSmwBLBtlmXyPBlUwX5Oi6Yh657pL56lnQEWZsSPGykDJ0beaHt7Ng50B6P8CK9oD7qSzrRhX55_i2-qFgrnolD19Y" />
            </div>
            <div className="order-2">
              <div className="relative pl-16 step-line-last">
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center z-10">
                  <span className="font-bold">
06                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg mb-stack-md">
Enterprise Governance                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg">

                            Ensure total control with centralized management, detailed audit logs, and granular permission controls designed for the world's most regulated industries.
                                        </p>
                <div className="flex flex-wrap gap-stack-sm">
                  <span className="px-3 py-1 bg-surface-container-high border border-outline-variant rounded-full text-[12px] font-semibold">
SOC2 Type II                  </span>
                  <span className="px-3 py-1 bg-surface-container-high border border-outline-variant rounded-full text-[12px] font-semibold">
GDPR Compliant                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      {/*  Why Ellipa? Bento Grid Section  */}
      <section className="bg-surface-container-low py-section-gap">
        <div className="max-w-max-width mx-auto px-page-margin">
          <div className="text-center mb-section-gap">
            <h2 className="font-display-lg text-headline-lg mb-stack-md">
Why Enterprise Leaders Choose Ellipa            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
Precision built into every layer of our platform.            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
            {/*  Card 1: Speed  */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/30 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                <span className="material-symbols-outlined text-3xl">
bolt                </span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-stack-sm">
Unrivaled Speed              </h3>
              <p className="text-on-surface-variant font-body-md">
Reduce manual processing time by up to 85% with our proprietary execution engine. Speed without compromising accuracy.              </p>
            </div>
            {/*  Card 2: Reliability  */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/30 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                <span className="material-symbols-outlined text-3xl">
verified_user                </span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-stack-sm">
99.99% Uptime              </h3>
              <p className="text-on-surface-variant font-body-md">
Enterprise-grade reliability is non-negotiable. Our redundant systems ensure your business processes never stop.              </p>
            </div>
            {/*  Card 3: Cost  */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/30 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                <span className="material-symbols-outlined text-3xl">
payments                </span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-stack-sm">
Predictable Cost              </h3>
              <p className="text-on-surface-variant font-body-md">
No hidden fees or scaling surprises. Transparent tier-based pricing tailored for high-growth firms and large enterprises.              </p>
            </div>
          </div>
        </div>
      </section>
      {/*  Final CTA Section  */}
      <section className="py-section-gap">
        <div className="max-w-4xl mx-auto px-page-margin text-center">
          <div className="p-stack-lg lg:p-20 bg-primary-container text-surface-container-lowest rounded-3xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full" />
            <div className="relative z-10">
              <h2 className="font-display-lg text-display-lg mb-stack-lg leading-tight">
Ready to see precision in motion?              </h2>
              <p className="font-body-lg text-body-lg text-on-primary-container mb-stack-lg max-w-xl mx-auto">

                        Join the world's most innovative companies automating at scale.
                                  </p>
              <div className="flex flex-col sm:flex-row justify-center gap-stack-md">
                <button className="px-10 py-4 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm hover:bg-secondary-container transition-all">
Book a Demo                </button>
                <button className="px-10 py-4 rounded-full border border-outline-variant/30 text-surface-container-lowest font-label-sm text-label-sm hover:bg-white/10 transition-all">
Contact Sales                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      

    </>
  );
}
