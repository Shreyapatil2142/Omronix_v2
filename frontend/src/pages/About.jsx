import React from 'react';
import Hero from '../components/shared/Hero';
import Section, { SectionHeader } from '../components/shared/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const About = () => {
  const milestones = [
    { year: '2024', title: 'Company Founding', desc: 'Inception of Omronix in Silicon Valley, focused on blockchain-native messaging protocols.', side: 'left' },
    { year: 'Early 2025', title: 'Platform Dev', desc: 'Alpha release of the core communication engine with zero-knowledge proof capabilities.', side: 'right' },
    { year: 'Mid 2025', title: 'Blockchain Integration', desc: 'Mainnet bridge established across major layer-1 networks for seamless data validation.', side: 'left' },
    { year: 'Late 2025', title: 'Full Market Launch', desc: 'Global expansion of Omronix services for institutional and retail enterprise users.', side: 'right' }
  ];

  const values = [
    { title: 'Innovation', desc: 'Pushing boundaries with cutting-edge cryptographic solutions.', icon: 'lightbulb' },
    { title: 'Reliability', desc: '99.99% uptime for mission-critical infrastructure.', icon: 'shield' },
    { title: 'Transparency', desc: 'Open-source logic for verifiable security audits.', icon: 'visibility' },
    { title: 'Collaboration', desc: 'Fostering a global ecosystem of secure builders.', icon: 'handshake' }
  ];

  const team = [
    { name: 'Dr. Elias Vance', role: 'Chief Technology Officer', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBshhbV_lO5C_IslzKDGyfCTDhsBje5myterfp5luT8RWE2AfXtl5iVvpCFbGmgDXNfMYovLOqKb-X7D5-QaNpGJ7MSWVcFopEI0_ENzAumL26vFGR93VHIofJpzU6IilWvlg-nnKbDpmz0Tc89wVfswC_hGxvwvTNueAV1hXoXPS9u1xI-daHClVXLsyQ9je17sVZVDXinAPHZ2eaHuCXUSJfGbdJdz3mlo11D-lZy8r48EcVrjmYz5lj36n107GcXdmTv760dcQ' },
    { name: 'Sarah Chen', role: 'Head of Cryptography', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQB_qTUo5lpMlmHHh67YXC4JDmjRzKYZBZ8UQUku_ewelbwW7Io4ma1toLd2313bD0GJzRKZ-_y5uJ2Eqdp2-Q-5Z7xd0ESrGWq7ooI7RA4AUG4o1o4TquQWPLghfq84aTkpfuPplbkwYH0gBvgvMigL_RWHSqwHy5SJn6YPOyPkIvDsKBLkAfjQzGji88zd8EG5BFsS3HBgr-TZRxAKg7hHSh0fDTd6Aoyfh1TpXnYyVGvS2JpuuNUfubG5BT5JE9saqcKXJZfQ' },
    { name: 'Marcus Thorne', role: 'Product Architect', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAxYhy4aEwAOrjpQONItBg1KGmV57gftu-pVSa5OqPv-nVGsLBlyY-q0E8-SUh2IgPOy2vQgnmBoaMgMnogVYt63qPBlZ5F-G0d3FvNhm-Jpmy0-OxWrmQLrZ6hOKlgVINwpA4a-s_SzDRQcIthojag6U_egHgvFxp_947jdT1vxLKNCZUkqwYAPqT4PY0H5VvywWpgHjxI9pZbQ2IWkEoTXxA9MP9LpCI6q1GnLGO9lPzqqwX_oCk1MuIv8l0wE9LhhZ9clSepw' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        badge="OUR STORY"
        title="Building the Future of Trusted Communication"
        description="Omronix is architecting the next generation of secure, decentralized communication protocols for enterprise-grade applications and sovereign digital identities."
        primaryBtnText="EXPLORE SERVICES"
        secondaryBtnText="GET IN TOUCH"
        stats={[
          { label: 'FOUNDED', value: '2024' },
          { label: 'CORE SERVICES', value: '3+' },
          { label: 'PLATFORM LAUNCH', value: '2025' }
        ]}
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAU51Q47O8TCZE8H6uYDjGBjGK0BVBvptTGcbF251PeHxx-3K2jxTlo8nV7Wz-vUCcmTpdxMrrdcwXITRYOg7EOb7eS9Dqk3EW_b8qTdkX6wTkksvWEyrpj2j_jgA-2gZw5WjcDxNO6qS7UV9ndi1p6j62bcinCyZQVg4qB4IBs-PSu4QqRn2YO3clmsXpDac3rshe2HXf8wzId6ANRQBxfmY1qYdnccXBTQJve3-Mn0FrmV-sGwpIkgSzpp--IWMofj7iPzdWEiw"
      />

      {/* Mission & Vision */}
      <Section variant="alt">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8">
          <Card className="p-10 hover:border-primary/50 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-brand-gradient flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">target</span>
            </div>
            <span className="text-secondary font-heading font-bold text-xs tracking-widest block mb-2 uppercase">OUR MISSION</span>
            <h2 className="text-3xl font-heading font-bold mb-4">Simplifying Complex Communications</h2>
            <p className="text-white/40 leading-relaxed">
              We aim to demystify secure communication architectures, providing enterprises with the tools to build trustless, verifiable messaging systems without sacrificing performance or scalability.
            </p>
          </Card>
          <Card className="p-10 hover:border-primary/50 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-brand-gradient flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">visibility</span>
            </div>
            <span className="text-secondary font-heading font-bold text-xs tracking-widest block mb-2 uppercase">OUR VISION</span>
            <h2 className="text-3xl font-heading font-bold mb-4">Most Trusted Digital Partner</h2>
            <p className="text-white/40 leading-relaxed">
              To become the global standard for secure data exchange, where privacy is the default and security is a mathematical certainty for every organization on the planet.
            </p>
          </Card>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="relative">
        <SectionHeader align="center" title="Our Journey" />
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-primary via-secondary to-transparent opacity-20"></div>
          
          <div className="space-y-12 md:space-y-16">
            {milestones.map((m, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-start md:items-center w-full ${m.side === 'left' ? 'md:justify-start' : 'md:justify-end'}`}>
                <div className={`w-full md:w-1/2 pl-10 md:pl-0 ${m.side === 'left' ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <Card className="p-6 md:p-8 inline-block max-w-md hover:border-primary/40 relative">
                    <div className="md:hidden absolute -left-10 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10"></div>
                    <span className="text-primary font-heading font-bold text-xs md:text-sm block mb-1 tracking-widest">{m.year}</span>
                    <h3 className="text-xl md:text-2xl font-heading font-bold mb-2 md:mb-3">{m.title}</h3>
                    <p className="text-white/40 text-xs md:text-sm leading-relaxed">{m.desc}</p>
                  </Card>
                </div>
                <div className="w-4 h-4 rounded-full bg-primary absolute left-1/2 -translate-x-1/2 hidden md:block border-4 border-background z-10 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section variant="alt">
        <SectionHeader align="center" title="Our Values" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {values.map((v, idx) => (
            <div key={idx} className="text-center group">
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-all border border-white/5 group-hover:border-primary/30 shadow-2xl">
                <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform">{v.icon}</span>
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">{v.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed px-4">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section>
        <SectionHeader align="center" title="Meet the Architects" />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {team.map((member, idx) => (
            <Card key={idx} className="overflow-hidden group">
              <div className="h-64 md:h-80 bg-brand-gradient/10 relative flex items-end justify-center pt-8 border-b border-white/5">
                <img 
                  src={member.image} 
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  alt={member.name}
                />
              </div>
              <div className="p-4 md:p-8 text-center">
                <h3 className="text-lg md:text-2xl font-heading font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-heading font-bold text-[10px] md:text-sm tracking-widest uppercase mb-4 md:mb-6">{member.role}</p>
                <div className="flex justify-center gap-2 md:gap-4">
                  <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-all text-white/40 hover:text-primary border border-white/5">
                    <span className="material-symbols-outlined text-sm md:text-lg">link</span>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="px-6">
        <Card className="max-w-6xl mx-auto p-12 md:p-24 text-center relative overflow-hidden bg-gradient-to-br from-[#0A1628] to-[#0F1E35] border-primary/20">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-secondary/10 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/10 blur-[100px] rounded-full"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
              Ready to Transform Your Communication?
            </h2>
            <p className="text-white/40 text-xl max-w-2xl mx-auto">
              Join the waitlist for our institutional pilot program and secure your spot in the future of trusted data exchange.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg">Get Started Now</Button>
              <Button variant="secondary" size="lg">Schedule a Demo</Button>
            </div>
          </div>
        </Card>
      </Section>
    </div>
  );
};

export default About;
