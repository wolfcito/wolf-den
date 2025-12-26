# Documentation Pointer

## Documentation Location

The complete DenLabs documentation now lives in a **private repository**: `denlabs-docs`.

This separation keeps sensitive architectural details, internal roadmaps, and development artifacts private while maintaining public-facing code and minimal documentation in this repository.

## What's in this Repo (denlabs)

- Public README with project overview and setup instructions
- Documentation tooling scripts (`scripts/check-doc-delta.cjs`)
- Documentation targets mapping (`docs/DOC_TARGETS.json`, `docs/DOC_TARGETS.md`)
- PR template with docs enforcement
- `.env.example` template for environment setup

## What's in denlabs-docs (Private)

The private documentation repository contains:

- **STATUS.md** - Complete project status, features map, and implementation details
- **CHANGELOG.md** - Documentation changelog with snapshots
- **DOCS_DEBT.md** - Documentation debt tracking
- **PRD.md** - Product Requirements Document
- **PROJECT_FLOW.md** - Development workflow and phase planning
- **AGENTS.md** - AI assistant guidelines and architectural context
- **CLAUDE.md** - Claude Code configuration and conventions
- **progress.json** - Machine-readable progress tracking
- **Technical documentation** - Implementation guides, onboarding docs, integration specs
- **Assets** - Screenshots, diagrams, and visual documentation

## Requesting Access

Access to `denlabs-docs` is restricted to authorized team members. To request access:

1. Contact repository maintainers
2. Provide your GitHub username
3. Explain your role and documentation needs

## Documentation Workflow

### When Making Code Changes

1. Run `pnpm doc:delta` in this repo to detect documentation gaps
2. The tool will generate `docs/DOC_DELTA_REPORT.md` with required updates
3. Create a PR in `denlabs-docs` with documentation changes
4. Update STATUS.md, CHANGELOG.md, and other relevant docs
5. Link your docs PR in your code PR (required by PR template)

### Creating Documentation Snapshots

When documentation is synchronized with code:

1. Navigate to `denlabs-docs` repository
2. Run `pnpm doc:snapshot` (or `node scripts/create-snapshot.cjs`)
3. This moves `[Unreleased]` entries to a timestamped snapshot in CHANGELOG.md
4. Commit the updated CHANGELOG.md in the docs repo

## Documentation Standards

### Doc Targets

The file `docs/DOC_TARGETS.json` in this repo maps code paths to documentation files. When functional changes are detected, the tooling suggests which docs need updating.

### Functional Changes

Changes that affect documentation include:

- New routes or pages
- API endpoint changes
- New environment variables
- Feature additions or modifications
- Authentication/authorization changes
- Database schema updates
- Integration changes (Self.xyz, Supabase, wallets, etc.)

For details on what constitutes a functional change, see `docs/DOC_TARGETS.json`.

## PR Requirements

All PRs that include functional changes **must include**:

1. Output of `pnpm doc:delta` (attached as `docs/DOC_DELTA_REPORT.md`)
2. Link to corresponding PR in `denlabs-docs` repository
3. Confirmation that documentation has been updated or explanation of why it's not needed

PRs without documentation updates for functional changes may be blocked in review.

## Questions?

- For access requests: Contact repository maintainers
- For documentation questions: Check `denlabs-docs/README.md` (if you have access)
- For tooling issues: See `scripts/check-doc-delta.cjs` in this repo
