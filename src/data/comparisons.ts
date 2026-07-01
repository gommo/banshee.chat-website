// Competitor comparison content. Facts are drawn from public list prices and
// the marketing research docs (mid-2026). Banshee pricing stays qualitative
// (flat / predictable / no per-seat tax / free to start) until billing.rake is
// locked; competitor figures are public and fair to cite. No em dashes.

export interface CompareRow {
  label: string;
  banshee: string;
  them: string;
  themBad?: boolean;
}

export interface CompareCard {
  icon: string;
  heading: string;
  body: string;
}

export interface Comparison {
  slug: string;
  name: string;
  /** Short one-liner shown in the hero pill and on the compare hub card. */
  pill: string;
  hubBlurb: string;
  lead: string;
  problemEyebrow: string;
  problemHeading: string;
  problemLead: string;
  rows: CompareRow[];
  switchHeading: string;
  switchCards: CompareCard[];
  /** Honest acknowledgement of what the competitor is good at. */
  fairness: string;
  footnote: string;
}

export const comparisons: Comparison[] = [
  {
    slug: 'intercom',
    name: 'Intercom',
    pill: 'No per-seat tax. No per-resolution meter.',
    hubBlurb: 'Flat, human-first support without the $0.99-per-resolution meter or the $132-a-seat multi-brand tier.',
    lead: "Banshee is the flat-priced, human-first Intercom alternative for founders running one or more products. No per-seat tax, no $0.99-per-resolution meter, and multi-brand from the cheap tier.",
    problemEyebrow: 'The Intercom problem',
    problemHeading: 'Powerful, but priced for enterprise support teams.',
    problemLead: "Intercom is built for large support orgs, and the bill shows it: per seat, plus $0.99 every time Fin answers, plus an Expert plan just to run more than one brand. Founders report jumps like $119 to $854 a month. And since the Salesforce acquisition in 2026, the product is drifting further upmarket, away from indie founders.",
    rows: [
      { label: 'Multiple brands', banshee: 'Included from the cheap Solo tier', them: 'Expert plan only, about $132/seat', themBad: true },
      { label: 'AI billing', banshee: 'Included, no per-resolution meter', them: '$0.99 per Fin AI resolution', themBad: true },
      { label: 'Who answers', banshee: 'A real human, AI assists', them: 'Fin bot answers first, billed per resolution', themBad: true },
      { label: 'Pricing shape', banshee: 'Flat and predictable', them: 'Per-seat plus usage', themBad: true },
      { label: 'Live translation', banshee: 'Two-way, base plans', them: 'Add-on or higher tiers' },
      { label: 'API and MCP', banshee: 'Every plan, even Free', them: 'Higher tiers' },
      { label: 'Ownership', banshee: 'Independent, founder-built', them: 'Acquired by Salesforce (2026)', themBad: true },
    ],
    switchHeading: 'Why founders leave Intercom',
    switchCards: [
      { icon: 'dollar-sign', heading: 'No AI-resolution tax', body: 'Fin bills <b style="color:var(--foreground)">$0.99 every time it answers</b>. Banshee never meters your support. One flat price, whatever your volume.' },
      { icon: 'layers', heading: 'Multi-brand without the Expert bill', body: 'Intercom locks multiple brands to its Expert plan at about <b style="color:var(--foreground)">$132 a seat</b>. Banshee includes multi-brand from the cheap Solo tier.' },
      { icon: 'ghost', heading: 'Independent, not enterprise', body: 'Intercom is now part of Salesforce and drifting upmarket. Banshee is founder-built and staying that way, tuned for indie founders, not enterprise rollouts.' },
    ],
    fairness: 'Intercom is a genuinely capable platform. If you are an enterprise support org with a big team and budget, it may be the right fit. If you are a founder shipping products, the per-seat and per-resolution bills are a tax you do not need.',
    footnote: 'Intercom figures are public list prices as of mid-2026 (Expert plan pricing, Fin at $0.99 per resolution). Banshee pricing shown qualitatively. See Pricing.',
  },
  {
    slug: 'crisp',
    name: 'Crisp',
    pill: 'A human answers, not an AI-native bot.',
    hubBlurb: 'A well-built independent tool. Banshee differs on human-first replies, true per-brand multi-brand, and a lower entry price.',
    lead: 'Banshee is a human-first alternative to Crisp for founders juggling multiple products: a real person answers, every brand lives in one inbox with its own branding, and the entry price is lower.',
    problemEyebrow: 'Banshee vs Crisp',
    problemHeading: 'Crisp went AI-native. Banshee keeps a human in the loop.',
    problemLead: "Crisp is a solid, independent tool, and we respect it. The difference is direction: Crisp leaned into an AI-native bot that answers in your place, multiplexes websites rather than giving each brand its own identity, and starts its paid tiers at Mini, about €45 a month. Banshee is built for the founder who wants to be the human on the other end, across several products, without paying up front.",
    rows: [
      { label: 'Who answers', banshee: 'A real human, AI assists', them: 'AI-native bot answers for you', themBad: true },
      { label: 'Multiple brands', banshee: 'True per-brand widget, help center, email branding', them: 'Multiple websites per workspace, shared branding' },
      { label: 'Entry paid price', banshee: 'Flat and low from Solo', them: 'Mini, about €45/mo (4 seats)', themBad: true },
      { label: 'Live translation', banshee: 'Two-way, 100+ languages, base plans', them: 'Limited' },
      { label: 'Live visitor map', banshee: 'Real-time presence and geolocation', them: 'Basic' },
      { label: 'API and MCP', banshee: 'Every plan, plus an MCP server', them: 'Add-on, no MCP' },
      { label: 'Built for', banshee: 'Founders running multiple products', them: 'Support teams' },
    ],
    switchHeading: 'Why founders pick Banshee over Crisp',
    switchCards: [
      { icon: 'user', heading: 'A human answers, not a bot', body: 'Crisp went AI-native, its bot answers in your place. Banshee keeps a real person in the loop; AI just does the grunt work like translation.' },
      { icon: 'layers', heading: 'True multi-brand, not multi-site', body: 'Crisp multiplexes websites in one workspace. Banshee gives each product its own widget, its help center on its own domain, and its own email branding.' },
      { icon: 'dollar-sign', heading: 'Lower entry price', body: "Crisp's cheapest paid tier is Mini at about <b style=\"color:var(--foreground)\">€45 a month</b>. Banshee's paid Solo tier is flat and lower, and multi-brand is included." },
    ],
    fairness: 'Credit where it is due: Crisp is a well-built, independent tool and a fair Intercom alternative. Banshee is for the founder who wants a real human answering across several products, at a lower entry price, not a full support-team platform.',
    footnote: 'Crisp figures are public list prices as of mid-2026 (Mini tier at about €45/mo, 4 seats). Banshee pricing shown qualitatively. See Pricing.',
  },
  {
    slug: 'zendesk',
    name: 'Zendesk',
    pill: 'One script tag. No per-agent enterprise contract.',
    hubBlurb: 'The enterprise incumbent. Banshee is the lightweight, flat-priced, live-in-minutes alternative for founders.',
    lead: 'Banshee is the lightweight, flat-priced alternative to Zendesk for founders: one script tag, a real human answering, multi-brand included, and no per-agent enterprise contract.',
    problemEyebrow: 'The Zendesk problem',
    problemHeading: 'Built for support organizations, not solo founders.',
    problemLead: 'Zendesk is the incumbent for large support teams, and it is priced and shaped for them: per agent, on annual contracts, with real multi-brand gated to higher tiers (five brands on Growth or Professional, hundreds only on Enterprise) and setup to match. For a founder shipping products, it is more platform, contract, and cost than the job needs.',
    rows: [
      { label: 'Setup', banshee: 'One script tag, live in minutes', them: 'Configuration project, built for support orgs', themBad: true },
      { label: 'Pricing shape', banshee: 'Flat, predictable, free to start', them: 'Per-agent, annual contracts', themBad: true },
      { label: 'Multiple brands', banshee: 'Included from the cheap Solo tier', them: 'Five brands on Growth/Pro, 300 on Enterprise', themBad: true },
      { label: 'Who answers', banshee: 'A real human, AI assists', them: 'Ticketing and bots' },
      { label: 'Live translation', banshee: 'Two-way, base plans', them: 'Add-on or higher tiers' },
      { label: 'Live visitor map', banshee: 'Built in', them: 'Not its focus' },
      { label: 'API and MCP', banshee: 'Every plan, plus an MCP server', them: 'Higher tiers and add-ons' },
      { label: 'Built for', banshee: 'Solo and multi-product founders', them: 'Enterprise support teams' },
    ],
    switchHeading: 'Why founders choose Banshee over Zendesk',
    switchCards: [
      { icon: 'send', heading: 'Live in minutes, not a project', body: 'Zendesk is built for support orgs and takes setup to match. Banshee is one script tag, and you are talking to customers the same day.' },
      { icon: 'dollar-sign', heading: 'No per-agent enterprise bill', body: 'Zendesk charges per agent on annual contracts. Banshee is flat, predictable, and free to start.' },
      { icon: 'layers', heading: 'Multi-brand without the top tier', body: 'Zendesk gates real multi-brand to its higher plans. Banshee includes it from the cheap Solo tier.' },
    ],
    fairness: 'Zendesk is the incumbent for large support organizations, and for that it is capable. For a solo or multi-product founder, it is more platform, contract, and cost than the job needs.',
    footnote: 'Zendesk figures are public plan details as of mid-2026 (per-agent pricing, multi-brand limits by tier). Banshee pricing shown qualitatively. See Pricing.',
  },
  {
    slug: 'tawk',
    name: 'Tawk.to',
    pill: 'The upgrade from the free default.',
    hubBlurb: 'Free earned Tawk its place. Banshee is what you move to for native apps, live translation, and pricing without hidden add-ons.',
    lead: 'Banshee is the alternative to Tawk.to for founders who have outgrown the free default: native mobile apps, live translation, a visitor map, and flat pricing that does not hide behind add-ons.',
    problemEyebrow: 'Banshee vs Tawk.to',
    problemHeading: 'Free is great, until the app misses your customers.',
    problemLead: 'Tawk.to earned its place as the free default. But founders hit the same walls: a dated interface, a clunky mobile app with delayed notifications, no native AI, and $29 a month just to remove the branding, with add-ons stacked behind it. Banshee is what you move to when free starts costing you conversations.',
    rows: [
      { label: 'Mobile apps', banshee: 'Native iOS and Android, real-time push', them: 'Clunky app, delayed notifications', themBad: true },
      { label: 'AI assistance', banshee: 'Live translation plus AI draft replies', them: 'No native AI', themBad: true },
      { label: 'Live translation', banshee: 'Two-way, 100+ languages', them: 'None', themBad: true },
      { label: 'Remove branding', banshee: 'On the Team plan', them: '$29/mo add-on', themBad: true },
      { label: 'Multiple brands', banshee: 'One inbox for every product', them: 'Per-property, separate' },
      { label: 'API and MCP', banshee: 'Every plan, plus an MCP server', them: 'Limited' },
      { label: 'Maintained', banshee: 'Actively developed', them: 'Dated UI, slow support', themBad: true },
    ],
    switchHeading: 'Why founders upgrade from Tawk.to',
    switchCards: [
      { icon: 'smartphone', heading: 'A mobile app that actually works', body: "Tawk's app is slow and misses notifications. Banshee ships native iOS and Android agent apps with real-time push, so you never miss a customer." },
      { icon: 'languages', heading: 'AI-assisted, human-first replies', body: 'Tawk has no native AI. Banshee translates 100+ languages live and drafts replies you can accept or edit, so a real human answers, faster.' },
      { icon: 'star', heading: 'Predictable, honest pricing', body: 'Tawk is free but charges <b style="color:var(--foreground)">$29 a month</b> to remove branding, with add-ons behind it. Banshee is free to start with flat, no-surprise paid tiers.' },
    ],
    fairness: 'Tawk.to earned its place as the free default, and free is genuinely useful. Banshee is what you move to when you want native apps, live translation, and paid tiers that do not nickel-and-dime you.',
    footnote: 'Tawk.to figures are public as of mid-2026 ($29/mo to remove branding). Banshee pricing shown qualitatively. See Pricing.',
  },
];

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}
