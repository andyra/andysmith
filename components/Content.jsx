import cn from "classnames";
import slugify from "slugify";
import Divider from "components/divider";

// Note: Switches to stacked layout at `screen-lg`

export const Section = ({
  children,
  className,
  columns,
  contentClassName,
  noTopPadding,
  title,
  titleActions,
}) => {
  const id = title ? slugify(title, { lower: true }) : null;

  const classes = cn(
    "px-page",
    noTopPadding ? "pb-page-lg" : "py-page-lg",
    className
  );

  const contentClasses = cn(contentClassName || "space-y-48");

  const containerClasses = cn(
    "flex flex-col gap-48",
    "max-w-screen-xl mx-auto",
    columns && "lg:flex-row",
    !columns && contentClassName
  );

  const headingClasses = cn(
    columns && "font-medium text-xl md:text-2xl lg:w-1/3",
    !columns && "font-semibold text-3xl sm:text-5xl"
  );

  return (
    <section className={classes} id={id}>
      <div className={containerClasses}>
        {title ? (
          <>
            <h2 className={headingClasses}>
              {title}
              {titleActions}
            </h2>
            {!columns && <Divider />}
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
