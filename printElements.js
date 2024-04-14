import "./printElements.css";

export const printElements = async (options) => {
  const outprint = document.createElement("div");
  outprint.classList.add("outprint");
  document.body.appendChild(outprint);

  const { targets, tags, willNotPrint = "", wrapper = "main" } = options;

  const fetchAndParse = async (url) => {
    const response = await fetch(url);
    const text = await response.text();

    return new DOMParser().parseFromString(text, "text/html");
  };

  const htmlPages = await Promise.all(targets.map(fetchAndParse));

  htmlPages.forEach((page) => {
    const elements = Array.from(
      page.querySelector(wrapper).querySelectorAll(tags.toString())
    )
      .filter((item) => !item.classList.contains(willNotPrint))
      .forEach((item) => outprint.appendChild(item.cloneNode(true)));
  });

  setTimeout(() => {
    window.print();
    outprint.remove();
  }, 125);
};
