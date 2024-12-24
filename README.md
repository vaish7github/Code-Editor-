# DevStudio - Modern Development Environment

This is a modern web application built with cutting-edge technologies for a seamless development experience.

## Technology Stack

- **Next.js 15.1.2** - React framework for production
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Clerk** - Authentication and user management
- **Convex** - Backend database and real-time synchronization
- **TailwindCSS** - Utility-first CSS framework
- **ESLint** - Code linting
- **Turbopack** - Next.js bundler (experimental)

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (Latest LTS version recommended)
- npm, yarn, or pnpm

## Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd devstudio
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up TailwindCSS:**
- TailwindCSS is already configured in the project
- Check tailwind.config.ts for customizations
- Styles are automatically processed during development

4. **Set up Clerk Authentication:**
```bash
npm install @clerk/nextjs
# or
yarn add @clerk/nextjs
```
- Sign up at [Clerk.dev](https://clerk.dev)
- Create a new application in Clerk dashboard
- Create a `.env.local` file and add your Clerk keys:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

5. **Set up Convex Backend:**
```bash
npm install convex
# or
yarn add convex
```
- Install Convex CLI:
```bash
npm install -g convex
```
- Initialize Convex:
```bash
npx convex dev
```
- Add your Convex deployment URL to `.env.local`:
```env
NEXT_PUBLIC_CONVEX_URL=your_convex_url
```

## Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

- `/app` - Next.js application routes and pages
- `/convex` - Convex backend functions and schema
- `/components` - Reusable React components
- `/public` - Static assets
- `/styles` - Global styles and TailwindCSS configuration

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Frontend (Next.js)
Deploy on [Vercel](https://vercel.com):
1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables
4. Deploy!

### Backend (Convex)
Your Convex backend will automatically deploy when you push your changes:
```bash
npx convex deploy
```

## Development Best Practices

1. **TypeScript**
- Use strict type checking
- Utilize interfaces and types for all components and functions
- Follow the project's existing type definitions

2. **Styling**
- Use TailwindCSS utility classes
- Follow the project's color scheme and design system
- Keep components responsive and mobile-friendly

3. **State Management**
- Use Convex for global state management
- Utilize React hooks for local state
- Implement proper loading and error states

4. **Authentication**
- All protected routes should use Clerk middleware
- Implement proper role-based access control
- Follow security best practices

## Documentation & Resources

### Core Technologies
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

### Authentication & Backend
- [Clerk Documentation](https://clerk.com/docs)
- [Convex Documentation](https://docs.convex.dev/home)

### Development Tools
- [ESLint Documentation](https://eslint.org/docs/latest/)
- [Turbopack Documentation](https://turbo.build/pack/docs)

## Troubleshooting

Common issues and solutions:

1. **Environment Variables**
- Ensure all required environment variables are set in `.env.local`
- Restart the development server after updating environment variables

2. **Build Issues**
- Clear `.next` folder and node_modules
- Run `npm clean-install` or `yarn install --force`

3. **Convex Issues**
- Ensure Convex CLI is properly installed
- Check Convex dashboard for deployment status
- Verify Convex URL in environment variables

4. **Authentication Issues**
- Verify Clerk credentials in environment variables
- Check Clerk dashboard for application status
- Ensure proper redirect URLs are configured

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

Please ensure your PR follows our contribution guidelines and includes appropriate tests.

## Support

For support and questions:
- Create an issue in the repository
- Check existing documentation
- Contact the development team
