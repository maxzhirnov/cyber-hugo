# Cyber Hugo Theme

A cyberpunk-inspired Hugo theme with neon aesthetics, glowing elements, and retro-futuristic styling.

> The **[🌐 Live Demo](https://maxzhirnov.github.io/cyber-hugo/)** is automatically updated from the latest main branch.

![screenshot](https://github.com/user-attachments/assets/358cb76c-40f5-4905-b95b-03bf9a612e53)

## Features

- Cyberpunk design with neon glow effects and retro terminal aesthetics
- Responsive layout that works on mobile, tablet, and desktop
- Dark mode by default with carefully crafted color palette
- Built with Tailwind CSS for easy customization
- Client-side search using Lunr.js with partial word matching
- Custom shortcodes for enhanced content presentation:
  - Code blocks with syntax highlighting and copy button
  - Notice boxes with different styles (info, warning, danger, success)
  - Buttons with various colors and sizes
  - Image displays with cyberpunk styling
- Table of contents with collapsible sections
- Pagination for content lists
- Social sharing options
- Customizable header and footer
- SEO optimized

## Installation

### Option 1: As a Hugo Module (recommended)

```bash
# Initialize Hugo module if you haven't already
hugo mod init github.com/yourusername/yoursite

# Edit your config.yaml or config.toml to add the module
# In config.yaml:
module:
  imports:
    - path: github.com/maxzhirnov/cyber-hugo
```

### Option 2: Clone the Repository

```bash
# Clone the repository into your themes directory
git clone https://github.com/maxzhirnov/cyber-hugo.git themes/cyber-hugo

# Edit your config.yaml to use the theme
theme: "cyber-hugo"
```

## Configuration

Here's a sample configuration for your `config.yaml`:

```yaml
baseURL: "https://example.com/"
languageCode: "en-us"
title: "My Cyberpunk Site"
theme: "cyber-hugo"

params:
  # Theme colors
  mainColor: "cyan"  # Options: cyan, fuchsia, yellow, lime
  accentColor: "fuchsia"
  
  # Author information
  author: "Maksim Zhirnov"
  description: "A cyberpunk-themed website built with Hugo"
  
  # Social media links
  social:
    twitter: "yourusername"
    github: "yourusername"
    linkedin: "yourusername"
  
  # Content settings
  mainSections:
    - posts
  
  # Search settings
  showToc: true
  tocOpen: false
  
  # Navigation
  menu:
    main:
      - name: "Home"
        url: "/"
        weight: 1
      - name: "Posts"
        url: "/posts/"
        weight: 2
      - name: "About"
        url: "/about/"
        weight: 3
      - name: "Search"
        url: "/search/"
        weight: 4
```

## Content Management

### Front Matter Options

```yaml
---
title: "My Cyberpunk Post"
date: 2025-04-21T00:00:00+00:00
draft: false
tags: ["cyberpunk", "neon", "future"]
categories: ["technology"]
image: "/images/featured.jpg"
showToc: true
tocOpen: true
single_title_color: "text-fuchsia-400"  # Override default title color
single_prose_color: "prose-fuchsia"     # Override default content color
---
```

### Shortcodes

#### Button Shortcode

```markdown
{{< button href="/contact" text="Contact Me" color="cyan" >}}
{{< button href="#" text="Download" icon="download" color="fuchsia" >}}
{{< button href="#" text="External Link" icon="external" color="yellow" size="lg" >}}
```

#### Notice Shortcode

```markdown
{{< notice type="info" >}}
This is an information notice.
{{< /notice >}}

{{< notice type="warning" title="System Alert" >}}
Warning! This action cannot be undone.
{{< /notice >}}
```

#### Code Shortcode

```markdown
{{< code language="javascript" title="Matrix Connection" >}}
function hackTheMatrix() {
  console.log("Connecting to the mainframe...");
  return "Access granted";
}
{{< /code >}}
```

#### Image Shortcode

```markdown
{{< image src="/images/cyberpunk-city.jpg" alt="Neon City" 
         caption="Night view of Neo-Tokyo" credit="Photo by CyberArtist" >}}
```

## Search Implementation

The theme includes a client-side search implementation using Lunr.js. The search functionality supports:

- Partial word matching (e.g., searching for "prog" will find "programming")
- URL parameter support for sharing search results
- Keyboard navigation
- Highlighting of search terms

To use the search:
1. Create a page at `content/search/_index.md`
2. Make sure your config includes `mainSections` parameter

## Customization

### Tailwind Configuration

The theme uses Tailwind CSS for styling. You can customize the theme by overriding the Tailwind configuration:

1. Create a `tailwind.config.js` file in your site's root directory
2. Extend the theme's configuration with your custom colors and settings

### Custom CSS

Add custom CSS by creating a file at `assets/css/custom.css` and it will be automatically included.

## Credits

- Built with [Hugo](https://gohugo.io/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Search powered by [Lunr.js](https://lunrjs.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Fonts: VT323 and Roboto Mono

## License

This theme is released under the MIT license. See [LICENSE](LICENSE) for details.
