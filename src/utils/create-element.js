export default class ElementHtml {
  constructor(tag, className, textContent) {
    this.htmlElement = document.createElement(tag);
    this.setClasses(className);
    this.setTextContent(textContent ?? '');
  }

  getHtmlElement() {
    return this.htmlElement;
  }

  removeHtmlElement() {
    this.htmlElement.remove();
  }

  appendChildNode(element) {
    if (element instanceof ElementHtml) {
      this.htmlElement.append(element.getHtmlElement());
    }
  }

  setClasses(classes) {
    if (!classes) return;

    if (typeof classes === "string") {
      this.htmlElement.classList.add(classes);
    } else {
      this.htmlElement.classList.add(...classes);
    }
  }

  removeClass(className) {
    this.htmlElement.classList.remove(className);
  }

  setTextContent(textContent) {
    this.htmlElement.textContent = textContent;
  }
}
