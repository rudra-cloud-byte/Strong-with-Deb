# Strong with Deb — Functional Strength & Running Coach
### Personal Portfolio & 1-on-1 Online Coaching Hub

A clean, light-pink themed personal coaching portfolio built for **Deb** — mum of two, 11-time marathoner (including Boston & Sydney 2026), 4-time ultramarathoner, CrossFit enthusiast, and online coach.

---

## 🔒 Security CAPTCHA Verification Gate (On Page Open)

- **Cloudflare Turnstile / reCAPTCHA Style Checkbox**: When visitors open the website, an anti-bot security modal appears with an interactive "I am not a robot" checkbox.
- **Visual Feedback & Audio Chime**: Clicking the checkbox plays an authentic spinner, displays a green verified checkmark, chimes a subtle confirmation tone, and smoothly unlocks the website.
- **Alternative Text Code Challenge**: Includes an expandable 4-character distorted canvas CAPTCHA code with refresh support and shake animation for wrong entries.
- **Session Intelligence**: Passed verification is stored in `sessionStorage` so visitors aren't interrupted while browsing; includes a "🔒 Security" button in the footer to re-test the gate anytime.

---

## ⚡ Mobile & Tablet Optimized Design

1. **Responsive Header with Mobile Hamburger Menu**:
   - On desktop, full navigation links are displayed.
   - On phones and tablets, a compact header with a clean hamburger toggle opens a smooth accordion menu to jump to any section.
2. **Fixed Bottom Quick-Action Bar (Mobile Only)**:
   - Thumb-friendly quick bar on smartphones providing 1-tap access to **Programs**, **WhatsApp**, and **Gmail**.
3. **Touchscreen Performance & Polish**:
   - Cursor glow follower automatically deactivates on touchscreens to save mobile battery and avoid lag.
   - Form inputs set to `16px` (`text-base`) to prevent iOS Safari auto-zooming.
   - Touch active feedback (`:active { transform: scale(0.985); }`) instead of sticky desktop hovers.
   - Tablet-optimized column layout (`grid-cols-1 lg:grid-cols-3` and `grid-cols-1 md:grid-cols-3`) to give cards plenty of breathing room on iPads and Android tablets.

---

## ⚡ Scannable, Bite-Sized Content Layout

1. **Brand Emblem**: Sleek, modern Red "D" Dumbbell emblem (bold red capital "D" integrated with a horizontal white dumbbell passing through its core) in the header, footer, and CAPTCHA modal — matching the requested brand identity.
2. **Hero**: Quick punchy headline, 3 feature chips (Live Form Corrections, Beginner-Friendly & Encouraging, Step-by-Step Guidance), and 4 milestone counters including 11 Full Marathons & 4 Ultramarathons.
3. **4-Card Story Snapshot**: Deb's journey broken into 4 bite-sized visual cards (How It Started, From 5K to 11 Marathons & 4 Ultras, CrossFit Strength, 2026 Boston & Sydney).
4. **Why 1-on-1 Online with Deb**: 4 quick pillar cards (Live Eyes on Your Form, Busy-Life Flexibility, Train Safely & Move Well, Zero Judgment).
5. **The 3 Signature Programs**:
   - **Online Functional Strength Training (One-on-One)**: Highlighted as **"BEGINNER FAVORITE"**, 6 weeks, 2 sessions/week (12 live sessions total, ~55 mins each) at $250.
   - **Couch to 5K**: 12 weeks, personalized 12-week running plan + 1 live strength session per week at $300.
   - **Couch to 10K**: 12 weeks, structured progression + leg/core strength plan at $350.
6. **Direct Gmail & WhatsApp Integration**:
   - Every email button directly launches **Gmail Compose** in a browser tab with Deb's address (`ghosh.debashreea@gmail.com`) and pre-filled subjects/messages.
   - Quick Message form has both **Send via WhatsApp** and **Send via Gmail**.
   - Instagram linked to `@deb.ultrarunner`.
7. **Quick FAQs**: Fast accordion answers for equipment, 1-on-1 video format, and beginner safety.
