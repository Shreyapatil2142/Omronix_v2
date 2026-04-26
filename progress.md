# 🚀 Omronix Mobile-First & Multi-Agent Implementation Plan

This document provides a detailed, page-by-page roadmap for optimizing the Omronix platform. It is designed to allow multiple agents to work in parallel on separate pages while maintaining a consistent mobile UX strategy.

## 🎯 Global Mobile Directives (Apply to ALL Pages)
1. **Grid Strategy**: Convert single-column lists (desktop) to `grid-cols-2` on mobile (`<640px`) where cards contain brief text/icons.
2. **Scroll Depth**: Eliminate "infinite scrolling" feel by using horizontal swipers (`flex overflow-x-auto`) for logos and statistics.
3. **Typography**: Scale H1 to `text-4xl`, H2 to `text-2xl`, and Body to `text-sm` on mobile.
4. **Spacing**: Reduce `py-24` (desktop) to `py-12` (mobile) to keep sections compact.
5. **Touch Area**: All `Button` and `Link` elements must have a minimum `44px` height.

---

## 🛠️ Page-Wise Implementation Tasks

### 🏠 1. Homepage (`Home.jsx`)
**Goal**: Make the landing experience compact and efficient.
- [x] **Hero Optimization**: Stack text above image; scale image down; reduce padding.
- [x] **About Grid**: Convert the 4-icon grid to `grid-cols-2` with smaller icons.
- [x] **Infrastructure Section**: Ensure the 4 "Why Choose Us" cards are in a `grid-cols-2` layout.
- [x] **Services Ecosystem**: Use `grid-cols-2` for the 3 service cards (2 top, 1 bottom-centered or full-width).
- [x] **Stats Strip**: Convert vertical stats to a horizontal `flex` row with `overflow-x-auto`.

### 🤖 2. Agentic AI Solutions (`AgenticAI.jsx`)
**Goal**: Visualize complex AI flows simply on small screens.
- [x] **Comparison Section**: Move the "Recommended" center card to the top on mobile, others below in a `grid-cols-2` or compact stack.
- [x] **Capabilities Grid**: Forces `grid-cols-2` for all 6 capability cards.
- [x] **Process Loop**: Convert the 5-step "Loop of Intelligence" into a horizontal swiper or 2x3 grid.
- [x] **Use Case Tabs**: Change vertical button list to a horizontal scrollable "Pill Bar".
- [x] **Performance Cards**: Stack the 87% reduction card horizontally with its description.

### ⛓️ 3. Blockchain Solutions (`Blockchain.jsx`)
**Goal**: Keep technical architecture diagrams readable on mobile.
- [x] **Architecture Section**: Simplify the "Stacked Architecture" visual; ensure cards don't overlap text on mobile.
- [x] **Tokenization Grid**: Use `grid-cols-2` for the 3 asset cards.
- [x] **Smart Contract IDE**: Reduce font size in the code block; enable horizontal scrolling for code lines.
- [x] **BaaS Platforms**: Convert the 3 platform cards to `grid-cols-2` with scaled-down logos.
- [x] **Technology Grid**: Move the technology logo pills into a horizontal scrolling marquee.

### 📞 4. Communication Solutions (`Communication.jsx`)
**Goal**: Highlight interactive features without clutter.
- [x] **Channel Overview**: Convert the 5 channel cards into a compact `grid-cols-2` or `grid-cols-3` layout.
- [x] **SMS Visual**: Scale the mobile mockup to fit `80%` of mobile width; ensure feature text is 2-column.
- [x] **Voice Section**: Use `grid-cols-2` for the 3 voice feature cards.
- [x] **Dashboard Preview**: Ensure the dashboard image doesn't create horizontal overflow; use `object-contain`.
- [x] **Latency Stats**: 2-column layout for the 3 dashboard metrics.

### 🏢 5. About Us (`About.jsx`)
**Goal**: Tell the brand story in a compact timeline.
- [x] **Mission/Vision**: Use `grid-cols-2` for the two main mission/vision cards.
- [x] **Timeline (Crucial)**: Move the year/title to a single vertical line on the left; eliminate the "zigzag" side-to-side layout for mobile.
- [x] **Core Values**: Forces `grid-cols-2` for the 4 value circles.
- [x] **Team Grid**: Ensure the 3 architects are in a `grid-cols-2` layout (2 top, 1 bottom).

### ✉️ 6. Contact Us (`Contact.jsx`)
**Goal**: Streamline the lead generation form.
- [x] **Contact Info Strip**: Convert the 3 info cards (Office, Email, Phone) to `grid-cols-2`.
- [x] **Form Layout**: Maintain single column for input fields for better typing experience; ensure `Button` is full-width.
- [x] **FAQ Section**: Ensure the `<details>` accordions take full width and don't have excessive padding.
- [x] **Social Grid**: Use `grid-cols-4` to keep the icons compact on one row.

---

## ✅ Progress Summary
- [x] **Global Mobile Sidebar** (Completed)
- [x] **Page Grid Initial Refactoring** (Completed for Home, AI, Blockchain, Comm, About)
- [ ] **Mobile Typography Scaling** (Pending)
- [ ] **Horizontal Swiper Implementation** (Pending)
- [ ] **Timeline Mobile Optimization** (Pending)
- [ ] **IDE Mobile View Optimization** (Pending)
