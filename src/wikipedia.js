import { createElement } from "react";
import { createRoot } from "react-dom/client";

function render(reactElement, containerDOMElement) {
  const { type, props, children } = reactElement;
  const root = createRoot(containerDOMElement);
  const element = createElement(type, { href: props.href }, children);
  return root.render(element);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://wikipedia.org/",
  },
  children: "Read more on Wikipedia",
};

const containerDOMElement = document.querySelector("#root");

render(reactElement, containerDOMElement);
