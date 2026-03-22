"use client";

import React, { useEffect, useState } from "react";

type Props = {
  strings: string[];
  typingSpeed?: number; // ms per char when typing
  deletingSpeed?: number; // ms per char when deleting
  pause?: number; // pause after a line is fully typed
  loop?: boolean; // whether to loop the sequence
  className?: string;
};

export default function HeroTyping({
  strings,
  typingSpeed = 80,
  deletingSpeed = 40,
  pause = 1400,
  loop = false,
  className = "",
}: Props) {
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [display, setDisplay] = useState("");
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (finished) return;

    const current = strings[index] ?? "";

    let timeout: number | undefined;

    if (!isDeleting) {
      // typing
      if (charIndex <= current.length - 1) {
        timeout = window.setTimeout(() => {
          setCharIndex((c) => c + 1);
          setDisplay(current.slice(0, charIndex + 1));
        }, typingSpeed);
      } else {
        // finished typing this string
        if (index === strings.length - 1 && !loop) {
          // last string and not looping => stop after pause
          timeout = window.setTimeout(() => {
            setFinished(true);
            setDisplay(current);
          }, pause);
        } else {
          timeout = window.setTimeout(() => {
            setIsDeleting(true);
          }, pause);
        }
      }
    } else {
      // deleting
      if (charIndex > 0) {
        timeout = window.setTimeout(() => {
          setCharIndex((c) => c - 1);
          setDisplay(current.slice(0, charIndex - 1));
        }, deletingSpeed);
      } else {
        // move to next string
        // schedule state updates to avoid triggering cascading renders inside effect
        timeout = window.setTimeout(() => {
          setIsDeleting(false);
          setIndex((i) => {
            const next = i + 1;
            if (next >= strings.length) return 0;
            return next;
          });
          setCharIndex(0);
        }, 0);
      }
    }

    return () => {
      if (timeout) window.clearTimeout(timeout);
    };
  }, [charIndex, isDeleting, index, strings, typingSpeed, deletingSpeed, pause, loop, finished]);

  return (
    <h1 className={className} aria-live="polite">
      <span>{display}</span>
      <span className="ml-1 text-sky-300 animate-pulse">|</span>
    </h1>
  );
}
