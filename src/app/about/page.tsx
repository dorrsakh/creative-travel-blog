import type { Metadata } from "next";
import Image from "next/image";
import { Footer, Landscape } from "@/components/travel";
import { Reveal } from "@/components/reveal";
export const metadata: Metadata = { title: "About Naiá · The Roam Report" };
export default function About() {
  return <><section className="about-section green-section"><Reveal><Image className="portrait" src="/images/portrait.webp" alt="A woman's profile reflected against a sky filled with clouds" width={760} height={760} priority /></Reveal><Reveal className="about-copy"><h1 className="sr-only">About Naiá</h1><p>Hi, I’m Naiá — a slow traveler with a soft spot for train stations, street snacks, and places that don&apos;t make the guidebooks. The Roam Report is my way of remembering: the long walks, wrong turns, and all the quiet in-between moments that make a place feel real.</p><p>Currently roaming. Eventually home.</p><p>Want to collaborate, pitch a trip, or say hi? Send a note to <a href="mailto:naia@theroamreport.com">naia@theroamreport.com</a> — I check it more often than I check train times.</p></Reveal></section><Landscape /><Footer /></>;
}
