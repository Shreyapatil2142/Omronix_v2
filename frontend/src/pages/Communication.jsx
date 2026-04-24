import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/shared/Hero';
import Section, { SectionHeader } from '../components/shared/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Communication = () => {
  const channels = [
    { title: 'SMS', desc: 'Global A2P messaging with direct carrier routes.', icon: 'sms' },
    { title: 'Voice', desc: 'Programmable voice for IVR and call masking.', icon: 'call' },
    { title: 'WhatsApp', desc: 'Official API for rich customer conversations.', icon: 'chat' },
    { title: 'Email', desc: 'Scalable transactional email infrastructure.', icon: 'mail' },
    { title: 'Engagement', desc: 'Real-time analytics and user segmentation.', icon: 'analytics' }
  ];

  const smsFeatures = [
    { title: 'Global 2FA & OTP', desc: 'Send secure authentication codes worldwide with ultra-low latency routes.', icon: 'lock' },
    { title: 'Transactional Alerts', desc: 'Real-time shipping updates, order confirmations, and banking alerts.', icon: 'send' },
    { title: 'Promotional Messaging', desc: 'Drive conversions with high-priority marketing campaigns that land in the inbox.', icon: 'campaign' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero 
        badge="CPAAS PLATFORM"
        title="Seamlessly Connect, Engage, and Grow"
        description="Scale your global communications with our enterprise-grade CPaaS. High-deliverability APIs for SMS, Voice, and WhatsApp designed for developers who demand security and performance."
        primaryBtnText="Start Integrating Now"
        secondaryBtnText="Talk to Sales"
        stats={[
          { label: 'UPTIME', value: '99.99%' },
          { label: 'DELIVERY', value: 'Instant' },
          { label: 'VOLUME', value: '10M+' }
        ]}
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuACflJ15S1pa8fGOuIZz6vlYULXkCpi1VtHEwtqRCaxy53uYF1IrgXAmE1uBGKyIa2jwCqeFlPB3vu4qMNaO7Oo-fgyYm03VJUqfp9GNcP8F421nWntCq4wKXC3MUnXllI4M4cXz0aEEh4p_XTa4zQEsl-9UoA6kiJvrPSRMcLfjqmrEcP9Kc4EMf-VrH3Ve9prLX_i23eqPTyWeE4mCCfL-l71ZVhU4spc1Cu2boPqhpztimBwZsxG8ekTtqo6ojaJNbpDjJDfjQ"
      />

      {/* Channel Overview */}
      <Section variant="alt" className="py-12 md:py-16">
        <SectionHeader 
          align="center"
          title="Everything in One Platform"
          description="A unified suite of communication APIs designed to handle any scale."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {channels.map((channel, idx) => (
            <Card key={idx} className="p-8 group hover:border-primary/50">
              <div className="w-12 h-12 rounded-lg bg-brand-gradient flex items-center justify-center mb-6 text-white shadow-lg">
                <span className="material-symbols-outlined">{channel.icon}</span>
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-heading font-bold text-white">{channel.title}</h3>
                <span className="text-[9px] px-2 py-0.5 rounded bg-secondary/10 text-secondary border border-secondary/20 font-bold uppercase">Live</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">{channel.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* SMS Solutions */}
      <section className="py-12 md:py-24 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 flex justify-center relative scale-75 md:scale-100">
            <div className="w-[260px] md:w-[280px] h-[520px] md:h-[560px] bg-background rounded-[3rem] border-[8px] border-surface-card relative overflow-hidden shadow-2xl">
              <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                <div className="flex justify-between items-center text-[10px] text-white/30">
                  <span>9:41</span>
                  <span className="material-symbols-outlined text-sm">signal_cellular_4_bar</span>
                </div>
                <div className="space-y-4">
                  <div className="bg-surface-card p-3 rounded-xl rounded-bl-none max-w-[85%] text-[10px] md:text-xs text-white/80">
                    Your Omronix verification code is: 884-219. Don't share it with anyone.
                  </div>
                  <div className="bg-primary/20 p-3 rounded-xl rounded-br-none max-w-[85%] ml-auto text-[10px] md:text-xs text-right text-primary">
                    Verified. Thank you.
                  </div>
                </div>
              </div>
            </div>
            <Card className="absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 p-3 md:p-4 border-l-4 border-l-secondary">
              <p className="text-[10px] md:text-xs font-heading font-bold text-white">98% Open Rate</p>
              <p className="text-[8px] md:text-[10px] text-white/40">Average SMS engagement</p>
            </Card>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <SectionHeader 
              subtitle="SMS SOLUTIONS"
              title="Secure & Scalable SMS Delivery"
              description="Reach your customers anywhere in the world with high-priority routes and direct carrier connections."
            />
            <div className="space-y-3 md:space-y-4">
              <div className="md:hidden space-y-3">
                {smsFeatures.map((feature, idx) => (
                  <details key={idx} className="glass-card rounded-2xl overflow-hidden">
                    <summary className="list-none cursor-pointer p-4 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="material-symbols-outlined text-secondary text-xl flex-shrink-0">{feature.icon}</span>
                        <h4 className="font-heading font-bold text-white text-sm truncate">{feature.title}</h4>
                      </div>
                      <span className="text-white/40 text-2xl leading-none">+</span>
                    </summary>
                    <div className="px-4 pb-4 pt-1 border-t border-white/5">
                      <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </details>
                ))}
              </div>

              <div className="hidden md:block space-y-4">
              {smsFeatures.map((feature, idx) => (
                <div key={idx} className="flex gap-6 p-6 hover:bg-white/5 rounded-2xl transition-all border border-transparent hover:border-white/5 group">
                  <span className="material-symbols-outlined text-secondary pt-1 group-hover:scale-110 transition-transform text-xl md:text-2xl">{feature.icon}</span>
                  <div>
                    <h4 className="font-heading font-bold text-white text-xs md:text-lg mb-1">{feature.title}</h4>
                    <p className="text-white/50 text-[10px] md:text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Services */}
      <Section variant="alt" className="py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <SectionHeader 
              subtitle="VOICE SERVICES"
              title="Engage Customers with Intelligent Voice"
              description="Automate conversations, build secure IVRs, and scale your support with our programmable voice API."
            />
            <div className="grid grid-cols-2 gap-4 md:block md:space-y-4">
              {[
                { title: 'Programmable Outbound', desc: 'Automate calls for reminders, surveys, and critical alerts with text-to-speech.', icon: 'record_voice_over' },
                { title: 'Dynamic IVR Systems', desc: 'Build complex call flows and voice menus that scale with your business needs.', icon: 'hub' },
                { title: 'Missed Call Solutions', desc: 'Enable lead generation and simple user actions via a single missed call.', icon: 'phone_missed' }
              ].map((item, idx) => (
                <Card key={idx} className="p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start border-white/5 text-center md:text-left">
                  <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">{item.icon}</span>
                  <div>
                    <h4 className="font-heading font-bold text-white text-xs md:text-lg mb-1">{item.title}</h4>
                    <p className="text-white/40 text-[10px] md:text-sm">{item.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div className="relative h-[300px] md:min-h-[400px] flex items-center justify-center scale-75 md:scale-100">
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-[100px]"></div>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD0m2P1ZSrQmEGW-De4LS21sdYA0PfFQKgQwCWK23TkwYDru80H2py74lcs_JBQ2n3rf8f_vuPO_calG3kyrke1QwzGzupHI3RH_7KNKDixy4EE67nSN14I0xlohvXN7uDn5HUKQdepFycYC-hO7Rk-6GiUkX9bP9aSRTwvmDaGtjpwAuvQ0wTSibTG3toK3tBIaQj5vWtIPI9d-yF_YqL8Lpsee9LRYkyevrKxaUYXzvXEtxTcq3KDD3l0QQuGwNP8iFNUo5REw" 
              alt="Voice Visual" 
              className="w-full h-auto rounded-3xl opacity-50 mix-blend-screen object-cover"
            />
            <Card className="absolute p-3 md:p-4 rounded-full flex items-center gap-2 md:gap-4 border-secondary/30">
              <span className="material-symbols-outlined animate-pulse text-secondary text-sm md:text-base">mic</span>
              <span className="font-heading font-bold text-[10px] md:text-sm tracking-tight">Connecting to node_04...</span>
            </Card>
          </div>
        </div>
      </Section>

      {/* Unified Dashboard */}
      <Section className="py-12 md:py-24">
        <SectionHeader 
          align="center"
          title="One Dashboard. Total Control."
          description="Monitor your entire communication stack from a single, high-performance interface."
        />
        <Card className="p-2 border-primary/20 shadow-2xl mb-16 overflow-hidden">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP44OR0RIYCdqMURpOof34xr8_rg47Uz10N6WHQ2iA4V1QUz5SxhTE29gDSH1fNdaWfQGImZbMwofUJUm590_aHIyQryL8a487u7CIVbAospPvjI4UC1p3kR5mf9BCNsr0M10DrPE4jqN7BVZ8jldAF93VIyuJGLFyICvusYmar2Bqmv22tiE8Yq6rKVsNoCl_OcdVwaq2ad9wJjFy7__izsRG3ZyeG4T10TmxHDRiUTX3ImSw_VJxP9cy9lhmSDIaXqcxhqHcdg" 
            alt="Dashboard" 
            className="rounded-xl w-full opacity-80"
          />
        </Card>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {[
            { label: 'LATENCY', value: '0.2s', color: 'text-secondary' },
            { label: 'SUCCESS RATE', value: '99.9%', color: 'text-primary' },
            { label: 'EXPERT SUPPORT', value: '24/7', color: 'text-secondary' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-4 md:p-8 border-r border-white/5 last:border-0">
              <h3 className={`text-2xl md:text-5xl font-heading font-bold mb-1 md:mb-2 ${stat.color}`}>{stat.value}</h3>
              <p className="text-white/30 font-heading font-bold text-[8px] md:text-xs tracking-widest uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Banner */}
      <Section className="px-6">
        <div className="max-w-6xl mx-auto bg-brand-gradient rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
              Ready to Transform Your Communication?
            </h2>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">
              Join 5,000+ companies building the future of customer engagement on Omronix. Get started for free today.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary px-10">
                  Create Free Account
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="border-white text-white px-10">
                  Speak to an Architect
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Communication;
