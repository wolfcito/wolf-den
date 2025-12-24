# Project Status Snapshot – DenLabs

**Generated:** 2025-12-24
**Repository:** denlabs
**Current Phase:** Phase 3 - Capa de Métricas y Analytics (IN PROGRESS)

---

## Executive Summary

### 🟢 What Works Today
- ✅ **Core user flows**: Wallet connection → Handle claim → Mission access → Rewards claiming
- ✅ **Authentication**: Reown AppKit wallet integration with Supabase profile persistence
- ✅ **Identity verification**: Self.xyz integration with sandbox mode for development
- ✅ **Rewards system**: Spray bulk disperser (CELO/ERC20) + GoodDollar engagement rewards
- ✅ **Localization**: EN/ES routing via next-intl
- ✅ **Mobile-responsive**: Desktop and mobile layouts with adaptive navigation

### 🟡 What's In Progress
- 🔄 **Lab Runs system**: Mock data exists in code, not yet database-backed (Phase 3.1)
- 🔄 **HOWL/HOLD scoring**: Display works, calculation logic incomplete (Phase 2.3)
- 🔄 **Role-based UI**: Infrastructure exists but not fully utilized (Phase 4.3)

### 🔴 What's Blocked/Missing
- ❌ **Database migrations**: Schema exists in Supabase but not versioned
- ❌ **HOWL calculation**: No `awardHowl()` function or multiplier logic
- ❌ **Automated tests**: Only manual testing, minimal Playwright setup
- ❌ **8+ placeholder pages**: Exist in production but non-functional (/quests, /checkin, /showcase, etc.)

---

## Features & Modules Map

### ✅ DONE (Production-Ready)

#### Authentication & User Management
- **Wallet Connection** (`src/lib/appkitConfig.ts`, `src/providers/AppKitProvider.tsx`)
  - Reown AppKit 1.5.2 with ethers 6.15.0
  - Multi-network support (Celo, Ethereum, etc.)

- **User Profiles** (`src/lib/supabaseAdmin.ts`, `src/app/api/profile/route.ts`)
  - Supabase `lab_users` table with handle/avatar/role
  - Cookie-based session (30-day expiry)

- **Self.xyz Verification** (`src/components/SelfAuth.tsx`, `src/lib/selfVerification.ts`)
  - QR code + deeplink flow
  - Sandbox mode for development
  - Enforces: attestation id 1, age ≥18, OFAC screening

#### Core Pages
- **Landing** (`src/app/[locale]/page.tsx`)
  - Public homepage with feature showcase

- **Access/Onboarding** (`src/app/[locale]/access/page.tsx`)
  - 3-step flow: Connect wallet → Claim handle → Optional Self verification
  - Access guards redirect here if profile incomplete

- **Lab** (`src/app/[locale]/(den)/lab/page.tsx`)
  - Builder profile/home page
  - Displays HOWL score, avatar, stats
  - Shortcuts to Spray/Taberna/Self

- **Missions** (`src/app/[locale]/(den)/missions/page.tsx`)
  - Mission grid with lock states
  - LocalStorage-based progress tracking
  - Mock data from `src/lib/runs.ts`

- **Spray Console** (`src/app/[locale]/(den)/spray/page.tsx`, `src/components/modules/SprayDisperser.tsx`)
  - Bulk CELO/ERC20 disperser
  - CSV upload, multi-network support
  - Allowance approval flows

- **GoodDollar Rewards** (`src/app/[locale]/(den)/gooddollar/page.tsx`, `src/hooks/useGoodDollar.ts`)
  - Engagement rewards claiming
  - Uses Viem 2.41.2 (not ethers)
  - Invite link generation
  - Limits: 1 claim/app/180 days, max 3 apps/180 days

- **Taberna** (`src/app/[locale]/(den)/taberna/page.tsx`)
  - Iframe embed for live mentorship rooms
  - Full-screen with configurable URL

- **Settings** (`src/app/[locale]/(den)/settings/page.tsx`)
  - Basic user preferences (expandable)

#### Layout & Navigation
- **Responsive Layouts** (`src/app/[locale]/(den)/layout.tsx`)
  - Desktop: Sidebar + TopBar + StatusStrip + Main + RightRail
  - Mobile: Bottom nav + collapsible sidebar

- **SidebarNav** (`src/components/den/SidebarNav.tsx`)
  - Dynamic nav based on locale
  - Active state styling

