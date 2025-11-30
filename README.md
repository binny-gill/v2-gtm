# FinanceOS GTM Materials

Marketing and product materials for FinanceOS platform, hosted on Vercel.

## Getting Started

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI (if not already installed):
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will automatically detect Next.js and configure the project
6. Click "Deploy"

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── [routes]/          # Individual page routes
├── components/            # React components
│   ├── all_app_onepagers.tsx
│   ├── marketing_guide.tsx
│   ├── three_capabilities.tsx
│   └── *_spec.tsx         # App specifications
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
└── vercel.json            # Vercel configuration
```

## Available Routes

- `/` - Home page with navigation
- `/all-app-onepagers` - All app one-pagers
- `/marketing-guide` - Marketing guide
- `/three-capabilities` - Three capabilities overview
- `/fastclose-spec` - FastClose specification
- `/autoreconcile-spec` - AutoReconcile specification
- `/budgetwatch-spec` - BudgetWatch specification
- `/cashcollector-spec` - CashCollector specification
- `/cashforecaster-spec` - CashForecaster specification
- `/dataaccuracy-spec` - DataAccuracy specification
- `/fraudwatch-spec` - FraudWatch specification
- `/journalguard-spec` - JournalGuard specification
- `/policyguard-spec` - PolicyGuard specification

## Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Environment Variables

No environment variables are currently required. If you need to add any, create a `.env.local` file (not committed to git).

