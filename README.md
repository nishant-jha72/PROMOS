# Promos – Meet Your Customer

Promos is a customer acquisition and promotion platform designed to help
businesses connect with genuine, interested customers instead of random traffic.
The project focuses on clean UI, clear user journeys, and a scalable architecture
that can be extended with backend services.

---

## 🚀 Project Status

🟢 Frontend: Completed (Phase 1)  
🟡 Backend: Planned (Node.js / C#)  
🟡 Deployment: Planned  

---

## 🛠️ Tech Stack (Current)

- React.js
- Tailwind CSS
- React Router DOM
- JavaScript (ES6+)

---

## 📅 Development Timeline

The frontend of Promos was developed with proper planning and structure.
The work completed so far is divided into **2 days**, focusing on layout,
responsiveness, and user experience.

---

# 🟦 Day 1 – Core Structure & UI Foundation

### 1. Project Setup
- Initialized React project
- Configured folder structure (components, pages, assets)
- Integrated Tailwind CSS for styling
- Set up React Router for navigation

### 2. Navbar Development
- Created a fully responsive Navbar
- Added desktop and mobile menu support
- Implemented hide-on-scroll functionality:
  - Navbar hides when scrolling down
  - Navbar appears when scrolling up
- Ensured mobile menu auto-closes on scroll

### 3. Hero Section
- Designed a responsive Hero section with background image
- Added dark overlay for readability
- Included clear branding and value proposition
- Ensured no fixed height to avoid layout overlap

### 4. Services Overview
- Created service cards with background images
- Implemented hover effects and CTA buttons
- Built a responsive Service Carousel
- Fixed layout overlap issues by removing fixed heights
- Ensured proper spacing and section flow

---

# 🟦 Day 2 – Pages, Content & UX Improvements

### 1. Routing & Pages
- Created individual pages for:
  - Docs
  - Blogs
  - Services
  - Careers (Coming Soon)
  - Contact
  - Insights
- Ensured all routes work correctly via Navbar

### 2. Docs Page
- Added founder introduction
- Included profile photo section
- Explained what Promos is and how it works
- Listed technology stack
- Added privacy and trust section

### 3. Blogs Page
- Wrote a detailed blog explaining:
  - The idea behind Promos
  - One month of planning and frontend development
  - Incremental development approach
  - Backend roadmap using Node.js / C#
  - One-month backend execution plan

### 4. Services Page (Detailed)
- Explained how Promos services work step-by-step
- Covered:
  - Google Ads targeting
  - Social media promotions
  - Content creator marketing
  - Niche app-based targeting
- Added execution workflow from requirement analysis to delivery

### 5. Contact Section
- Designed a responsive contact form
- Included user information fields
- Prepared structure for backend integration
- Added clear call-to-action for users

### 6. Careers Page
- Implemented “Coming Soon” page
- Added alert functionality when user clicks Careers
- Ensured professional UX even for unavailable sections

### 7. Footer & Disclaimer
- Added copyright section
- Included privacy and image usage disclaimer
- Provided guidance for contacting in case of issues

---

## 🧠 Design & UX Principles Followed

- Mobile-first responsive design
- No fixed heights to avoid overlapping sections
- Section-based layout instead of absolute positioning
- Clear spacing between components
- Scalable structure for backend integration

---

## 🔮 Future Plans

### Backend (Next Phase – 1 Month)
- Node.js or C# (.NET) backend
- Secure APIs for contact form
- Database for lead management
- Admin dashboard APIs
- Authentication & authorization
- Deployment & optimization

---
# 🟦 Day 3 – Advanced UI Features, API Integration & Global State

Day 3 focused on improving the overall user experience, adding real-world
functionality, and making the application more production-ready by introducing
API integration, global theming, and better navigation behavior.

---

### 1. Navbar Redesign & UX Improvements
- Redesigned the Navbar with a modern, responsive layout
- Implemented active route highlighting using `NavLink`
- Ensured the current page is clearly marked in the Navbar
- Improved mobile navigation behavior and usability
- Maintained hide-on-scroll functionality for better screen focus

---

### 2. Global Layout Architecture
- Introduced a `Layout` component using `Outlet`
- Ensured Navbar and Footer are displayed on every page
- Centralized page structure for cleaner routing and scalability
- Prevented UI duplication across routes

---

### 3. Theme Toggle (Light / Dark Mode)
- Implemented a global theme system using React Context
- Enabled Tailwind CSS class-based dark mode
- Added a theme toggle button in the Navbar
- Applied theme changes across all pages and components
- Persisted user theme preference using `localStorage`

---

### 4. GitHub API Integration
- Created a reusable GitHub Profile component
- Integrated GitHub public API to fetch:
  - Profile picture
  - Username and name
  - Bio
  - Followers, following, and public repositories
- Added a direct link to the GitHub profile
- Implemented loading and error states for better UX
- Included a centered header within the same component

---

### 5. Layout Conflict Resolution
- Fixed content overlap issues caused by the fixed Navbar
- Standardized page spacing using top padding (`pt-28`)
- Introduced a reusable page-wrapper pattern for consistency
- Ensured all pages render correctly below the Navbar

---

### 6. Careers Page UX Handling
- Implemented a “Coming Soon” Careers page
- Added user feedback via alert when clicking the Careers link
- Ensured route safety even for incomplete sections

---

### 7. Code Quality & Best Practices
- Removed fixed heights that caused layout issues
- Followed section-based layout instead of absolute positioning
- Improved component reusability and readability
- Ensured mobile-first responsive design across all new features

---

## ✅ Outcome of Day 3

By the end of Day 3, Promos evolved from a static frontend into a more dynamic,
real-world-ready application with global state management, API integration,
improved navigation, and better user experience.

The project is now well-prepared for backend integration and future scalability.


## 📌 Conclusion

Promos is built with a strong foundation, focusing on clarity, usability,
and scalability. The frontend is intentionally designed to support future
backend expansion without requiring major refactoring.

---

## 📧 Contact

If you have any questions or suggestions, feel free to reach out using
the contact form on the website or By The Below Addres.
 
 ``` [📧]
 nishant.jha.aiml.2022@mitmeerut.ac.in
 ```

---

© Promos – Meet Your Customer