- **StatusStrip** (`src/components/den/StatusStrip.tsx`)
  - Wallet connection status
  - Self verification badge
  - HOWL score display
  - Social links (X, Farcaster, Telegram)

### 🔄 WIP (Work in Progress)

#### Lab Runs System
- **Status**: Mock data in `src/lib/runs.ts`, not database-backed
- **Files**: `src/lib/runs.ts`, `src/hooks/useMissions.ts`
- **Current**: PoS Season Pilot run with 4 missions
- **Missing**:
  - Supabase tables for `runs` and `missions`
  - Admin UI to create/edit runs
  - Mission completion tracking in DB (currently localStorage)
- **Per PROJECT_FLOW.md**: Should migrate in Phase 3.1

#### HOWL/HOLD Scoring
- **Status**: Display works, calculation logic incomplete
- **Files**: `src/hooks/useDenUser.ts`, `src/components/den/StatusStrip.tsx`
- **Current**: Shows `hold_score` from Supabase
- **Missing**:
  - `awardHowl()` function
  - Viewer/member multiplier (x1/x3)
  - Mission completion rewards
- **Per PROJECT_FLOW.md**: Should implement in Phase 2.3

#### Role-Based UI
- **Status**: Infrastructure exists, not fully utilized
- **Files**: `src/lib/userProfile.ts` (UserRole type), `src/hooks/useDenUser.ts`
- **Current**: Role stored in DB (`player`/`organizer`/`sponsor`)
- **Missing**:
  - Different nav/dashboard for organizers
  - Run Dashboard for operators (Phase 4.3)
  - Sponsor viewer role permissions
- **Per PROJECT_FLOW.md**: Operator dashboard in Phase 4.3

### 📝 PLANNED (Defined but Not Started)

Per `PROJECT_FLOW.md`:
- **Run Dashboard** (Phase 4.3) - Operator view for managing Runs
- **Merkle Claim Rewards** (Phase 3.3) - Spray integration for Run rewards
- **Event Check-in Contract** (Phase 5.1) - Onchain attendance verification
- **x402 Premium Layer** (Phase 6) - HTTP 402 paywalls for metrics
- **Data Union** (Phase 6.3) - Builder data monetization opt-in
- **Admin Role Management** (Phase 2.4) - UI for assigning roles

### ⚠️ PLACEHOLDER PAGES (Exist but Non-Functional)

| Route | File | Status | Recommendation |
|-------|------|--------|----------------|
| `/quests` | `src/app/[locale]/(den)/quests/page.tsx` | Empty placeholder | Remove or clarify vs /missions |
| `/checkin` | `src/app/[locale]/(den)/checkin/page.tsx` | UI exists, no contract | Hide until Phase 5.1 |
| `/mentorship` | `src/app/[locale]/(den)/mentorship/page.tsx` | Taberna placeholder | Merge into /taberna or remove |
| `/showcase` | `src/app/[locale]/(den)/showcase/page.tsx` | Sponsor showcase | Hide until sponsors onboarded |
| `/voting` | `src/app/[locale]/(den)/voting/page.tsx` | Demo Day ballot | Hide until voting implemented |
| `/stats` | `src/app/[locale]/(den)/stats/page.tsx` | Analytics placeholder | Hide until Phase 3 complete |
| `/leaderboard` | `src/app/[locale]/(den)/leaderboard/page.tsx` | HOWL rankings | Hide until HOWL calculation done |
| `/mind-games` | `src/app/[locale]/(den)/mind-games/page.tsx` | Mini-games | Hide or implement |

**Recommendation**: Use feature flags or remove routes to avoid user confusion.

---

## Routes & Pages

### Main Routes (`src/app/[locale]/`)

| Route | Purpose | Protected | Status |
|-------|---------|-----------|--------|
| `/` | Landing page | No | ✅ Done |
| `/access` | Wallet + handle + Self onboarding | No | ✅ Done |

### Den Routes (`src/app/[locale]/(den)/`)

