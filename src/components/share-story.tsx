"use client";
import { useState } from "react";
import { Check, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/motion/button/base";
export function ShareStory() {
  const [state, setState] = useState<"idle" | "copied" | "error">("idle");
  async function copy() {
    try { await navigator.clipboard.writeText(window.location.href); setState("copied"); }
    catch { setState("error"); }
  }
  return <div className="share-story"><Button variant="outline" size="md" onClick={copy}>{state === "copied" ? <Check size={15} /> : <LinkIcon size={15} />}{state === "copied" ? "Link copied" : "Copy story link"}</Button><span role="status" className={state === "error" ? "copy-error" : "sr-only"}>{state === "copied" ? "Story link copied to clipboard." : state === "error" ? "Please copy the address from your browser." : ""}</span></div>;
}
