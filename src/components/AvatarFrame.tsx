"use client";

import Image from "next/image";

type Props = {
  src?: string;
  alt?: string;
  ariaLabel?: string;
  size?: number; // pixels
  gradientClass?: string; // tailwind gradient classes for the border
  spinDuration?: number; // seconds for one rotation
  shadowClass?: string; // tailwind shadow class
};

export default function AvatarFrame({
  src = "/images/avatar.jpg",
  alt = "Avatar",
  ariaLabel,
  size = 288,
  gradientClass = "from-sky-400 via-indigo-500 to-pink-500",
  spinDuration = 8,
  shadowClass = "shadow-2xl",
}: Props) {
  const borderThickness = 8;
  const innerSize = size - borderThickness * 2;

  return (
    <div style={{ width: size, height: size }} className="relative">
      {/* animated gradient border */}
      <div
        className={`absolute inset-0 rounded-full bg-gradient-to-r ${gradientClass}`}
        aria-hidden
        style={{ padding: borderThickness, animation: `spin ${spinDuration}s linear infinite` }}
      />

      {/* inner background + image */}
      <div
        className={`absolute left-2 top-2 rounded-full overflow-hidden bg-slate-900/80 ring-1 ring-slate-700 transition-transform duration-300 hover:scale-105 ${shadowClass}`}
        style={{ width: innerSize, height: innerSize }}
      >
        <Image
          src={src}
          alt={alt}
          role="img"
          aria-label={ariaLabel ?? alt}
          width={innerSize}
          height={innerSize}
          className="object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
}
