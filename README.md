# Sant Singh's Portfolio

A modern, minimalist portfolio website built with Next.js, TypeScript, and Framer Motion.

## Features

- Modern minimalist design with dot matrix background
- Custom cursor effects
- Text glitch animations
- Dark/Light theme toggle
- Responsive design
- Performance optimized
- Framer Motion animations

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion

## Project Structure

```
singh-sant.github.io/
├── public/              # Static assets
├── src/
│   └── app/            # Next.js App Router
│       ├── components/ # React components
│       ├── globals.css # Global styles
│       ├── layout.tsx  # Root layout
│       └── page.tsx    # Main page
├── next.config.js      # Next.js configuration
├── package.json        # Dependencies
├── tailwind.config.ts  # Tailwind configuration
└── tsconfig.json       # TypeScript configuration
```

## Prerequisites

- Node.js 18.17 or later
- npm 9.0 or later

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/singh-sant/singh-sant.github.io.git
cd singh-sant.github.io
```

2. Run the setup script:
```bash
chmod +x setup.sh  # Make script executable
./setup.sh
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development Commands

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## License

MIT 