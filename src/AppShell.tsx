import type { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import StandardLine from "./pages/StandardLine.tsx";
import B2B from "./pages/B2B.tsx";
import Clients from "./pages/Clients.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import RouteHead from "./components/RouteHead.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import Terms from "./pages/Terms.tsx";
import CookiePolicy from "./pages/CookiePolicy.tsx";

// Shared by the browser entry (BrowserRouter) and the prerender entry
// (StaticRouter) — the router is passed in as `Router`.
const AppShell = ({ Router }: { Router: (props: { children: ReactNode }) => JSX.Element }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <ScrollToTop />
          <RouteHead />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/standard-line" element={<StandardLine />} />
            <Route path="/b2b" element={<B2B />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE — and to PAGES in src/seo/site.ts */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default AppShell;
