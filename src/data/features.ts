// Feature pages content. Grounded in the real product (verified in the Rails
// app / spec): multi-brand, help center with custom domains + theme studio +
// SEO sitemap + GA4, two-way live translation (100+ languages, CLD3),
// human-first AI drafts + canned-answer clustering, live visitor presence +
// geolocation map, omnichannel (web / email DKIM-SPF-DMARC / WhatsApp / SMS /
// Messenger), analytics suite, CSAT, iOS + Android apps, REST API, MCP server.
// Keep Banshee pricing qualitative. No em dashes.

export interface FeatureCard {
  icon: string;
  heading: string;
  body: string;
}

export type FeatureVisual = 'workspace' | 'inbox' | 'map' | 'translate' | 'mcp';

// Placeholder screenshot slot: rendered as a light dashed block at the right
// aspect ratio until the real shot exists.
export interface ImageSlot {
  label: string;
  hint?: string;
  w: number;
  h: number;
}

export interface FeatureGallery {
  heading: string;
  lead?: string;
  items: ImageSlot[];
}

export interface Feature {
  slug: string;
  name: string;
  navLabel: string;
  icon: string;
  flagship?: boolean;
  pill: string;
  title: string;
  titleTail: string;
  lead: string;
  visual?: FeatureVisual;
  /** Wide placeholder screenshot under the hero. */
  heroImage?: ImageSlot;
  /** Optional screenshot band after the capabilities grid. */
  gallery?: FeatureGallery;
  overviewBlurb: string;
  sectionHeading: string;
  sectionLead: string;
  capabilities: FeatureCard[];
  bulletsHeading: string;
  bullets: string[];
  footnote?: string;
}

