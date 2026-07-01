// Solutions (audience) pages. The flagship /for/multi-product-founders is its
// own bespoke page; these cover the other audiences from the sitemap. Grounded
// in the real product and research. Banshee pricing stays qualitative. No em
// dashes.

export interface SolutionCard {
  icon: string;
  heading: string;
  body: string;
}

export interface Solution {
  slug: string;
  name: string;
  navLabel: string;
  icon: string;
  pill: string;
  title: string;
  titleTail: string;
  lead: string;
  overviewBlurb: string;
  problemEyebrow: string;
  problemHeading: string;
  problemLead: string;
  benefitsHeading: string;
  benefits: SolutionCard[];
  bulletsHeading: string;
  bullets: string[];
  ctaHeading: string;
  ctaTail: string;
}

export const solutions: Solution[] = [
  {
    slug: 'saas',
    name: 'SaaS',
    navLabel: 'For SaaS',
    icon: 'code',
    pill: 'Support that fits your stack',
    title: 'Support your SaaS,',
    titleTail: 'without the enterprise tax.',
    lead: 'Enterprise support suites are built for support orgs, not for a small SaaS team. Banshee gives you live chat, a help center, live translation and a public API plus MCP server, at a flat, predictable price.',
    overviewBlurb: 'Live chat, help center, translation and a public API plus MCP server, priced for a small SaaS team.',
    problemEyebrow: 'The SaaS support tax',
    problemHeading: 'You need a support tool, not a support department.',
    problemLead: 'The incumbents price per seat, meter AI per resolution, and take a project to set up. For a lean SaaS team, that is cost and complexity you do not need before you have talked to your users.',
    benefitsHeading: 'Why SaaS teams pick Banshee',
    benefits: [
      { icon: 'send', heading: 'Live in minutes', body: 'One script tag and the widget is on your app. No configuration project.' },
      { icon: 'languages', heading: 'Global from day one', body: 'Two-way live translation across 100+ languages, so any customer gets answered.' },
      { icon: 'code', heading: 'API and MCP included', body: 'Wire support into your own tooling, or pipe it into Claude. On every plan.' },
      { icon: 'book-open', heading: 'Help center built in', body: 'Deflect the repeat questions with a themed knowledge base on your domain.' },
      { icon: 'bar-chart', heading: 'Real analytics', body: 'Response time, CSAT and channel mix, so you can run support well as you grow.' },
      { icon: 'dollar-sign', heading: 'Flat, predictable pricing', body: 'No per-seat tax, no per-resolution meter. Free to start.' },
    ],
    bulletsHeading: 'From first user to scale',
    bullets: [
      'A real human answers, AI assists',
      'Multi-brand if you ship more than one product',
      'Reply from native iOS and Android apps',
      'Predictable pricing as you grow',
    ],
    ctaHeading: 'Talk to your users,',
    ctaTail: 'not your billing page.',
  },
  {
    slug: 'agencies',
    name: 'Agencies',
    navLabel: 'For agencies',
    icon: 'layers',
    pill: 'One dashboard, every client site',
    title: 'Chat on every client site,',
    titleTail: 'from one inbox.',
    lead: 'Install a widget on each client site with one script tag, and run them all from a single dashboard. Each client gets their own widget, help center and email branding, you get one login and one bill.',
    overviewBlurb: 'A per-client widget, help center and branding on every site, all from one dashboard and one bill.',
    problemEyebrow: 'The per-client tax',
    problemHeading: 'A separate support account per client does not scale.',
    problemLead: 'Most tools make you spin up a workspace, and a bill, for every client. Multiply that across a roster and it is a mess of logins and invoices before you have answered a single message.',
    benefitsHeading: 'Why agencies pick Banshee',
    benefits: [
      { icon: 'layers', heading: 'True multi-brand', body: 'Each client gets its own widget, colors, help center domain and email branding.' },
      { icon: 'ghost', heading: 'One dashboard', body: 'Switch between clients from the workspace picker. No re-login, one bill.' },
      { icon: 'send', heading: 'One script tag per site', body: 'Deploy the widget on any stack in a minute, no SDK wrangling.' },
      { icon: 'book-open', heading: 'Help center per client', body: 'A themed knowledge base on each client domain, SEO sitemap included.' },
      { icon: 'users', heading: 'Assign per client', body: 'Route conversations to the right person, keep clients cleanly separated.' },
      { icon: 'dollar-sign', heading: 'Predictable margins', body: 'Flat pricing, no per-seat surprise, so support stays profitable to offer.' },
    ],
    bulletsHeading: 'Run support as a service',
    bullets: [
      'Every client site in one inbox',
      'Per-client branding customers never see through',
      'One notification stream, one login',
      'Add a client without adding an account',
    ],
    ctaHeading: 'Every client site,',
    ctaTail: 'one inbox.',
  },
  {
    slug: 'ecommerce',
    name: 'Ecommerce',
    navLabel: 'For ecommerce',
    icon: 'map-pin',
    pill: 'See your shoppers, answer them live',
    title: 'Catch the sale,',
    titleTail: 'before it bounces.',
    lead: 'See who is on your store in real time, reach out before they abandon the cart, and answer questions in their language across web, WhatsApp and SMS. All from one inbox.',
    overviewBlurb: 'Live visitor map, proactive outreach, and omnichannel replies across web, WhatsApp and SMS.',
    problemEyebrow: 'The abandoned-cart problem',
    problemHeading: 'The shopper with a question is one click from leaving.',
    problemLead: 'On a store, a fast, human answer at the right moment is the difference between a sale and a bounce. A bot-wall or a slow email is not that answer.',
    benefitsHeading: 'Why stores pick Banshee',
    benefits: [
      { icon: 'map-pin', heading: 'Live visitor map', body: 'See who is browsing, on which product, and where they are from.' },
      { icon: 'send', heading: 'Proactive outreach', body: 'Message the shopper stuck at checkout before they abandon the cart.' },
      { icon: 'mail', heading: 'Omnichannel', body: 'Answer web, WhatsApp, SMS and Messenger from one thread per customer.' },
      { icon: 'languages', heading: 'Sell internationally', body: 'Two-way live translation, so a question in any language gets a fast reply.' },
      { icon: 'star', heading: 'CSAT and follow-ups', body: 'Post-purchase surveys and branded follow-up emails, automatically.' },
      { icon: 'book-open', heading: 'Help center for FAQs', body: 'Shipping, returns and sizing answered before they even open the widget.' },
    ],
    bulletsHeading: 'Turn browsers into buyers',
    bullets: [
      'Real-time presence, not yesterday-s analytics',
      'A real human answers, fast',
      'One inbox across every channel',
      'Answer international shoppers in their language',
    ],
    ctaHeading: 'Answer the shopper,',
    ctaTail: 'keep the sale.',
  },
];

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
