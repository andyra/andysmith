import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Button from "components/Button";
import { Callout } from "components/Content";
import ProjectHeader from "components/ProjectHeader";
import { A, Section, WideDude } from "components/Content";

import homeLight from "public/projects/tes/homeLight.webp";
import homeDark from "public/projects/tes/homeDark.webp";
import albumsLight from "public/projects/tes/albumsLight.webp";
import albumsDark from "public/projects/tes/albumsDark.webp";
import articleLight from "public/projects/tes/articleLight.webp";
import articleDark from "public/projects/tes/articleDark.webp";
import coolModeLight from "public/projects/tes/coolModeLight.webp";
import coolModeDark from "public/projects/tes/coolModeDark.webp";
import episodeLight from "public/projects/tes/episodeLight.webp";
import episodeDark from "public/projects/tes/episodeDark.webp";
import mobileAlbumLight from "public/projects/tes/mobileAlbumLight.webp";
import mobileAlbumDark from "public/projects/tes/mobileAlbumDark.webp";
import mobileCoolModeLight from "public/projects/tes/mobileCoolModeLight.webp";
import mobileCoolModeDark from "public/projects/tes/mobileCoolModeDark.webp";
import setlistLight from "public/projects/tes/setlistLight.webp";
import setlistDark from "public/projects/tes/setlistDark.webp";

const Tes = ({ metaTitle }) => {
  const { resolvedTheme } = useTheme();

  return (
    <>
      <ProjectHeader
        title={metaTitle}
        description="A site I designed and built to showcase various music projects some friends and I put together over the years. Includes fancy stuff like an audio player, queueing, full screen mode, search, and PWA support."
      >
        <Button href="https://tes.fm" target="_blank" rel="noopener noreferrer">
          Check it out!
          <span className="group-hover:translate-x-4 transition-all">
            <ArrowRightIcon className="h-24 w-24" />
          </span>
        </Button>
      </ProjectHeader>

      <Section title="Yes, but why?">
        <p>
          This project started off as a tool to help my band build randomized
          setlists from the hundreds of songs we&apos;ve written over the years.
          Once we had catalogued everything, we realized it would be helpful to
          be able to hear recordings, read the lyrics, and view chord sheets.
        </p>
        <p>
          The site has evolved to accommodate other hairbrained ideas we&apos;ve
          cooked up, including slow-motion playback, playlist queues, and a
          library of fictional characters.{" "}
          <strong>
            Basically it&apos;s an excuse to work on front-end development
          </strong>
          .
        </p>
        <WideDude as="figure" className="pt-base px-base lg:px-0">
          <div className="-rotate-1">
            <Image
              alt="TES albums page"
              className="rounded-md"
              placeholder="blur"
              sizes="(min-width: 960px) 960w, 100vw"
              src={resolvedTheme === "dark" ? albumsLight : albumsDark}
            />
          </div>
          <div className="rotate-2">
            <Image
              alt="TES episode page"
              className="rounded-md -mt-[25%] ml-16 border-2 border-ground"
              placeholder="blur"
              sizes="(min-width: 960px) 960w, 100vw"
              src={resolvedTheme === "dark" ? episodeLight : episodeDark}
            />
          </div>
        </WideDude>
      </Section>

      <Section title="Technical notes">
        <p>
          I built this using{" "}
          <A href="https://nextjs.org/" newTab>
            Next.js
          </A>{" "}
          as the front-end and{" "}
          <A href="https://craftcms.com/" newTab>
            Craft CMS
          </A>{" "}
          as the database, with GraphQL serving as the API to connect the two.
          The site is largely static and is rebuilt on demand via the{" "}
          <abbr title="Incremental Static Regeneration">ISR</abbr> build
          strategy, which means only the required pages are rebuilt when content
          changes in the CMS. The result: it&apos;s real snappy!
        </p>
        <p>
          Besides some of the performance benefits of Next.js, it was really
          convenient to not have to worry too much about image transforms; you
          can point to the original image on the CMS and Next.js handles serving
          and caching the smallest image size possible.
        </p>
        <p>
          I made this a <abbr title="Progressive Web App">PWA</abbr> so we could
          launch it from our mobile device&apos;s home screen; this gives it the
          feel of a native app without having to publish through the App Store.
        </p>
        <figure className="flex justify-center lg:justify-start pt-base px-base lg:px-0">
          <div className="w-320 px-[10px] py-[2px] -rotate-2 relative">
            <Image
              alt="TES mobile full screen visualizer"
              className="rounded-[6%]"
              placeholder="blur"
              sizes="(min-width: 960px) 960w, 100vw"
              src={mobileCoolModeLight}
            />
          </div>
          <div className="w-320 px-[10px] py-[2px] rotate-3 -ml-64 mt-48 relative">
            <Image
              alt="TES mobile album page"
              className="rounded-[6%]"
              placeholder="blur"
              sizes="(min-width: 960px) 960w, 100vw"
              src={
                resolvedTheme === "dark" ? mobileAlbumLight : mobileAlbumDark
              }
            />
          </div>
        </figure>
      </Section>

      <Section title="Create randomized setlists">
        <p>
          We frequently create randomized setlists for practice, but wanted to
          find a way to insert an element of chance beyond the order of the
          songs chosen. To that end, I added the ability to insert{" "}
          <A href="https://en.wikipedia.org/wiki/Oblique_Strategies" newTab>
            Oblique Stratgegies
          </A>{" "}
          into the songs so we could perform them differently each time. I also
          added the ability to insert &ldquo;bleeds&rdquo; between songs, which
          is a cue to blend two songs together.
        </p>
        <p>
          If a lead sheet is available for a song, you can expand it in place to
          refresh your memory on the chords, tabs, lyrics, etc.
        </p>
        <WideDude as="figure" className="pt-base px-base lg:px-0">
          <Image
            alt="TES article page"
            className="rounded-md"
            placeholder="blur"
            sizes="(min-width: 960px) 960w, 100vw"
            src={resolvedTheme === "dark" ? setlistLight : setlistDark}
          />
        </WideDude>
      </Section>
      <Section title="What I learned">
        <p>
          The two main challenges were getting the backend and front-end talking
          to each other reliably, and managing the audio player state. GraphQL
          and Apollo Client (a library I used to work with the GraphQL data)
          were new territory for me.
        </p>
        <p>
          I can&apos;t say I mastered these technologies, but I no longer fear
          them. And that&apos;s something.
        </p>
        <p>
          <strong>Next up</strong>: wrangling GraphQL mutations so we can create
          and update both public and private audio playlists. This will require
          some form of authorization, so there&apos;s still a lot of territory
          to cover!
        </p>
        <WideDude as="figure" className="pt-base px-base lg:px-0">
          <div className="rotate-1">
            <Image
              alt="TES article page"
              className="rounded-md"
              placeholder="blur"
              sizes="(min-width: 960px) 960w, 100vw"
              src={resolvedTheme === "dark" ? articleLight : articleDark}
            />
          </div>
          <div className="-rotate-2">
            <Image
              alt="TES full-screen visualizer"
              className="rounded-md -mt-[25%] ml-16 border-2 border-ground"
              placeholder="blur"
              sizes="(min-width: 960px) 960w, 100vw"
              src={coolModeLight}
            />
          </div>
        </WideDude>
      </Section>
    </>
  );
};

export default Tes;

export async function getStaticProps(context) {
  return {
    props: {
      metaTitle: "This Evening's Show",
    },
  };
}
