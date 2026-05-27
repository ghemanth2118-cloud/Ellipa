# Ellipa Platform — Product Requirements Document (Testing Edition)

> **Version:** 1.0  
> **Project:** Ellipa — Enterprise Automation Platform  
> **Stack:** React + Vite + TailwindCSS + Firebase (Auth + Firestore) + React Router + Framer Motion  
> **Base URL (Local Dev):** `http://localhost:5173`  
> **Test Framework Target:** TestSprite

---

## 1. Application Overview

Ellipa is a B2B SaaS landing-and-dashboard product for an enterprise automation platform. It offers:

- A **public marketing site** (Home, Pricing, Process, Solutions, Enterprise)
- **User authentication** (Sign Up and Sign In via email/password or Google OAuth, powered by Firebase Auth)
- A **private dashboard** (accessible only after authentication) with personalized greetings, KPI stats, sandbox simulation, and a "Book a Demo" modal
- **Firestore integration** — demo booking form submissions are stored in the `bookings` collection

---

## 2. Routes & Pages

| Route | Page Component | Auth Required | Description |
|---|---|---|---|
| `/` | `Index.jsx` | No | Home / Hero landing page |
| `/pricing` | `Pricing.jsx` | No | Pricing tiers (Starter, Professional, Enterprise) |
| `/process` | `Process.jsx` | No | How Ellipa works — process overview |
| `/solutions` | `Solutions.jsx` | No | Platform solutions overview |
| `/enterprise` | `Enterprise.jsx` | No | Enterprise-specific features and CTA |
| `/signin` | `Signin.jsx` | No | Email+password sign-in, Google sign-in |
| `/signup` | `Signup.jsx` | No | Account registration (email+password or Google) |
| `/dashboard` | `Dashboard.jsx` | Yes (redirects if unauth) | Authenticated user workspace |

---

## 3. Key User Flows

### 3.1 User Registration (Sign Up)
1. Navigate to `/signup`
2. Optionally sign up with Google (OAuth popup)
3. Or fill in: **Name**, **Work Email**, **Password**
4. Submit form → Firebase `createUserWithEmailAndPassword` is called
5. On success → success screen with "Check your email" + **Continue to Dashboard** button
6. Button navigates user to `/dashboard`

**Test Bypass Hook:** If `email` contains `"autotest"` OR `name` contains `"auto test"` (case-insensitive), the real Firebase call is skipped and success is shown directly.

---

### 3.2 User Sign In
1. Navigate to `/signin`
2. Enter **Email** and **Password**, submit → calls `signInWithEmailAndPassword`
3. On success → redirects to `/dashboard`
4. Optionally sign in with Google → same redirect

**Test Bypass Hook:** If `email === "example@gmail.com"`, Firebase is skipped and the user is redirected to `/dashboard` directly.

---

### 3.3 Dashboard (Authenticated)
1. Authenticated user lands at `/dashboard`
2. **Welcome Banner** shows: `Hello, [DisplayName]` or `Hey! there [email prefix]`
3. **KPI Stats Grid** shows 4 cards: Active Pipelines, Tasks Run, Uptime, API Calls
4. **Quick Actions** row: links to Solutions, Pricing, Process pages; "Book a Demo" button
5. **Sandbox Simulator** — user clicks "Run Sandbox Simulation" → animated log output plays
6. **Sandbox result** shows a sequence of process log lines simulating automation execution

---

### 3.4 Book a Demo (Modal)
1. User is on `/dashboard` and clicks **"Book a Demo"** button
2. A modal opens with form fields: **Name**, **Work Email**, **Company**, **Message**
3. User fills fields and submits
4. Form data is written to Firestore collection `bookings` via `addDoc`
5. On success (or graceful fallback): success state shown with "Request Submitted!" confirmation
6. User closes modal → form resets

---

### 3.5 Navigation (Authenticated State)
- **Navbar** (visible on all pages under `MainLayout`) shows auth-aware UI:
  - **Unauthenticated:** Shows "Sign In" and "Get Started" CTA buttons
  - **Authenticated:** Shows `Hey! there [username]` greeting, **Dashboard** link, and **Log Out** button
- Clicking **Log Out** calls `signOut(auth)` and redirects to `/`

---

## 4. UI Components & Element IDs

### 4.1 Sign In Page (`/signin`)

