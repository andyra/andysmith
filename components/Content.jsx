import cn from "classnames";
import slugify from "slugify";

const BREAKPOINTS = {
  xs: {
    width: "w-screen-xs",
    maxWidth: "max-w-screen-xs",
  },
  sm: {
    width: "w-screen-sm",
    maxWidth: "max-w-screen-sm",
  },
  md: {
    width: "w-screen-md",
    maxWidth: "max-w-screen-md",
  },
  lg: {
    width: "w-screen-lg",
    maxWidth: "max-w-screen-lg",
  },
  xl: {
    width: "w-screen-xl",
    maxWidth: "max-w-screen-xl",
  },
  "2xl": {
    width: "w-screen-2xl",
    maxWidth: "max-w-screen-2xl",
  },
  "3xl": {
    width: "w-screen-3xl",
    maxWidth: "max-w-screen-3xl",
  },
};

export const Section2 = ({ children, maxWidth = "md", title }) => {
  const containerClasses = cn(
    "py-lg border-b mx-auto",
    BREAKPOINTS[maxWidth].maxWidth
  );

  return (
    <section className="px-base">
      <div className={containerClasses}>
        <h2 className="text-xl font-bold">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export const H2 = ({ children, count }) => (
  <h2 className="font-medium font-base opacity-60 mb-24 relative">
    {count && (
      <span className="absolute -left-12 top-2 -translate-x-full text-sm opacity-50">
        {count}
      </span>
    )}
    {children}
  </h2>
);

export const WideDude = ({ children, className, py = true, width = "xl" }) => {
  const classes = cn(
    "relative left-1/2 -translate-x-1/2 max-w-[calc(100vw-3vmax)]",
    py && "pt-sm",
    BREAKPOINTS[width].width
  );

  return <div className={classes}>{children}</div>;
};

export const Divider = ({ className }) => (
  <hr className={cn("border-t-2 border-primary opacity-10", className)} />
);

// Note: Switches to stacked layout at `screen-lg`
export const Section = ({
  children,
  className,
  columns,
  contentClassName,
  headingClassName,
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
    "grid grid-cols-1 gap-page",
    "max-w-screen-xl mx-auto py-page border-b",
    columns && "lg:grid-cols-[1fr,2fr] lg:items-start",
    !columns && contentClassName
  );

  const headingClasses = cn(
    columns && "font-semibold text-2xl mb-page lg:mb-0 lg:sticky lg:top-96",
    !columns && "font-semibold text-3xl sm:text-5xl",
    headingClassName
  );

  return (
    <section className={classes} id={id}>
      <div className={containerClasses}>
        {title && (
          <>
            <h2 className={headingClasses}>
              {title}
              {titleActions}
            </h2>
            {!columns && <Divider className="my-48" />}
          </>
        )}
        <div className={contentClasses}>{children}</div>
      </div>
    </section>
  );
};

export const SubSection = ({ children, title }) => (
  <div className="space-y-16">
    <h3 className="font-medium text-lg">{title}</h3>
    {children}
  </div>
);

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

const CALLOUT_COLORS = {
  default: "text-primary border-primary-50",
  info: "text-secondary border-secondary-50",
  positive: "text-secondary border-secondary-50",
  warning: "text-highlight border-highlight-50",
};

export const Callout = ({ children, className, color = "default" }) => (
  <div className={cn("pl-12 border-l-2", CALLOUT_COLORS[color], className)}>
    {children}
  </div>
);

export const OrderedList = ({ children, className }) => (
  <ol className={cn("list-decimal space-y-2em", className)}>{children}</ol>
);

export const ListItem = ({ children, className, title }) => (
  <li className={cn("space-y-1/2em", className)}>
    <h3 className="font-semibold">{title}</h3>
    <div className="space-y-em">{children}</div>
  </li>
);

export const Figure = ({ caption, children, className }) => (
  <figure className={cn("space-y-8", className)}>
    <div className="rounded-md border-2 relative overflow-hidden">
      {children}
    </div>
    <figcaption className="text-xs text-primary-75 text-center">
      {caption}
    </figcaption>
  </figure>
);

export const Highlight = ({ className }) => (
  <div
    className={cn("border-2 border-highlight rounded-md absolute ", className)}
  />
);
