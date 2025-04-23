---
title: "Cyberpunk Theme Shortcodes Showcase"
date: 2025-04-19T10:00:00+00:00
tags: ["theme", "shortcodes", "demo", "cyberpunk"]
single_heading_color: "text-cyber-fuchsia"
single_prose_color: "text-cyber-rose"
---

Welcome to the showcase of custom shortcodes available in the Cyber Hugo theme. These shortcodes extend markdown capabilities and help maintain a consistent cyberpunk aesthetic throughout your site.

<!--more-->

## Button Shortcode

The button shortcode creates styled buttons that match the theme's cyberpunk design.

### Basic Usage
```
{{</* button href="/contact" text="Contact Me" */>}}
```

### Result:

{{< button href="/contact" text="Contact Me" >}}

### Color Variants

```
{{</* button href="#" text="Cyan Button" color="cyan" >}}
{{< button href="#" text="Fuchsia Button" color="fuchsia" >}}
{{< button href="#" text="Yellow Button" color="yellow" >}}
{{< button href="#" text="Lime Button" color="lime" >}}

{{< button href="#" text="Small Button" size="sm" >}}
{{< button href="#" text="Regular Button" >}}
{{< button href="#" text="Large Button" size="lg" >}}

{{< button href="#" text="Next Page" icon="arrow-right" >}}
{{< button href="#" text="Download" icon="download" color="fuchsia" >}}
{{< button href="#" text="External Link" icon="external" color="yellow" */>}}
```

### Result:

{{< button href="#" text="Cyan Button" color="cyan" >}}
{{< button href="#" text="Fuchsia Button" color="fuchsia" >}}
{{< button href="#" text="Yellow Button" color="yellow" >}}
{{< button href="#" text="Lime Button" color="lime" >}}

{{< button href="#" text="Small Button" size="sm" >}}
{{< button href="#" text="Regular Button" >}}
{{< button href="#" text="Large Button" size="lg" >}}

{{< button href="#" text="Next Page" icon="arrow-right" >}}
{{< button href="#" text="Download" icon="download" color="fuchsia" >}}
{{< button href="#" text="External Link" icon="external" color="yellow" >}}

## Notice Shortcode

The notice shortcode displays highlighted information in styled boxes.

### Info Notice

```
{{</* notice type="info" />}}
This is an information notice with important details.
{{</ /notice */>}}
```

### Result:

{{< notice type="info" >}}
This is an information notice with important details.
{{< /notice >}}

### Warning Notice

```
{{</* notice type="warning" />}}
Warning! This action cannot be undone.
{{</ /notice */>}}
```

### Result:

{{< notice type="warning" >}}
Warning! This action cannot be undone.
{{< /notice >}}

### Danger Notice

```
{{</* notice type="danger" />}}
Critical error detected in the mainframe.
{{</ /notice */>}}
```

### Result:

{{< notice type="danger" >}}
Critical error detected in the mainframe.
{{< /notice >}}

### Success Notice

```
{{</* notice type="success" />}}
Connection to the neural network established successfully.
{{</ /notice */>}}
```

### Result:

{{< notice type="success" >}}
Connection to the neural network established successfully.
{{< /notice >}}


## Image Shortcode

The image shortcode displays images with captions and cyberpunk styling.

### Basic Image

```
{{</* image src="/images/cyberpunk-city.jpg" alt="Neon City" */>}}
```

### Image with Caption and Credit

```
{{</* image src="/images/cyberpunk-city.jpg" alt="Neon City"
caption="Night view of Neo-Tokyo" credit="Photo by CyberArtist" */>}}
```

### Result:

{{< image src="/images/cyberpunk-city.jpg" alt="Neon City" 
         caption="Night view of Neo-Tokyo" credit="Photo by CyberArtist" >}}

## Code Shortcode

The code shortcode provides enhanced code blocks with titles and line numbers.

### Basic Code Block

```
{{</* code language="javascript" />}}
function hackTheMatrix() {
console.log("Connecting to the mainframe...");
return "Access granted";
}
{{</ /code */>}}
```

### Result:

{{< code language="javascript" >}}
function hackTheMatrix() {
  console.log("Connecting to the mainframe...");
  return "Access granted";
}
{{< /code >}}

### Code with Title and Line Numbers

```
{{</* code language="css" title="Neon Glow Effect" lineNumbers="true" */>}}
.neon-text {
color: #00ffe7;
text-shadow: 0 0 5px #00ffe7,
0 0 10px #00ffe7,
0 0 20px #00ffe7;
animation: pulse 2s infinite;
}

@keyframes pulse {
0% { opacity: 0.8; }
50% { opacity: 1; }
100% { opacity: 0.8; }
}
{{</* /code */>}}
```

### Result:

{{< code language="css" title="Neon Glow Effect" lineNumbers="true" >}}
.neon-text {
  color: #00ffe7;
  text-shadow: 0 0 5px #00ffe7, 
               0 0 10px #00ffe7, 
               0 0 20px #00ffe7;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 0.8; }
  50% { opacity: 1; }
  100% { opacity: 0.8; }
}
{{< /code >}}

## Combining Shortcodes

Shortcodes can be combined for more complex layouts:

{{< notice type="info" >}}
### Neural Interface Connection

To connect to the neural interface, run:

{{< code language="bash" >}}
sudo neural-connect --user=neo --protocol=secure
{{< /code >}}

Then press {{< button href="#" text="Connect" color="fuchsia" >}} to initiate the handshake.
{{< /notice >}}


## Conclusion

These shortcodes help maintain a consistent cyberpunk aesthetic throughout your site while extending markdown's capabilities. Use them to create visually appealing and interactive content that matches the theme's design.