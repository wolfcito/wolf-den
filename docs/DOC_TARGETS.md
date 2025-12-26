# Doc Targets por Path

Esta tabla mapea **archivos modificados** → **documentos que DEBES actualizar**.

Consulta esta guía durante el desarrollo y especialmente al crear PRs para asegurar que no haya doc drift.

---

## Regla de Oro

**Si tocaste código que afecta:**
- **Arquitectura/estructura de directorios** → `CLAUDE.md` § Architecture & Structure + § Key Directories
- **Flujos de usuario** → `CLAUDE.md` § [Sección del flow] + doc específico (ver tabla abajo)
- **APIs nuevas/modificadas** → `CLAUDE.md` § API Routes + `docs/STATUS.md`
- **Roles/permisos** → `CLAUDE.md` § Core Concepts + `PROJECT_FLOW.md` § FASE 2
- **Environment variables** → `CLAUDE.md` § Environment Variables + `docs/STATUS.md` § Environment Variables
- **Deploy/config** → `CLAUDE.md` § Deployment
- **Features completos (rutas, integraciones, APIs)** → `docs/STATUS.md` + doc específico

---

## Tabla de Doc Targets

| Path modificado | Doc target(s) obligatorio(s) | Sección específica |
|-----------------|------------------------------|-------------------|
| **Código - App & Pages** |
| `src/app/[locale]/**/*.tsx` | `CLAUDE.md` | § Key Directories |
| `src/app/[locale]/page.tsx` (landing) | `CLAUDE.md` | § Navigation Structure |
| `src/app/[locale]/access/**` | `CLAUDE.md` + `docs/new-implementation-onboarding.md` + `docs/STATUS.md` | § Access Flow |
| `src/app/[locale]/(den)/lab/**` | `CLAUDE.md` + `docs/new-profile-lab.md` + `docs/STATUS.md` | § Core Pages |
| `src/app/[locale]/(den)/missions/**` | `CLAUDE.md` + `docs/structure.md` + `docs/STATUS.md` | § Adding a New Mission |
| `src/app/[locale]/(den)/spray/**` | `docs/spray-console.md` + `CLAUDE.md` + `docs/STATUS.md` | § Spray Console |
| `src/app/[locale]/(den)/gooddollar/**` | `docs/gooddolar.md` + `CLAUDE.md` + `docs/STATUS.md` | § GoodDollar Rewards |
| `src/app/[locale]/(den)/taberna/**` | `CLAUDE.md` + `docs/STATUS.md` | § Navigation Structure |
| `src/app/[locale]/(den)/auth/**` | `CLAUDE.md` + `docs/STATUS.md` | § Self Verification |
| **Código - API Routes** |
| `src/app/api/**/*.ts` | `CLAUDE.md` + `docs/STATUS.md` | § API Routes |
| `src/app/api/auth/**` | `CLAUDE.md` + `docs/STATUS.md` | § API Routes + § Access Flow |
| `src/app/api/profile/**` | `CLAUDE.md` + `docs/STATUS.md` | § API Routes + § State Management |
| `src/app/api/trust/**` | `CLAUDE.md` + `docs/STATUS.md` | § API Routes + § Self Verification |
| `src/app/api/self/**` | `CLAUDE.md` + `docs/STATUS.md` | § Self Verification |
| **Código - Components** |
| `src/components/den/**` | `CLAUDE.md` + `docs/STATUS.md` | § Key Directories + § Navigation Structure |
| `src/components/modules/**` | `CLAUDE.md` + `docs/structure.md` + `docs/STATUS.md` | § Key Directories |
| `src/components/ui/**` | `CLAUDE.md` | § Key Directories |
| `src/components/home/**` | `CLAUDE.md` | § Key Directories |
| **Código - Hooks** |
| `src/hooks/**` | `CLAUDE.md` + `docs/STATUS.md` | § State Management |
| `src/hooks/useDenUser.ts` | `CLAUDE.md` + `docs/STATUS.md` | § State Management + § Core Concepts |
| `src/hooks/useMissions.ts` | `CLAUDE.md` + `docs/STATUS.md` | § Adding a New Mission |
| `src/hooks/useGoodDollar.ts` | `docs/gooddolar.md` + `CLAUDE.md` + `docs/STATUS.md` | § GoodDollar Rewards |
| **Código - Lib** |
| `src/lib/runs.ts` | `CLAUDE.md` + `docs/structure.md` + `docs/STATUS.md` | § Data Models + § Adding a New Mission |
| `src/lib/spray*.ts` | `docs/spray-console.md` + `CLAUDE.md` + `docs/STATUS.md` | § Spray Console |
| `src/lib/selfVerification.ts` | `CLAUDE.md` + `docs/STATUS.md` | § Self Verification |
| `src/lib/gooddollar.ts` | `docs/gooddolar.md` + `CLAUDE.md` + `docs/STATUS.md` | § GoodDollar Rewards |
| `src/lib/supabaseAdmin.ts` | `CLAUDE.md` + `docs/STATUS.md` | § State Management + § Database Schema |
| `src/lib/userProfile.ts` | `CLAUDE.md` + `docs/STATUS.md` | § Data Models |
| `src/lib/appkitConfig.ts` | `CLAUDE.md` + `docs/STATUS.md` | § External Integrations |
| **Código - i18n** |
| `src/i18n/messages/*.json` | `CLAUDE.md` + `docs/STATUS.md` | § Localization |
| `src/i18n/routing.ts` | `CLAUDE.md` + `docs/STATUS.md` | § Localization |
| `src/middleware.ts` | `CLAUDE.md` + `docs/STATUS.md` | § Localization |
| **Config** |
| `package.json` (deps nuevos) | `CLAUDE.md` + `docs/STATUS.md` | § Tech Stack + § Dependencies |
| `.env.example` (vars nuevas) | `CLAUDE.md` + `docs/STATUS.md` | § Environment Variables |
| `next.config.ts` | `CLAUDE.md` + `docs/STATUS.md` | § Deployment |
| `biome.json` | `CLAUDE.md` | § Code Style |
| `tailwind.config.ts` | `CLAUDE.md` | § Styling & Theming |
| `tsconfig.json` | `CLAUDE.md` | § Tech Stack |
| **Database** |
| `migrations/**/*.sql` | `docs/STATUS.md` | § Database Schema |
| Cambios en schema Supabase | `docs/STATUS.md` + `CLAUDE.md` | § Database Schema + § Data Models |
| **Docs/Flow** |
| `PROJECT_FLOW.md` | `progress.json` | (si cambió fase/step) |
| `progress.json` | `PROJECT_FLOW.md` | § "Dónde me quedé" |
| **Features Completos** |
| Nuevo flow de acceso/onboarding | `CLAUDE.md` + `docs/new-implementation-onboarding.md` + `docs/STATUS.md` | § Access Flow |
| Nueva misión/run | `CLAUDE.md` + `docs/structure.md` + `docs/STATUS.md` | § Adding a New Mission + § Data Models |
| Nuevo módulo Spray | `docs/spray-console.md` + `docs/STATUS.md` | todo el doc |
| Módulo GoodDollar | `docs/gooddolar.md` + `docs/STATUS.md` | todo el doc |
| Cambio en Self auth | `CLAUDE.md` + `docs/STATUS.md` | § Self Verification |
| Nueva integración externa | `CLAUDE.md` + `docs/STATUS.md` | § External Integrations |
| Nuevas rutas/pages | `CLAUDE.md` + `docs/STATUS.md` | § Routes & Pages + § Navigation Structure |

