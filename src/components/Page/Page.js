import * as React from "react";
import "./Page.css";

function Page({ title, children }) {
  return (
    <div class="page">
      <h1 class="page-title">{title}</h1>
      {children}
    </div>
  );
}

export { Page as default };
