# printElements

> a JS library to print content from HTML pages as a document.

See the documentation site [here](https://luxonauta.github.io/printElementsDocs/).

## :monocle_face: What does it do?

This JS library, allow to select the HTML files tags to be transformed into a PDF, for printing or not.

Also, the tags that not will be included according to a specific class; see more details below. :wink:.

## Quick Start

### CDN

To use printElements by CDN, copy the code with the CDN provided by the :mechanical_arm:[jsDeliver](https://www.jsdelivr.com/?docs=gh) service, below:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/aqazix/printElements@latest/dist/printElements.min.css">

<script src="https://cdn.jsdelivr.net/gh/aqazix/printElements@latest/dist/printElements.min.js" crossorigin="anonymous"></script>
```

### By Download

Download the minified files from the [``dist/``](https://github.com/pedrorrd-sousa/printElements/tree/master/dist) folder and include them in the HTML with a link and script.

#### :receipt: How to set up and use

To use it, the content to be printed needs to be encapsulated in the first ``<main>`` tag.

Then, in your script, call the function ``printElements(options)`` and pass an object as a parameter, with the options that suit your project.

```html
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/luxonauta/printElements@latest/dist/printElements.min.css">
<head>
<body>
    <main>
        <h1>My Content!</h1>
    </main>

    <script src="https://cdn.jsdelivr.net/gh/luxonauta/printElements@latest/dist/printElements.min.js" crossorigin="anonymous"></script>
    <script defer="true">
        const options = {
            "targets": [
                "index.html",
                "pages/page-2.html",
                "../page-3.html"
            ],
            "tags": [
                "h1",
                "h2",
                "h3",
                "p",
                "li",
                "span"
            ],
            "willNotPrint": "not-print"
        };

        document.querySelector("#myBtn").addEventListener("click", () => {
            printElements(options);
        });
    </script>
<body>
```

In this object, should be declared a few things:

 - **Targets** - The relative paths to the pages to be included in the print function.
 - **Tags** - An array of the tags to be printed (Ex: ``h1``, ``h2``, ``h3``, ``p``, ``li``).
 - **willNotPrint** - A class selector that will exclude elements in the function (Ex: ``.not-print``).

#### Copyright and License

Copyright (c) 2021 [Lucas de França](https://github.com/luxonauta) | [Pedro Renato Rodrigues de Sousa](https://github.com/aqazix). Code released under the [MIT license](https://github.com/luxonauta/printElements/blob/master/LICENSE).
