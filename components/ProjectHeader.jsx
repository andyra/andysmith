const ProjectHeader = ({ children, description, title }) => (
  <header className="py-lg border-b text-secondary">
    <h1 className="font-light text-2xl">{title}</h1>
    <p className="text-lg">{description}</p>
    {children}
  </header>
);

export default ProjectHeader;
