import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/instrument-serif";
import "@fontsource-variable/work-sans";

// Pages are prerendered to HTML at build time; hydrate them when present.
const root = document.getElementById("root")!;
if (root.hasChildNodes()) hydrateRoot(root, <App />);
else createRoot(root).render(<App />);
