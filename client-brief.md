# Client Brief — California Dental

## Site Info
- Live URL: https://www.california-dental.net
- Platform/CMS: Officite (Healthcare-specialized SaaS site builder by MH Sub I, LLC dba Officite / Henry Schein One)
- Backend language/framework: Officite SaaS Platform [confirm]

## Backend Touchpoints to Preserve
### Dynamic Lead Forms
All forms on the site are dynamically injected via client-side JavaScript from `smbleads.ibsmb.com` using a unique hash identifier. They submit via `POST` to the SMB leads endpoint. These scripts and divs must be preserved exactly to ensure form submissions continue functioning.

1. **Contact Us Form ("Send Us an Email")**
   - **Pages present on**: `/contact`, `/ourteam`
   - **Render Script**: `https://smbleads.ibsmb.com/v1/leads/create_form/V8aCEXX2jQ3eucsnZYTpS0LL`
   - **Submission URL**: `https://smbleads.ibsmb.com/v1/leads/V8aCEXX2jQ3eucsnZYTpS0LL`
   - **Fields**:
     - `name` (type: `text`, Required, help text: "Enter your name (Required)")
     - `email` (type: `email`, Required, help text: "Enter email (Required)")
     - `phone` (type: `tel`, Required, help text: "(XXX)XXX-XXXX (Required)")
     - `comments` (type: `textarea`, Optional, help text: "Notes to the Doctor")
     - `__lf_ref_name` (type: `text`, hidden spam honeypot)
     - `__lf_title_name` (type: `text`, hidden spam honeypot)

2. **Appointment Request Form ("Create an Appointment")**
   - **Pages present on**: `/appointment`
   - **Render Script**: `https://smbleads.ibsmb.com/v1/leads/create_form/fsK6307EgcDh80ZkYFhXBpnM`
   - **Submission URL**: `https://smbleads.ibsmb.com/v1/leads/fsK6307EgcDh80ZkYFhXBpnM`
   - **Fields**:
     - `name` (type: `text`, Required, help text: "Enter your name (Required)")
     - `email` (type: `email`, Required, help text: "Enter email (Required)")
     - `phone` (type: `tel`, Required, help text: "(XXX)XXX-XXXX (Required)")
     - `preferred_date` (type: `text`/`date`, Optional, help text: "Select Date")
     - `preferred_time` (type: `select`, Optional, help text: "Select Time", dynamically populated from business hours)
     - `comments` (type: `textarea`, Optional, help text: "Notes to the Doctor")
     - `__lf_ref_name` (type: `text`, hidden spam honeypot)
     - `__lf_title_name` (type: `text`, hidden spam honeypot)

3. **Exclusive Offer Form**
   - **Pages present on**: Home Page (`/`)
   - **Render Script**: `https://smbleads.ibsmb.com/v1/leads/create_form/XiukwB3B53wkd9IB0191RUkz`
   - **Submission URL**: `https://smbleads.ibsmb.com/v1/leads/XiukwB3B53wkd9IB0191RUkz`
   - **Fields**:
     - `name` (type: `text`, Required, help text: "Enter your name (Required)")
     - `email` (type: `email`, Required, help text: "Enter email (Required)")
     - `phone` (type: `tel`, Required, help text: "(XXX)XXX-XXXX (Required)")
     - `__lf_ref_name` (type: `text`, hidden spam honeypot)
     - `__lf_title_name` (type: `text`, hidden spam honeypot)

4. **Newsletter Signup Form**
   - **Pages present on**: Home Page (`/`)
   - **Render Script**: `https://smbleads.ibsmb.com/v1/leads/create_form/oRjpwZ4V-VG8kmw9dpuXISnG`
   - **Submission URL**: `https://smbleads.ibsmb.com/v1/leads/oRjpwZ4V-VG8kmw9dpuXISnG`
   - **Fields**:
     - `name` (type: `text`, Required, help text: "Enter your name (Required)")
     - `email` (type: `email`, Required, help text: "Enter email (Required)")
     - `phone` (type: `tel`, Required, help text: "(XXX)XXX-XXXX (Required)")
     - `__lf_ref_name` (type: `text`, hidden spam honeypot)
     - `__lf_title_name` (type: `text`, hidden spam honeypot)

### Analytics, Trackers, and Spam Protection
- **Google Analytics ID**: `G-EQH496LMM2` (configured via Global Site Tag / GTM: `https://www.googletagmanager.com/gtag/js?id=G-EQH496LMM2`)
- **Officite Call Tracking (Number Replacer)**:
  - Script: `https://apps.officite.com/js/smb-number-changer.js`
  - Rewrite Config: `_ctRewriteUrl = "https://apps.officite.com/CallTracking/RewriteRule/clientId/120095";`
- **SMB Leads Campaign Tracker**:
  - Script: `https://smbleads.ibsmb.com/v1/js/CampaignTracker.min.js`
- **Google reCAPTCHA**:
  - Site Key: `6LefJjArAAAAACeGc1HRyo3RQkV0Jx7Jua7Bylkk`
- **Cloudflare Web Analytics**:
  - Script: `https://static.cloudflareinsights.com/beacon.min.js` (Token: `824d5838503a4dd0adf602fb974a7e1a`)
- **Piwik / Matomo Ignored Links Logic**:
  - Script loader logic exists on the window load to add `piwik_ignore` classes to `tel:` and `fax:` links.

### Third-Party Embeds and Portals
- **Google Maps Embed**:
  - Location: Footer/Contact block on `/`, `/ourteam`, `/contact`, `/appointment`
  - HTML Iframe src: `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d824.0828776774114!2d-118.4300225!3d34.2910951!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c291c8bfd76b0b%3A0x4c433f9871789709!2s1009+Glenoaks+Blvd%2C+San+Fernando%2C+CA+91340!5e0!3m2!1sen!2sus!4v1565294924444!5m2!1sen!2sus`
- **Patient Admin Portal Login Link** (Footer):
  - URL: `https://secure.officite.com`
- **Officite Accessibility View Toolbar**:
  - HTML modal/toolbar injected inside the body that appends `?ada_mode=1` to toggle accessibility styling options.

## Brand
- Primary color: `#3bb6b4` (Teal / Turquoise, defined as CSS custom property `--color2` in theme `:root`)
- Accent color: `#94d3d2` (Light Teal / Aquamarine, defined as CSS custom property `--color4` in theme `:root`) [confirm]
- Fonts:
  - Headings / Accents: `Merriweather` (fallback: `"Arial Black", Arial, Helvetica, sans-serif`)
  - Body: `Arial, Helvetica, sans-serif` [confirm]
- Logo file location: `https://cdcssl.ibsrv.net/ibimg/smb/396x150_80/webmgr/0v/0/l/cali-logo1.jpg.webp?b8991b224cc1a1da1626f5af4415e0e5` (CMS media library location: `/storage/app/media/cali-logo1.jpg`)
- Tone/personality: Professional, welcoming, family-oriented, trust-worthy local dental healthcare provider [confirm]

## Scope for This Project
- Pages included in redesign: Homepage only (Default)
- Pages explicitly excluded: All other pages, including:
  - `/ourteam` (About Us)
  - `/dental-services` (Services)
  - `/our-location` (Office)
  - `/contact` (Contact Us)
  - `/appointment` (Appointment Request)
  - `/new-patients`
  - `/testimonials`
  - `/articles/general` (Patient Education Library & subcategories)
  - `/sitemap`

## Deadline / Priority Order
- [fill in later]
