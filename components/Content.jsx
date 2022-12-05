import cn from "classnames";
import slugify from "slugify";

export const Divider = ({ className }) => (
  <hr className={cn("border-t-2 border-primary opacity-10", className)} />
);

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
    "flex flex-col",
    "max-w-screen-xl mx-auto",
    columns && "lg:flex-row",
    !columns && contentClassName
  );

  const headingClasses = cn(
    columns && "font-medium text-2xl lg:w-1/3 mb-page lg:mb-0",
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
            {!columns && <Divider className="my-48" />}
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
      href={href}
      {...attrs}
    >
      {children}
    </a>
  );
};

export const TimeStamp = ({ className, hideDot, subtle, time }) => (
  <time
    className={cn(
      "font-normal",
      subtle && "text-primary-50",
      className || "text-sm"
    )}
  >
    {time}
  </time>
);

export const Dot = ({ subtle, border }) => (
  <span
    aria-hidden
    className={cn(
      "absolute top-1/2 -left-16 -translate-x-1/2 -translate-y-1/2 z-10",
      "h-12 w-12 rounded-full",
      border && "bg-ground border-2",
      !subtle && !border && "bg-secondary",
      !subtle && border && "border-secondary-50",
      subtle && !border && "bg-primary-75",
      subtle && border && "border-primary-25"
    )}
  />
);
