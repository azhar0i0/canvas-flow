

## SyncSpace — Real-Time Collaboration Platform

A premium, Gen-Z-styled collaboration app with four main sections, built with React + Vite + Tailwind CSS. All collaboration features will be mocked/simulated with realistic UI.

---

### 1. Design System & Global Setup
- **Color palette**: Deep indigo/violet primary, soft neutrals, accent gradients (purple-to-blue)
- **Typography**: Inter font family with clear hierarchy (bold headlines, clean body text)
- **Glassmorphism**: Frosted glass cards, subtle backdrop-blur effects
- **Custom CSS variables** for the premium palette
- **vercel.json** for deployment routing
- **Custom favicon** with SyncSpace branding
- **Global animations**: fade-in, slide-up, scale-in, parallax scroll reveals using Intersection Observer
- **All "azhar0i0" branding** where applicable (no mentions of the previous name)

### 2. Landing Page (`/`)
- **Hero section**: Bold headline ("Collaborate in Real Time"), subheadline, gradient background with animated floating shapes, two CTA buttons (Get Started, See Demo), smooth entrance animations
- **Features section**: 3-column grid showcasing Live Editing, Cursor Tracking, Smart Comments — with icon cards, glassmorphism styling, hover lift effects
- **How It Works section**: Step-by-step visual flow with scroll-triggered animations
- **Social proof / testimonials**: Minimal testimonial cards with avatars
- **Footer**: Clean links, SyncSpace branding, social icons

### 3. Auth Pages (`/login`, `/signup`)
- Split-screen layout: left side with branding/illustration, right side with form
- Glassmorphism form cards with smooth input focus animations
- Email + password fields (mock, no real auth)
- Toggle between login/signup
- Premium micro-interactions on buttons and inputs

### 4. Dashboard (`/dashboard`)
- **Sidebar** (collapsible) with navigation: Documents, Recent, Shared, Settings
- **Main area**: Document grid/list view with cards showing doc title, last edited, collaborators (avatar stack)
- **New Document** button with hover animation
- **Search bar** with command palette feel
- **Activity feed** showing recent edits (mocked data)
- Smooth page entrance animations

### 5. Document Editor (`/editor/:id`)
- **Top toolbar**: Formatting buttons (bold, italic, headings, lists), share button, collaborator avatars
- **Main editor area**: Clean contenteditable-style text area with simulated rich text
- **Simulated live cursors**: Colored cursor labels showing fake collaborator names/positions
- **Comments sidebar**: Slide-in panel with threaded comments, reply inputs, timestamps
- **Autosave indicator**: Subtle "Saving..." → "Saved" status in toolbar
- **Mobile-responsive**: Toolbar collapses, comments become a bottom sheet

### 6. Responsiveness & Performance
- Mobile-first breakpoints across all pages
- Collapsible sidebar on mobile, hamburger menu
- Touch-friendly interactions
- GPU-optimized animations (transform/opacity only)
- Lazy-loaded page components via React.lazy

