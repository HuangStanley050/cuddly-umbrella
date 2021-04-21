import React from "react";
import ReactDOM from "react-dom";

export const mount = (htmlElement) => {
  ReactDOM.render(<h1>hello</h1>, htmlElement);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}
