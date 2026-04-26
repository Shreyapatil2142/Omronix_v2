import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/shared/Hero';
import Section, { SectionHeader } from '../components/shared/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import agenticAiHero from '../assets/agentic-ai-hero.png';

const AgenticAI = () => {
  const [activeTab, setActiveTab] = useState('Customer Service');

  const capabilities = [
    { title: 'Natural Language', desc: 'Sophisticated comprehension of intent, nuance, and domain-specific terminology across 60+ languages.', icon: 'psychology', tag: 'Communication' },
    { title: 'Autonomous Reasoning', desc: 'Evaluates multiple paths to achieve complex goals, adjusting strategies in real-time as data changes.', icon: 'account_tree', tag: 'Strategic' },
    { title: 'Data Synthesis', desc: 'Processing unstructured data into actionable insights without human intervention or templating.', icon: 'analytics', tag: 'Analytical' },
    { title: 'Workflow Automation', desc: 'Executes multi-step business processes across disparate software stacks via API or UI interaction.', icon: 'automation', tag: 'Operational' },
    { title: 'Continuous Learning', desc: 'Improves performance with every transaction, learning from success and correcting errors autonomously.', icon: 'model_training', tag: 'Evolvable' },
    { title: 'System Integration', desc: 'Native connectors for ERP, CRM, and Blockchain protocols for seamless data flow and action.', icon: 'hub', tag: 'Connective' }
  ];

  const steps = [
    { number: '01', title: 'Perceive', desc: 'Agent monitors environment and data streams.' },
    { number: '02', title: 'Reason', desc: 'Analyzes goals against current state constraints.' },
    { number: '03', title: 'Plan', desc: 'Sequences actions required to reach the goal.' },
    { number: '04', title: 'Act', desc: 'Executes transactions and system commands.' },
    { number: '05', title: 'Learn', desc: 'Updates neural weights based on outcomes.' }
  ];

  return (
    <div>
      <Hero
        badge="AUTONOMOUS INTELLIGENCE"
        title={<span>AI Agents That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Act, Adapt, and Innovate</span> Independently</span>}
        description="Deploy self-learning AI agents that automate operations, enhance decision-making, and drive business efficiency across your digital ecosystem."
        primaryBtnText="DEPLOY AN AI AGENT"
        primaryLink="/contact"
        stats={[
          { label: 'Decisions/sec', value: '1,247' },
          { label: 'Uptime', value: '24/7' },
          { label: 'Languages', value: '60+' }
        ]}
        imageSrc={agenticAiHero}
      />

      <Section variant="alt">
        <SectionHeader
          align="center"
          title="Beyond Chatbots - True Autonomous Intelligence"
          description="The evolution of automated business logic from static rules to self-governing intelligence."
        />
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 md:gap-8 items-center">
          <Card className="p-8 opacity-60 order-2 lg:order-1 w-full">
            <h4 className="text-xl font-heading font-bold mb-6 text-text-primary/80">Traditional Automation</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-sm text-text-secondary italic"><span className="mr-2">x</span> Fixed if-then rules</li>
              <li className="flex items-center text-sm text-text-secondary italic"><span className="mr-2">x</span> Manual updates required</li>
              <li className="flex items-center text-sm text-text-secondary italic"><span className="mr-2">x</span> Single system isolation</li>
            </ul>
          </Card>

          <Card className="p-10 border-primary/50 shadow-[0_0_40px_rgba(37,99,235,0.15)] relative scale-105 z-10 order-1 lg:order-2 w-full">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">RECOMMENDED</div>
            <h4 className="text-2xl font-heading font-bold mb-6 text-text-primary">Omronix Agentic AI</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-sm text-primary font-bold"><span className="mr-2">v</span> Proactive action taking</li>
              <li className="flex items-center text-sm text-primary font-bold"><span className="mr-2">v</span> Continuous self-optimization</li>
              <li className="flex items-center text-sm text-primary font-bold"><span className="mr-2">v</span> Multi-system orchestration</li>
            </ul>
          </Card>

          <Card className="p-8 opacity-80 order-3 lg:order-3 w-full">
            <h4 className="text-xl font-heading font-bold mb-6 text-text-primary/90">Basic Chatbots</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-sm text-text-secondary"><span className="mr-2 text-yellow-600">!</span> Passive response only</li>
              <li className="flex items-center text-sm text-text-secondary"><span className="mr-2 text-yellow-600">!</span> Human oversight needed</li>
              <li className="flex items-center text-sm text-text-secondary"><span className="mr-2 text-yellow-600">!</span> Limited context window</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section>
        <SectionHeader align="center" subtitle="SYSTEM FEATURES" title="Advanced Architectural Core" />
        <div className="space-y-4 md:hidden">
          {capabilities.map((cap, idx) => (
            <details key={idx} className="glass-card rounded-2xl overflow-hidden">
              <summary className="list-none cursor-pointer p-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-heading font-bold text-text-primary truncate">{cap.title}</h3>
                    <p className="text-xs text-text-secondary truncate">{cap.tag}</p>
                  </div>
                </div>
                <span className="text-text-muted text-2xl leading-none">+</span>
              </summary>
              <div className="px-5 pb-5 pt-1 border-t border-border">
                <p className="text-text-secondary text-sm mb-4 leading-relaxed">{cap.desc}</p>
                <span className="inline-block bg-primary/10 text-primary text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-wider">{cap.tag}</span>
              </div>
            </details>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {capabilities.map((cap, idx) => (
            <Card key={idx} className="p-8 group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-text-primary mb-3">{cap.title}</h3>
              <p className="text-text-secondary text-sm mb-6 leading-relaxed">{cap.desc}</p>
              <span className="inline-block bg-primary/10 text-primary text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-wider">{cap.tag}</span>
            </Card>
          ))}
        </div>
      </Section>

      <Section variant="alt" className="relative">
        <div className="absolute top-1/2 left-0 w-full h-[1px] border-t border-dashed border-primary/20 hidden md:block"></div>
        <SectionHeader align="center" title="The Loop of Intelligence" className="relative z-10" />
        <div className="relative z-10 space-y-4 md:hidden">
          {steps.map((step) => (
            <Card key={step.number} className="p-5 flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-surface-card border-2 border-primary flex items-center justify-center text-primary font-heading font-bold shadow-[0_0_20px_rgba(37,99,235,0.2)] flex-shrink-0">
                {step.number}
              </div>
              <div className="min-w-0">
                <h4 className="text-text-primary font-heading font-bold mb-2 uppercase tracking-widest text-xs">{step.title}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="relative z-10 hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center min-w-[200px] md:min-w-0">
              <div className="w-16 h-16 rounded-full bg-surface-card border-2 border-primary flex items-center justify-center text-primary font-heading font-bold mb-6 shadow-[0_0_20px_rgba(37,99,235,0.2)]">{step.number}</div>
              <h4 className="text-text-primary font-heading font-bold mb-2 uppercase tracking-widest text-xs">{step.title}</h4>
              <p className="text-text-secondary text-xs leading-relaxed px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex overflow-x-auto whitespace-nowrap border-b border-white/5 mb-12 md:mb-16 no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 gap-8">
          {['Customer Service', 'Sales', 'Operations', 'Finance', 'Healthcare'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 font-heading font-bold text-xs md:text-sm uppercase tracking-widest transition-all ${activeTab === tab ? 'text-primary border-b-2 border-primary' : 'text-text-secondary border-b-2 border-transparent hover:text-text-primary'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Card className="aspect-auto md:aspect-video relative overflow-hidden group p-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
            <div className="relative p-6 md:p-10 h-full flex flex-col justify-between min-h-[280px] md:min-h-0">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 bg-primary/20 backdrop-blur-xl rounded-2xl border border-primary/30 flex items-center justify-center">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Use Case Loop</span>
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl md:text-3xl font-heading font-bold text-text-primary">Conversation first, not image first</h4>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-md">This panel stays readable on small screens without the oversized message image, keeping the focus on the selected workflow.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['24/7 Support', 'CRM Sync', 'Tone Adaptation'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs text-white/70 font-bold uppercase tracking-wider">{tag}</span>
                ))}
              </div>
            </div>
          </Card>

          <div className="space-y-8">
            <h3 className="text-4xl font-heading font-bold text-text-primary">Autonomous {activeTab}</h3>
            <p className="text-text-secondary text-lg leading-relaxed">Replace traditional scripted support with agents that resolve complex disputes, process returns, and manage scheduling without a single human touchpoint.</p>
            <ul className="space-y-4">
              {['24/7 Global multi-lingual support', 'Direct integration with CRM & Logistics', 'Real-time tone & sentiment adaptation'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-text-secondary font-medium"><span className="text-primary">v</span> {item}</li>
              ))}
            </ul>
            <Card className="flex items-center gap-6 bg-primary/5 border-primary/20 p-6 md:p-8">
              <div className="text-4xl md:text-5xl font-heading font-black text-text-primary">87%</div>
              <div>
                <div className="text-[10px] md:text-xs font-heading font-bold text-primary tracking-widest uppercase mb-1">Success Metric</div>
                <div className="text-text-muted text-xs md:text-sm">Reduction in response time</div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="px-6">
        <div className="max-w-6xl mx-auto bg-brand-gradient rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">

          {/* Glow effect */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-300/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 space-y-8">

            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight max-w-4xl mx-auto">
              Ready to Deploy Your First AI Agent?
            </h2>

            <p className="text-white/80 text-xl max-w-2xl mx-auto">
              Join the front line of autonomous intelligence and transform your operations today.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary px-10 hover:bg-white/90 transition">
                  DEPLOY AN AI AGENT
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </Section>
    </div>
  );
};

export default AgenticAI;
