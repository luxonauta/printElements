const printElements = options => {
  let outprint = document.createElement("div")
  outprint.classList.add("outprint")
  document.querySelector("body").append(outprint)

  let { targets, tags, willNotPrint, wrapper } = options
  tags = tags.toString()
  willNotPrint = willNotPrint.replace(".", "")

  let promises = []
  let html = []

  targets.forEach(target => {
      promises.push(fetch(target)
          .then(response => response.text())
          .then(string => html.push(new DOMParser().parseFromString(string, "text/html"))))

  })

  Promise.all(promises).then(() => {
      html.forEach(page => {
          let elem = []

          page.querySelector(wrapper ? wrapper : "main").querySelectorAll(tags).forEach(item => elem.push(item.cloneNode(true)))

          elem = elem.filter(item => !item.classList.contains(willNotPrint))

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