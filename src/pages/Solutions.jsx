
import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Solutions() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      
      <main className="pt-20">
        {/*  Hero Section  */}
        <section className="py-section-gap px-page-margin max-w-max-width mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm mb-stack-md">

                        ENTERPRISE SOLUTIONS
                                  </span>
              <h1 className="font-display-xl text-display-xl text-primary mb-stack-md">

                        Automate with                 <br />
                <span className="text-secondary">
Surgical Precision                </span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-lg">
                Developing AI agents for inventory data management automation systems. We build autonomous workflows that monitor stock levels, synchronize multi-channel warehouse databases in real-time, predict supply chain demands, and eliminate operational bottlenecks with surgical precision.
              </p>
              <div className="flex flex-wrap gap-stack-md">
                <Link to="/signup" className="inline-flex px-8 py-4 bg-primary text-on-primary rounded-xl font-headline-md items-center gap-2 hover:shadow-lg transition-all text-center">

                            Explore Solutions
                                              <span className="material-symbols-outlined">
arrow_forward                  </span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-full aspect-square overflow-hidden flex items-center justify-center relative bg-gradient-to-tr from-secondary/5 via-transparent to-primary/5 rounded-[2rem]">
                <iframe 
                  src="https://my.spline.design/genkubgreetingrobot-w6mHu5Xaxxm0m5KgatuMTL5G/" 
                  frameBorder="0" 
                  width="100%" 
                  height="100%"
                  className="absolute inset-0 w-full h-full rounded-[2rem]"
                  title="Spline 3D Greeting Robot"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        {/*  Web Automation Section (Bento Style)  */}
        <section className="py-section-gap bg-surface-container-lowest" id="web-automation">
          <div className="px-page-margin max-w-max-width mx-auto">
            <div className="text-center mb-stack-lg">
              <h2 className="font-display-lg text-display-lg text-primary">
Web Automation Testing              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 max-w-2xl mx-auto">
Execute complex cross-browser workflows across 3,000+ real environments with zero maintenance overhead.              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/*  Feature Large Card  */}
              <div className="md:col-span-8 bg-surface-container-low rounded-3xl p-10 border border-outline-variant/20 hover:shadow-md transition-all group">
                <div className="flex flex-col md:flex-row gap-10 items-center">
                  <div className="md:w-1/2">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-on-secondary mb-6">
                      <span className="material-symbols-outlined">
browser_updated                      </span>
                    </div>
                    <h3 className="font-headline-lg text-headline-lg mb-4">
Precision Engine V4                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-secondary" style={{"fontVariationSettings":"'FILL' 1"}}>
check_circle                        </span>
                        <span className="text-on-surface-variant">
                          <strong className="text-primary">
Pixel-Perfect Validation:                          </strong>
 AI-driven visual regression that ignores noise but catches tiny UI shifts.                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-secondary" style={{"fontVariationSettings":"'FILL' 1"}}>
check_circle                        </span>
                        <span className="text-on-surface-variant">
                          <strong className="text-primary">
Self-Healing DOM:                          </strong>
 Dynamic locators that adapt to code changes without breaking tests.                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2 bg-white rounded-xl shadow-lg border border-outline-variant/30 overflow-hidden">
                    <img className="w-full h-auto" data-alt="A clean, minimalist web browser interface displayed on a high-resolution screen. The UI shows complex testing data with sleek line charts in electric blue and dark navy. The background is a crisp, high-key studio setting with soft shadows, emphasizing a professional, enterprise-grade technology platform focused on data accuracy and modern design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqiHFbEacgfiJagCANIXHVaJALwOm10f7wvqgDc-1HK5geOa2Y4uqzZifaSQAvN2VSifWNk6bbntcqCN4izlvB5HmzSphmtlaGxt37IwG5XnAuIYhzGX_0LdByOl0HUt5ytc-f4WnZMHSezUuEUJu6yVJAYG2M3jVE_Ij8UY6qrO_PR3tA8BHAaepoYjYX0WhGhESrhvo53vEEonyyrafhNZXoUDbD057A-6a8lOKiKCKWa8dV2xoF-7VwHtKoSq4JQHuPfOsQlKWg" />
                  </div>
                </div>
              </div>
              {/*  Feature Small Card  */}
              <div className="md:col-span-4 bg-primary-container text-on-primary-container rounded-3xl p-10 flex flex-col justify-between hover:translate-y-[-4px] transition-transform">
                <div>
                  <span className="material-symbols-outlined text-4xl text-tertiary-fixed-dim mb-6">
