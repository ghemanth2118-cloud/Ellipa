
import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Pricing() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/*  TopNavBar  */}
      
      <main className="pt-20">
        {/*  Hero Section  */}
        <section className="py-section-gap px-page-margin max-w-max-width mx-auto text-center">
          <span className="inline-block py-1 px-3 mb-stack-md bg-secondary-fixed text-on-secondary-fixed text-label-sm font-label-sm rounded-full">
Predictable Growth          </span>
          <h1 className="font-display-xl text-display-xl mb-stack-md">
Transparent Pricing for             <br />
            <span className="text-secondary">
Precision Automation            </span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-stack-lg">

                Scale your technical operations with Ellipa's fixed-cost model. No hidden fees, no seat-based limitations. Just pure, reliable performance.
                      </p>
        </section>
        {/*  Pricing Tiers  */}
        <section className="pb-section-gap px-page-margin max-w-max-width mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
            {/*  Starter  */}
            <div className="bg-surface-container-lowest p-stack-lg rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-stack-lg">
                <h3 className="font-headline-md text-headline-md text-primary mb-stack-sm">
Starter                </h3>
                <p className="font-body-md text-on-surface-variant">
Ideal for small teams automating core workflows.                </p>
              </div>
              <div className="mb-stack-lg">
                <span className="font-display-lg text-headline-lg">
$499                </span>
                <span className="text-on-surface-variant font-label-sm">
/month                </span>
              </div>
              <ul className="space-y-stack-sm mb-stack-lg">
                <li className="flex items-center gap-stack-sm font-body-md text-on-surface">
                  <span className="material-symbols-outlined text-secondary" style={{"fontVariationSettings":"'FILL' 1"}}>
check_circle                  </span>

                            Up to 5 Active Automations
                                        </li>
                <li className="flex items-center gap-stack-sm font-body-md text-on-surface">
                  <span className="material-symbols-outlined text-secondary" style={{"fontVariationSettings":"'FILL' 1"}}>
check_circle                  </span>

                            Standard API Access
                                        </li>
                <li className="flex items-center gap-stack-sm font-body-md text-on-surface">
                  <span className="material-symbols-outlined text-secondary" style={{"fontVariationSettings":"'FILL' 1"}}>
check_circle                  </span>

                            Email Support
                                        </li>
              </ul>
              <Link to="/signup?plan=starter" className="block w-full py-3 border border-primary text-primary rounded-lg font-label-sm hover:bg-surface-container-low transition-all text-center">
Choose Starter              </Link>
            </div>
            {/*  Professional  */}
            <div className="relative bg-primary-container p-stack-lg rounded-xl border border-primary shadow-lg transform scale-105 z-10 text-surface-container-lowest">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-on-secondary px-4 py-1 rounded-full text-label-sm font-label-sm">
MOST POPULAR              </div>
              <div className="mb-stack-lg">
                <h3 className="font-headline-md text-headline-md mb-stack-sm">
Professional                </h3>
                <p className="text-on-primary-container">
For high-growth firms requiring deep integration.                </p>
              </div>
              <div className="mb-stack-lg">
                <span className="font-display-lg text-headline-lg">
$1,299                </span>
                <span className="text-on-primary-container font-label-sm">
/month                </span>
              </div>
              <ul className="space-y-stack-sm mb-stack-lg">
                <li className="flex items-center gap-stack-sm font-body-md">
                  <span className="material-symbols-outlined text-tertiary-fixed" style={{"fontVariationSettings":"'FILL' 1"}}>
check_circle                  </span>

                            Unlimited Active Automations
                                        </li>
                <li className="flex items-center gap-stack-sm font-body-md">
                  <span className="material-symbols-outlined text-tertiary-fixed" style={{"fontVariationSettings":"'FILL' 1"}}>
check_circle                  </span>

                            Advanced Logic Builders
                                        </li>
                <li className="flex items-center gap-stack-sm font-body-md">
                  <span className="material-symbols-outlined text-tertiary-fixed" style={{"fontVariationSettings":"'FILL' 1"}}>
check_circle                  </span>

                            Priority 24/7 Support
                                        </li>
                <li className="flex items-center gap-stack-sm font-body-md">
                  <span className="material-symbols-outlined text-tertiary-fixed" style={{"fontVariationSettings":"'FILL' 1"}}>
check_circle                  </span>

                            Webhooks &amp; Custom Triggers
                                        </li>
              </ul>
              <Link to="/signup?plan=professional" className="block w-full py-3 bg-secondary-container text-on-secondary rounded-lg font-label-sm hover:opacity-90 transition-all shadow-lg text-center">
