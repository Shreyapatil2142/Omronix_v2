// Registry of demos / proof-of-concepts shown on the /demos page.
// Static prototypes live in `public/demos/` and are served as-is by Vite,
// so `href` is a root-relative path and `external` opens it in a new tab.

export const demos = [
  {
    id: 'ai-pptip',
    title: 'AI-PPTIP Platform',
    category: 'Agentic AI',
    status: 'Live Prototype',
    updated: 'Sep 2026',
    description:
      'Interactive prototype of the AI-PPTIP platform — an agent-driven workspace that turns raw project inputs into structured, presentation-ready output. Walk through the full end-to-end flow with sample data.',
    highlights: [
      'Multi-step agentic workflow',
      'Live sample dataset',
      'Full clickable UI — no login needed',
    ],
    tags: ['React', 'AI Workflow', 'Prototype'],
    href: '/demos/ai-pptip-prototype.html',
    external: true,
  },
];

export default demos;
