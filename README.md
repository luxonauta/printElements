# printElements

> a JS library to print content from HTML pages as a document.

You can find it's documentation [here](https://aqazix.github.io/printElementsDocs/)

## :monocle_face: What does it do?

With this JS library, you can select the tags of your HTML files that you want the PDF or Print to be generated.

In addition to the tags that **will not be printed** according to a specific class, more details below :wink:.

## Quick Start

### CDN

You can use printElements by CDN, provided by the :mechanical_arm:[jsDeliver](https://www.jsdelivr.com/?docs=gh) service, below:

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/aqazix/printElements@latest/dist/printElements.min.css">

<script src="https://cdn.jsdelivr.net/gh/aqazix/printElements@latest/dist/printElements.min.js" crossorigin="anonymous"></script>
```

### By Download

You can also download minified files from the [``dist/``](https://github.com/pedrorrd-sousa/printElements/tree/master/dist) folder and include them in your HTML with a link and script.

#### :receipt: How to set up and use

To use it, the content to be printed needs to be encapsulated in the first ``<main>`` tag.

Then, in your script, you should call the function ``printElements(options)`` and pass an object as a parameter, with the options that suit your project.

```
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/aqazix/printElements@latest/dist/printElements.min.css">
<head>
<body>
    <main>
        <h1>Your Content!</h1>
    </main>

    <script src="https://cdn.jsdelivr.net/gh/aqazix/printElements@latest/dist/printElements.min.js" crossorigin="anonymous"></script>
    <script>
        const options = {
            "targets": [
                "index.html",
                "pages/page2.html",
                "../page3.html"
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

In this object you should declare a few things:

 - **Targets** - The relative paths to the pages to be included in the print function.
 - **Tags** - An array of the tags to be printed (Ex: ``h1``, ``h2``, ``h3``, ``p``, ``li``, **etc**.).
 - **willNotPrint** - A class selector that will exclude elements in the function (Ex: ``.not-print``).

#### Contributing

Soon we will be adding a contribution file :shipit:, with some rules to direct and facilitate the development of the library, for everyone who wants to help and be involved. :vulcan_salute:

#### Copyright and License

Copyright (c) 2020 [Lucas de França](https://github.com/luxonauta) | [Pedro Renato Rodrigues de Sousa](https://github.com/aqazix). Code released under the [MIT license](https://github.com/aqazix/printElements/blob/master/LICENSE).
