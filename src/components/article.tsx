import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer, Landscape, StoryGrid } from "@/components/travel";
import { Reveal } from "@/components/reveal";
import type { Story } from "@/data/stories";
import { ShareStory } from "@/components/share-story";
import { ReadingProgress } from "@/components/reading-progress";

export function Article({ story }: { story: Story }) {
  return <><ReadingProgress /><div className="article-hero"><Image src={`/images/${story.image}.webp`} alt={story.alt} fill priority sizes="(min-width: 1280px) 62.5vw, 100vw" /></div><article className="article-content"><header><Link className="back-link" href="/archive"><ArrowLeft size={16} /> All stories</Link><h1>{story.title}</h1><p className="article-meta"><time>{story.date}</time><span aria-hidden="true">·</span>{story.country}</p><ShareStory /></header><div className="article-body"><p>{story.intro}</p><p>I kept the days loose. A morning walk became an afternoon by the water; a stop for something to eat turned into a conversation that lasted longer than the meal. I took photographs, but mostly I tried to pay attention.</p><h2>Taking the slower road</h2><p>There is a different kind of travel that happens when you stop trying to fit everything in. You notice the changing light, the sound of a place waking up, the small kindnesses that would be easy to miss on the way to somewhere else.</p><Reveal><figure><Image src={`/images/${story.image}.webp`} alt={story.alt} width={1000} height={680} /><figcaption>A little pause along the way.</figcaption></figure></Reveal><p>I didn’t write much. I didn’t need to. The days were filled with the kind of moments that stay with you without asking to be remembered.</p><h2>A few things I’m keeping</h2><p>The quiet mornings. The turns I almost didn’t take. A favorite place to sit with a coffee, and the feeling that, for a little while, there was nowhere else I needed to be.</p><p>Travel doesn’t always have to feel like an escape. Sometimes it feels like a return to something quieter, rougher, more real.</p></div><Image className="plane" src="/images/plane.svg" alt="Hand-drawn airplane above clouds" width={130} height={110} /></article><StoryGrid green /><Landscape /><Footer /></>;
}
