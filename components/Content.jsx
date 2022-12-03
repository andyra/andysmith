import cn from "classnames";

// Note: Switches to stacked layout at `screen-lg`

export const Section = ({
  border,
  children,
  className,
  contentClassName,
  title,
}) => {
  const classes = cn("px-page py-page-lg", border && "border-b-2", className);
  const contentClasses = cn(contentClassName || "space-y-24");

  const containerClasses = cn(
    "max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-24",
    !title && contentClasses
  );

  return (
    <section className={classes}>
      <div className={containerClasses}>
        {title ? (
          <>
            <h2 className="font-medium text-lg md:text-2xl lg:w-1/3">
              {title}
            </h2>
            <div className={cn("flex-1", contentClasses)}>{children}</div>
          </>
        ) : (
          { children }
        )}
      </div>
    </section>
  );
};

export const A = ({ children, newTab, href }) => {
  const attrs = {};
  if (newTab) {
    attrs["target"] = "_blank";
    attrs["rel"] = "noopener noreferrer";
  }

  return (
    <a
      className="underline underline-offset-2 decoration-primary-50 hover:decoration-secondary hover:text-secondary cursor-pointer transition"
      {...attrs}
    >
      {children}
    </a>
  );
};
