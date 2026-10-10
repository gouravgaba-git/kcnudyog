# KCN Udyog — Design System & Brand Specification (Updated from Official Brand Identity)

## 1. Official Brand Identity & Information
* **Company Name**: KCN UDYOG (के.सी.एन. उद्योग)
* **Official Live Domain**: `kcnudyog.com` (GoCare Cleaning Formulations Line)
* **Key Executive**: Nakul Sakhuja
* **Phone / WhatsApp**: `+91 9310581585`
* **Direct Email**: `kcn.gocare@gmail.com`
* **Registered Address**: 170 Sector-3, Vasundhara, Ghaziabad (Delhi NCR, Uttar Pradesh)
* **Market Scope**: Dual Segment — **Retail Consumers** (500ml, 1L packaging) & **B2B / Commercial Wholesale** (5L cans, 50L bulk carboys for hotels, hospitals, corporate facilities, and regional distributors).

---

## 2. Color System (Derived Directly from Official Card)

| Token Name | Hex Code | Semantic Role |
| :--- | :--- | :--- |
| `--color-brand-navy` | `#16195E` | Primary brand text, headers, and official logo lettering |
| `--color-brand-blue` | `#0284C7` | Cleaning skyline blue, active links, primary buttons |
| `--color-brand-cyan` | `#06B6D4` | Sparkling accent, sweep flare, badge highlights |
| `--color-brand-green` | `#0D8249` | Eco-hygiene emerald accent, WhatsApp button, roof trim |
| `--color-canvas-bg` | `#F8FAFC` | Ultra-clean porcelain canvas (slate-50) |
| `--color-card-bg` | `#FFFFFF` | Crisp white card surface |
| `--color-text-primary` | `#0F172A` | High-contrast body & titles (WCAG AAA) |
| `--color-text-secondary`| `#475569` | Secondary captions, specifications, specs |
| `--color-border-subtle` | `#E2E8F0` | Hairline border separator |
| `--color-whatsapp` | `#25D366` | WhatsApp brand accent for quick ordering |

---

## 3. Visual Assets & SVG Logo Representation
* **The Logo Motif**:
  * Cleaning broom/mop sweeping across with dynamic blue velocity curves.
  * Commercial architectural skyline + residential rooftop with window details.
  * Four-point hygiene sparkle stars.
  * Bold, authoritative **KCN UDYOG** logotype in Navy (`#16195E`).
* **Product Visual Strategy (No Photos Available)**:
  * High-fidelity, custom-crafted vector bottle visualizers.
  * Distinct color-coded liquids:
    - *Dishwash Gel*: Lime-Zest Emerald (`#10B981`)
    - *Antibacterial Handwash*: Gentle Rose-Aqua (`#06B6D4`)
    - *Heavy Bathroom Cleaner*: Deep Marine Blue (`#2563EB`)
    - *Floor & Surface Disinfectant*: Pine Amber Gold (`#F59E0B`)
  * Clear dual-packaging badges: **Retail Pack (500ml)** vs. **Institutional Can (5L / 50L)**.

---

## 4. Responsive Engineering Guarantees
* **Mobile-First Responsive Layout**:
  - `320px – 480px` (Compact Mobile): Single-column stacks, sticky bottom quick-contact action dock (WhatsApp, Call, Email), full-width tap targets (>= 48px), 0 horizontal scrolling.
  - `768px – 1024px` (Tablet & iPad): 2-column balanced grid, fluid typography.
  - `1024px – 1440px+` (Desktop & Widescreen): Structured multi-column dashboard, sticky contact sidebar / header actions, crisp container max-width `1200px`.
* **Zero Dependency Bloat**: Pure CSS variables and flexbox/grid layout for instant render and silky 60fps animations.
