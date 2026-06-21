---
name: Warm & Whimsical Library
colors:
  surface: '#f3faff'
  surface-dim: '#c7dde9'
  surface-bright: '#f3faff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#e6f6ff'
  surface-container: '#dbf1fe'
  surface-container-high: '#d5ecf8'
  surface-container-highest: '#cfe6f2'
  on-surface: '#071e27'
  on-surface-variant: '#414751'
  inverse-surface: '#1e333c'
  inverse-on-surface: '#dff4ff'
  outline: '#717783'
  outline-variant: '#c1c7d3'
  surface-tint: '#0060ac'
  primary: '#005da7'
  on-primary: '#ffffff'
  primary-container: '#2976c7'
  on-primary-container: '#fdfcff'
  inverse-primary: '#a4c9ff'
  secondary: '#835500'
  on-secondary: '#ffffff'
  secondary-container: '#feae2c'
  on-secondary-container: '#6b4500'
  tertiary: '#336366'
  on-tertiary: '#ffffff'
  tertiary-container: '#4c7c7f'
  on-tertiary-container: '#f2ffff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#a4c9ff'
  on-primary-fixed: '#001c39'
  on-primary-fixed-variant: '#004883'
  secondary-fixed: '#ffddb4'
  secondary-fixed-dim: '#ffb955'
  on-secondary-fixed: '#291800'
  on-secondary-fixed-variant: '#633f00'
  tertiary-fixed: '#b9ecee'
  tertiary-fixed-dim: '#9ecfd1'
  on-tertiary-fixed: '#002021'
  on-tertiary-fixed-variant: '#1a4e50'
  background: '#f3faff'
  on-background: '#071e27'
  surface-variant: '#cfe6f2'
  step-blue: '#4A90E2'
  warm-orange: '#F5A623'
  background-cream: '#FDFCF0'
  status-available: '#4CAF50'
  status-loaned: '#E57373'
  surface-soft: '#F4F7FB'
typography:
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-padding-mobile: 1.25rem
  container-padding-desktop: 2.5rem
  gutter: 1rem
  stack-sm: 0.5rem
  stack-md: 1.5rem
  stack-lg: 2.5rem
---

## Brand & Style

The design system is built for a demographic that values both discovery and comfort. The brand personality is **Friendly, Inviting, and Energetic**, acting as a supportive companion to a teenager's literary journey. 

The aesthetic direction follows a **Modern Minimalism with Warm Illustrative Touches**. It prioritizes high readability and functional clarity while softening the digital experience through generous whitespace and organic shapes. The interface should feel less like a rigid database and more like a cozy, well-lit reading nook. Interaction patterns are tactile and responsive, providing immediate visual feedback that feels rewarding to the touch.

## Colors

The palette centers on "Step Blue" for primary actions and "Warm Orange" for energetic highlights and secondary interactions. To maintain a "cozy" feel, the background is a very soft off-white/cream rather than pure white, reducing eye strain during long reading sessions.

- **Primary (Step Blue):** Used for main navigation, "Loan" buttons, and primary active states.
- **Secondary (Warm Orange):** Used for "Bookmark" actions, featured recommendations, and "Popular" tags.
- **Tertiary:** A soft pastel mint used for subtle background containers and secondary labels.
- **Status Colors:** Softened greens and reds are used for "Available" and "Loaned" badges to maintain accessibility without appearing overly clinical or alarming.

## Typography

This design system utilizes **Plus Jakarta Sans** for headings and labels to provide a modern, friendly geometric feel. For the primary reading experience (book summaries and details), **Be Vietnam Pro** is used due to its exceptional legibility and warm, contemporary tone.

Large headlines should be bold and impactful to guide the user through different sections. Body text uses a generous 1.5–1.6 line-height to ensure that book summaries remain inviting and easy to digest on mobile screens.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a mobile-first philosophy. Content is organized in a single-column stack for mobile, transitioning to a flexible multi-column grid for tablets and desktops.

- **Mobile:** 4-column grid, 20px margins, 16px gutters.
- **Desktop:** 12-column grid, centered with a max-width of 1200px.
- **Rhythm:** An 8px-based spacing scale is used to maintain vertical consistency. Generous padding (stack-md or stack-lg) is used between major sections (e.g., "Recommended" vs "Popular") to create visual breathing room.

## Elevation & Depth

To align with the friendly and modern aesthetic, depth is created using **Tonal Layers** and **Ambient Shadows**. 

Avoid harsh, high-contrast shadows. Instead, use soft, diffused shadows with a slight blue or orange tint (matching the primary/secondary colors) to make elements like "Book Cards" appear as though they are gently floating above the surface. 

Background surfaces use subtle color shifts (e.g., `surface-soft`) rather than heavy borders to differentiate content blocks. Interactive elements like buttons should use a slightly more pronounced shadow on hover/active states to provide a tactile "pressable" feel.

## Shapes

The shape language is defined by **Rounded (0.5rem / 8px base)** corners to evoke friendliness and safety. 

- **Standard Elements (Inputs, Buttons):** 8px (0.5rem)
- **Book Cards & Large Containers:** 16px (1rem)
- **Badges & Chips:** 24px+ (Pill-shaped)

The use of 16px corners for book cards is essential to soften the visual impact of book cover imagery, making the library feel more like a modern gallery.

## Components

### Book Cards
The cornerstone of the UI. Cards must feature a high-aspect-ratio container for book covers with a `rounded-lg` (16px) corner radius. The status badge (Available/Loaned) should be positioned in the top-right corner of the image.

### Buttons
- **Primary (Loan):** Solid "Step Blue" fill with white text. High tactile feedback on tap.
- **Secondary (Bookmark):** Outline or soft-tinted "Warm Orange" background. Use a heart or ribbon icon.
- **Action Size:** Buttons should be at least 48px in height for mobile tap-friendliness.

### Chips & Status Badges
Status indicators for genres or availability should be pill-shaped. Use low-saturation background tints of the status color with high-saturation text for readability.

### Input Fields
Search bars and form inputs use the `surface-soft` background with a subtle `Step Blue` border on focus. Icons (like search or mail) should be used to provide visual cues for teenagers who scan rather than read UI labels.

### Lists
For search results, use horizontal list items that maintain the rounded cover image on the left, with title and status stacked on the right for efficient scanning.
