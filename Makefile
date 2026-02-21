NPM := npm

.PHONY: help install dev build lint preview clean

help:
	@echo "Available targets:"
	@echo "  make install  - Install dependencies"
	@echo "  make dev      - Run Vite dev server"
	@echo "  make build    - Build for production"
	@echo "  make lint     - Run ESLint"
	@echo "  make preview  - Preview production build"
	@echo "  make clean    - Remove build output"

install:
	$(NPM) install

dev:
	$(NPM) run dev

build:
	$(NPM) run build

lint:
	$(NPM) run lint

preview:
	$(NPM) run preview

clean:
	node -e "const fs=require('fs'); if (fs.existsSync('dist')) fs.rmSync('dist', { recursive: true, force: true });"
