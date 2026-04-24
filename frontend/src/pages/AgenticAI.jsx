import React, { useState } from 'react';
import Hero from '../components/shared/Hero';
import Section, { SectionHeader } from '../components/shared/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

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

  const industries = [
    { name: 'E-Commerce', icon: 'shopping_cart' },
    { name: 'Banking', icon: 'account_balance' },
    { name: 'Healthcare', icon: 'medical_services' },
    { name: 'Telecom', icon: 'settings_input_antenna' },
    { name: 'Supply Chain', icon: 'local_shipping' },
    { name: 'Legal', icon: 'balance' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        badge="AUTONOMOUS INTELLIGENCE"
        title={<span>AI Agents That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Act, Adapt, and Innovate</span> Independently</span>}
        description="Deploy self-learning AI agents that automate operations, enhance decision-making, and drive business efficiency across your digital ecosystem."
        primaryBtnText="DEPLOY AN AI AGENT"
        secondaryBtnText="BOOK DEMO"
        stats={[
          { label: 'Decisions/sec', value: '1,247' },
          { label: 'Uptime', value: '24/7' },
          { label: 'Languages', value: '60+' }
        ]}
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAcvkb8eDb4gdAyYE5srRl985HxUQacvPrAPDCqGWLHlqUJ0hxslod8-hjlaeOKXKzifWcj5XYZCxf0M4Z_Vqa4Dw3iMRzFZKnEYQByrU6cZDXj2dPzvdJF68bmSV5fftxPx9qvsghyja1HzFzEjKBI3Kt1fNn0fsy-v6LYJPWNVydZjBiGJIJO1OJ0H7m-17KbmKk5ZsrvQf01IjQzoexDu1sqrRHhKS6IbFCVrUBAgUG-NR1CnPC3P2n6CM4VjyMtFOCLJSkz5w"
      />

      {/* Beyond Chatbots Comparison */}
      <Section variant="alt">
        <SectionHeader 
          align="center"
          title="Beyond Chatbots — True Autonomous Intelligence"
          description="The evolution of automated business logic from static rules to self-governing intelligence."
        />
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 md:gap-8 items-center">
          <Card className="p-8 opacity-60 order-2 lg:order-1 w-full">
            <h4 className="text-xl font-heading font-bold mb-6 text-white/80">Traditional Automation</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-sm text-white/40 italic"><span className="mr-2">✕</span> Fixed if-then rules</li>
              <li className="flex items-center text-sm text-white/40 italic"><span className="mr-2">✕</span> Manual updates required</li>
              <li className="flex items-center text-sm text-white/40 italic"><span className="mr-2">✕</span> Single system isolation</li>
            </ul>
          </Card>
          
          <Card className="p-10 border-primary/50 shadow-[0_0_40px_rgba(37,99,235,0.15)] relative scale-105 z-10 order-1 lg:order-2 w-full">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-background px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">RECOMMENDED</div>
            <h4 className="text-2xl font-heading font-bold mb-6 text-white">Omronix Agentic AI</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-sm text-primary font-bold"><span className="mr-2">✓</span> Proactive action taking</li>
              <li className="flex items-center text-sm text-primary font-bold"><span className="mr-2">✓</span> Continuous self-optimization</li>
              <li className="flex items-center text-sm text-primary font-bold"><span className="mr-2">✓</span> Multi-system orchestration</li>
            </ul>
          </Card>

          <Card className="p-8 opacity-80 order-3 lg:order-3 w-full">
            <h4 className="text-xl font-heading font-bold mb-6 text-white/90">Basic Chatbots</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-sm text-white/60"><span className="mr-2 text-yellow-500">!</span> Passive response only</li>
              <li className="flex items-center text-sm text-white/60"><span className="mr-2 text-yellow-500">!</span> Human oversight needed</li>
              <li className="flex items-center text-sm text-white/60"><span className="mr-2 text-yellow-500">!</span> Limited context window</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Core Capabilities */}
      <Section>
        <SectionHeader 
          align="center"
          subtitle="SYSTEM FEATURES"
          title="Advanced Architectural Core"
        />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {capabilities.map((cap, idx) => (
            <Card key={idx} className="p-8 group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">{cap.title}</h3>
              <p className="text-white/50 text-sm mb-6 leading-relaxed">{cap.desc}</p>
              <span className="inline-block bg-primary/10 text-primary text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-wider">
                {cap.tag}
              </span>
            </Card>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section variant="alt" className="relative">
        <div className="absolute top-1/2 left-0 w-full h-[1px] border-t border-dashed border-primary/20 hidden md:block"></div>
        <SectionHeader 
          align="center"
          title="The Loop of Intelligence"
          className="relative z-10"
        />
        <div className="relative z-10 flex overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 lg:grid-cols-5 gap-8 no-scrollbar">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center min-w-[200px] md:min-w-0">
              <div className={`w-16 h-16 rounded-full bg-surface-card border-2 border-primary flex items-center justify-center text-primary font-heading font-bold mb-6 shadow-[0_0_20px_rgba(37,99,235,0.2)]`}>
                {step.number}
              </div>
              <h4 className="text-white font-heading font-bold mb-2 uppercase tracking-widest text-xs">{step.title}</h4>
              <p className="text-white/40 text-xs leading-relaxed px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Use Cases */}
      <Section>
        <div className="flex overflow-x-auto whitespace-nowrap border-b border-white/5 mb-12 md:mb-16 no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 gap-8">
          {['Customer Service', 'Sales', 'Operations', 'Finance', 'Healthcare'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 font-heading font-bold text-xs md:text-sm uppercase tracking-widest transition-all ${activeTab === tab ? 'text-primary border-b-2 border-primary' : 'text-white/40 border-b-2 border-transparent hover:text-white'}`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Card className="aspect-video relative overflow-hidden group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcvkb8eDb4gdAyYE5srRl985HxUQacvPrAPDCqGWLHlqUJ0hxslod8-hjlaeOKXKzifWcj5XYZCxf0M4Z_Vqa4Dw3iMRzFZKnEYQByrU6cZDXj2dPzvdJF68bmSV5fftxPx9qvsghyja1HzFzEjKBI3Kt1fNn0fsy-v6LYJPWNVydZjBiGJIJO1OJ0H7m-17KbmKk5ZsrvQf01IjQzoexDu1sqrRHhKS6IbFCVrUBAgUG-NR1CnPC3P2n6CM4VjyMtFOCLJSkz5w" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay group-hover:scale-110 transition-transform duration-700" 
              alt="Use Case"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-primary/20 backdrop-blur-xl rounded-2xl border border-primary/30 flex items-center justify-center animate-pulse">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
              </div>
            </div>
          </Card>
          
          <div className="space-y-8">
            <h3 className="text-4xl font-heading font-bold text-white">Autonomous {activeTab}</h3>
            <p className="text-white/50 text-lg leading-relaxed">
              Replace traditional scripted support with agents that resolve complex disputes, process returns, and manage scheduling without a single human touchpoint.
            </p>
            <ul className="space-y-4">
              {['24/7 Global multi-lingual support', 'Direct integration with CRM & Logistics', 'Real-time tone & sentiment adaptation'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/70 font-medium">
                  <span className="text-primary">✓</span> {item}
                </li>
              ))}
            </ul>
            <Card className="flex items-center gap-6 bg-primary/5 border-primary/20 p-6 md:p-8">
              <div className="text-4xl md:text-5xl font-heading font-black text-white">87%</div>
              <div>
                <div className="text-[10px] md:text-xs font-heading font-bold text-primary tracking-widest uppercase mb-1">Success Metric</div>
                <div className="text-white/60 text-xs md:text-sm">Reduction in response time</div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="px-6">
        <div className="bg-gradient-to-br from-[#0A1628] to-[#0F1E35] rounded-[2rem] p-12 md:p-24 text-center relative overflow-hidden border border-white/5 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1),transparent)]"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white max-w-4xl mx-auto leading-tight">
              Ready to Deploy Your First AI Agent?
            </h2>
            <p className="text-white/50 text-xl max-w-2xl mx-auto">
              Join the front line of autonomous intelligence and transform your operations today.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg">DEPLOY AN AI AGENT</Button>
              <Button variant="secondary" size="lg">BOOK A DEMO</Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AgenticAI;
