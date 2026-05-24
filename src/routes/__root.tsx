import { createRootRoute, Outlet, ScrollRestoration } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader, LangContext, type Lang } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#000000" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap",
      },
    ],
  }),
  component: RootLayout,
});

function RootLayout() {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <ScrollRestoration />
      <SiteHeader />
      <main className="pt-14">
        <Outlet />
      </main>
      <SiteFooter />
    </LangContext.Provider>
  );
}
