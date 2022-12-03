import cn from "classnames";

const Section = ({
  border,
  children,
  className,
  columns = 2,
  heading,
  i = "01",
}) => {
  const classes = cn(
    "p-page space-y-page mx-auto",
    columns === 1 ? "max-w-screen-md" : "max-w-screen-xl",
    border && "border-b-2",
    className
  );

  const contentClasses = cn(
    "grid grid-cols-1 gap-48",
    columns === 2 && "md:grid-cols-2"
  );

  return (
    <section className={classes}>
      <h2 className="font-medium text-lg md:text-2xl max-w-screen-lg">
        {i && <span className="block font-normal text-lg opacity-25">{i}</span>}
        {heading}
      </h2>
      <div className={contentClasses}>{children}</div>
    </section>
  );
};

const WIDTHS = {
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
};

export const NewSection = ({
  border,
  children,
  className,
  column,
  i,
  title,
  width = "md",
}) => {
  const classes = cn("p-page", border && "border-b-2", className);

  const containerClasses = cn(
    "flex gap-page mx-auto",
    column ? "flex-row" : "flex-col",
    WIDTHS[width]
  );

  return (
    <section className={classes}>
      <div className={containerClasses}>
        {title && (
          <h2 className="font-medium text-lg md:text-2xl max-w-screen-lg">
            {i && (
              <span className="block font-normal text-lg opacity-25">{i}</span>
            )}
            {title}
          </h2>
        )}
        <div>{children}</div>
      </div>
    </section>
  );
};

export default Section;
