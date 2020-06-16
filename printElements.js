async function printElements(json) {
    let outprint = document.createElement("div");
    outprint.classList.add("outprint");
    document.querySelector("body").append(outprint);

    // Fetch meta data from JSON file
    fetch(json).then(response => {
        return response.json();
    }).then(json => {
        // In order: target .html, tags to be included in the document, class to exclude elements, array of promises to be made and array of the generated html from all pages to be printed
        const targets = json.targets;
        const tags = json.tags.toString();
        const willNotPrint = json.willNotPrint;
        let promises = [];
        let html = [];

        targets.forEach(target => {
            promises.push(fetch(target).then(response => {
                return response.text();
            }).then(string => {
                // Fetches the text and parses to HTML
                html.push(new DOMParser().parseFromString(string, "text/html"));
            }));
        });

        Promise.all(promises).then(() => {
            let elem = [];
            html.forEach(page => {
                page.querySelector("main").querySelectorAll(tags).forEach(item => {
                    // Creates a copy of all relevant elements
                    elem.push(item.cloneNode(true));
                });

                let index = [];

                elem.forEach((item, indexItem) => {
                    // Stores the indexes of all elements to be removed
                    if (item.classList.contains(willNotPrint))
                        index.push(indexItem);
                    // Removes all children that are to be removed
                    item.querySelectorAll(willNotPrint).forEach(elem => {
                        elem.remove()
                    });
                });

                // Removes all elements that are to be removed
                index.forEach(item => {
                    elem.splice(item, 1);
                });

                // Append the new nodes to outprint
                elem.forEach(item => {
                    document.querySelector(".outprint").append(item);
                });
            });
        }).then(() => {
            setTimeout(() => {
                // Print the document
                window.print(document.querySelector(".outprint"));
            }, 125);
        }).then(() => {
            // Removes and erases the data inside outprint
            setTimeout(() => {
                outprint.remove();
                outprint.innerHTML = "";
            }, 130);
        });
    });
}