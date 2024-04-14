# printElements

> A JavaScript library to easily print content from web pages.

## Motivation

Creating a print-ready PDF from web content can be tricky and time-consuming. This library simplifies the process, allowing you to print only the content you need with minimal fuss.

## Features

- Select specific HTML tags for printing;
- Exclude elements with a designated class from the print output.

## Quick Start

### Via CDN

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/luxonauta/printElements@latest/dist/printElements.min.css"
/>

<script
  src="https://cdn.jsdelivr.net/gh/luxonauta/printElements@latest/dist/printElements.min.js"
  crossorigin="anonymous"
/>
```

Or download it directly from the [GitHub repository](https://github.com/luxonauta/printElements/tree/master/dist).

## Usage

Wrap the content to be printed within a `<main>` tag. Then call `printElements(options)` with your specified options:

```html
<!doctype html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="path/to/printElements.min.css" />
  </head>
  <body>
    <main>
      <h1>Your Content Here</h1>
      <!-- Additional content -->
    </main>
    <script src="path/to/printElements.min.js"></script>
    <script>
      document.addEventListener("DOMContentLoaded", () => {
        const printOptions = {
          targets: ["index.html"],
          tags: ["h1", "p", "li"],
          willNotPrint: "exclude"
        };

        document.getElementById("printBtn").onclick = () =>
          printElements(printOptions);
      });
    </script>
  </body>
</html>
```

- `willNotPrint`: Apply the class `"exclude"` to any HTML element to prevent it from being printed.

### License

Released under the [MIT License](/license.md). You are free to use and modify it for your projects.
