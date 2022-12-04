import Divider from "components/Divider";

const ProjectHeader = ({ title, description, link }) => (
  <header className="px-page pb-page pt-page-lg bg-tertiary-10 text-tertiary-75">
    <div className="max-w-screen-lg mx-auto">
      <h1 className="font-semibold text-2xl sm:text-3xl lg:text-5xl text-tertiary">
        {title}
      </h1>
      <Divider />
      <p className="text-base sm:text-lg md:text-xl max-w-prose">
        {description}
      </p>
      {link && (
        <a
          className="flex items-center gap-8 w-fit h-48 px-16 rounded-full border-2 border-tertiary text-tertiary hover:bg-tertiary-05 transition group"
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.title}
          <span className="group-hover:translate-x-4 transition-all">→</span>
        </a>
      )}
    </div>
  </header>
);

export default ProjectHeader;