Start Professional Trial              </Link>
            </div>
            {/*  Enterprise  */}
            <div className="bg-surface-container-lowest p-stack-lg rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-stack-lg">
                <h3 className="font-headline-md text-headline-md text-primary mb-stack-sm">
Enterprise                </h3>
                <p className="font-body-md text-on-surface-variant">
Tailored solutions for complex global architectures.                </p>
              </div>
              <div className="mb-stack-lg">
                <span className="font-display-lg text-headline-lg">
Custom                </span>
              </div>
              <ul className="space-y-stack-sm mb-stack-lg">
                <li className="flex items-center gap-stack-sm font-body-md text-on-surface">
                  <span className="material-symbols-outlined text-secondary" style={{"fontVariationSettings":"'FILL' 1"}}>
check_circle                  </span>

                            Custom Security Compliance
                                        </li>
                <li className="flex items-center gap-stack-sm font-body-md text-on-surface">
                  <span className="material-symbols-outlined text-secondary" style={{"fontVariationSettings":"'FILL' 1"}}>
check_circle                  </span>

                            Dedicated Account Manager
                                        </li>
                <li className="flex items-center gap-stack-sm font-body-md text-on-surface">
                  <span className="material-symbols-outlined text-secondary" style={{"fontVariationSettings":"'FILL' 1"}}>
check_circle                  </span>

                            On-Premise Deployment Options
                                        </li>
              </ul>
              <Link to="/enterprise" className="block w-full py-3 border border-primary text-primary rounded-lg font-label-sm hover:bg-surface-container-low transition-all text-center">
Contact Sales              </Link>
            </div>
          </div>
        </section>
        {/*  Feature Comparison Table  */}
        <section className="py-section-gap bg-surface-container-low">
          <div className="px-page-margin max-w-max-width mx-auto">
            <h2 className="font-headline-lg text-headline-lg mb-stack-lg text-center">
Compare Capabilities            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-outline-variant">
                    <th className="py-4 text-left font-label-sm text-on-surface-variant px-4">
Feature                    </th>
                    <th className="py-4 text-center font-label-sm text-primary px-4">
Starter                    </th>
                    <th className="py-4 text-center font-label-sm text-secondary px-4">
Professional                    </th>
                    <th className="py-4 text-center font-label-sm text-primary px-4">
Enterprise                    </th>
                  </tr>
                </thead>
                <tbody className="font-body-md">
                  <tr className="border-b border-outline-variant/30 hover:bg-surface-container">
                    <td className="py-4 px-4 text-on-surface">
Max Concurrent Tasks                    </td>
                    <td className="py-4 px-4 text-center">
10                    </td>
                    <td className="py-4 px-4 text-center font-bold">
100+                    </td>
                    <td className="py-4 px-4 text-center">
Unlimited                    </td>
                  </tr>
                  <tr className="border-b border-outline-variant/30 hover:bg-surface-container">
                    <td className="py-4 px-4 text-on-surface">
Execution Speed                    </td>
                    <td className="py-4 px-4 text-center">
Standard                    </td>
                    <td className="py-4 px-4 text-center font-bold">
High Priority                    </td>
                    <td className="py-4 px-4 text-center">
Dedicated Grid                    </td>
                  </tr>
                  <tr className="border-b border-outline-variant/30 hover:bg-surface-container">
                    <td className="py-4 px-4 text-on-surface">
Reporting Dashboard                    </td>
                    <td className="py-4 px-4 text-center">
Basic                    </td>
                    <td className="py-4 px-4 text-center font-bold">
Advanced AI                    </td>
                    <td className="py-4 px-4 text-center">
Custom Bi-Sync                    </td>
                  </tr>
                  <tr className="border-b border-outline-variant/30 hover:bg-surface-container">
                    <td className="py-4 px-4 text-on-surface">
User Logs Persistence                    </td>
                    <td className="py-4 px-4 text-center">
30 Days                    </td>
                    <td className="py-4 px-4 text-center font-bold">
365 Days                    </td>
                    <td className="py-4 px-4 text-center">
Infinite                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {/*  Custom Automation Bento Grid  */}
        <section className="py-section-gap px-page-margin max-w-max-width mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-md">
            <div className="md:col-span-8 bg-primary-container rounded-xl p-stack-lg text-surface-container-lowest flex flex-col justify-between overflow-hidden relative min-h-[400px]">
              <div className="z-10">
                <h2 className="font-headline-lg text-headline-lg mb-stack-sm">
Custom Automation Design                </h2>
                <p className="font-body-lg text-on-primary-container max-w-lg">
Our engineering team partners with you to build proprietary automation logic tailored to your unique infrastructure and business rules.                </p>
              </div>
              <div className="mt-stack-lg z-10">
                <button className="px-8 py-3 bg-tertiary-fixed text-on-tertiary-fixed rounded-lg font-label-sm hover:opacity-90 flex items-center gap-2 group" onClick={() => navigate('/enterprise')}>

                            Start Consultation
                                              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
