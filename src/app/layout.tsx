import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import "./fonts.css";
import "./globals.css";
export const metadata: Metadata = {
  title: "The Roam Report · Stories from the slower road",
  description: "Stories and photos of long walks, wrong turns, and everyday discoveries. A travel journal by Naiá.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>;
}
