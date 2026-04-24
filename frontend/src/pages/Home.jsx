import React from 'react';
import Hero from '../components/shared/Hero';
import Section, { SectionHeader } from '../components/shared/Section';
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero 
        badge="Next-Gen CPaaS + Blockchain"
        title="Empowering Business with Decentralized Communication"
        description="Scale your enterprise communication with unbreakable security and automated intelligence. Built on high-performance blockchain for the era of sovereign data."
        primaryBtnText="EXPLORE SOLUTIONS"
        secondaryBtnText="DOCUMENTATION"
        stats={[
          { label: 'Uptime', value: '99.99%' },
          { label: 'Messages', value: '10M+' },
          { label: 'Enterprise', value: 'Ready' }
        ]}
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCPYsKazAsnZJrtyxckwMqt8FOoEer7thOYkY62gylnRKvb4jV06MKIZ7VYTlKJfXTfa_6YXV2tzCZlHV-x2LcriGkvuCCysVPJEVEMPL96jwjUiURMiaBmHK6uMbLqlQ7D9B0lC0S4Y0z9H9514J-KsQWOdrSr8AkjGq6XD19bq_UH3HQ9xQND8C660fATjuAKPYxygp9KZ_o3wRr1uWyv1Gk0e0jYjak3eeHSVfMfz1seTO-qjT7GoIV0vwgGEiYBzST9YP6y5w"
      />

      {/* About Section */}
      <Section variant="alt" className="py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <Card blur="lg" className="p-2 group overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4yluZTj9EZMuOGeNAHbDeeZIqe-SAt97mIrQcedpCV53fwCylcfg_8SwJMEVuwy2IUmeOkNGfWtPqe_gAssp07TO1H11hUls5L0tGDfqeAM-_G8eC9gJ_aLUezD9bIjbcbkaBcUC7NMPCGd-7chic4vi9wpfllDlGZ_78pgEWC2awNB8mQuRYAkZfhdaE6cSVvXBfPq_ZcwVbCCqY_8LR_2qc28y6kVPEirTLyuihHNrm9OwZxA9ELDSKJoDpfnXbzYhJImiLfw" 
                alt="Network Infrastructure" 
                className="rounded-xl group-hover:scale-105 transition-transform duration-700"
              />
            </Card>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeader 
              subtitle="WHO WE ARE"
              title="Architecting the Future of Private Data Transmission"
              description="Omronix was founded with a singular vision: to unify the agility of CPaaS with the immutable security of blockchain. We enable businesses to transmit sensitive data with zero compromise on speed or reliability."
            />
            <div className="grid grid-cols-2 gap-4 md:gap-8 mb-10">
              {[
                { title: 'Founded 2024', desc: 'Visionary Beginnings' },
                { title: 'Launching 2025', desc: 'Phase One Rollout' },
                { title: 'Blockchain-Secured', desc: 'End-to-end encryption' },
                { title: 'AI-Powered', desc: 'Automated Routing' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-xs md:text-base">{item.title}</h4>
                    <p className="text-white/40 text-[10px] md:text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="secondary">READ MORE</Button>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="py-12 md:py-24">
        <SectionHeader 
          align="center"
          title="Unmatched Enterprise Infrastructure"
          description="Engineered to meet the highest standards of global communication protocols and cryptographic security."
        />
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {[
            { 
              title: 'Compliance First', 
              desc: 'Global reach with local compliance. Our blockchain layer ensures every transaction meets regional regulatory standards automatically.',
              color: 'text-primary'
            },
            { 
              title: 'Seamless Integration', 
              desc: 'Plug-and-play APIs for existing stacks. Connect your CRM, ERP, and communication hubs in minutes, not months.',
              color: 'text-secondary'
            },
            { 
              title: 'Deep Customization', 
              desc: 'Your business is unique. We provide granular control over messaging logic, routing preferences, and data residency.',
              color: 'text-tertiary'
            },
            { 
              title: 'Technical Expertise', 
              desc: 'Backed by a team of elite blockchain architects and telecommunication veterans dedicated to your success.',
              color: 'text-primary'
            }
          ].map((feature, idx) => (
            <Card key={idx} className="p-4 md:p-8 group hover:translate-y-[-4px]">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 md:mb-6 ${feature.color}`}>
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-lg md:text-2xl font-heading font-bold mb-2 md:mb-3">{feature.title}</h3>
              <p className="text-white/60 text-xs md:text-base leading-relaxed">{feature.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Services Section */}
      <Section variant="alt" className="py-12 md:py-24">
        <SectionHeader 
          title="Our Service Ecosystem"
          description="Core pillars of the Omronix technology stack."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {[
            { 
              title: 'Communication', 
              desc: 'Advanced CPaaS solutions including programmable SMS, voice, and secure chat APIs for global enterprises.',
              icon: 'forum',
              color: 'from-primary to-primary-container'
            },
            { 
              title: 'Blockchain', 
              desc: 'Decentralized ledgers for message verification, secure audit trails, and automated smart-contract logic.',
              icon: 'token',
              color: 'from-secondary to-secondary-container'
            },
            { 
              title: 'Agentic AI', 
              desc: 'Next-gen autonomous agents that handle complex customer interactions and network optimizations with human-like precision.',
              icon: 'robot_2',
              color: 'from-tertiary to-tertiary-container'
            }
          ].map((service, idx) => (
            <Card key={idx} className="p-4 md:p-8 flex flex-col h-full group">
              <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 md:mb-8 shadow-lg`}>
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <h3 className="text-lg md:text-2xl font-heading font-bold mb-2 md:mb-4">{service.title}</h3>
              <p className="text-white/50 text-xs md:text-base mb-4 md:mb-8 flex-grow">{service.desc}</p>
              <a href="#" className="text-primary text-xs md:text-base font-bold inline-flex items-center group-hover:gap-3 transition-all">
                Learn More 
                <svg className="w-4 h-4 md:w-5 md:h-5 ml-1 md:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Home;
