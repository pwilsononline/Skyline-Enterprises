import { Industry, FundingTier, Feature } from './types.ts';

export const INDUSTRIES: Industry[] = [
  { name: 'Recruiters', icon: 'Search' },
  { name: 'Dentists', icon: 'Stethoscope' },
  { name: 'Med Spas', icon: 'Sparkles' },
  { name: 'Roofers', icon: 'Home' },
  { name: 'Landscapers', icon: 'Leaf' },
  { name: 'Restaurants', icon: 'Utensils' },
  { name: 'Chiropractors', icon: 'Activity' },
  { name: 'Accountants', icon: 'Calculator' },
];

export const FUNDING_TIERS: FundingTier[] = [
  { 
    amount: '$50k - $150k', 
    label: 'Standard Entry', 
    description: 'Perfect for quick supply restocks or minor marketing pushes.' 
  },
  { 
    amount: '$150k - $1M+', 
    label: 'Growth Accelerator', 
    description: 'Scale operations, open new locations, or major equipment upgrades.' 
  }
];

export const BENEFITS: Feature[] = [
  { id: '01', title: 'Payroll Support', description: 'Ensure your most valuable assets—your people—are always taken care of without cash flow stress.' },
  { id: '02', title: 'Marketing Capital', description: 'Aggressively expand your reach and acquire customers with zero-interest marketing budgets.' },
  { id: '03', title: 'Equipment & Supplies', description: 'Upgrade to the latest technology or stock up on inventory to meet rising demand.' },
  { id: '04', title: 'Renovations', description: 'Transform your physical space to match the premium quality of your brand.' }
];