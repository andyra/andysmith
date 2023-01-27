import { useEffect, useState } from "react";
import Image from "next/future/image";
import cn from "classnames";
import Button from "components/Button";

// TODO
// • Autoplay
// • If not autoplay, use buttons instead of a duration

const Carousel = ({
  autoPlay,
  className,
  duration = 750,
  images = [],
  sizes,
  style,
  transition = true,
}) => {
  const [index, setIndex] = useState(0);

  const nextScroll = () => {
    if (index === images.length - 1) {
      return setIndex(0);
    }
    return setIndex(index + 1);
  };

  const prevScroll = () => {
    if (index === 0) {
      return setIndex(images.length - 1);
    }
    return setIndex(index - 1);
  };

  useEffect(() => {
    if (!autoPlay) {
      return;
    }

    const interval = setInterval(() => {
      nextScroll();
    }, duration);

    // Clean up
    return () => clearInterval(interval);
  });

  return (
    <div className="flex flex-col items-center gap-8">
      <div
        id="carousel"
        className={cn("flex overflow-hidden relative", className)}
      >
        {images.map((image, i) => (
          <Image
            alt={image.alt}
            className={cn(
              "min-w-full",
              transition && "transition duration-500"
            )}
            key={image.src}
            placeholder="blur"
            priority
            sizes={sizes}
            src={image.src}
            style={{ transform: `translateX(-${index * 100}%)` }}
          />
        ))}
      </div>
      {!autoPlay && (
        <div className="flex items-center justify-center">
          <button
            ariaLabel="Previous image"
            className="h-32 w-32 rounded-full flex items-center justify-center hover:bg-primary-10 transition"
            onClick={() => {
              prevScroll();
            }}
            type="button"
          >
            ←
          </button>
          {[...Array(images.length)].map((item, i) => (
            <button
              className={cn(
                "h-16 w-16 border-4 border-ground rounded-full hover:border-ground-50 transition",
                index === i ? "bg-primary" : "bg-primary-25"
              )}
              key={`carousel-nav-${i}`}
              onClick={() => {
                setIndex(i);
                console.log(`set index to ${i}`);
              }}
              type="button"
            />
          ))}
          <button
            ariaLabel="Next image"
            className="h-32 w-32 rounded-full flex items-center justify-center hover:bg-primary-10 transition"
            onClick={() => {
              nextScroll();
            }}
            type="button"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
