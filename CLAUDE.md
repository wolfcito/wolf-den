# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Unbreakable Rules

### 1. No Co-Authorship Footer
NEVER add co-authorship footers to commits. Do not include lines like:
- `Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>`
- Any similar attribution in commit messages

### 2. Sensitive Information Protection
This is a CRITICAL SYSTEM. You MUST guarantee that secrets, keys, and sensitive information are NEVER committed.

**Before any commit:**
- Scan all staged files for:
  - API keys, tokens, passwords
  - Private keys, certificates
  - Database credentials
  - Sensitive configuration values
  - Any information marked as confidential

**If you detect ANY potential sensitive information:**
- STOP immediately
- DO NOT proceed with the commit
- Request explicit human approval
- Assume it's an error unless confirmed otherwise

### 3. Commit Discipline
- Make commits **periodic and granular**
- Each commit should represent a single logical change
- Commit frequently rather than accumulating large changesets
- Use clear, descriptive commit messages

### 4. Documentation

**IMPORTANT:** Documentation now lives in the private repository `denlabs-docs`.

Before making significant changes:
1. Run `pnpm doc:delta` to detect documentation drift
2. Check `docs/DOC_DELTA_REPORT.md` for required updates
3. Update documentation in the `denlabs-docs` repository
4. Link your docs PR in your code PR

See `docs/DOCS_POINTER.md` for complete documentation workflow.

## Development Commands

```bash
pnpm run dev       # Start Next.js dev server
pnpm run build     # Production build
pnpm run lint      # Biome lint
pnpm run format    # Apply formatting
pnpm doc:delta     # Check documentation drift
```

**Before committing:** Always run `pnpm run lint` and `pnpm run build` to ensure code quality.

## Project Information

For detailed architectural information, development workflows, and complete documentation:
- See the private `denlabs-docs` repository
- Read `docs/DOCS_POINTER.md` in this repo for access instructions
- Check `docs/DOC_TARGETS.json` for documentation mapping

## Environment Setup

Copy `.env.example` to `.env.local` and configure your environment variables.

Required variables are documented in `.env.example`.

## Tech Stack

- Next.js 15 (App Router + Turbopack)
- React 19 with TypeScript 5
- Tailwind CSS v4
- Biome for linting/formatting
- Reown AppKit for wallet connection
- Self.xyz for identity verification
- Supabase for data persistence
- next-intl for internationalization (EN/ES)

## Testing

No automated test suite yet. Manual testing required.

**Pre-commit validation (REQUIRED):**
```bash
pnpm run lint    # Fix any lint errors
pnpm run format  # Apply formatting fixes
pnpm run build   # Ensure production build succeeds
```

All three commands must pass without errors before committing.

## Contributing

1. Create a feature branch
2. Make your changes
3. Run `pnpm doc:delta` to check for documentation drift
4. Update docs in `denlabs-docs` if needed
5. Ensure lint and build pass
6. Submit PR with link to docs PR (if applicable)

See `.github/pull_request_template.md` for complete PR requirements.
