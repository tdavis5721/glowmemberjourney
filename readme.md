# Glow Member Journey

This is a Next.js project with an interactive customer journey builder. It allows you to visualize and create customer journeys for Glow members, with a drag-and-drop interface and customizable steps.

![Glow Member Journey Builder](https://via.placeholder.com/800x400?text=Glow+Member+Journey+Builder)

## Features

- Interactive journey builder with drag-and-drop functionality
- Customizable journey steps with different colors and descriptions
- Export and import journey data as JSON
- Responsive design that works on mobile and desktop
- Built with modern web technologies

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/yourusername/glowmemberjourney.git
cd glowmemberjourney
```

Then, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `pages/` - Contains all the Next.js pages
  - `_app.js` - Custom App component for global styles
  - `_document.js` - Custom Document component
  - `index.js` - Home page with journey builder
- `components/` - Reusable React components
  - `Layout.js` - Main layout wrapper
  - `Header.js` - Navigation header
  - `Footer.js` - Page footer
  - `JourneyBuilder.js` - Main journey builder component
  - `JourneyStep.js` - Individual step component
  - `JourneyIO.js` - Import/export functionality
  - `FeaturesSection.js` - Features showcase
  - `FAQSection.js` - Frequently asked questions
  - `ContactSection.js` - Contact form and info
- `styles/` - Global styles and Tailwind configuration
  - `globals.css` - Global CSS and Tailwind imports
- `utils/` - Utility functions
  - `journeyUtils.js` - Helper functions for journey manipulation
- `public/` - Static assets like images and icons

## Deployment on Vercel

This project is optimized for deployment on Vercel. Follow these steps to deploy:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to [Vercel](https://vercel.com) and click "New Project"
3. Import your Git repository
4. Keep the default settings (Vercel will automatically detect Next.js)
5. Click "Deploy"

Your site will be deployed to a URL like `https://glowmemberjourney.vercel.app`

For manual deployment, you can use:

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

## Environment Variables

No environment variables are required for basic functionality.

## Customization

- **Colors**: Edit the `tailwind.config.js` file to customize the color scheme
- **Default Journey**: Update the `getDefaultJourney` function in `utils/journeyUtils.js`
- **Layout**: Modify components in the `components` folder

## Technologies Used

- **Next.js 13** - React framework with file-based routing
- **React 18** - UI library
- **Framer Motion** - Animation library
- **Lucide React** - Icon set
- **Tailwind CSS** - Utility-first CSS framework

## License

MIT

## Author

Your Name

## Acknowledgements

Thanks to the Next.js team and the entire open-source community.