| Element | HTML ID / Selector | Type |
|---|---|---|
| Email input | `#email` | `<input type="email">` |
| Password input | `#password` | `<input type="password">` |
| Sign In button | `button[type="submit"]` | `<button>` |
| Google Sign In | `button` (contains "Sign in with Google") | `<button type="button">` |
| Error message | `.bg-error-container` | `<div>` |
| Sign Up link | `a[href="/signup"]` | `<Link>` |

### 4.2 Sign Up Page (`/signup`)

| Element | HTML ID / Selector | Type |
|---|---|---|
| Name input | `input[placeholder="Alex Rivera"]` | `<input type="text">` |
| Email input | `input[type="email"]` | `<input type="email">` |
| Password input | `input[type="password"]` | `<input type="password">` |
| Submit button | `button[type="submit"]` | `<button>` |
| Google Sign Up | `button` (contains "Sign up with Google") | `<button type="button">` |
| Error message | `.bg-error-container` | `<div>` |
| Success screen | `h3` (contains "Check your email") | `<h3>` |
| Continue to Dashboard | `button` (contains "Continue to Dashboard") | `<button>` |

### 4.3 Dashboard (`/dashboard`)

| Element | Selector | Description |
|---|---|---|
| Welcome heading | `h1` (contains greeting) | Shows user's name/email |
| Stats grid | `.grid > div` (x4 cards) | KPI stat cards |
| Explore Solutions button | `a[href="/solutions"]` | Quick action link |
| Book a Demo button | `button` (contains "Book a Demo") | Opens modal |
| Run Simulation button | `button` (contains "Run Sandbox") | Starts log animation |
| Simulation log output | `pre` or animated log container | Shows process output |

### 4.4 Book a Demo Modal

| Element | Selector | Description |
|---|---|---|
| Modal container | `.fixed.inset-0` (backdrop) | Full-screen overlay |
| Name input | `input[placeholder*="name"]` | First form field |
| Email input | `input[type="email"]` | Email field |
| Company input | `input[placeholder*="company"]` | Company field |
| Message textarea | `textarea` | Optional message |
| Submit button | `button[type="submit"]` | Submits form |
| Success heading | `h3` (contains "Request Submitted") | Confirmation state |
| Close button | `button[aria-label="Close modal"]` | Closes and resets modal |

---

## 5. Test Credentials

| Type | Value | Expected Behavior |
|---|---|---|
| **Test email (bypass auth)** | `example@gmail.com` | Bypasses Firebase, navigates directly to `/dashboard` |
| **Test signup bypass** | Any email containing `autotest` (e.g. `autotest@company.com`) | Bypasses Firebase, shows success screen |
| **Test signup bypass (name)** | Name = `Auto Test` | Bypasses Firebase, shows success screen |

---

## 6. Test Scope

### 6.1 Public Marketing Pages — Navigation & Rendering

- [ ] Home page (`/`) renders without errors
- [ ] Pricing page (`/pricing`) renders all 3 tiers (Starter, Professional, Enterprise)
- [ ] Process page (`/process`) renders without errors
- [ ] Solutions page (`/solutions`) renders without errors  
- [ ] Enterprise page (`/enterprise`) renders without errors
- [ ] Navbar is visible on all public pages
- [ ] "Sign In" CTA in navbar navigates to `/signin`
- [ ] "Get Started" CTA in navbar navigates to `/signup`

### 6.2 Authentication — Sign In

- [ ] `/signin` page loads and displays email + password fields
- [ ] Submitting `example@gmail.com` with any password bypasses Firebase and navigates to `/dashboard`
- [ ] Submitting with an invalid/wrong password shows an error message in `.bg-error-container`
- [ ] Submitting with an empty email field triggers HTML5 validation
- [ ] Google Sign In button is visible and clickable
- [ ] "Request Access" link navigates to `/signup`

### 6.3 Authentication — Sign Up

- [ ] `/signup` page loads with Name, Email, Password fields
- [ ] Submitting with email `autotest@company.com` shows "Check your email" success screen
- [ ] "Continue to Dashboard" button on success screen navigates to `/dashboard`
- [ ] Submitting an empty email triggers HTML5 required validation
- [ ] Submitting with existing email triggers a Firebase error shown in error container
- [ ] Google Sign Up button is visible and clickable
- [ ] "Log In" link navigates to `/signin`

### 6.4 Dashboard — Authenticated State

