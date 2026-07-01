// Pricing data, shared by the homepage teaser and the /pricing page.
// Figures are indicative until billing.rake is locked; keep the qualitative
// framing (flat / predictable / no per-seat tax / free to start). No em dashes.

export const startUrl = 'https://app.banshee.chat/early-access';

export interface Cta {
  label: string;
  href: string;
  variant: 'primary' | 'ghost';
}

export interface Tier {
  name: string;
  price: string;
  suffix?: string;
  badge?: string;
  hot?: boolean;
  features: string[];
  cta: Cta;
}

export const tiers: Tier[] = [
  {
    name: 'Free',
    price: '$0',
    features: ['<b>1</b> brand, <b>1</b> inbox', '<b>100</b> conversations / mo', 'Widget and help center', 'iOS and Android apps', 'API and MCP server'],
    cta: { label: 'Start free', href: startUrl, variant: 'ghost' },
  },
  {
    name: 'Solo',
    price: '$19',
    suffix: '/mo',
    badge: 'For multi-product founders',
    hot: true,
    features: ['<b>Multi-brand</b>, all your products', '<b>3</b> agents, <b>3</b> inboxes', '<b>1,000</b> conversations / mo', 'AI live translation', 'API and MCP server'],
    cta: { label: 'Start free, upgrade later', href: startUrl, variant: 'primary' },
  },
  {
    name: 'Team',
    price: '$49',
    suffix: '/mo',
    features: ['<b>Unlimited</b> agents (within reason)', 'Unlimited inboxes and conversations', 'Remove Banshee branding', 'Priority support'],
    cta: { label: 'Choose Team', href: startUrl, variant: 'ghost' },
  },
];

// Detailed plan matrix for the /pricing comparison table. A cell of "yes" /
// "no" renders as a check / dash; anything else renders as text.
export interface PlanRow {
  label: string;
  free: string;
  solo: string;
  team: string;
}

export const planMatrix: PlanRow[] = [
  { label: 'Brands', free: '1', solo: 'Multi-brand', team: 'Multi-brand' },
  { label: 'Agents', free: '1', solo: '3', team: 'Unlimited*' },
  { label: 'Inboxes', free: '1', solo: '3', team: 'Unlimited' },
  { label: 'Conversations / mo', free: '100', solo: '1,000', team: 'Unlimited' },
  { label: 'Web widget and help center', free: 'yes', solo: 'yes', team: 'yes' },
  { label: 'Help center on your own domain', free: 'yes', solo: 'yes', team: 'yes' },
  { label: 'iOS and Android apps', free: 'yes', solo: 'yes', team: 'yes' },
  { label: 'AI live translation', free: 'no', solo: 'yes', team: 'yes' },
  { label: 'API and MCP server', free: 'yes', solo: 'yes', team: 'yes' },
  { label: 'Remove Banshee branding', free: 'no', solo: 'no', team: 'yes' },
];
