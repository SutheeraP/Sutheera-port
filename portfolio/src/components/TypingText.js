"use client";

// Types each phrase out, pauses, deletes it and moves on to the next, forever.
// Visitors who prefer reduced motion see the first phrase without animation.
import { useEffect, useState } from "react";

const TYPE_DELAY = 70;
const DELETE_DELAY = 35;
const HOLD_DELAY = 1400;

export default function TypingText({ phrases }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const onChange = (event) => setReducedMotion(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const phrase = phrases[phraseIndex];

  useEffect(() => {
    if (reducedMotion) return;

    let delay = deleting ? DELETE_DELAY : TYPE_DELAY;
    let step;
    if (!deleting && length < phrase.length) {
      step = () => setLength(length + 1);
    } else if (!deleting) {
      delay = HOLD_DELAY;
      step = () => setDeleting(true);
    } else if (length > 0) {
      step = () => setLength(length - 1);
    } else {
      step = () => {
        setDeleting(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      };
    }

    const timer = setTimeout(step, delay);
    return () => clearTimeout(timer);
  }, [reducedMotion, deleting, length, phrase, phraseIndex, phrases.length]);

  if (reducedMotion) {
    return <span>{phrases[0]}</span>;
  }

  return (
    <span>
      {phrase.slice(0, length)}
      <span className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.1em] bg-accent motion-safe:animate-blink" />
    </span>
  );
}
