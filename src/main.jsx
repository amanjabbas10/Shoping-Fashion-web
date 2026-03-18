import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);

document.addEventListener("click", (event) => {
  const anchor = event.target?.closest?.("a");
  if (!anchor) return;
  if (event.defaultPrevented) return;
  if (event.button !== 0) return;
  if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) return;
  if (anchor.target && anchor.target !== "_self") return;

  const href = anchor.getAttribute("href");
  if (!href || !href.startsWith("/") || href.startsWith("//")) return;

  const baseUrl = import.meta.env.BASE_URL || "/";
  const nextUrl = href.startsWith(baseUrl)
    ? href
    : href === "/"
      ? baseUrl
      : `${baseUrl}${href.slice(1)}`;

  event.preventDefault();
  window.history.pushState({}, "", nextUrl);
  window.dispatchEvent(new PopStateEvent("popstate"));
});