---

## Casos Especiales

### ¿Cuándo actualizar `docs/STATUS.md`?

**SIEMPRE** cuando modifiques:
- **Rutas/features** nuevas o cambios significativos
- **Integraciones externas** (nuevos SDKs, APIs)
- **Environment variables** (nuevas vars o cambios en vars existentes)
- **API endpoints** (nuevos o modificados)
- **Database schema** (nuevas tablas, columnas, migraciones)
- **Dependencies** (nuevos paquetes en package.json)

`docs/STATUS.md` es el **snapshot de estado del proyecto** - cualquier cambio funcional significativo debe reflejarse ahí.

### ¿Cuándo actualizar `PROJECT_FLOW.md`?

Actualiza la sección **"Dónde me quedé"** cuando:
- Completes un paso/sub-paso de una fase
- Descubras hallazgos importantes durante desarrollo
- Cambies de fase (también actualiza `progress.json`)

### ¿Cuándo NO usar `.env.local`?

**NUNCA** documentes `.env.local` como target.

En su lugar:
- Actualiza `.env.example` con nuevas variables (con valores placeholder)
- Documenta las variables en `CLAUDE.md` § Environment Variables
- Documenta las variables en `docs/STATUS.md` § Environment Variables

`.env.local` es tu archivo local y nunca debe commitearse.

---

## Workflow Recomendado

1. **Antes de codear**: Revisa esta tabla para saber qué docs tocarás
2. **Durante desarrollo**: Anota cambios que requieren doc updates
3. **Al crear PR**: Usa `pnpm run doc:delta` para verificar doc targets
4. **Antes de merge**: Confirma que todos los doc targets están actualizados

---

## Machine-Readable Version

Para automatización, el script `scripts/check-doc-delta.cjs` lee el archivo **`docs/DOC_TARGETS.json`** que contiene este mapeo en formato JSON.

Si agregas nuevos paths/targets, actualiza **ambos archivos**:
- Este archivo (`DOC_TARGETS.md`) para humanos
- `docs/DOC_TARGETS.json` para scripts
