async function printElements(options) {
  let outprint = document.createElement("div");
  outprint.setAttribute("class", "outprint");
  document.querySelector("body").append(outprint);

  const targets = options.targets;
  const tags = options.tags.toString();
  const willNotPrint = options.willNotPrint.replace(".", "");
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
      elem = elem.filter(item => !item.classList.contains(willNotPrint));

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
}