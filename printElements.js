const printElements = options => {
    let outprint = document.createElement("div")
    outprint.classList.add("outprint")
    document.querySelector("body").append(outprint)

    let { targets, tags, willNotPrint, wrapper } = options ? options : {}

    targets = targets && targets.length > 0
        ? targets
        : ["index.html"]
    tags = tags && tags.length > 0
        ? tags.toString()
        : "h1, h2, h3, h4, h5, h6, p, ul, table, small, img.print, svg.print, figcaption"
    willNotPrint = willNotPrint
        ? willNotPrint.replace(".", "")
        : ""
    wrapper = wrapper
        ? wrapper
        : "main"

    let html = []

    Promise.all(targets.map(target => fetch(target)
        .then(response => response.text())
        .then(string => html.push(new DOMParser().parseFromString(string, "text/html")))
    )).then(() => {
        html.forEach(page => {
            let elem = [...page.querySelector(wrapper).querySelectorAll(tags)]
                .map(item => item.cloneNode(true))
                .filter(item => !item.classList.contains(willNotPrint))

            elem.forEach(item => document.querySelector(".outprint").append(item))
        })

        setTimeout(() => {
            window.print(document.querySelector(".outprint"))
        }, 125)
    }).then(() => {
        setTimeout(() => {
            outprint.remove()
            outprint.innerHTML = ""
        }, 2000)
    })
}