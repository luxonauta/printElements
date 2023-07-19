# printElements

> a JS library to print content from HTML pages as a document.

See the documentation site [here](https://luxonauta.github.io/printElementsDocs/).

## Why?

I just needed to print the contents of a static page that had previously been coded…

Doing this shouldn't be difficult, however, at the time it cost me a great deal of my time! Changing the style took dozens of steps to get it the way I wanted the PDF to look (simple, just the content!).

## How does it work?

With this lib, you can select the tags of your HTML files that you want the PDF or Print to be generated.

In addition to the tags that will not be printed according to a specific class.

## Install

You can use printElements by CDN, provided by the jsDeliver service, below:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/aqazix/printElements@latest/dist/printElements.min.css">

<script src="https://cdn.jsdelivr.net/gh/aqazix/printElements@latest/dist/printElements.min.js" crossorigin="anonymous"></script>
```

Or you can download it directly from the [repository on GitHub](https://github.com/luxonauta/printElements/tree/master/dist).

## Setup

Now, to use it, the content to be printed needs to be encapsulated in the first ``<main>`` tag.

Then, in your script, you should call the function ``printElements(options)`` and pass an object as a parameter, with the options that suit your project.

In this object, should be declared a few things:

- **Targets** - The relative paths to the pages to be included in the print function.
- **Tags** - An array of the tags to be printed.
- **willNotPrint** - A class selector that will exclude elements in the function.

See an example below:

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

        myBtn.addEventListener("click", () => {
            printElements(options);
        });
    </script>
<body>
```

You might be wondering what the use case of this class (``"willNotPrint": "not-print"``)?`

The idea behind the creation of this class is that with it, is possible to manually ignore a specific appearance of a tag, which has been specified in the object passed as a parameter to printElements, to be printed.

### Copyright and License

Copyright (c) 2021 [Lucas de França](https://github.com/luxonauta) | [Pedro Renato Rodrigues de Sousa](https://github.com/aqazix). Code released under the [MIT license](https://github.com/luxonauta/printElements/blob/master/LICENSE).
