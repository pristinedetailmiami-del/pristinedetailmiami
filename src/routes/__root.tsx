import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <div className="flex-1 flex items-center justify-center px-6 pt-24">
        <div className="max-w-md text-center">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-electric mb-4">
            404 · Off Route
          </div>
          <h1 className="font-display text-6xl uppercase mb-4">Page not found</h1>
          <p className="text-muted-foreground mb-8">
            That page took a wrong turn. Let's get you back to the shine.
          </p>
          <Link
            to="/"
            className="inline-block bg-electric text-ink px-6 py-3 text-xs font-bold uppercase tracking-tight"
          >
            Back home
          </Link>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl uppercase mb-3">Something broke</h1>
        <p className="text-muted-foreground mb-6 text-sm">
          Try again or head home. If it persists, give us a call.
        </p>
        <div className="flex justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="bg-electric text-ink px-5 py-2.5 text-xs font-bold uppercase tracking-tight"
          >
            Try again
          </button>
          <a
            href="/"
            className="border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-tight hover:bg-secondary"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Pristine Auto Detailing — Mobile Detailing Miami, FL" },
      {
        name: "description",
        content:
          "Premium mobile auto detailing in Miami. Interior, exterior, ceramic coating & paint correction. We come to you — from Brickell to Fort Lauderdale.",
      },
      { property: "og:title", content: "Pristine Auto Detailing — We Do Any Car" },
      {
        property: "og:description",
        content:
          "Mobile detailing across Miami-Dade & Broward. Book online in 60 seconds.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-background">
        <SiteHeader />
        <main className="flex-1 pt-16">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
