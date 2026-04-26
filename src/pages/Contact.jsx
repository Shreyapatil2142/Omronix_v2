import React from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Contact = () => {
  return (
    <div className="bg-background min-h-screen font-body">
      {/* Hero Section */}
      <header className="relative pt-12 md:pt-20 overflow-hidden hex-bg h-[240px] md:h-[320px]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
        <div className="max-w-7xl mx-auto px-8 h-full flex flex-col justify-center relative z-10">
          <div className="flex items-center space-x-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-secondary font-heading font-bold text-xs tracking-[0.2em] uppercase">Connect with our team</span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-text-primary max-w-3xl">
            Let's Build <span className="gradient-text">Something Together</span>
          </h1>
        </div>
      </header>

      {/* Contact Info Strip */}
      <section className="bg-surface-dim py-8 md:py-12 relative z-20 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-background border border-border p-4 md:p-6 rounded-xl glow-on-hover transition-all flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg button-gradient flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-white text-lg md:text-xl">location_on</span>
            </div>
            <div>
              <h3 className="text-sm md:text-xl font-heading font-semibold text-text-primary mb-1">Global HQ</h3>
              <p className="text-text-secondary text-[10px] md:text-sm">Innovation Drive, Tech City, USA</p>
            </div>
          </div>
          {/* Email Card */}
          <div className="bg-background border border-border p-4 md:p-6 rounded-xl glow-on-hover transition-all flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg button-gradient flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-white text-lg md:text-xl">mail</span>
            </div>
            <div>
              <h3 className="text-sm md:text-xl font-heading font-semibold text-text-primary mb-1">Direct Support</h3>
              <p className="text-text-secondary text-[10px] md:text-sm">info@omronix.com</p>
            </div>
          </div>
          {/* Phone Card */}
          <div className="bg-background border border-border p-4 md:p-6 rounded-xl glow-on-hover transition-all flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 md:gap-4 col-span-2 md:col-span-1">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg button-gradient flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-white text-lg md:text-xl">call</span>
            </div>
            <div>
              <h3 className="text-sm md:text-xl font-heading font-semibold text-text-primary mb-1">Institutional Desk</h3>
              <p className="text-text-secondary text-[10px] md:text-sm">+1 (800) 123-4567</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <main className="bg-background py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface-card border border-border rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full"></div>
              <h2 className="text-3xl font-heading font-bold text-text-primary mb-8">Send a Message</h2>
              <form action="https://formspree.io/f/xvzdnpqn" method="POST" className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-heading font-bold text-text-muted px-1 tracking-widest uppercase">Full Name</label>
                    <input name="name" className="w-full bg-surface-dim border border-border rounded-lg p-4 text-text-primary focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-text-muted" placeholder="John Doe" type="text" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-heading font-bold text-text-muted px-1 tracking-widest uppercase">Email Address</label>
                    <input name="email" className="w-full bg-surface-dim border border-border rounded-lg p-4 text-text-primary focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-text-muted" placeholder="john@example.com" type="email" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-heading font-bold text-text-muted px-1 tracking-widest uppercase">Subject of Interest</label>
                  <select name="subject" className="w-full bg-surface-dim border border-border rounded-lg p-4 text-text-primary focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                    <option>Institutional Node Hosting</option>
                    <option>Developer Partnership</option>
                    <option>Media Inquiry</option>
                    <option>General Feedback</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-heading font-bold text-text-muted px-1 tracking-widest uppercase">Your Message</label>
                  <textarea name="message" className="w-full bg-surface-dim border border-border rounded-lg p-4 text-text-primary focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-text-muted" placeholder="How can we help your team?" rows="5" required></textarea>
                </div>
                <Button type="submit" className="w-full button-gradient py-4 rounded-lg text-lg font-bold hover:brightness-110 shadow-[0_4px_20px_rgba(37,99,235,0.3)] text-white">
                  Initialize Contact Sequence
                </Button>
              </form>
            </div>
          </div>
          {/* Right Column: Info & FAQ */}
          <div className="lg:col-span-5 space-y-8">
            {/* What Happens Next */}
            <div className="bg-surface-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-heading font-semibold text-text-primary mb-6">What Happens Next?</h3>
              <div className="space-y-4">
                {[
                  { step: '1', text: 'Our algorithm routes your request to the specialized lead.' },
                  { step: '2', text: 'You receive a confirmation hash via email within 5 minutes.' },
                  { step: '3', text: 'A human expert responds within 12 business hours.' },
                ].map((item) => (
                  <div key={item.step} className="flex items-center space-x-4 group">
                    <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm">{item.step}</div>
                    <p className="text-text-secondary text-sm group-hover:text-text-primary transition-colors">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* FAQ Accordion */}
            <div className="space-y-2">
              <h3 className="text-[10px] font-heading font-bold text-text-muted px-2 tracking-widest uppercase">Frequently Asked</h3>
              <div className="bg-surface-card border border-border rounded-xl divide-y divide-border">
                <details className="group p-4">
                  <summary className="list-none flex justify-between items-center cursor-pointer text-text-primary font-medium">
                    Do you offer 24/7 technical support?
                    <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                  </summary>
                  <div className="pt-4 text-text-secondary text-sm">
                    Yes, for Enterprise Node Partners we provide round-the-clock priority technical support via secure encrypted channels.
                  </div>
                </details>
                <details className="group p-4">
                  <summary className="list-none flex justify-between items-center cursor-pointer text-text-primary font-medium">
                    Where can I find the API documentation?
                    <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                  </summary>
                  <div className="pt-4 text-text-secondary text-sm">
                    All our developer resources and API specifications are available on our public documentation portal.
                  </div>
                </details>
              </div>
            </div>
            {/* Social Links */}
            <div className="bg-surface-dim border border-border rounded-xl p-8">
              <h3 className="text-[10px] font-heading font-bold text-text-muted mb-6 uppercase tracking-widest">Ecosystem Channels</h3>
              <div className="grid grid-cols-4 gap-4">
                {['hub', 'code', 'groups', 'public'].map((icon) => (
                  <a key={icon} className="w-full aspect-square bg-background rounded-lg flex items-center justify-center border border-border hover:border-primary transition-all text-text-muted hover:text-primary" href="#">
                    <span className="material-symbols-outlined">{icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Map/Visual Break */}
      <div className="h-48 md:h-80 w-full relative grayscale opacity-40 hover:opacity-100 transition-opacity duration-700 overflow-hidden">
        <img alt="World Map" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKliNvwR21-9y3LJZTrfB9ekU3boljnfG6K2c4L2PIKGEYxWcTVGaW6UxdhiYXcZZslLfqFe5diRgOg0P0M2FvVg799gK_qQmBoh7Qfo_mZeG-sFtWbHCcrl4zr1EMTW2UrhwN6VW4TA0MsK-pUhxqNRqT6sLpXLkVFiizldbFLNs5_lNy3xCJxG9Ee2nXXC7bVuw_AFFrkyu9tAjQfJf8CjCd4Ah35Mvno5a2OgHTJ5Cpd23fJoQFSKiyzP37P8ajSKnt-y5bwg" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background"></div>
      </div>
    </div>
  );
};

export default Contact;