arrow_forward                  </span>
                </button>
              </div>
              <img className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" data-alt="A sophisticated close-up of a high-tech computer server rack illuminated by soft blue and white LED lights in a dark data center. The scene conveys a mood of high security and extreme technical precision, fitting for an enterprise automation platform. The lighting is low-key with sharp focal points on data cables and blinking status lights." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDSr4d22CWQw33wsDDHjyNyOyYNqvzdlStD-KCe4jKkCRwAvYdGD_aQ6sC9Rd7uQBSDw268cqWRiRxqYUY405eq5KJ4H8i7fxd3INjUq-k7kRje2l_eGakYnFV21hfSMAjrV89kYM1EyOqxkDSMszxfScKgwh8c1cmW5BUcgX2QoRDvUlQBbSwDCp1SY_j3sk1m8-l8JL3yCmhkrpTkVFcNU3gPV8seZ2lu4P0wGWM7OXG09oPtIRMdZTBBJAW-luFOtuO27on0f1f" />
            </div>
            <div className="md:col-span-4 bg-secondary-container rounded-xl p-stack-lg text-white flex flex-col justify-center items-center text-center">
              <span className="material-symbols-outlined text-[64px] mb-stack-md">
engineering              </span>
              <h3 className="font-headline-md text-headline-md mb-stack-sm">
Expert Implementation              </h3>
              <p className="font-body-md opacity-90">
0 to fully automated in under 4 weeks with our white-glove onboarding service.              </p>
            </div>
          </div>
        </section>
        {/*  FAQ Section  */}
        <section className="py-section-gap bg-surface-container-lowest border-t border-outline-variant/30">
          <div className="px-page-margin max-w-3xl mx-auto">
            <h2 className="font-headline-lg text-headline-lg mb-stack-lg text-center">
Common Questions            </h2>
            <div className="space-y-stack-md">
              <div className="p-stack-md border-b border-outline-variant/30">
                <h4 className="font-headline-md text-primary mb-stack-sm flex justify-between items-center cursor-pointer">

                            Are there any volume-based costs?
                                              <span className="material-symbols-outlined">
expand_more                  </span>
                </h4>
                <p className="font-body-md text-on-surface-variant">
No. Unlike competitors, Ellipa uses a fixed-cost tier model. You can run as many tasks as your infrastructure allows without ever seeing a variable surcharge on your bill.                </p>
              </div>
              <div className="p-stack-md border-b border-outline-variant/30">
                <h4 className="font-headline-md text-primary mb-stack-sm flex justify-between items-center cursor-pointer">

                            Can we switch plans at any time?
                                              <span className="material-symbols-outlined">
expand_more                  </span>
                </h4>
                <p className="font-body-md text-on-surface-variant">
Yes, plan upgrades take effect immediately. Downgrades take effect at the start of your next billing cycle to ensure uninterrupted service.                </p>
              </div>
              <div className="p-stack-md border-b border-outline-variant/30">
                <h4 className="font-headline-md text-primary mb-stack-sm flex justify-between items-center cursor-pointer">

                            Do you offer discounts for non-profits?
                                              <span className="material-symbols-outlined">
expand_more                  </span>
                </h4>
                <p className="font-body-md text-on-surface-variant">
We are committed to social impact. Non-profits and educational institutions are eligible for a 30% discount across all tiers. Contact our sales team for verification.                </p>
              </div>
            </div>
          </div>
        </section>
        {/*  Final CTA  */}
        <section className="py-section-gap">
          <div className="px-page-margin max-w-max-width mx-auto bg-primary text-surface-container-lowest rounded-xl py-20 px-10 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-display-lg text-headline-lg mb-stack-md">
Ready to Automate with Precision?              </h2>
              <p className="font-body-lg text-on-primary-container max-w-xl mx-auto mb-stack-lg">
Join 2,000+ companies that rely on Ellipa for mission-critical operations.              </p>
              <div className="flex flex-col md:flex-row justify-center gap-stack-md">
                <Link to="/signup" className="inline-block px-10 py-4 bg-secondary text-on-secondary rounded-lg font-label-sm text-lg hover:brightness-110 transition-all text-center">
Get Started Now                </Link>
                <Link to="/enterprise" className="inline-block px-10 py-4 border border-surface-container-low text-surface-container-low rounded-lg font-label-sm text-lg hover:bg-white/10 transition-all text-center">
Speak to an Expert                </Link>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/20" />
          </div>
        </section>
      </main>
      
      

    </>
  );
}
