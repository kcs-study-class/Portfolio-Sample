# Portfolio React

A portfolio site built with React, TypeScript, and Vite.

## Prerequisites

- Node.js 20+
- npm
- `make` (optional, for shortcut commands)

## Setup

```bash
cd portfolio-react
npm install
```

## Development

Use either `make` or `npm`:

```bash
make dev
```

```bash
npm run dev
```

## Commands

### Make targets

- `make help` - Show available targets
- `make install` - Install dependencies
- `make dev` - Start Vite dev server
- `make build` - Create production build
- `make lint` - Run ESLint
- `make preview` - Preview production build
- `make clean` - Remove `dist`

### npm scripts

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run preview`

## Build

```bash
make build
```

or

```bash
npm run build
```

## Notes

- If `make` is not available on Windows, use Git Bash, WSL, or run `npm` scripts directly.
- All `make` targets map to existing npm scripts in `package.json`.