| Route | Purpose | Protected | Status |
|-------|---------|-----------|--------|
| `/lab` | Builder home/profile | Yes (requireProfile) | ✅ Done |
| `/missions` | Mission grid | No (gates missions) | ✅ Done |
| `/auth` | Self.xyz verification | No | ✅ Done |
| `/spray` | Bulk token disperser | Yes (requireWallet) | ✅ Done |
| `/gooddollar` | GoodDollar rewards | No (requires wallet+Self) | ✅ Done |
| `/taberna` | Live mentorship rooms | Yes (requireWallet) | ✅ Done |
| `/settings` | User preferences | Yes (requireWallet) | ✅ Done |
| `/quests` | Quest list | No | 📝 Placeholder |
| `/checkin` | Event check-in | No | 📝 Placeholder |
| `/mentorship` | Mentor booking | No | 📝 Placeholder |
| `/showcase` | Sponsor showcase | No | 📝 Placeholder |
| `/voting` | Demo Day voting | No | 📝 Placeholder |
| `/stats` | Analytics/insights | No | 📝 Placeholder |
| `/leaderboard` | HOWL rankings | No | 📝 Placeholder |
| `/mind-games` | Mini-games | No | 📝 Placeholder |

### API Routes (`src/app/api/`)

| Endpoint | Method | Purpose | Status |
|----------|--------|---------|--------|
| `/api/auth/wallet-login` | POST | Create/retrieve profile + session | ✅ Done |
| `/api/auth/session` | GET | Fetch current session | ✅ Done |
| `/api/profile` | GET/POST | Retrieve/update profile | ✅ Done |
| `/api/trust/self-verify` | POST | Mark Self-verified + HOWL boost | ✅ Done |
| `/api/self/verify` | POST | Self.xyz callback | ✅ Done |
| `/api/lab-user` | GET/POST | Legacy user endpoint | ⚠️ Migrate to /api/auth |
| `/api/lab-user/wallet` | POST | Legacy wallet update | ⚠️ Migrate to /api/profile |
| `/api/lab-user/self` | POST | Legacy Self update | ⚠️ Migrate to /api/trust |

**Tech Debt**: Consolidate legacy `/api/lab-user/*` routes into `/api/auth/*` and `/api/profile`.

---

## External Integrations

### ✅ Fully Integrated

#### Reown AppKit (Wallet Connection)
- **Version**: 1.5.2
- **Files**:
  - Config: `src/lib/appkitConfig.ts`
  - Provider: `src/providers/AppKitProvider.tsx`
- **Uses**: ethers 6.15.0
- **Networks**: Celo, Celo Alfajores, Ethereum (extensible)
- **Env Vars**:
  - `NEXT_PUBLIC_REOWN_PROJECT_ID` (required)
  - `NEXT_PUBLIC_MAINNET_RPC` (optional, has fallback)

#### Self.xyz (Identity Verification)
- **Version**: @selfxyz/core 1.0.8, @selfxyz/qrcode 1.0.11
- **Files**:
  - Component: `src/components/SelfAuth.tsx`
  - Endpoint config: `src/lib/selfEndpoint.ts`
  - Storage: `src/lib/selfVerification.ts`
- **Features**: QR code + deeplink, sandbox mode
- **Enforces**: Attestation id 1, age ≥18, OFAC screening
- **Env Vars**:
  - `NEXT_PUBLIC_SELF_APP_NAME`
  - `NEXT_PUBLIC_SELF_ENDPOINT`
  - `NEXT_PUBLIC_SELF_SCOPE`
  - `NEXT_PUBLIC_SELF_DEEPLINK_CALLBACK`
  - `NEXT_PUBLIC_SELF_DEV_MODE` (optional)
  - `SELF_USE_SANDBOX` (optional, server-side)

#### Supabase (User Profiles)
- **Version**: 2.86.2
- **Files**:
  - Admin client: `src/lib/supabaseAdmin.ts`
  - Type definitions: `src/lib/userProfile.ts`
- **Table**: `lab_users`
- **Session**: Cookie-based (`denlabs-user-id`, 30-day max-age)
- **Env Vars**:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `SUPABASE_SERVICE_ROLE_KEY`

#### GoodDollar Engagement SDK
- **Version**: @goodsdks/engagement-sdk 1.0.3
- **Files**:
  - Hook: `src/hooks/useGoodDollar.ts`
  - Helpers: `src/lib/gooddollar.ts`
  - Invite tracking: `src/hooks/useGoodDollarInvite.ts`
- **Uses**: Viem 2.41.2 (not ethers)
- **Limits**: 1 claim/app/180 days, max 3 apps/180-day period
- **Env Vars**:
  - `NEXT_PUBLIC_GD_REWARDS_CONTRACT`
  - `NEXT_PUBLIC_GD_APP_ADDRESS`

