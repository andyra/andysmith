import cn from "classnames";
import styled from "styled-components";
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

export const Section = ({ children, className, title }) => (
  <section className={cn("py-lg border-b", className)}>
    <h2 className="text-xl font-light mb-base">{title}</h2>
    {children}
  </section>
);

export const SubSection = ({ children, count, title }) => (
  <>
    <h2 className="font-bold font-sans mb-24 relative">
      {count && (
        <span className="absolute -left-12 top-2 -translate-x-full font-normal text-sm opacity-50 hidden xs:block">
          {count}
        </span>
      )}
      {title}
    </h2>
    {children}
  </>
);

export const WideDude = ({
  as = "div",
  children,
  className,
  maxWidth = "xl",
}) => {
  const StyledDude = styled.div``;

  const classes = cn(
    "relative left-1/2 -translate-x-1/2",
    BREAKPOINTS[maxWidth].width,
    "max-w-full lg:max-w-[calc(100vw-6vmax-320px)]",
    className
  );

  return (
    <StyledDude className={classes} as={as}>
      {children}
    </StyledDude>
  );
};

export const H2 = ({ children, count }) => (
  <h2 className="font-medium font-sans opacity-60 mb-24 relative">
    {count && (
      <span className="absolute -left-12 top-2 -translate-x-full text-sm opacity-50">
        {count}
      </span>
    )}
    {children}
  </h2>
);

export const Divider = ({ className }) => (
  <hr className={cn("border-t-2 border-primary opacity-10", className)} />
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
  <p
    className={cn("pl-12 border-l-2 text-sm", CALLOUT_COLORS[color], className)}
  >
    {children}
  </p>
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

export const Figure = ({ caption, children, className, contentClassName }) => (
  <figure className={cn("space-y-8 mb-em", className)}>
    <div
      className={cn(
        "rounded-md border-2 relative overflow-hidden",
        contentClassName
      )}
    >
      {children}
    </div>
    {caption && (
      <figcaption className="text-xs text-primary-75 text-center">
        {caption}
      </figcaption>
    )}
  </figure>
);

export const Highlight = ({ className }) => (
  <div
    className={cn(
      "border-2 border-dashed bg-highlight-05 border-highlight-75 rounded-md absolute ",
      className
    )}
  />
);
