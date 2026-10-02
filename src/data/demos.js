// Registry of demos / proof-of-concepts shown on the /demos page.
//
// Static prototypes are served straight out of `public/demos/`, so `href` is a
// root-relative path and `external` opens it in a new tab. The AI-PPTIP build
// is produced by the separate app in `frontend-static/` — run `npm run build`
// in that folder to refresh `public/demos/ai-pptip/`.

export const demos = [
  {
    id: 'ai-pptip',
    title: 'AI-PPTIP Procurement Portal',
    category: 'Agentic AI',
    status: 'Live Prototype',
    updated: 'Oct 2026',
    description:
      'Full working prototype of the AI-PPTIP tender intelligence platform for UPMSCL. Switch between the Tender Officer and Bidder personas and walk the entire procurement lifecycle — rules, bidder checks, evidence, clarifications, commercial award and the document vault.',
    highlights: [
      'Dual persona with role-based navigation',
      '18 interactive screens, fully clickable',
      'Realistic sample tenders — no login, no setup',
    ],
    tags: ['React', 'TypeScript', 'Procurement', 'Prototype'],
    href: '/demos/ai-pptip/',
    external: true,
  },
];

export default demos;