#### next-intl (Internationalization)
- **Version**: 3.17.0
- **Files**:
  - Routing: `src/i18n/routing.ts`
  - Middleware: `src/middleware.ts`
  - Messages: `src/i18n/messages/en.json`, `src/i18n/messages/es.json`
- **Languages**: EN (default), ES

### 📝 Configured but Minimal Usage

#### Taberna (Live Event Rooms)
- **Env Var**: `NEXT_PUBLIC_TABERNA_URL`
- **Current**: Simple iframe embed
- **Note**: No Gather.town/WorkAdventure specific integration beyond URL

---

## Environment Variables

### Required Variables

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Reown AppKit (Wallet)
NEXT_PUBLIC_REOWN_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_MAINNET_RPC=https://...  # Optional, has fallback

# Self.xyz Verification
NEXT_PUBLIC_SELF_APP_NAME=Wolf Den
NEXT_PUBLIC_SELF_ENDPOINT=https://yourapp.com/api/self/verify
NEXT_PUBLIC_SELF_SCOPE=your-scope-here
NEXT_PUBLIC_SELF_DEEPLINK_CALLBACK=https://yourapp.com/auth
NEXT_PUBLIC_SELF_DEV_MODE=false      # Optional
SELF_USE_SANDBOX=false                # Optional, server-side

# GoodDollar
NEXT_PUBLIC_GD_REWARDS_CONTRACT=0x...
NEXT_PUBLIC_GD_APP_ADDRESS=0x...

# Taberna
NEXT_PUBLIC_TABERNA_URL=https://...  # Optional

# Site URL
NEXT_PUBLIC_SITE_URL=https://denlabs.vercel.app

# System
NODE_ENV=production  # or development
```

### Missing: `.env.example`
**Recommendation**: Create `.env.example` with placeholder values for easier onboarding.

---

## Database Schema

### Supabase Tables

#### `lab_users`
**File references**: `src/lib/userProfile.ts`, `src/lib/supabaseAdmin.ts`

```sql
-- INFERRED SCHEMA (no SQL file found in repo)
CREATE TABLE lab_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  handle VARCHAR(32) UNIQUE,  -- regex: /^[A-Za-z0-9_.-]{3,32}$/
  display_name VARCHAR(255) NOT NULL,
  role VARCHAR(20) CHECK (role IN ('player', 'organizer', 'sponsor')),
  wallet_address VARCHAR(42),  -- 0x format
  self_verified BOOLEAN DEFAULT false,
  hold_score INTEGER DEFAULT 0,  -- HOWL score
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Trigger to auto-update updated_at
CREATE TRIGGER update_lab_users_updated_at
  BEFORE UPDATE ON lab_users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

### Mock Data (Not in DB)

#### Runs & Missions
**File**: `src/lib/runs.ts`
**Status**: In-memory mock data, not persisted
**Current**: "PoS Season Pilot" run with 4 missions
**Per PROJECT_FLOW.md**: Should migrate to Supabase in Phase 3.1

#### Mission Progress
**File**: `src/hooks/useMissions.ts`
**Status**: LocalStorage only (`denlabs-mission-progress-{runId}`)
**Per PROJECT_FLOW.md**: Should migrate to DB for multi-device sync

### ⚠️ Missing Migration Files
**Critical**: No `migrations/` folder, no `schema.sql` found.
**Recommendation**: Add versioned migration files immediately to prevent drift between environments.

---

## Commands & Scripts

From `package.json`:

### Development
```bash
pnpm run dev        # Next.js dev server with Turbopack at http://localhost:3000
pnpm run build      # Production build (Turbopack-compatible)
pnpm run start      # Serve production build
```

### Code Quality
```bash
pnpm run lint       # Biome lint + static analysis (treat as blocker)
pnpm run format     # Apply Biome formatting fixes
```

### Testing
```bash
pnpm run pw:install      # Install Playwright browsers
pnpm run test:routes     # Run routes tests
```
**Note**: Per CLAUDE.md, "no automated test suite yet" - manual testing required.

### BMAD Agent CLI
```bash
pnpm run bmad:refresh    # Install BMAD agents
pnpm run bmad:list       # List available agents
pnpm run bmad:validate   # Validate agent config
```

### Pre-Commit Checklist (from CLAUDE.md)
**MUST run before committing:**
1. `pnpm run lint` - Must pass without errors
2. `pnpm run format` - Apply fixes
3. `pnpm run build` - Must succeed

