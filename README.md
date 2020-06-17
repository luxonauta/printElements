# printElements

> a JS library to print content from HTML pages as a document.

## :monocle_face: What does it do?

With this JS library, you select the tags of your HTML files that you want the PDF or simple print to be generated.

In addition to the tags that **will not be printed** according to a specific class, more details below :wink:.

## Quick Start

### CDN

You can use printElements by CDN, provided by the :mechanical_arm:[jsDeliver](https://www.jsdelivr.com/?docs=gh) service, below:

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/aqazix/printElements@latest/dist/printElements.min.css">

<script src="https://cdn.jsdelivr.net/gh/aqazix/printElements@latest/dist/printElements.min.js"></script>
```

### By Download

You can also download minified files from the [``dist/``](https://github.com/pedrorrd-sousa/printElements/tree/master/dist) folder and include them in your HTML with a link and script.

#### :receipt: How to set up and use

To use it, the content to be printed needs to be encapsulated in the first ``<main>`` tag.

Then, in your script, the function ``printElements(options.json)`` needs to be called in the appropriate event and the path to a **options.json** (relative to the document calling the function) is passed as parameter.

```
<head>
    <link rel="stylesheet" href="printElements.min.css">
<head>
<body>
    <main>
        Content
    </main>

    <script src="printElements.min.js"></script>
    <script>
        document.querySelector("#myBtn").addEventListener("click", () => {
            printElements(options.json);
        });
    </script>
<body>
```

In the ``options.json`` file you should declare a few things:

 - **Targets** - The relative paths to the pages to be included in the print function.
 - **Tags** - An array of the tags to be printed (Ex: ``h1``, ``h2``, ``h3``, ``p``, ``li``, **etc**.).
 - **willNotPrint** - A class selector that will exclude elements in the function (Ex: ``.not-print``).

A basic example of what an **options.json** file should look like can be seen below:

```
{
    "targets" : [
        "index.html",
        "pages/page2.html",
        "../page3.html"
    ],
    "tags" : [
        "h1",
        "h3",
        "p",
        "li",
        "span"
    ],
    "willNotPrint" : ".not-print"
}
```

#### Contributing

Soon we will be adding a contribution file :shipit:, with some rules to direct and facilitate the development of the library, for everyone who wants to help and be involved. :vulcan_salute:

#### Copyright and License

Copyright (c) 2020 [Lucas de França](https://github.com/luxonauta) | [Pedro Renato Rodrigues de Sousa](https://github.com/aqazix). Code released under the [MIT license](https://github.com/aqazix/printElements/blob/master/LICENSE).
