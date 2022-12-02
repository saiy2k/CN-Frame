export interface NavItem {
  id: string;
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    id: 'm1',
    label: 'Trade',
    children: [
      {
        id: 'm1s1',
        label: 'Buy Bitcoin',
        href: '#',
      },
      {
        id: 'm1s2',
        label: 'Limit Orders',
        href: '#',
      },
      {
        id: 'm1s3',
        label: 'Recurring Buy',
        href: '#',
      },
      {
        id: 'm1s4',
        label: 'Sell Bitcoin',
        href: '#',
      },
    ],
  },

  {
    id: 'm2',
    label: 'Cash balance',
    children: [
      {
        id: 'm2s1',
        label: 'Deposit',
        href: '#',
      },
      {
        id: 'm2s2',
        label: 'Withdraw',
        href: '#',
      },
      {
        id: 'm2s3',
        label: '---',
        href: '#',
      },
      {
        id: 'm2s4',
        label: 'Payroll',
        href: '#',
      },
      {
        id: 'm2s5',
        label: 'Forex',
        href: '#',
      },
    ],
  },

  {
    id: 'm3',
    label: 'Payments',
    href: '#',
    children: [
      {
        id: 'm3s1',
        label: 'Pay in Fiat with Bitcoin',
        href: '#',
      },
      {
        id: 'm3s2',
        label: 'Get Paid with Bitcoin',
        href: '#',
      },
      {
        id: 'm3s3',
        label: 'Pay Bitcoin Invoice',
        href: '#',
      },
      {
        id: 'm3s4',
        label: 'Payroll Deposit',
        href: '#',
      },
      {
        id: 'm3s5',
        label: 'Send Bull Transfer',
        href: '#',
      },
      {
        id: 'm3s6',
        label: 'Receive Bull Transfer',
        href: '#',
      },
      {
        id: 'm3s7',
        label: '---',
        href: '#',
      },
      {
        id: 'm3s8',
        label: 'Forex',
        href: '#',
      },
    ],
  },

  {
    id: 'm4',
    label: 'Information',
    href: '#',
    children: [
      {
        id: 'm4s1',
        label: 'Setup a Wallet',
        href: '#',
      },
      {
        id: 'm4s2',
        label: 'How to Buy Bitcoin',
        href: '#',
      },
      {
        id: 'm4s3',
        label: 'How to Sell Bitcoin',
        href: '#',
      },
      {
        id: 'm4s4',
        label: 'Rates and Fees',
        href: '#',
      },
      {
        id: 'm4s5',
        label: 'Limits and KYC',
        href: '#',
      },
      {
        id: 'm4s6',
        label: 'Privacy Policy',
        href: '#',
      },
      {
        id: 'm4s7',
        label: 'Terms and Conditions',
        href: '#',
      },
      {
        id: 'm4s8',
        label: 'FAQ',
        href: '#',
      },
      {
        id: 'm4s9',
        label: 'Blog',
        href: '#',
      },
      {
        id: 'm4s10',
        label: 'Contact',
        href: '#',
      },
    ]
  },
];


export const USER_NAV_ITEMS: Array<NavItem> = [
  {
    id: 'a1',
    label: 'User Profile (KYC)',
  },
  {
    id: 'a2',
    label: 'The Mission',
  },
  {
    id: 'a3',
    label: 'Transactions',
  },
  {
    id: 'a4',
    label: 'Recurring Orders',
  },
  {
    id: 'a5',
    label: 'Limit Orders',
  },
  {
    id: 'a6',
    label: 'Active Trades',
  },
  {
    id: 'a7',
    label: 'Bitcoin Wallets',
  },
  {
    id: 'a8',
    label: 'Statistics',
  },
  {
    id: 'a9',
    label: 'My Recipients',
  },
  {
    id: 'a10',
    label: 'Settings',
  },
  {
    id: 'a11',
    label: 'Signout',
  },
]
