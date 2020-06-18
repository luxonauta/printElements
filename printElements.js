async function printElements(json) {
    let outprint = document.createElement("div");
    outprint.setAttribute("class", "outprint");
    document.querySelector("body").append(outprint);

    // Fetch metadata from JSON file
    fetch(json).then(response => {
        return response.json();
    }).then(json => {
        // In order: the HTML targets, the tags that will be included in the print and the class that will determine what will not be printed.
        // A array of promises to be made and array of the generated html from all pages to be printed.
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

                // Removes the included tags that contain the class that excludes from printing (defined in JSON and assigned in variable willNotPrint).
                elem = elem.filter(item => !item.classList.contains(willNotPrint.replace(".","")));

                // Append the new nodes to outprint
                elem.forEach(item => {
                    document.querySelector(".outprint").append(item);
                });
            });
        }).then(() => {
            setTimeout(() => {
                // Opens the print window to print the current document.
                window.print(document.querySelector(".outprint"));
            }, 125);
        }).then(() => {
            // Removes and erases the data inside the current outprint.
            setTimeout(() => {
                outprint.remove();
                outprint.innerHTML = "";
            }, 250);
        });
    });
}