# XYZ Construction Portfolio Website

This repository contains the code for a static portfolio website built for XYZ Construction. The site showcases completed projects, services offered, and company details, providing a modern and responsive user experience.

## Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- **Project Filtering**: Filter projects by category (e.g., Residential, Commercial, Renovation).
- **Pagination**: Projects are displayed with pagination for better navigation.
- **Contact Form**: A functional contact form to collect user inquiries.
- **Dynamic Content**: Built with Astro and Preact to enable reusable components and maintainable code.

## Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **UI Library**: [Preact](https://preactjs.com/)
- **CSS**: [TailwindCSS](https://tailwindcss.com/)
- **Hosting**: Compatible with static site hosting platforms like Vercel, Netlify, or GitHub Pages.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/SpaceDubby07/construction_template_astro.git
   cd construction_template_astro
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`.

4. Build for production:
   ```bash
   npm run build
   ```
   The output will be generated in the `dist` folder.

5. Preview the production build:
   ```bash
   npm run preview
   ```

## Project Structure

```
├── public/                # Static assets (e.g., images, icons)
├── src/
│   ├── components/       # Reusable components (e.g., PortfolioComponent)
│   ├── layouts/          # Layouts for pages
│   ├── pages/            # Page files (e.g., index.astro, about.astro)
│   └── styles/           # Custom styles or Tailwind extensions
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # TailwindCSS configuration
└── astro.config.mjs      # Astro project configuration
```

## Pages

### Home Page
Highlights the company’s mission, key services, and a call-to-action to explore the portfolio or contact the team.

### About Us
Describes the company’s history, values, and team members, with responsive team member photos.

### Services
Lists detailed descriptions of the construction services offered, formatted in a clean grid layout.

### Portfolio
Showcases completed projects with categories and pagination for easy navigation.

### Contact Us
Includes a contact form, location map, phone number, and business hours.

## Contributing

Contributions are welcome! If you'd like to add features, fix bugs, or improve the codebase, feel free to fork the repo and open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

