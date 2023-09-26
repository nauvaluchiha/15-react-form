import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./global.css";
import { Provider } from "react-redux";
import { store } from "./stores/store.ts";

if ('serviceWorker' in navigator) {
  // console.log('Service worker supported');
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
  });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