speed                  </span>
                  <h3 className="font-headline-md text-headline-md text-white mb-2">
Turbo Parallelism                  </h3>
                  <p className="text-on-primary-container/80 text-body-md">
Scale to 100+ concurrent sessions without performance degradation. Built for the world's largest CI/CD pipelines.                  </p>
                </div>
                <div className="mt-8">
                  <div className="text-3xl font-bold text-white">
0.4s                  </div>
                  <div className="text-sm uppercase tracking-widest opacity-60">
Avg. Execution Latency                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Mobile Testing Section (Asymmetric)  */}
        <section className="py-section-gap px-page-margin max-w-max-width mx-auto">
          <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
            <div className="lg:w-1/2">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-4 block">
Mobile Performance              </span>
              <h2 className="font-display-lg text-display-lg text-primary mb-6">
Native Mobile Excellence              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg">

                        Test on thousands of physical iOS and Android devices. No simulators, just real hardware in our global cloud labs.
                                  </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-stack-lg">
                <div className="p-6 border-l-2 border-secondary bg-surface-container-low rounded-r-xl">
                  <h4 className="font-headline-md text-primary mb-2">
Real Device Farm                  </h4>
                  <p className="text-on-surface-variant">
Access the latest flagship devices from Apple, Samsung, and Google instantly.                  </p>
                </div>
                <div className="p-6 border-l-2 border-secondary bg-surface-container-low rounded-r-xl">
                  <h4 className="font-headline-md text-primary mb-2">
Gesture Lab                  </h4>
                  <p className="text-on-surface-variant">
Automate complex multi-touch gestures, biometrics, and network throttling.                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img className="w-full" data-alt="A row of premium smartphones, including iPhones and Android devices, neatly arranged on a sleek, minimalist tech bench. The screens are illuminated with vibrant app interfaces and testing dashboards. The lighting is cold and precise, with a futuristic blue-tinted ambient glow, conveying a sense of high-end hardware and professional mobile application testing environments." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQKOPJzdw0e8OjZolmzS7QN9HFgytC85tScSC06iARn7T98d43GhVLh6cukyE6YVEURDrS1p8tzVLVnC6wrlYtfgpZk9gUCDclTXdGx2gT1iFvvBctQ3IiIdhM6jPukQvZBC8g3cjqOXn1HJZgl0nymIbb7tlZiLEFDzNDm-_mcA3WyEQKmwY2-qKMXjkzDLvjZsG2CWBlE1EALznT88kPkW5m7D9SaXbxaaNtK3Q3Dm47P8tSPOTlvmqeImXMkT1w-_LEW2bCT6Z5" />
              </div>
              {/*  Decorative Element  */}
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary-fixed opacity-30 rounded-full blur-3xl z-0" />
            </div>
          </div>
        </section>
        {/*  API Testing Section (Grid Layout)  */}
        <section className="py-section-gap bg-primary-container text-white overflow-hidden">
          <div className="px-page-margin max-w-max-width mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <h2 className="font-display-lg text-headline-lg lg:text-display-lg mb-6">
API &amp; Integration Ecosystem                </h2>
                <p className="text-on-primary-container text-body-lg mb-8">

                            Go beyond the UI. Validate the core logic of your platform with industrial-strength API automation.
                                        </p>
                <Link to="/enterprise" className="inline-flex items-center gap-2 font-label-sm text-secondary-fixed hover:text-white transition-colors">

                            View Documentation                   <span className="material-symbols-outlined">
arrow_right_alt                  </span>
                </Link>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/*  API Card 1  */}
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="flex justify-between items-start mb-10">
                    <span className="material-symbols-outlined text-4xl text-tertiary-fixed">
api                    </span>
                    <span className="text-[10px] border border-tertiary-fixed/40 px-2 py-0.5 rounded text-tertiary-fixed">
HTTP/3                    </span>
                  </div>
                  <h3 className="font-headline-md mb-3">
Contract Testing                  </h3>
                  <p className="text-on-primary-container text-sm leading-relaxed">
Ensure microservices remain compatible across every deployment with automated schema validation and mock generation.                  </p>
                </div>
                {/*  API Card 2  */}
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="flex justify-between items-start mb-10">
                    <span className="material-symbols-outlined text-4xl text-tertiary-fixed">
lock_reset                    </span>
                    <span className="text-[10px] border border-tertiary-fixed/40 px-2 py-0.5 rounded text-tertiary-fixed">
