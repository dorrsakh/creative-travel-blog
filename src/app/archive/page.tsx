import type { Metadata } from "next";
import Image from "next/image";
import { StoryGrid, Footer, Landscape } from "@/components/travel";
export const metadata: Metadata = { title: "All travel stories · The Roam Report" };
export default function Archive() {
  return <><StoryGrid all /><div className="archive-photo"><Image src="/images/turkey.webp" alt="A house tucked among trees on the Turkish coast" fill sizes="(min-width: 1280px) 62.5vw, 100vw" /></div><Landscape green={false} /><Footer /></>;
}
