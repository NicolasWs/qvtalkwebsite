# QVTalk Magic Quadrant

A modern, interactive magic quadrant visualization for well-being solutions, positioning QVTalk in the competitive landscape.

![QVTalk Magic Quadrant](https://img.shields.io/badge/Status-Live-green)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)
![Vite](https://img.shields.io/badge/Vite-6.2.2-purple)

## 🎯 Overview

This application presents a comprehensive analysis of well-being and mental health platforms using the magic quadrant methodology, with QVTalk positioned as an innovative solution at the intersection of visionary thinking and niche execution.

## ✨ Features

- **Interactive Magic Quadrant**: Visual 2x2 matrix with clickable solution nodes
- **QVTalk Positioning**: Specially highlighted as "Visionary & Niche" with unique branding
- **Solution Details**: Detailed information panels for each platform
- **Responsive Design**: Optimized for all screen sizes
- **Modern UI**: Built with Tailwind CSS and Shadcn/ui components
- **Smooth Animations**: Hover effects and transitions for enhanced UX

## 🚀 Live Demo

**Production Site**: [https://nicolasws.github.io/qvtalkwebsite/](https://nicolasws.github.io/qvtalkwebsite/)

## 🏗️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS 3 + Shadcn/ui
- **Icons**: Lucide React
- **Deployment**: GitHub Pages with GitHub Actions
- **Routing**: React Router 6

## 📊 Market Analysis

### Leaders Quadrant

- Oracle HCM Cloud
- SAP SuccessFactors
- Informatica
- Qlik

### Challengers Quadrant

- PeopleSoft HCM
- IBM
- Wellbeing Tech

### Visionaries Quadrant

- moka.care
- Holivia
- Teale
- MoodCapture (Dartmouth College)
- Earkick

### Niche Players Quadrant

- Moodwork
- mindDay
- Meditopia
- Wysa
- Youper
- Elomia Health

### QVTalk - Special Positioning

QVTalk is uniquely positioned at the center intersection (Visionary & Niche), representing breakthrough innovation with focused market execution and rapid growth potential toward the Leaders quadrant.

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/NicolasWs/qvtalkwebsite.git
cd qvtalkwebsite

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run build:client # Build client only
npm run build:server # Build server only
npm run start        # Start production server
npm run test         # Run tests
npm run typecheck    # TypeScript validation
```

## 🚀 Deployment Instructions

### Automatic GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

#### Setup Steps:

1. **Push your code** to the repository:

   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Enable GitHub Pages**:

   - Go to your repository: `https://github.com/NicolasWs/qvtalkwebsite/settings/pages`
   - Under "Source", select **GitHub Actions** (not "Deploy from branch")
   - The workflow will automatically trigger on the next push

3. **Wait for deployment**:

   - The GitHub Action will automatically:
     - Install dependencies (`npm ci`)
     - Build the React application (`npm run build:client`)
     - Deploy built files to GitHub Pages
   - Check the "Actions" tab to monitor deployment progress

4. **Access your site**:
   - Your site will be available at: `https://nicolasws.github.io/qvtalkwebsite/`
   - Allow 5-10 minutes for initial deployment

#### Configuration Details:

- **Repository**: `https://github.com/NicolasWs/qvtalkwebsite/`
- **Base Path**: `/qvtalkwebsite/` (configured in `vite.config.ts`)
- **Build Output**: `./dist/spa` directory
- **Deployment**: Automatic on every push to `main` branch

### Embedding in Google Sites

Once deployed, you can embed the site in Google Sites:

1. **Add an Embed block**:

   - In Google Sites, click "Insert" → "Embed"
   - Paste: `https://nicolasws.github.io/qvtalkwebsite/`

2. **Alternative - HTML iframe**:
   - Click "Insert" → "Embed" → "Embed code"
   - Use this HTML:
   ```html
   <iframe
     src="https://nicolasws.github.io/qvtalkwebsite/"
     width="100%"
     height="800"
     frameborder="0"
   >
   </iframe>
   ```

### Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build the application
npm run build:client

# The built files will be in ./dist/spa/
# Upload these files to your hosting provider
```

## 📁 Project Structure

```
qvtalkwebsite/
├── .github/workflows/    # GitHub Actions deployment
├── client/              # React frontend
│   ├── components/ui/   # Shadcn/ui components
│   ├── pages/          # Route components
│   ├── App.tsx         # Main app with routing
│   └── global.css      # Tailwind styles
├── dist/spa/           # Build output (generated)
├── public/             # Static assets
├── shared/             # Shared types
├── vite.config.ts      # Vite configuration
└── README.md          # This file
```

## 🎨 Customization

### Adding New Companies

To add companies to the quadrant, edit `client/pages/Index.tsx`:

```typescript
const solutions: Solution[] = [
  {
    name: "Your Company",
    category: "Leaders", // or "Challengers", "Visionaries", "Niche Players"
    x: 75, // 0-100 (Completeness of Vision)
    y: 80, // 0-100 (Ability to Execute)
    description: "Company description",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  // ... existing companies
];
```

### Styling Customization

- **Colors**: Edit `client/global.css` and `tailwind.config.ts`
- **Components**: Modify files in `client/components/ui/`
- **Layout**: Update `client/pages/Index.tsx` and `client/pages/About.tsx`

## 🔧 Troubleshooting

### Common Issues:

1. **Site shows raw HTML instead of React app**:

   - Ensure GitHub Pages source is set to "GitHub Actions"
   - Check that the workflow completed successfully
   - Verify the base path in `vite.config.ts` matches your repository name

2. **404 errors on GitHub Pages**:

   - Confirm the repository name in the base path configuration
   - Check that the workflow uploaded files to the correct directory

3. **Embedding issues in Google Sites**:
   - Ensure the site is deployed and accessible via HTTPS
   - Try both embed methods (direct URL and iframe code)
   - Check that the iframe src URL is correct

### Getting Help:

- Check GitHub Actions logs in the "Actions" tab
- Verify deployment status in repository settings
- Ensure all commits are pushed to the main branch

## 📄 License

This project is private and proprietary to QVTalk.

## 🤝 Contributing

This is a private repository. For questions or modifications, please contact the development team.

---

**Live Site**: [https://nicolasws.github.io/qvtalkwebsite/](https://nicolasws.github.io/qvtalkwebsite/)
