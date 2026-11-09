import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { TiltCard } from "@/components/motion/tilt-card";
import { Reveal } from "@/components/reveal";
import { featured, itinerary, stories, type Story } from "@/data/stories";

export function StoryCard({ story, featuredCard = false }: { story: Story; featuredCard?: boolean }) {
  return <TiltCard max={4} glare={false} className="story-tilt">
    <Link href={`/article/${story.slug}`} className={`story-card ${featuredCard ? "featured-card" : ""}`}>
      <div className="story-image"><Image src={`/images/${story.image}.webp`} alt={story.alt} fill sizes={featuredCard ? "350px" : "(min-width: 1280px) 30vw, (min-width: 800px) 45vw, 90vw"} priority={featuredCard} /></div>
      <div className="story-caption"><p>{featuredCard ? "Featured article" : story.date}</p><h2>{story.title}</h2><ArrowUpRight size={20} className="card-arrow" aria-hidden="true" /></div>
    </Link>
  </TiltCard>;
}

export function Hero() {
  return <section className="hero" aria-label="Featured travel story">
    <Image className="hero-background" src="/images/desert.webp" alt="Warm sand dunes under a cloudy blue sky" fill priority sizes="(min-width: 1280px) 62.5vw, 100vw" />
    <Reveal className="hero-card"><StoryCard story={featured} featuredCard /></Reveal>
    <a className="scroll-link" href="#latest">Scroll for more<ArrowDown size={14} aria-hidden="true" /></a>
  </section>;
}

export function StoryGrid({ all = false, green = false }: { all?: boolean; green?: boolean }) {
  const Heading = green ? "h2" : "h1";
  return <section id={all ? "stories" : "latest"} className={`stories-section ${green ? "green-section" : ""}`}>
    <Reveal><Heading className="section-heading">{all ? "All travel stories" : "Latest travel stories"}</Heading></Reveal>
    <div className="story-grid">{(all ? stories : stories.slice(0, 4)).map(story => <Reveal key={story.slug}><StoryCard story={story} /></Reveal>)}</div>
    {!all && <Link className="text-link" href="/archive">View all articles</Link>}
  </section>;
}

export function Itinerary() {
  return <section className="itinerary green-section">
    <Reveal><h2 className="section-heading">Upcoming itinerary</h2></Reveal>
    <ol>{itinerary.map((trip, index) => <li key={trip.place}><Reveal className="itinerary-row"><span className="itinerary-number">0{index + 1}</span><div className="trip-copy"><h3>{trip.place}</h3><p>{trip.date}<br />{trip.note}</p></div><Image src={`/images/${trip.image}.webp`} alt={`A glimpse of ${trip.place}`} width={200} height={130} className={index % 2 ? "oval-image" : ""} /></Reveal></li>)}</ol>
  </section>;
}

export function Landscape({ green = true }: { green?: boolean }) {
  return <div className={`landscape ${green ? "green-section" : ""}`} aria-hidden="true"><Image src="/images/landscape.svg" width={800} height={126} alt="" /></div>;
}

export function Footer() {
  return <footer className="footer" id="contact">
    <p>End of the trail</p><h2>Less rush.<br />More wonder.</h2>
    <nav aria-label="Footer navigation"><Link href="/">Home</Link><Link href="/archive">Articles</Link><Link href="/about">About</Link><a href="mailto:naia@theroamreport.com">Contact</a></nav>
    <div className="social-links">{["instagram", "pinterest", "youtube", "facebook", "x"].map(platform => <a key={platform} href={`https://${platform === "x" ? "x.com" : `www.${platform}.com`}/`} aria-label={platform}><Image src={`/images/${platform}.svg`} width={22} height={22} alt="" /></a>)}</div>
    <small>Copyright ©2025 · The Roam Report</small>
  </footer>;
}
