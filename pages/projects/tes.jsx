import Link from "next/link";
import Image from "next/future/image";
import { useTheme } from "next-themes";

import Callout from "components/Callout";
import Divider from "components/Divider";
import ProjectFooter from "components/ProjectFooter";
import ProjectHeader from "components/ProjectHeader";
import { A, Section } from "components/Content";

import MobileBezel from "public/mobile.svg";
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

const Tes = () => {
  const { resolvedTheme } = useTheme();

  return (
    <>
      <ProjectHeader
        title="TES.fm"
        description="A PWA built with React to showcase various music projects some friends and I have put together over the years. Includes fancy stuff like an audio player, queueing, full screen mode, search, and even a &ldquo;Setlist Computor&rdquo; to create randomized setlists using Brian Eno's oblique strategies."
        link={{ href: "https://tes.fm", title: "View the Project" }}
      />

      <Section title="Yes, but Why?">
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
        <figure className="pt-page px-page lg:px-0">
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
        </figure>
      </Section>

      <Section title="Technical Notes">
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
          I made this a <abbr title="Progressive Web App">PWA</abbr> so we could
          launch it from our mobile device&apos;s home screen; this gives it the
          feel of a native app without having to publish through the App Store.
        </p>
        <p>
          I had to learn a lot while working on this; I had never used GraphQL
          before, and I encountered more advanced JavaScript/React challenges
          than I normally do in my day-to-day work at Pingboard.
        </p>
        <figure className="flex justify-center lg:justify-start pt-page px-page lg:px-0">
          <div className="w-320 px-[10px] py-[2px] -rotate-2 relative">
            <Image
              alt="TES mobile full screen visualizer"
              className="rounded-[6%]"
              placeholder="blur"
              sizes="(min-width: 960px) 960w, 100vw"
              src={mobileCoolModeLight}
            />
            <MobileBezel className="absolute top-0 left-0 w-full" />
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
            <MobileBezel className="absolute top-0 left-0 w-full" />
          </div>
        </figure>
      </Section>

      <Section title="Other fun stuff">
        <p>
          A full-screen visualizer, phony dot-matrix simulations, and a setlist
          computer. Why not, I ask you.
        </p>
        <figure className="pt-page px-page lg:px-0">
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
        </figure>
      </Section>

      <ProjectFooter />
    </>
  );
};

export default Tes;

export async function getStaticProps(context) {
  return {
    props: {
      metaTitle: "TES.fm",
    },
  };
}
