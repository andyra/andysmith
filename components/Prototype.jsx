import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import { Figure, WideDude } from "./Content";

const Prototype = ({ iframeSrc, imageSrc, imageAlt }) => {
  return (
    <WideDude maxWidth="2xl">
      <div className="relative hidden xl:block">
        <div className="flex items-center px-16 h-40 rounded-full bg-secondary text-ground z-10 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3/4">
          Try me!
        </div>
        <iframe
          src={iframeSrc}
          className="w-full h-[75vh] border-4 border-secondary rounded"
        />
      </div>
      <Figure className="xl:hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          sizes="(min-width: 1360px) 755px, (min-width: 960px) 55vw, 90vw"
        />
      </Figure>
      <Button
        className="mx-auto mt-16"
        color="secondary"
        href={iframeSrc}
        newTab
      >
        <span className="hidden xl:flex">View Full-size</span>
        <span className="xl:hidden">Play With the Prototype</span>
        <ArrowRightIcon className="h-16 w-16" />
      </Button>
    </WideDude>
  );
};

export default Prototype;