---

## Known Issues & Tech Debt

### Code Quality

#### TODO Comments
- `src/components/ui/MiniChat.tsx:13` - "TODO: integrate Farcaster cast/share"

#### TypeScript Issues
- ✅ **No @ts-ignore abuse** - Clean codebase
- ⚠️ **2 `any` types** (acceptable for SDK compatibility):
  - `src/hooks/useGoodDollar.ts:27,32` - Viem client type casting for GoodDollar SDK

#### Console Statements
**Should Remove** (debug logs):
- `src/components/SelfAuth.tsx:272` - `console.log("Self verification successful via deeplink!")`
- `src/components/SelfAuth.tsx:287` - `console.log("Self verification successful!")`

**Acceptable** (error logging):
- `src/app/api/auth/wallet-login/route.ts:110` - `console.error("Failed to handle wallet login")`
- Other API route error handlers (30+ instances - all appropriate)

### Architectural Concerns

#### 1. Legacy API Endpoints
**Files**: `src/app/api/lab-user/route.ts`, `wallet/route.ts`, `self/route.ts`
**Issue**: Duplicate functionality with newer `/api/auth/*` routes
**Recommendation**: Migrate clients to new endpoints, deprecate old ones

#### 2. Mock Data Not in Database
**Files**: `src/lib/runs.ts`, `src/hooks/useMissions.ts`
**Issue**: Runs/Missions stored in code, not Supabase
**Risk**: Can't create/edit Runs without code deploy
**Per PROJECT_FLOW.md**: Should migrate in Phase 3.1

#### 3. No Role-Based Navigation
**Files**: `src/components/den/SidebarNav.tsx`, `src/hooks/useDenUser.ts`
**Issue**: Infrastructure exists (roles in DB), but UI doesn't differentiate
**Per PROJECT_FLOW.md**: Run Dashboard for operators planned in Phase 4.3

#### 4. HOWL Calculation Incomplete
**Files**: `src/hooks/useDenUser.ts`, `src/components/den/StatusStrip.tsx`
**Issue**: Frontend displays score, no backend calculation logic
**Missing**:
  - `awardHowl()` function
  - Viewer/member multiplier (x1/x3)
  - Mission completion rewards
**Per PROJECT_FLOW.md**: Should implement in Phase 2.3

#### 5. No Database Migrations
**Issue**: Schema likely created manually in Supabase dashboard
**Risk**: Hard to version/replicate DB setup across environments
**Recommendation**: Add `migrations/` folder with versioned SQL files

#### 6. Placeholder Pages in Production
**Issue**: Routes like /quests, /checkin, /showcase exist but don't work
**User Impact**: Confusing, looks incomplete
**Recommendation**: Hide behind feature flags or remove entirely

### Testing Gaps

#### Current State
- ✅ Playwright config exists (`playwright.config.ts`)
- ✅ Routes test file exists (`tests/routes.spec.ts`)
- ❌ No unit tests
- ❌ No integration tests for critical flows
- ❌ Per CLAUDE.md: "no automated test suite yet"

#### Recommendations
1. Add integration tests for `/access → /lab → /missions` flow
2. Add API route tests for auth/profile endpoints
3. Add unit tests for `useDenUser`, `useMissions` hooks
4. Add E2E tests for wallet connect → mission complete flow

---

## Dependencies

### Core Stack
- **Next.js**: 15.5.9 (App Router, Turbopack)
- **React**: 19.1.2
- **TypeScript**: 5 (strict mode)
- **Tailwind CSS**: 4 (PostCSS pipeline)
- **Biome**: 2.2.0 (lint/format)

### Blockchain
- **ethers**: 6.15.0 (Reown AppKit)
- **viem**: 2.41.2 (GoodDollar SDK)
- **@reown/appkit**: 1.5.2
- **@reown/appkit-adapter-ethers**: 1.5.2
- **@goodsdks/engagement-sdk**: 1.0.3

### Identity & Auth
- **@selfxyz/core**: 1.0.8
- **@selfxyz/qrcode**: 1.0.11
- **@supabase/supabase-js**: 2.86.2

### UI & Localization
- **lucide-react**: 0.471.0 (icons)
- **@radix-ui/react-switch**: 1.2.6
- **next-intl**: 3.17.0

