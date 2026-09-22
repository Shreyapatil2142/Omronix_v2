import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/shared/Hero';
import Section, { SectionHeader } from '../components/shared/Section';
import DemoCard from '../components/shared/DemoCard';
import Button from '../components/ui/Button';
import { demos } from '../data/demos';
import demosHero from '../assets/hero.webp';

const Demos = () => {
  return (
    <div>
      <Hero
        badge="DEMOS & POCS"
        title={
          <span>
            See What We Build,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Before We Build Yours
            </span>
          </span>
        }
        description="Hands-on prototypes and proofs of concept from our blockchain, agentic AI, and communication work. Every demo below is fully interactive - click a tile to open it."
        primaryBtnText="REQUEST A PROTOTYPE"
        primaryLink="/contact"
        stats={[
          { label: 'Live Demos', value: String(demos.length) },
          { label: 'Setup Needed', value: 'None' },
          { label: 'Sign-up', value: 'Not required' },
        ]}
        imageSrc={demosHero}
      />

      <Section variant="alt">
        <SectionHeader
          align="center"
          title="Interactive Prototypes"
          subtitle="Explore"
          description="Each prototype runs standalone in a new tab with sample data. No sign-up, no setup."
        />

        {demos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {demos.map((demo) => (
              <DemoCard key={demo.id} demo={demo} />
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-border rounded-3xl p-12 text-center">
            <p className="text-text-secondary">
              No demos published yet - new prototypes land here as they ship.
            </p>
          </div>
        )}
      </Section>

      <Section>
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight text-text-primary">
            Want a prototype for your idea?
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            We turn concepts into clickable proofs of concept fast - so you can validate before you
            commit to a full build.
          </p>
          <div className="flex justify-center">
            <Link to="/contact">
              <Button variant="primary" size="lg">Talk to Us</Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Demos;
