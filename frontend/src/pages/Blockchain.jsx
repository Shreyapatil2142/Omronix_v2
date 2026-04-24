import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card, { CardContent } from '../components/ui/Card';
import Hero from '../components/shared/Hero';

const Blockchain = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <Hero
        badge="Blockchain Development"
        title={
          <>
            Build <span className="gradient-text">Trust, Security</span>, and Efficiency with Blockchain
          </>
        }
        description="Our decentralized solutions empower enterprises to streamline operations, secure transactions, and unlock new digital asset potential with production-ready blockchain architecture."
        primaryBtnText="Launch Project"
        secondaryBtnText="View Documentation"
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBcXp-dZs1EEpBwH0BdKcmVoH7AEZcEHgIKQzXiy-gcwNwflHCHb0u5pW64BgRYtEYr_yaW9k6AvupCgQoL_2Y4BhLjnEcvC8oKdobtyJHbNBhKSsoOoMEMUonGdxdBIomZhVjFHyunqsrKr0_yjyFyNh_5HVUcpD7C1dIrIztHPBUljPAN6bLaF-df9fAABatAoGmMjOLO0EEP9nInci6sHr6GlARWrmgW3ia4_YM1SJxjsrZ6_VX334jOdveDQr1NpF0Em1DfCQ"
        stats={[
          { label: 'Security', value: '100%' },
          { label: 'TPS', value: '10k+' },
          { label: 'Uptime', value: '99.9%' }
        ]}
      />

      {/* Solutions Strip */}
      <section className="py-12 md:py-16 bg-[#0A1628] border-y border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-heading font-bold text-center text-white mb-12">End-to-End Blockchain Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { icon: 'hub', title: 'Blockchain Dev', color: 'primary' },
              { icon: 'toll', title: 'Tokenization', color: 'secondary' },
              { icon: 'contract_edit', title: 'Smart Contracts', color: 'primary' },
              { icon: 'corporate_fare', title: 'Enterprise', color: 'secondary' },
              { icon: 'cloud_sync', title: 'BaaS', color: 'primary' },
            ].map((item, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl glow-on-hover transition-all text-center group cursor-default">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-${item.color}/10 flex items-center justify-center text-${item.color} group-hover:bg-${item.color} group-hover:text-white transition-all`}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3 className="font-semibold text-white mb-2 text-sm">{item.title}</h3>
                <span className="text-[10px] font-bold text-secondary px-2 py-0.5 bg-secondary/10 rounded uppercase">Available Now</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blockchain Architecture Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[300px] md:h-[500px] flex items-center justify-center scale-75 md:scale-100">
            {/* Stacked Architecture Visual */}
            <div className="absolute top-0 left-0 w-48 md:w-64 h-32 md:h-48 glass-card rounded-2xl border-primary/30 p-4 md:p-6 -rotate-6 transform hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                <span className="material-symbols-outlined text-primary text-sm md:text-base">public</span>
                <span className="font-bold text-white text-xs md:text-base">Public</span>
              </div>
              <div className="h-1 bg-primary/20 rounded-full w-full mb-2">
                <div className="h-full bg-primary rounded-full w-4/5"></div>
              </div>
              <p className="text-[8px] md:text-[10px] text-slate-400">Permissionless, transparent network for global decentralization.</p>
            </div>
            <div className="absolute top-1/4 left-1/4 w-48 md:w-64 h-32 md:h-48 glass-card rounded-2xl border-secondary/30 p-4 md:p-6 rotate-2 z-10 scale-110 shadow-2xl">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                <span className="material-symbols-outlined text-secondary text-sm md:text-base">vpn_lock</span>
                <span className="font-bold text-white text-xs md:text-base">Private</span>
              </div>
              <div className="h-1 bg-secondary/20 rounded-full w-full mb-2">
                <div className="h-full bg-secondary rounded-full w-3/5"></div>
              </div>
              <p className="text-[8px] md:text-[10px] text-slate-400">High-performance permissioned systems for internal compliance.</p>
            </div>
            <div className="absolute bottom-4 right-0 w-48 md:w-64 h-32 md:h-48 glass-card rounded-2xl border-primary/30 p-4 md:p-6 rotate-12 transform hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                <span className="material-symbols-outlined text-primary text-sm md:text-base">groups</span>
                <span className="font-bold text-white text-xs md:text-base">Consortium</span>
              </div>
              <div className="h-1 bg-primary/20 rounded-full w-full mb-2">
                <div className="h-full bg-primary rounded-full w-2/5"></div>
              </div>
              <p className="text-[8px] md:text-[10px] text-slate-400">Collaborative networks for multi-organizational governance.</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-heading font-bold text-white mb-8 leading-tight">Choose the Right Blockchain Architecture</h2>
            <div className="space-y-8">
              {[
                { icon: 'lan', title: 'Public Blockchain', desc: 'Ideal for dApps and DeFi projects requiring maximum decentralization on networks like Ethereum or Solana.', color: 'primary' },
                { icon: 'security', title: 'Private & Enterprise', desc: 'Secure, high-speed solutions for supply chains, identity management, and institutional finance.', color: 'secondary' },
                { icon: 'settings_input_component', title: 'Consortium Networks', desc: 'Bespoke multi-party networks that balance privacy with decentralized consensus among trusted partners.', color: 'primary' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full border border-${item.color}/30 flex items-center justify-center text-${item.color} group-hover:bg-${item.color} group-hover:text-white transition-all`}>
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                    {idx < 2 && <div className="w-full h-[1px] bg-white/10 mt-6"></div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tokenization Section */}
      <section className="py-12 md:py-24 bg-[#0A1628]">
        <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-heading font-bold text-white mb-8 leading-tight">Convert Real-World Assets into Digital Tokens</h2>
            <div className="space-y-4">
              {[
                { icon: 'token', title: 'NFT Development', desc: 'Fractionalized ownership of real estate, art, and intellectual property.', color: 'secondary' },
                { icon: 'currency_exchange', title: 'Fungible Asset Tokens', desc: 'Programmable ERC-20 compliant tokens for loyalty, rewards, and commodities.', color: 'primary' },
                { icon: 'account_balance', title: 'CBDC & Stablecoins', desc: 'Central bank digital currencies and fiat-pegged stable assets for cross-border settlement.', color: 'secondary', border: true },
              ].map((item, idx) => (
                <Card key={idx} className={`p-6 glow-on-hover flex items-start gap-4 ${item.border ? 'border-secondary/20' : ''}`}>
                  <div className={`w-10 h-10 rounded-lg bg-${item.color}/10 flex items-center justify-center text-${item.color}`}>
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 relative flex items-center justify-center h-[500px]">
            <div className="absolute w-64 h-64 border border-white/5 rounded-full"></div>
            <div className="absolute w-96 h-96 border border-white/5 rounded-full"></div>
            <div className="relative w-40 h-40 bg-brand-gradient rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.4)]">
              <span className="material-symbols-outlined text-white text-5xl">token</span>
            </div>
            {/* Orbiting Icons */}
            <div className="absolute top-20 right-20 w-12 h-12 glass-card rounded-full flex items-center justify-center text-secondary animate-bounce">
              <span className="material-symbols-outlined">diamond</span>
            </div>
            <div className="absolute bottom-20 left-20 w-12 h-12 glass-card rounded-full flex items-center justify-center text-primary animate-pulse">
              <span className="material-symbols-outlined">apartment</span>
            </div>
            <div className="absolute top-1/2 -left-6 w-12 h-12 glass-card rounded-full flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined">palette</span>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Contracts IDE Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-2 gap-16">
          <div className="glass-card rounded-xl border-slate-700 overflow-hidden shadow-2xl">
            <div className="bg-[#1e293b] px-4 py-2 flex items-center gap-2 border-b border-slate-700">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              <span className="text-[10px] text-slate-400 ml-4 font-mono uppercase tracking-widest">secure_vault.sol</span>
            </div>
            <div className="p-4 md:p-6 font-mono text-[10px] md:text-sm leading-relaxed overflow-x-auto bg-[#0d1117] no-scrollbar">
              <p><span className="text-secondary">pragma</span> solidity ^0.8.0;</p>
              <p className="mt-2"><span className="text-primary">contract</span> OmronixVault {'{'}</p>
              <p className="ml-4 text-slate-400">mapping(address =&gt; uint) public balances;</p>
              <p className="ml-4 mt-2"><span className="text-secondary">function</span> deposit() <span className="text-primary">external</span> payable {'{'}</p>
              <p className="ml-8">balances[msg.sender] += msg.value;</p>
              <p className="ml-4">{'}'}</p>
              <p className="ml-4 mt-2"><span className="text-secondary">function</span> auditStatus() <span className="text-primary">public</span> pure returns (string memory) {'{'}</p>
              <p className="ml-8">return <span className="text-green-400">"CERTIFIED_SECURE"</span>;</p>
              <p className="ml-4">{'}'}</p>
              <p>{'}'}</p>
            </div>
            <div className="bg-green-500/10 border-t border-green-500/20 p-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-green-400 text-xs font-bold">
                <span className="material-symbols-outlined text-sm">verified_user</span>
                CERTIFIED AUDIT PASSED
              </div>
              <div className="text-[10px] text-slate-500">HACKEN & OPENZEPPELIN COMPLIANT</div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-heading font-bold text-white mb-6 leading-tight">Secure, Audited, Production-Ready Contracts</h2>
            <p className="text-lg text-slate-400 mb-10">Our Solidity experts build bug-free, optimized smart contracts that handle billions in transaction volume with military-grade security.</p>
            <div className="space-y-6">
              {[
                { icon: 'verified', title: 'Formal Verification', desc: 'Mathematical proving of contract logic to eliminate re-entrancy and overflow bugs.' },
                { icon: 'flash_on', title: 'Gas Optimization', desc: 'Custom assembly-level tuning to reduce transaction costs by up to 40%.' },
                { icon: 'published_with_changes', title: 'Automated Deployment', desc: 'CI/CD pipelines for multi-chain mainnet launches (Polygon, Arbitrum, BSC).' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">{item.icon}</span>
                  <div>
                    <h4 className="text-white font-bold">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {['DeFi', 'Insurance', 'Governance', 'Supply Chain'].map((tag) => (
                <span key={tag} className="text-[10px] font-bold border border-white/10 px-3 py-1 rounded bg-white/5 text-slate-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-12 md:py-24 bg-[#0A1628]">
        <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-heading font-bold text-white mb-6 leading-tight">Blockchain for Enterprise Operations</h2>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {[
                { title: 'Strategy Consulting', desc: 'Roadmap development and feasibility studies for Fortune 500 integration.', color: 'primary' },
                { title: 'Legacy Integration', desc: 'Bridge existing ERP systems (SAP, Oracle) with decentralized ledgers.', color: 'secondary' },
                { title: 'Private Nodes', desc: 'Dedicated node hosting for maximal control and high-throughput data privacy.', color: 'secondary' },
                { title: 'Consensus Tuning', desc: 'Custom algorithms (PoA, IBFT) optimized for corporate environmental targets.', color: 'primary' },
              ].map((item, idx) => (
                <div key={idx} className={`p-6 glass-card rounded-2xl border-l-4 border-${item.color}`}>
                  <h4 className="font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              alt="Enterprise Supply Chain Blockchain" 
              className="w-full h-auto rounded-2xl shadow-2xl border border-white/10" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDur_gyp7T0_3FKkpQzjupptsIJdNC6f8MlX6xRq5kMvFnjinhp3LJxVEXdPWazbYILrJdlG9eGP37KTOncAJv4rAohe4PwPj4MTRN1zP7qXBDUC8sbIDn0pqvoNuAKf8EQvQujs70iMZTuWo1boG8QrMUw7U9EOx210MNs0Oo4Aq_OwLzf1pXRffIQ2tfh7HRKnypIg6rzq0ZKQSbcS6Oya260u-tn2k9b6ISAMqsKJrsdL2xpI-_mHRNCm9jtpLDfDZrgMjG3gw"
            />
          </div>
        </div>
      </section>

      {/* BaaS Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-white mb-10 md:mb-16">Deploy Without Managing Infrastructure</h2>

          <div className="space-y-4 md:hidden">
            {[
              { 
                title: 'R3 Corda', 
                desc: 'Optimized for regulated financial institutions and strictly permissioned peer-to-peer transactions.',
                features: ['AML/KYC Built-in', 'High Privacy Logic', 'Legal Prosa Support'],
                tag: 'Institutional',
                tagColor: 'primary',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHptauJeV6vM03zaFR0I_7sSasOxMclnkLn-9I4L6PzT1YeUGV7rjKFA4DMfSYPSxSx8_0QMm9s8hsK-gjB0k1RWO1e-kcVPWClM3wqZlqNVkDeP1iiY7bn6xkAjYK_xX0LmV78RDu5HSH9dNO2WxeujaFNh5SVJS_s_yn0l2dmbTgWr75lYv4orwyLD3Wj4lF8FDy_OIjz7YYQ3ArXBMOFiY1JPFCRhGDJyIodbZdz1Eg9-0o5Y7tgNn1nmPaGQyjf4BimpTgJg'
              },
              { 
                title: 'Hedera Hashgraph', 
                desc: 'Next-gen distributed ledger technology featuring high-speed consensus and sustainable operations.',
                features: ['10,000+ TPS', 'Fixed Low Fees', 'Carbon Negative'],
                tag: 'Most Popular',
                tagColor: 'secondary',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVYZWzEjt3vV4J7hLKOehWjYI371Pwgr3OdxT7wbV7x8edpiolSbqnkEC008YJdcm4xAt5oaiwrOCB3QSBHmyKiFy5SfnObf2BAwbN0K2iKXS_ipOpj6CjSWiKHWMbJAMpsniSqI7rOqysO0onUf29migMjpMRKCwzcwTrRn1Yr751txV5VSVruZixeqc9udUnet1q3u-zqVsjmYP0Bs3-COs1isXCK1wyKyVUM0Qi1PggJEOSVHT4biuL2LJWNfVqhhAg_j0cWg',
                featured: true
              },
              { 
                title: 'DAO Orchestrator', 
                desc: 'Comprehensive toolset for launching and managing Decentralized Autonomous Organizations.',
                features: ['On-Chain Voting', 'Treasury Multi-sig', 'Proposal Framework'],
                tag: 'Community',
                tagColor: 'primary',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDH7IweNqjpc13ikypHUmIvwG73X9iaUmbJ0KG_BsQucXgpmjkBA7ucjJvM5OAcRHdX4zp2UIIvvvGkUsizu37WExaBB96FN_Bb9j7ClnIwWaynudDunCK6WaIp5oxd6tX2d20W2tNA1N3O1r9NYjGrzg2lQB5akoBODsr2HGvnRCuiDNWdJknp6C1I469T2PW0Lt1cM2ZxJ7MWN_sQAJQ4vfp7Ox6bvfKfeq8gYUJGf5FUZ4nwhGQYxNxbfc5hC-_AY_QQxGAl3A'
              },
              { 
                title: 'DAO Orchestrator', 
                desc: 'Comprehensive toolset for launching and managing Decentralized Autonomous Organizations.',
                features: ['On-Chain Voting', 'Treasury Multi-sig', 'Proposal Framework'],
                tag: 'Community',
                tagColor: 'primary',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDH7IweNqjpc13ikypHUmIvwG73X9iaUmbJ0KG_BsQucXgpmjkBA7ucjJvM5OAcRHdX4zp2UIIvvvGkUsizu37WExaBB96FN_Bb9j7ClnIwWaynudDunCK6WaIp5oxd6tX2d20W2tNA1N3O1r9NYjGrzg2lQB5akoBODsr2HGvnRCuiDNWdJknp6C1I469T2PW0Lt1cM2ZxJ7MWN_sQAJQ4vfp7Ox6bvfKfeq8gYUJGf5FUZ4nwhGQYxNxbfc5hC-_AY_QQxGAl3A'
              },
            ].map((item, idx) => (
              <details key={idx} className={`glass-card rounded-2xl overflow-hidden ${item.featured ? 'border-secondary/30' : ''}`}>
                <summary className="list-none cursor-pointer p-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                      <img alt={item.title} className="w-9 h-9 grayscale brightness-200" src={item.img} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-heading font-bold text-white truncate">{item.title}</h3>
                      <p className="text-xs text-white/50 truncate">{item.tag}</p>
                    </div>
                  </div>
                  <span className={`text-[10px] font-bold text-${item.tagColor} px-3 py-1 bg-${item.tagColor}/10 rounded-full border border-${item.tagColor}/20 uppercase whitespace-nowrap`}>
                    {item.tag}
                  </span>
                </summary>
                <div className="px-5 pb-5 pt-1 border-t border-white/5">
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">{item.desc}</p>
                  <ul className="space-y-2 mb-5">
                    {item.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant={item.featured ? 'primary' : 'secondary'} className="w-full">
                      Select Platform
                    </Button>
                  </Link>
                </div>
              </details>
            ))}
          </div>

          <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {[
              { 
                title: 'R3 Corda', 
                desc: 'Optimized for regulated financial institutions and strictly permissioned peer-to-peer transactions.',
                features: ['AML/KYC Built-in', 'High Privacy Logic', 'Legal Prosa Support'],
                tag: 'Institutional',
                tagColor: 'primary',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHptauJeV6vM03zaFR0I_7sSasOxMclnkLn-9I4L6PzT1YeUGV7rjKFA4DMfSYPSxSx8_0QMm9s8hsK-gjB0k1RWO1e-kcVPWClM3wqZlqNVkDeP1iiY7bn6xkAjYK_xX0LmV78RDu5HSH9dNO2WxeujaFNh5SVJS_s_yn0l2dmbTgWr75lYv4orwyLD3Wj4lF8FDy_OIjz7YYQ3ArXBMOFiY1JPFCRhGDJyIodbZdz1Eg9-0o5Y7tgNn1nmPaGQyjf4BimpTgJg'
              },
              { 
                title: 'Hedera Hashgraph', 
                desc: 'Next-gen distributed ledger technology featuring high-speed consensus and sustainable operations.',
                features: ['10,000+ TPS', 'Fixed Low Fees', 'Carbon Negative'],
                tag: 'Most Popular',
                tagColor: 'secondary',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVYZWzEjt3vV4J7hLKOehWjYI371Pwgr3OdxT7wbV7x8edpiolSbqnkEC008YJdcm4xAt5oaiwrOCB3QSBHmyKiFy5SfnObf2BAwbN0K2iKXS_ipOpj6CjSWiKHWMbJAMpsniSqI7rOqysO0onUf29migMjpMRKCwzcwTrRn1Yr751txV5VSVruZixeqc9udUnet1q3u-zqVsjmYP0Bs3-COs1isXCK1wyKyVUM0Qi1PggJEOSVHT4biuL2LJWNfVqhhAg_j0cWg',
                featured: true
              },
              { 
                title: 'DAO Orchestrator', 
                desc: 'Comprehensive toolset for launching and managing Decentralized Autonomous Organizations.',
                features: ['On-Chain Voting', 'Treasury Multi-sig', 'Proposal Framework'],
                tag: 'Community',
                tagColor: 'primary',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDH7IweNqjpc13ikypHUmIvwG73X9iaUmbJ0KG_BsQucXgpmjkBA7ucjJvM5OAcRHdX4zp2UIIvvvGkUsizu37WExaBB96FN_Bb9j7ClnIwWaynudDunCK6WaIp5oxd6tX2d20W2tNA1N3O1r9NYjGrzg2lQB5akoBODsr2HGvnRCuiDNWdJknp6C1I469T2PW0Lt1cM2ZxJ7MWN_sQAJQ4vfp7Ox6bvfKfeq8gYUJGf5FUZ4nwhGQYxNxbfc5hC-_AY_QQxGAl3A'
              },
            ].map((item, idx) => (
              <Card 
                key={idx} 
                className={`p-8 group hover:-translate-y-2 transition-all ${item.featured ? 'border-secondary/30 scale-105 shadow-[0_0_30px_rgba(6,182,212,0.1)]' : ''}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center">
                    <img alt={item.title} className="w-10 h-10 grayscale brightness-200" src={item.img} />
                  </div>
                  <span className={`text-[10px] font-bold text-${item.tagColor} px-3 py-1 bg-${item.tagColor}/10 rounded-full border border-${item.tagColor}/20 uppercase`}>
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4">{item.title}</h3>
                <p className="text-sm text-slate-400 mb-6">{item.desc}</p>
                <ul className="space-y-3 mb-8">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button 
                    variant={item.featured ? 'primary' : 'secondary'} 
                    className="w-full"
                  >
                    Select Platform
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Grid */}
      <section className="py-12 md:py-20 bg-[#0A1628] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-xl md:text-3xl font-heading font-bold text-white mb-8 md:mb-12 uppercase tracking-widest opacity-50">Ecosystem Foundations</h2>
          <div className="flex overflow-x-auto gap-4 md:gap-8 pb-4 no-scrollbar justify-start md:justify-center">
            {[
              { name: 'Ethereum', color: 'bg-blue-500' },
              { name: 'Polygon', color: 'bg-purple-500' },
              { name: 'Solana', color: 'bg-teal-500' },
              { name: 'Bitcoin', color: 'bg-orange-500' },
              { name: 'Binance', color: 'bg-yellow-500' },
              { name: 'Avalanche', color: 'bg-red-500' },
            ].map((tech) => (
              <span key={tech.name} className="px-4 md:px-6 py-2 md:py-3 glass-card rounded-full font-bold text-white flex items-center gap-2 whitespace-nowrap text-xs md:text-base">
                <span className={`w-2 h-2 md:w-4 md:h-4 rounded-full ${tech.color}`}></span> {tech.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-gradient opacity-90"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">Ready to Decentralize Your Business?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Join the future of trustless infrastructure. Start your blockchain journey with Omronix today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary-container hover:bg-white/90 w-full sm:w-auto">Get Free Consultation</Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto">Developer Dashboard</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blockchain;
