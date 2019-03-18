import * as React from "react";
import { render } from "react-dom";
import Api from "./api/api";
import { ApiProvider } from "./api/api-injection";
import App from "./App";
import "./index.css";

const api = new Api();

render(
  <ApiProvider value={api}>
    <App />
  </ApiProvider>,
  document.getElementById("root")
);
