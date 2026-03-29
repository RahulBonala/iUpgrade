# iUpgrade — Device as a Service

> Own the Experience. Not the Device.

India's premium Apple device rental platform. Rent the latest iPhone, MacBook, Apple Watch & AirPods with AppleCare+ included. Upgrade every year.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Language** | TypeScript (strict mode) |
| **UI** | React 19, CSS Modules |
| **State** | [Zustand](https://zustand-demo.pmnd.rs/) with persist middleware |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) |
| **Forms** | React Hook Form + Zod validation |
| **UI Primitives** | Radix UI (Accordion, Dialog) |
| **Icons** | Lucide React |
| **Payments** | Razorpay |
| **Auth** | NextAuth.js v4 |
| **Image Processing** | Sharp |
| **Deployment** | Vercel |

## Getting Started

### Prerequisites

- Node.js >= 18.17
- npm >= 9

### Installation

```bash
git clone https://github.com/your-username/iupgrade.git
cd iupgrade
npm install
```

### Environment Variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

Required variables:

| Variable | Description |
|----------|-----------|
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Razorpay publishable key |
| `RAZORPAY_KEY_SECRET` | Razorpay secret key |
| `NEXT_PUBLIC_SITE_URL` | Full site URL (e.g. `https://iupgrade.in`) |

Optional:

| Variable | Description |
|----------|-----------|
| `NEXT_PUBLIC_MSG91_AUTH_KEY` | MSG91 key for OTP SMS |
| `NEXT_PUBLIC_POSTHOG_KEY` | PostHog analytics key |

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Available Scripts

| Script | Description |
|--------|-----------|
| `npm run dev` | Start development server |
| `npm run build` | Create optimized production build |
| `npm start` | Run production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with auto-fix |
| `npm run type-check` | Run TypeScript compiler check |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check formatting without writing |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/health/         # Health check endpoint
│   ├── catalog/            # Product catalog + detail pages
│   ├── checkout/           # Checkout flow + success page
│   ├── compare/            # Device comparison
│   ├── dashboard/          # User dashboard
│   ├── how-it-works/       # How it works page
│   ├── login/              # Authentication
│   ├── orders/[id]/        # Order tracking
│   ├── privacy/            # Privacy policy
│   ├── refer/              # Referral program
│   ├── support/            # Support + FAQ
│   ├── terms/              # Terms & conditions
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── error.tsx           # Error boundary
│   ├── not-found.tsx       # 404 page
│   ├── loading.tsx         # Global loading state
│   ├── template.tsx        # Page transition wrapper
│   └── sitemap.ts          # Auto-generated sitemap
├── components/             # Shared UI components
├── lib/
│   ├── constants.ts        # Product data + types
│   ├── store.ts            # Zustand stores (cart, compare, user)
│   └── utils.ts            # Utility functions
└── types/
    └── index.ts            # Shared TypeScript types
```

## Build & Deploy

### Production Build

```bash
npm run build
npm start
```

### Vercel Deployment

This project is optimized for Vercel. Push to your connected repository and Vercel will automatically build and deploy.

Set environment variables in **Vercel Dashboard > Settings > Environment Variables**.

## License

Private — All rights reserved.
