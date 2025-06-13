# TypeScript Node.js Boilerplate

A strictly typed Node.js boilerplate with TypeScript, tsx, env-cmd, and Biome.

## Features

- **TypeScript**: Strictly typed JavaScript with the most strict configuration
- **tsx**: Run TypeScript files directly without compilation
- **env-cmd**: Environment variable management
- **Biome**: Modern linting and formatting
- **pnpm**: Fast, disk space efficient package manager

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- pnpm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd boilerplate-typescript

# Install dependencies
pnpm install
```

### Environment Setup

The project uses environment files located in the `config` directory:

- `.env.development` - Development environment variables
- `.env.production` - Production environment variables

You can modify these files to suit your needs.

## Available Scripts

```bash
# Run in development mode with hot reload
pnpm dev

# Build for production
pnpm build

# Run in production mode
pnpm start

# Lint code
pnpm lint

# Format code
pnpm format

# Fix linting issues
pnpm lint:fix

# Clean build artifacts
pnpm clean
```

## Project Structure

```
boilerplate-typescript/
├── config/                 # Environment configuration
│   ├── .env.development    # Development environment variables
│   ├── .env.example        # Example environment variables
│   └── .env.production     # Production environment variables
├── src/                    # Source code
│   └── index.ts            # Entry point
├── dist/                   # Compiled output (generated)
├── biome.json              # Biome configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Project metadata and scripts
└── README.md               # Project documentation
```

## TypeScript Configuration

The project uses a strict TypeScript configuration to ensure type safety and code quality.

## License

MIT
