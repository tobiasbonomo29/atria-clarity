# Atria Clarity - AI Agent Instructions

## Project Overview
This is a **Lovable-generated** React insurance landing page (Atria One Seguros) built with Vite, TypeScript, and shadcn/ui. The project follows a single-page application pattern with section-based components and glassmorphic design aesthetics.

## Tech Stack & Configuration
- **Build**: Vite 5.4+ with SWC React plugin, Bun package manager
- **UI**: shadcn/ui components (full suite installed in `src/components/ui/`)
- **Styling**: Tailwind CSS with custom dark theme and glassmorphism utilities
- **Testing**: Vitest + @testing-library/react (jsdom environment)
- **Routing**: React Router v6 (currently minimal - single Index page)
- **State**: TanStack Query v5 for async state (configured but not actively used yet)

## Architecture Patterns

### Component Structure
- **Page components** (`src/pages/`): Container pages like `Index.tsx` that compose sections
- **Section components** (`src/components/`): Full-width page sections (e.g., `HeroSection.tsx`, `ProductosSection.tsx`)
- **UI primitives** (`src/components/ui/`): Radix-based shadcn components - **DO NOT modify these directly**; regenerate via shadcn CLI if needed

### Path Aliasing
Always use `@/` imports (maps to `src/`):
```typescript
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
```

### Styling Conventions
1. **Custom utility classes** (defined in `src/index.css`):
   - `.glass-card` / `.glass-card-hover` - glassmorphic cards with backdrop blur
   - `.gradient-text` (electric blue) / `.gradient-text-accent` (copper/orange)
   - `.animate-fade-up` / `.animate-fade-up-delay-{1-3}` - staggered fade animations
   
2. **Custom CSS variables** (HSL-based):
   - `--copper`, `--copper-glow` - accent orange/copper colors
   - `--electric`, `--electric-glow` - primary electric blue
   - `--glass`, `--glass-border` - glassmorphism backgrounds
   
3. **Dark theme by default** - all colors defined in `:root` for dark mode

### Component Patterns
- Section components use `id` attributes matching navigation hrefs (e.g., `id="productos"`)
- Icons from `lucide-react` (preferred icon library)
- Smooth scroll anchors via hash routing (`href="#section-id"`)
- Mobile-first responsive design with `lg:` breakpoint for desktop

## Developer Workflows

### Running the App
```bash
bun run dev          # Dev server on http://[::]:8080
bun run build        # Production build
bun run build:dev    # Development build
bun run preview      # Preview production build
```

### Testing
```bash
bun run test         # Run tests once
bun run test:watch   # Watch mode
```
Tests use Vitest with jsdom. Setup file: `src/test/setup.ts`

### Linting
```bash
bun run lint         # ESLint with TypeScript ESLint v8
```
Note: `@typescript-eslint/no-unused-vars` is disabled in `eslint.config.js`

### Adding UI Components
Use shadcn CLI (configuration in `components.json`):
```bash
bunx shadcn@latest add <component-name>
```

## TypeScript Configuration
- **Relaxed strictness**: `noImplicitAny: false`, `strictNullChecks: false`, `noUnusedLocals: false`
- `tsconfig.json` references `tsconfig.app.json` (app code) and `tsconfig.node.json` (Vite config)

## Critical Context
- **Lovable integration**: This project syncs with Lovable IDE - changes via Lovable commit automatically
- **HMR overlay disabled**: `vite.config.ts` sets `hmr.overlay: false`
- **Component tagging**: `lovable-tagger` plugin runs in dev mode for Lovable tooling
- **No backend**: Pure frontend SPA - any API integration would use TanStack Query (already configured)

## Common Pitfalls
- Don't manually edit `src/components/ui/*` - these are shadcn-managed
- Ensure new sections added to `Index.tsx` have corresponding nav links in `Header.tsx`
- Use `cn()` utility from `@/lib/utils` for conditional className merging (clsx + tailwind-merge)
- Animations rely on custom CSS - check `src/index.css` for available animation utilities

## File Structure Conventions
- Section components named with `Section` suffix (e.g., `ContactoSection.tsx`)
- One section component per file, default export
- UI components in `src/components/ui/` follow shadcn naming (lowercase with hyphens)
