import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";

const PHRASE = "Integer tempus consectetur risus";
const SENTENCE =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec efficitur ante, non porttitor massa.";

const PARAGRAPH =
  "Proin aliquet diam ac sem laoreet scelerisque. Praesent efficitur, velit volutpat consectetur congue, tellus metus sodales urna, ut malesuada mi erat feugiat nulla.";

const PARAGRAPH_LONG =
  "Vestibulum laoreet, sapien faucibus blandit iaculis, nibh massa dictum mauris, eu cursus ante mauris sed nisi. Maecenas vitae augue quis velit facilisis pharetra. Vestibulum malesuada neque eget lectus tincidunt, ac lacinia erat porta. Mauris non lectus interdum, malesuada metus vel, auctor lorem. Nunc tortor dolor, sodales id nunc vitae, volutpat molestie nulla.";

const TEXT_SIZES = [
  {
    size: "text-xl",
    weight: "font-normal",
    content: PHRASE,
  },
  {
    size: "text-lg",
    weight: "font-normal",
    content: PARAGRAPH,
  },
  {
    size: "text-base",
    weight: "font-normal",
    content: PARAGRAPH_LONG,
  },
  {
    size: "text-sm",
    weight: "font-normal",
    content: PARAGRAPH_LONG,
  },
];

const Typography = ({ metaTitle }) => {
  return (
    <>
      <section className="px-page py-page-lg max-w-screen-xl mx-auto">
        <ul className="divide-y">
          {TEXT_SIZES.map((item) => (
            <li className="flex gap-16 py-page" key={item.size}>
              <div className="font-mono w-1/5">{item.size}</div>
              <div className="font-mono flex-1">
                <p className={cn(item.size, item.weight)}>{item.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Typography;

export async function getStaticProps(context) {
  return {
    props: {
      metaTitle: "Typography",
    },
  };
}
