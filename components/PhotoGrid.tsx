"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { JobPhoto } from "@/lib/business";

/**
 * Thumbnail grid that opens one photograph at a time.
 * Native dialog handles focus, Escape and the backdrop.
 */
export default function PhotoGrid({ photos }: { photos: JobPhoto[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) dialog.showModal();
    if (index === null && dialog.open) dialog.close();
  }, [index]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setIndex((current) =>
          current === null ? current : (current + 1) % photos.length,
        );
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        setIndex((current) =>
          current === null ? current : (current - 1 + photos.length) % photos.length,
        );
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, photos.length]);

  const photo = index !== null ? photos[index] : null;
  const step = (delta: number) =>
    setIndex((current) =>
      current === null ? current : (current + delta + photos.length) % photos.length,
    );

  return (
    <>
      <ul className="mt-6 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-3">
        {photos.map((item, i) => (
          <li key={item.src} className={i === 0 ? "col-span-2 lg:col-span-3" : undefined}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="block w-full text-left"
              aria-haspopup="dialog"
            >
              <span className="relative block aspect-[4/3] w-full overflow-hidden bg-concrete">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes={
                    i === 0
                      ? "(min-width: 1152px) 1104px, calc(100vw - 2.5rem)"
                      : "(min-width: 1024px) 360px, calc(50vw - 1.5rem)"
                  }
                  className="object-cover"
                />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="photo-dialog"
        aria-label="Photograph"
        onClose={() => setIndex(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setIndex(null);
        }}
      >
        {photo && index !== null ? (
          <div className="flex flex-col gap-3">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setIndex(null)}
                className="min-h-11 bg-white px-4 text-[15px] font-semibold text-ink"
              >
                Close
              </button>
            </div>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 1024px) 960px, calc(100vw - 1.5rem)"
              className="mx-auto h-auto max-h-[calc(100vh-9.5rem)] w-auto max-w-full object-contain"
            />
            <p className="text-[14.5px] leading-snug text-white">{photo.alt}</p>
            <div className="flex items-center justify-between gap-3 text-white">
              <button
                type="button"
                onClick={() => step(-1)}
                className="min-h-11 px-2 text-[15px] font-semibold"
              >
                Previous
              </button>
              <p className="tnum text-[14px]">
                {index + 1} of {photos.length}
              </p>
              <button
                type="button"
                onClick={() => step(1)}
                className="min-h-11 px-2 text-[15px] font-semibold"
              >
                Next
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
