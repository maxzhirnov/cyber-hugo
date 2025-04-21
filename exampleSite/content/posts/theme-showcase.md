---
title: "Theme showcase"
date: 2025-04-20T12:02:00+00:00
tags: ["theme", "demo", "cyberpunk"]
---

# Showcasing Cyber Hugo Theme Features

Welcome to the Cyber Hugo theme - a neon-drenched, retro-futuristic experience for your Hugo website. This page demonstrates the key features and capabilities that make this theme stand out.

## Cyberpunk Design Elements

The Cyber Hugo theme brings the dystopian future to your content with carefully crafted design elements:

### Neon Glow Effects

Every container, button, and interactive element features authentic neon glow effects that respond to user interaction. Notice how elements subtly pulse and glow when you hover over them, creating an immersive cyberpunk experience.

```html

  This container glows with cyberpunk energy

```

### Terminal-Inspired Typography

Text elements use the VT323 monospace font for headings and Roboto Mono for body text, creating an authentic terminal aesthetic while maintaining readability.

### Responsive Dark Mode

The theme is built on a dark foundation with carefully chosen contrast ratios to ensure readability while maintaining the cyberpunk aesthetic across all device sizes.

## Content Presentation

### Code Blocks with Style

Code snippets aren't just functional - they're part of the aesthetic. Our theme includes custom-styled code blocks with syntax highlighting, line numbers, and a copy button.

```javascript
function connectToMainframe() {
    console.log("Establishing secure connection...");
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve("ACCESS GRANTED");
        }, 1000);
    });
}
```

{{< code language="javascript" title="Neural Interface Connection" >}}
function connectToMainframe() {
    console.log("Establishing secure connection...");
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve("ACCESS GRANTED");
        }, 1000);
    });
}
{{< /code >}}

### Notice Boxes

Draw attention to important information with styled notice boxes in different variants:

{{< notice type="info" >}}
This is an information notice with important details about the system.
{{< /notice >}}

{{< notice type="warning" >}}
Warning! This action cannot be undone. Proceed with caution.
{{< /notice >}}

{{< notice type="danger" >}}
Critical error detected in the mainframe. Immediate action required.
{{< /notice >}}

{{< notice type="success" >}}
Connection to the neural network established successfully.
{{< /notice >}}

### Styled Buttons

Create eye-catching call-to-action buttons with various styles:

{{< button href="#" text="Primary Action" color="cyan" >}}
{{< button href="#" text="Secondary Action" color="fuchsia" >}}
{{< button href="#" text="Warning Action" color="yellow" >}}
{{< button href="#" text="Success Action" color="lime" >}}

### Enhanced Images

Images receive the cyberpunk treatment with glowing borders, scan line effects, and optional captions:

{{< image src="/images/cyberpunk-city.jpg" alt="Neon City" caption="Night view of Neo-Tokyo" credit="Photo by CyberArtist" >}}

## Navigation & Structure

### Table of Contents

Long-form content automatically generates a collapsible table of contents for easy navigation:

```yaml
---
title: "Deep Dive into Cyberspace"
showToc: true
tocOpen: true
---
```

### Pagination

Navigate through multi-page content with cyberpunk-styled pagination controls that glow and animate on hover.

### Search Functionality

The integrated search feature uses Fuse.js for powerful client-side searching with partial word matching, making it easy for users to find content without leaving the cyberpunk experience.

## Customization Options

### Color Schemes

While the default cyan and fuchsia color scheme captures the classic cyberpunk aesthetic, you can customize the primary and accent colors:

```yaml
params:
  mainColor: "cyan"    # Options: cyan, fuchsia, yellow, lime
  accentColor: "fuchsia"
```

### Content Styling

Individual pages can override the default styling:

```yaml
---
title: "Custom Styled Page"
single_title_color: "text-fuchsia-400"  # Override default title color
single_prose_color: "prose-fuchsia"     # Override default content color
---
```

## Performance Features

### Optimized Assets

The theme uses Tailwind CSS with optimized builds that only include the classes you actually use, resulting in minimal CSS file sizes.

### Fast Search

The client-side search is built with performance in mind, using Lunr.js v2.3.9 for lightning-fast results.

## Getting Started

To use this theme in your own Hugo site:

1. Install the theme using Hugo modules or by cloning the repository
2. Configure your `hugo.yaml` with your site information
3. Create content using the provided shortcodes for enhanced styling
4. Customize the colors and features to match your brand

## Conclusion

The Cyber Hugo theme combines striking visuals with practical functionality, creating an immersive cyberpunk experience without sacrificing usability or performance. Whether you're building a personal blog, portfolio, or documentation site, this theme provides the perfect backdrop for your digital content.

Dive into the neon-lit future of web design with Cyber Hugo!