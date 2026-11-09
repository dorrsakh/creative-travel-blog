import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Article } from "@/components/article";
import { stories } from "@/data/stories";
export const dynamicParams = false;
export function generateStaticParams() { return stories.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: `${stories.find(s => s.slug === slug)?.title ?? "Story"} · The Roam Report` };
}
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = stories.find(s => s.slug === slug);
  if (!story) notFound();
  return <Article story={story} />;
}