- [ ] Unauthenticated user navigating to `/dashboard` is redirected (or sees a loading/redirect state)
- [ ] Authenticated user sees a personalized welcome: heading contains their name or email prefix
- [ ] 4 KPI stat cards are visible in the stats grid
- [ ] "Explore Solutions" button is visible and links to `/solutions`
- [ ] "Book a Demo" button is visible and functional
- [ ] Clicking "Run Sandbox Simulation" starts the simulation log animation
- [ ] Log output appears progressively after clicking Run

### 6.5 Book a Demo Modal

- [ ] Clicking "Book a Demo" on the dashboard opens the modal overlay
- [ ] Modal contains fields: Name, Work Email, Company, Message
- [ ] Submitting the form with all fields filled shows "Request Submitted!" success state
- [ ] Success state shows the submitted name and email in the confirmation text
- [ ] Closing the modal resets the form back to empty state
- [ ] Clicking outside the modal (backdrop) closes the modal

### 6.6 Navbar — Auth-Aware State

- [ ] Before login: "Sign In" and "Get Started" buttons are visible in the navbar
- [ ] After login: `Hey! there [username]` greeting appears in the navbar
- [ ] After login: "Dashboard" and "Log Out" buttons are visible
- [ ] Clicking "Log Out" signs the user out and redirects to `/`

### 6.7 Pricing Page

- [ ] Three pricing tier cards visible: Starter ($499), Professional ($1,299), Enterprise (Custom)
- [ ] "Choose Starter" button links to `/signup?plan=starter`
- [ ] "Start Professional Trial" button links to `/signup?plan=professional`
- [ ] "Contact Sales" button on Enterprise tier links to `/enterprise`
- [ ] Comparison table visible with Feature/Starter/Professional/Enterprise columns
- [ ] "Get Started Now" CTA at bottom links to `/signup`

---

## 7. Non-Functional Requirements (for QA reference)

| Requirement | Details |
|---|---|
| **Responsiveness** | All pages must render correctly at 1440px (desktop), 768px (tablet), 375px (mobile) |
| **Error Handling** | Firebase auth errors are caught and displayed. Firestore errors fallback gracefully (modal still shows success) |
| **Loading States** | Sign In and Sign Up buttons show "Signing In..." / "Creating Account..." while processing |
| **Animations** | Dashboard welcome banner and stat cards animate in on mount (Framer Motion) |
| **3D Viewer** | Spline viewer (`<spline-viewer>`) embedded on Home, Solutions, and Enterprise pages — should not block page render |

---

## 8. Firestore Data Schema

### Collection: `bookings`

| Field | Type | Description |
|---|---|---|
| `name` | `string` | Full name from modal form |
| `email` | `string` | Work email from modal form |
| `company` | `string` | Company name from modal form |
| `message` | `string` | Optional message from modal form |
| `timestamp` | `Timestamp` | Server-side creation timestamp |

---

## 9. File Structure (Production Files)

```
src/
├── App.jsx                    # Routes: / /pricing /process /solutions /enterprise /dashboard /signin /signup
├── firebase.js                # Firebase init: auth, googleProvider, db (Firestore)
├── main.jsx                   # React entry point
├── index.css                  # Global Tailwind + design tokens
├── layouts/
│   └── MainLayout.jsx         # Shared layout: Navbar + Outlet + Footer
├── components/
│   ├── Navbar.jsx             # Auth-aware navigation (onAuthStateChanged)
│   ├── Footer.jsx             # Site footer
│   ├── BookDemoModal.jsx      # Demo booking modal with Firestore write
│   └── ScrollVelocity.jsx     # Animated marquee ticker (company logos)
└── pages/
    ├── Index.jsx              # Homepage with Spline viewer + ScrollVelocity
    ├── Pricing.jsx            # Pricing tiers + comparison table
    ├── Process.jsx            # How it works page
    ├── Solutions.jsx          # Solutions overview + Spline viewer
    ├── Enterprise.jsx         # Enterprise features + Spline viewer
    ├── Signin.jsx             # Login form (Firebase Auth + bypass hook)
    ├── Signup.jsx             # Registration form (Firebase Auth + bypass hook)
    └── Dashboard.jsx          # Authenticated dashboard + BookDemoModal + Sandbox Simulator
```

---

## 10. Out of Scope for Testing

- Google OAuth popup (requires browser-level interception; use bypass hooks instead)
- Actual Firestore write verification (network-dependent; treat modal success state as acceptance)
- Spline 3D viewer internal interactions (third-party embedded content)
- Password reset flow (no reset page exists currently)
- Privacy Policy, Terms of Service, Security, Status pages (routes linked in footer but pages not yet built)
