import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HotkeysProvider } from "react-hotkeys-hook";

import "./main.css";
import App from "./App.tsx";
import { Layout } from "./components/layout/Layout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HotkeysProvider>
      <Layout>
        <App />
      </Layout>
    </HotkeysProvider>
  </StrictMode>
);