### Testing
- **@playwright/test**: 1.57.0

---

## Documentation Status

### ✅ Available
- **CLAUDE.md** - AI assistant guide with architecture, commands, copy/UX tone
- **AGENTS.md** - Multi-mode agent guidelines (dev/product/UX/architecture)
- **PROJECT_FLOW.md** - Phased roadmap with detailed steps and session logs
- **progress.json** - Machine-readable progress tracker
- **README.md** - Quick start, project layout, deployment guide
- **docs/PRD.md** - Product Requirements Document v1.4
- **docs/structure.md** - Architecture decisions
- **docs/spray-console.md** - Spray module documentation
- **docs/gooddolar.md** - GoodDollar integration notes
- **docs/new-profile-lab.md** - Lab page redesign notes
- **docs/new-implementation-onboarding.md** - Onboarding flow docs

### ❌ Missing
- **Database schema file** - No `schema.sql` or migration files
- **API documentation** - No OpenAPI/Swagger spec
- **.env.example** - No template for environment variables
- **Testing guide** - Playwright config exists but no test documentation
- **Deployment guide** - Basic info in README but no CI/CD setup
- **Troubleshooting guide** - Common errors/solutions not documented

---

## Summary & Recommendations

### Overall Health: 🟡 FUNCTIONAL BUT INCOMPLETE

#### Strengths ✅
- Core user flows work (wallet → handle → missions → rewards)
- Clean TypeScript/React architecture with strict mode
- Good separation of concerns (hooks, lib, components)
- Comprehensive documentation for developers and AI assistants
- Modern stack (Next.js 15, React 19, Turbopack)
- No @ts-ignore abuse, minimal type safety issues

#### Critical Gaps ❌
1. **Database schema not versioned** - No migration files
2. **Mock data in production** - Runs/Missions not in Supabase
3. **Many placeholder routes** - 8+ pages exist but don't work
4. **HOWL system incomplete** - Display only, no calculation
5. **No automated tests** - Only manual testing

### Immediate Actions (Priority Order)

#### P0 (Blocker for Scale)
1. **Create database migrations**
   - Add `migrations/` folder
   - Document `lab_users`, `runs`, `missions` schema
   - Add migration for existing tables

2. **Migrate Runs/Missions to Supabase**
   - Create `runs` and `missions` tables
   - Seed with current mock data from `src/lib/runs.ts`
   - Update `useMissions` hook to fetch from DB

3. **Clean up console.log statements**
   - Remove debug logs from `src/components/SelfAuth.tsx`

#### P1 (Next Phase - Per PROJECT_FLOW.md)
4. **Implement HOWL calculation** (Phase 2.3)
   - Add `awardHowl()` function
   - Implement viewer/member multiplier (x1/x3)
   - Track mission completion rewards

5. **Hide or complete placeholder pages**
   - Use feature flags for WIP pages
   - Remove confusing routes like /quests (vs /missions)

6. **Consolidate legacy API routes**
   - Migrate `/api/lab-user/*` to `/api/auth/*` and `/api/profile`
   - Update clients, deprecate old endpoints

#### P2 (Quality & Scale)
7. **Add `.env.example`** with all required variables
8. **Write integration tests** for critical flows
9. **Build Run Dashboard** for operators (Phase 4.3)
10. **Implement Merkle Claims** for Run rewards (Phase 3.3)

### Feature Completion Estimate

| Category | % Complete | Notes |
|----------|------------|-------|
| Auth & Onboarding | 95% | Missing edge case handling |
| User Profiles | 90% | Works but schema not versioned |
| Missions | 70% | UI done, backend is mock data |
| Rewards | 60% | Spray works, HOWL incomplete, no Merkle |
| Integrations | 85% | All connected, Self/GoodDollar solid |
| Role-Based UI | 30% | Infrastructure exists, not used |
| Analytics/Metrics | 10% | Placeholder pages only |
| Tests | 5% | Config exists, minimal coverage |

### Next Recommended Session
**Per PROJECT_FLOW.md Phase 3.1:**
> Wire up `useDenUser`/StatusStrip to persisted Supabase profile and QA the `/access → /lab → /spray` flow (desktop + mobile), validating copy, hold score, and gates.

**Also recommend:**
- Start database migration work (P0 #1-2)
- Implement basic HOWL calculation (P1 #4)
- Hide placeholder pages (P1 #5)

---

**End of Status Snapshot**