export const features: Feature[] = [
  {
    slug: 'multi-brand',
    name: 'Multi-brand',
    navLabel: 'Multi-brand',
    icon: 'layers',
    flagship: true,
    pill: 'One inbox for every product you ship',
    title: 'Every product.',
    titleTail: 'One inbox.',
    lead: 'Run support for all your brands from a single dashboard. Each product gets its own widget, help center and email branding, while you work from one inbox, as a team of one.',
    visual: 'workspace',
    overviewBlurb: 'Every product you ship in one inbox, each with its own widget, help center and email branding.',
    sectionHeading: 'Each brand, its own identity.',
    sectionLead: 'Multi-brand is included from the cheap Solo tier, no Expert plan and no separate accounts.',
    capabilities: [
      { icon: 'ghost', heading: 'Per-product widget', body: 'Own colors, greeting and channels per product. Customers never see another brand.' },
      { icon: 'book-open', heading: 'Help center per domain', body: 'A themed knowledge base on help.yourbrand.com, with its own SEO sitemap.' },
      { icon: 'mail', heading: 'Per-product email branding', body: 'Transcripts and CSAT go out branded as the right product.' },
      { icon: 'layers', heading: 'One workspace, one bill', body: 'All your products live in one workspace. One login, no separate accounts, no stacked invoices.' },
    ],
    gallery: {
      heading: 'Three products, three brands, one login.',
      items: [
        { label: 'Products settings page', hint: 'The real Products screen: three products listed, each with its own logo, colors and channels.', w: 1600, h: 900 },
      ],
    },
    bulletsHeading: 'Built for founders juggling products',
    bullets: [
      'One workspace for every product, no separate accounts',
      'Conversations route by the topics you configure, into the inboxes you set up',
      'Assign and resolve without leaving the inbox',
      'Included from Solo, not gated to an enterprise tier',
    ],
  },
  {
    slug: 'live-chat',
    name: 'Live chat',
    navLabel: 'Live chat',
    icon: 'inbox',
    pill: 'Real conversations, in real time',
    title: 'A real human,',
    titleTail: 'answering live.',
    lead: 'A fast, lightweight web widget that drops onto any site with one script tag. Visitors reach a real person, not a bot-wall, and you answer from a clean inbox on web and mobile.',
    visual: 'inbox',
    overviewBlurb: 'A fast web widget and a clean agent inbox. One script tag, real human replies.',
    sectionHeading: 'The inbox founders actually enjoy using.',
    sectionLead: 'Everything you need to answer fast, nothing you need a support team to operate.',
    capabilities: [
      { icon: 'send', heading: 'One script tag', body: 'Paste one line and the widget is live. No build step, no SDK wrangling.' },
      { icon: 'map-pin', heading: 'Live presence', body: 'See who is on your site right now and start the conversation first.' },
      { icon: 'sparkles', heading: 'AI draft replies', body: 'Suggested answers you can accept, edit or ignore. You stay in control.' },
      { icon: 'smartphone', heading: 'Answer anywhere', body: 'Native iOS and Android apps mean the beach counts as the office.' },
    ],
    gallery: {
      heading: 'The widget, on your site.',
      lead: 'Each product themes its own widget, so it always looks like yours.',
      items: [
        { label: 'Widget open on a light landing page', hint: 'Real widget over a light customer site, greeting and topics visible.', w: 900, h: 640 },
        { label: 'Widget themed to a second brand', hint: 'Same widget, different product: different colors, logo and greeting.', w: 900, h: 640 },
      ],
    },
    bulletsHeading: 'What makes it fast',
    bullets: [
      'Lightweight widget that will not tank your Lighthouse score',
      'Keyboard-first inbox with canned answers',
      'Assign, snooze and resolve in a click',
      'Real-time typing and read state',
    ],
  },
  {
    slug: 'translation',
    name: 'Live translation',
    navLabel: 'Live translation',
    icon: 'languages',
    pill: 'Two-way, 100+ languages',
    title: 'Talk to the world,',
    titleTail: 'in its own language.',
    lead: 'Banshee detects the visitor language and translates both directions in real time. You type in English, they read French. They write French, you read English. No multilingual staff required.',
    visual: 'translate',
    overviewBlurb: 'Two-way live translation across 100+ languages, auto-detected per message.',
    sectionHeading: 'AI does the translating. You do the talking.',
    sectionLead: 'Live translation is on the base plans, not gated behind a premium tier or a per-message add-on.',
    capabilities: [
      { icon: 'languages', heading: 'Two-way and live', body: 'Visitor and agent each read their own language, message by message.' },
      { icon: 'sparkles', heading: 'Auto-detected', body: 'Language detection (CLD3) picks the language for you, no dropdowns.' },
      { icon: 'users', heading: '100+ languages', body: 'Serve global customers from day one without hiring for every timezone.' },
      { icon: 'book-open', heading: 'Original on demand', body: 'Toggle to the untranslated text any time to check the exact wording.' },
    ],
    bulletsHeading: 'Why it matters',
    bullets: [
      'Support customers in markets you could not staff for',
      'Every reply still comes from a real human',
      'Works across the widget and reply-by-email',
      'No per-message translation meter',
    ],
  },
  {
    slug: 'visitor-map',
    name: 'Visitor map',
    navLabel: 'Visitor map',
    icon: 'map-pin',
    pill: 'See who is on your sites, right now',
    title: 'Your visitors,',
    titleTail: 'live on the map.',
    lead: 'Watch visitors land in real time, see the page they are on and where they are from, and start the conversation before they even say hello. Across every brand, on one map.',
    visual: 'map',
    overviewBlurb: 'Real-time visitor presence with a geolocation map, page history and cross-device merge.',
    sectionHeading: 'Presence that Google Analytics cannot show you.',
    sectionLead: 'A live map of who is here now, not a report of who was here yesterday.',
    capabilities: [
      { icon: 'map-pin', heading: 'Live geolocation', body: 'A real-time map of active visitors and where in the world they are.' },
      { icon: 'book-open', heading: 'Page-history breadcrumbs', body: 'See the path a visitor took through your site before they reached out.' },
      { icon: 'users', heading: 'Cross-device merge', body: 'The same person on phone and laptop is stitched into one visitor.' },
      { icon: 'send', heading: 'Proactive outreach', body: 'Start a conversation with someone stuck on pricing, before they bounce.' },
    ],
    bulletsHeading: 'Turn presence into conversations',
    bullets: [
      'One map across all your brands',
      'Filter by page, country or brand',
      'Reach out at the moment of intent',
      'No extra tag, it ships with the widget',
    ],
  },
  {
    slug: 'help-center',
    name: 'Help center',
    navLabel: 'Help center',
    icon: 'book-open',
    pill: 'A knowledge base on your own domain',
    title: 'A help center',
    titleTail: 'that looks like you.',
    lead: 'A searchable, themed knowledge base per brand, hosted on your own domain. Deflect the repeat questions, keep the human for everything else.',
    heroImage: { label: 'Help center home, light theme', hint: 'Full-page shot of a real help center on a custom domain: brand logo, search bar, category cards. Light theme so it pops against the dark page.', w: 1600, h: 1000 },
    gallery: {
      heading: 'One theme studio. Three totally different help centers.',
      lead: 'Same platform underneath. Nobody can tell, and that is the point.',
      items: [
        { label: 'Theme 1: clean and light', hint: 'Minimal SaaS docs look: white, generous spacing, blue accent.', w: 900, h: 640 },
        { label: 'Theme 2: bold and colorful', hint: 'Strong brand color header, playful type. Clearly a different company.', w: 900, h: 640 },
        { label: 'Theme 3: dark or editorial', hint: 'A third direction: dark mode or serif editorial, to show the range.', w: 900, h: 640 },
      ],
    },
    overviewBlurb: 'A themed, searchable knowledge base per brand on your own domain, with SEO sitemap and GA4.',
    sectionHeading: 'Self-serve for the easy stuff.',
    sectionLead: 'A real help center, themed to match each product, not a generic subdomain.',
    capabilities: [
      { icon: 'book-open', heading: 'Custom domains', body: 'Host at help.yourbrand.com, per brand, fully yours.' },
      { icon: 'sparkles', heading: 'Theme studio', body: 'Match your colors, fonts and layout without touching code.' },
      { icon: 'bar-chart', heading: 'SEO sitemap and GA4', body: 'Articles are indexable, with a sitemap and Google Analytics built in.' },
      { icon: 'search', heading: 'Fast search', body: 'Visitors find the answer before they ever open the widget.' },
    ],
    bulletsHeading: 'Included in the platform',
    bullets: [
      'One help center per brand, on its own domain',
      'Themed to each product',
      'SEO sitemap and GA4 out of the box',
      'Linked straight from the widget',
    ],
  },
  {
    slug: 'ai',
    name: 'Human-first AI',
    navLabel: 'Human-first AI',
    icon: 'sparkles',
    pill: 'AI does the grunt work',
    title: 'AI assists.',
    titleTail: 'You answer.',
    lead: 'Banshee uses AI where it helps, translation, draft replies, tidying your canned answers, and keeps a real human on the reply. The opposite of a bot-wall billed per resolution.',
    overviewBlurb: 'Draft suggestions you can accept or edit, canned-answer clustering, and live translation. A human still answers.',
    sectionHeading: 'Faster replies, still from you.',
    sectionLead: 'No per-resolution meter. The AI speeds you up, it does not answer instead of you.',
    capabilities: [
      { icon: 'sparkles', heading: 'Draft suggestions', body: 'Accept, edit or ignore an AI-drafted reply. You always send the final word.' },
      { icon: 'languages', heading: 'Live translation', body: 'Two-way translation so a human can answer anyone, in any language.' },
      { icon: 'layers', heading: 'Canned-answer clustering', body: 'AI groups similar questions so your saved replies stay tidy and findable.' },
      { icon: 'user', heading: 'Human-first by design', body: 'Customers reach a person, fast. No bot-wall, no resolution billing.' },
    ],
    bulletsHeading: 'AI on your terms',
    bullets: [
      'You approve every reply that goes out',
      'No $0.99-per-resolution meter',
      'Suggestions learn from your canned answers',
      'Included on the base plans',
    ],
  },
  {
    slug: 'analytics',
    name: 'Analytics',
    navLabel: 'Analytics',
    icon: 'bar-chart',
    pill: 'Know how your support is doing',
    title: 'The numbers',
    titleTail: 'that matter.',
    lead: 'A real analytics suite, not a vanity dashboard. See your response time both in real time and within your working hours, so you know you are fast without being tied to your phone, plus CSAT, channel mix and where support is strong.',
    heroImage: { label: 'Analytics dashboard', hint: 'The real analytics page: response-time cards, the world map, the when-customers-chat heatmap. Crop to the most colorful region.', w: 1600, h: 900 },
    overviewBlurb: 'Response time in real time and within your work hours, plus CSAT, channel mix, top countries and an agent leaderboard.',
    sectionHeading: 'Measure what good support looks like.',
    sectionLead: 'Enough insight to run support well, without a data team, or being on call around the clock.',
    capabilities: [
      { icon: 'bar-chart', heading: 'Real time and work time', body: 'First-response time on the wall clock and within your business hours, so quick replies never mean being on call 24/7.' },
      { icon: 'star', heading: 'CSAT', body: 'Satisfaction scores from post-conversation surveys, trended over time.' },
      { icon: 'map-pin', heading: 'Top countries and heatmap', body: 'See when and where your customers chat, and staff around it.' },
      { icon: 'users', heading: 'Agent leaderboard', body: 'Volume and satisfaction per agent, once you grow past a team of one.' },
    ],
    bulletsHeading: 'Reporting built in',
    bullets: [
      'Filter every metric by brand',
      'Channel mix across web, email and messaging',
      'A world map of response time by country',
      'No separate analytics add-on',
    ],
  },
  {
    slug: 'omnichannel',
    name: 'Omnichannel',
    navLabel: 'Omnichannel',
    icon: 'mail',
    pill: 'Every channel, one thread',
    title: 'Wherever they reach you,',
    titleTail: 'one conversation.',
    lead: 'Web widget, reply-by-email, WhatsApp, SMS and Messenger all land in the same inbox and the same thread. Your customer switches channels, the conversation does not restart.',
    overviewBlurb: 'Web widget, reply-by-email (DKIM/SPF/DMARC), WhatsApp, SMS and Messenger in one thread.',
    sectionHeading: 'Meet customers where they already are.',
    sectionLead: 'One inbox for every channel, so nothing falls between the cracks.',
    capabilities: [
      { icon: 'inbox', heading: 'Web widget', body: 'The fast, one-script-tag widget as your front door.' },
      { icon: 'mail', heading: 'Reply-by-email', body: 'Proper email with DKIM, SPF and DMARC, threaded into the same conversation.' },
      { icon: 'smartphone', heading: 'WhatsApp and SMS', body: 'Answer messaging apps and texts from the same inbox.' },
      { icon: 'users', heading: 'Messenger', body: 'Facebook Messenger conversations, unified with the rest.' },
    ],
    bulletsHeading: 'One inbox, every door',
    bullets: [
      'Channels merge into a single thread per customer',
      'Deliverable email with DKIM, SPF and DMARC',
      'Reply from web or the mobile apps',
      'Per-brand routing',
    ],
  },
  {
    slug: 'mobile',
    name: 'Mobile apps',
    navLabel: 'Mobile apps',
    icon: 'smartphone',
    pill: 'Your inbox, in your pocket',
    title: 'Support from',
    titleTail: 'anywhere.',
    lead: 'Native iOS and Android agent apps with real-time push. Get pinged the moment a customer writes in and reply from wherever you are, across every brand.',
    heroImage: { label: 'iOS and Android apps, side by side', hint: 'Two phone mockups on a light background: the inbox list on one, an open conversation with LiveTranslate on the other.', w: 1600, h: 900 },
    overviewBlurb: 'Native iOS and Android agent apps with real-time push, not a clunky wrapper.',
    sectionHeading: 'A real app, not an afterthought.',
    sectionLead: 'Founders are never at their desk. Neither is your inbox.',
    capabilities: [
      { icon: 'smartphone', heading: 'Native iOS and Android', body: 'Proper apps that feel native, not a slow web wrapper.' },
      { icon: 'send', heading: 'Real-time push', body: 'Instant notifications, so you never miss a customer.' },
      { icon: 'languages', heading: 'Full inbox on the go', body: 'Translate, use canned answers and resolve, all from your phone.' },
      { icon: 'layers', heading: 'Every product', body: 'Conversations from all your products, in one app.' },
    ],
    bulletsHeading: 'Reply from the beach',
    bullets: [
      'Instant push when a conversation starts',
      'The full inbox, not a cut-down version',
      'Live translation on mobile too',
      'Included on every plan',
    ],
  },
  {
    slug: 'api-mcp',
    name: 'API and MCP',
    navLabel: 'API and MCP',
    icon: 'code',
    flagship: true,
    pill: 'Your support, as tools for your AI',
    title: 'Support that speaks',
    titleTail: 'your stack.',
    lead: 'A public REST API, webhooks, and an MCP server that turns your conversations into tools for the agents you already build with, Claude, Codex, or your own. On every plan, even Free.',
    visual: 'mcp',
    overviewBlurb: 'A public REST API, webhooks, and an MCP server on every plan. Pipe support into Claude, Codex or your own agents.',
    sectionHeading: 'Built for people who live in the terminal.',
    sectionLead: 'Your team these days is Claude, Codex and a few agents you built yourself. Banshee plugs right into them.',
    capabilities: [
      { icon: 'code', heading: 'Public REST API', body: 'Read and write conversations, contacts and more, programmatically.' },
      { icon: 'send', heading: 'Webhooks', body: 'React to new conversations and events in your own systems.' },
      { icon: 'sparkles', heading: 'MCP server', body: 'Point Claude, Codex or your own agents at your inbox to read, triage and answer conversations.' },
      { icon: 'ghost', heading: 'On every plan', body: 'API and MCP are included even on Free, not gated behind a top tier.' },
    ],
    bulletsHeading: 'For builders',
    bullets: [
      'Ask Claude or Codex to summarize unanswered conversations across all your products',
      'Wire support events into your own tooling',
      'One script tag to install the widget',
      'Included on every plan, even Free',
    ],
  },
];

export function getFeature(slug: string): Feature | undefined {
  return features.find((f) => f.slug === slug);
}
