export const printElements = async (options) => {
  const {
    targets,
    tags,
    willNotPrint = "",
    wrapper = "main",
    delay = 125
  } = options;
  if (!document.body) {
    console.error(
      "printElements must run in a browser environment with a fully loaded DOM."
    );
    return;
  }

  const outprint = createOutprintElement();

  try {
    const htmlPages = await fetchAndParsePages(targets);
    appendFilteredElementsToOutprint(
      htmlPages,
      tags,
      wrapper,
      willNotPrint,
      outprint
    );
    schedulePrintAndCleanup(outprint, delay);
  } catch (error) {
    console.error(
      "An error occurred during the printElements operation:",
      error
    );
    cleanUpDOM(outprint);
  }
};

const createOutprintElement = () => {
  const outprint = document.createElement("div");
  outprint.classList.add("outprint");
  document.body.appendChild(outprint);
  return outprint;
};

const fetchAndParsePages = async (targets) => {
  const fetchAndParse = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const text = await response.text();
    return new DOMParser().parseFromString(text, "text/html");
  };
  return Promise.all(targets.map(fetchAndParse));
};

const appendFilteredElementsToOutprint = (
  pages,
  tags,
  wrapper,
  willNotPrint,
  outprint
) => {
  pages.forEach((page) => {
    const wrapperElement = page.querySelector(wrapper);
    if (!wrapperElement) {
      console.error(
        `Wrapper element "${wrapper}" not found in the page at URL: ${url}.`
      );
      return;
    }
    const elements = wrapperElement.querySelectorAll(tags);
    Array.from(elements)
      .filter((item) => !item.classList.contains(willNotPrint))
      .forEach((item) => outprint.appendChild(item.cloneNode(true)));
  });
};

const schedulePrintAndCleanup = (outprint, delay) => {
  setTimeout(() => {
    window.print();
    cleanUpDOM(outprint);
  }, delay);
};

const cleanUpDOM = (outprint) => outprint.remove();

if (typeof window !== "undefined") window.printElements = printElements;