OIDC                    </span>
                  </div>
                  <h3 className="font-headline-md mb-3">
Security Fuzzing                  </h3>
                  <p className="text-on-primary-container text-sm leading-relaxed">
Automatically detect vulnerabilities in your endpoints with our built-in intelligent traffic analysis and penetration testing.                  </p>
                </div>
                {/*  API Card 3  */}
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="flex justify-between items-start mb-10">
                    <span className="material-symbols-outlined text-4xl text-tertiary-fixed">
analytics                    </span>
                    <span className="text-[10px] border border-tertiary-fixed/40 px-2 py-0.5 rounded text-tertiary-fixed">
99.9%                    </span>
                  </div>
                  <h3 className="font-headline-md mb-3">
Performance Tracing                  </h3>
                  <p className="text-on-primary-container text-sm leading-relaxed">
Monitor latency, throughput, and error rates at the protocol level. Identify bottlenecks before they reach the user.                  </p>
                </div>
                {/*  API Card 4  */}
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="flex justify-between items-start mb-10">
                    <span className="material-symbols-outlined text-4xl text-tertiary-fixed">
hub                    </span>
                    <span className="text-[10px] border border-tertiary-fixed/40 px-2 py-0.5 rounded text-tertiary-fixed">
CI/CD                    </span>
                  </div>
                  <h3 className="font-headline-md mb-3">
Webhook Logic                  </h3>
                  <p className="text-on-primary-container text-sm leading-relaxed">
Automate the validation of asynchronous events and callback triggers within your distributed systems architecture.                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Enterprise Ready Section  */}
        <section className="py-section-gap px-page-margin max-w-max-width mx-auto">
          <div className="bg-surface-container-lowest rounded-[40px] border border-outline-variant/30 p-12 lg:p-24 shadow-2xl relative overflow-hidden">
            {/*  Background visual  */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[30rem] translate-x-1/2 -translate-y-1/4">
verified_user              </span>
            </div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="font-display-lg text-display-lg text-primary mb-8">
Enterprise-Ready                 <br />
Infrastructure              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">

                        Designed for the complexity of global organizations. Ellipa offers the security, compliance, and governance required for regulated industries.
                                  </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-secondary text-3xl">
shield_person                  </span>
                  <div>
                    <h5 className="font-bold text-primary">
SSO &amp; RBAC                    </h5>
                    <p className="text-sm text-on-surface-variant">
SAML, Okta, and Azure AD integration with granular permissions.                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-secondary text-3xl">
security_update_good                  </span>
                  <div>
                    <h5 className="font-bold text-primary">
SOC2 Type II                    </h5>
                    <p className="text-sm text-on-surface-variant">
Fully compliant data handling and privacy protocols globally.                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-secondary text-3xl">
cloud_done                  </span>
                  <div>
                    <h5 className="font-bold text-primary">
Private Cloud                    </h5>
                    <p className="text-sm text-on-surface-variant">
Deploy Ellipa within your own VPC for maximum isolation.                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-secondary text-3xl">
history_edu                  </span>
                  <div>
                    <h5 className="font-bold text-primary">
Full Audit Logs                    </h5>
                    <p className="text-sm text-on-surface-variant">
Trace every action with comprehensive system and test logs.                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-stack-md">
                <button className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-headline-md hover:opacity-90 transition-all shadow-lg" onClick={() => navigate('/enterprise')}>
Download Security Whitepaper                </button>
                <button className="bg-surface-container-high text-primary px-10 py-5 rounded-2xl font-headline-md hover:bg-surface-container transition-all" onClick={() => navigate('/enterprise')}>
Talk to Enterprise Sales                </button>
              </div>
            </div>
          </div>
        </section>
        {/*  CTA Section  */}
        <section className="py-section-gap bg-secondary text-white text-center">
          <div className="px-page-margin max-w-3xl mx-auto">
            <h2 className="font-display-lg text-display-lg mb-stack-md">
Ready to scale your precision?            </h2>
            <p className="text-xl opacity-90 mb-stack-lg">
Join 500+ enterprises who have automated their future with Ellipa.            </p>
            <div className="flex justify-center gap-stack-md">
              <Link to="/signup" className="inline-block bg-white text-secondary px-8 py-4 rounded-xl font-headline-md hover:shadow-xl transition-all text-center">
Get Started Free              </Link>
            </div>
          </div>
        </section>
      </main>
      
      

    </>
  );
}
