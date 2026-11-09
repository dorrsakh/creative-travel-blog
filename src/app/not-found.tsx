import Link from "next/link";
export default function NotFound() { return <section className="not-found"><p>A wrong turn, perhaps.</p><h1>This trail ends here.</h1><Link href="/archive" className="text-link">Find another story →</Link></section>; }
