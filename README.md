# CONQUEREDSELF Landing Page

CONQUEREDSELF is a responsive landing page for a self-mastery and personal growth app. The page is designed around a 49-day journey concept, combining ancient wisdom, modern discipline, guided practices, progress tracking, testimonials, FAQs, and app download call-to-actions.

## Live Preview

Open the `index.html` file directly in your browser, or upload the project files to any static hosting/server environment.

## Project Overview

This project includes a complete one-page landing page with smooth section-based navigation and responsive layouts for desktop, tablet, and mobile screens.

Main sections included:

- Header with desktop and mobile navigation
- Hero/banner section
- Counter/statistics section
- Choose Your Path section
- Process/steps section
- Feature grid
- App showcase section
- Testimonials slider
- FAQ accordion
- CTA section
- Footer

## Technologies Used

- HTML5
- CSS3
- Tailwind CSS CDN
- DaisyUI CDN
- Font Awesome Icons
- Swiper.js
- Custom JavaScript
- Responsive design with utility-based styling

## Project Structure

```bash
CONQUEREDSELF/
│
├── index.html
├── css/
│   └── style.css
│
├── js/
│   └── app.js
│
├── assets/
│   ├── icon/
│   │   └── favicon.png
│   │
│   └── images/
│       └── project images and decorative assets
│
└── README.md
```

## Features

### Responsive Design

The landing page is fully responsive and optimized for mobile, tablet, and desktop screen sizes.

### Smooth Navigation

Navigation links are connected with page sections using anchor links. Users can easily move to sections like Why 49 Days, Features, For Whom, Reviews, FAQ, and App Showcase.

### Mobile Menu

The project includes a mobile-friendly navigation menu with a toggle button for smaller screens.

### App Showcase

The page includes a dedicated app showcase section with App Store and Google Play button placements.

### Testimonial Slider

The reviews section uses Swiper.js to display testimonial cards in a clean and interactive slider format.

### FAQ Accordion

The FAQ section includes collapsible question-and-answer items for a better user experience.

### Visual Design

The page uses warm colors, gradient borders, decorative overlays, custom imagery, and a calm spiritual/self-development style.

## External Libraries

The project uses the following CDN-based libraries:

### DaisyUI

```html
<link
  href="https://cdn.jsdelivr.net/npm/daisyui@5"
  rel="stylesheet"
  type="text/css"
/>
```

### Tailwind CSS Browser CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

### Font Awesome

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
/>
```

### Swiper.js

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css"
/>

<script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>
```

## How to Run the Project

1. Download or clone the project files.
2. Keep the folder structure unchanged.
3. Open `index.html` in your browser.
4. Make sure the `assets`, `css`, and `js` folders are in the correct location.

## How to Edit Content

Most of the page content can be edited directly from the `index.html` file.

Common editable items:

- Logo image
- Hero title and description
- Navigation links
- Button text and links
- Counter numbers
- Path/card images
- Feature text
- Testimonials
- FAQ questions and answers
- Footer links and copyright text

## How to Update Images

All images are stored inside the `assets/images/` folder.

To replace an image:

1. Add the new image inside `assets/images/`.
2. Use the same filename to replace the existing image, or update the image path inside `index.html`.
3. Keep image formats optimized for web, such as `.webp`, `.png`, or `.jpg`.

## JavaScript Functionality

The custom JavaScript file is located here:

```bash
js/app.js
```

This file can be used for:

- Mobile menu toggle
- Header behavior
- FAQ accordion
- Swiper testimonial slider initialization
- Other interactive features

## Custom Styles

The main stylesheet is located here:

```bash
css/style.css
```

Use this file for:

- Custom fonts
- Global styles
- Animation tweaks
- Additional responsive adjustments
- Any design fixes that are not handled directly in the HTML utility classes

## Deployment

This is a static HTML project, so it can be deployed on:

- Netlify
- Vercel
- GitHub Pages
- cPanel hosting
- Any standard web hosting server

For deployment, upload the full project folder while keeping the same file structure.

## Browser Support

The page should work properly on modern browsers including:

- Google Chrome
- Mozilla Firefox
- Safari
- Microsoft Edge

## Notes

- The project uses CDN dependencies, so an internet connection is required for Tailwind CSS, DaisyUI, Font Awesome, and Swiper.js to load properly.
- If CDN loading is disabled or unavailable, the design or interactive elements may not display correctly.
- Before final delivery, replace all placeholder links such as `#` with actual app store, policy, or page URLs.

## Author

Designed and developed by Creative Wisdom.
