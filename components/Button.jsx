import cn from "classnames";

const BUTTON_COLORS = {
  secondary:
    "border-secondary-50 hover:border-secondary bg-secondary-10 text-secondary",
  highlight:
    "border-highlight-50 hover:border-highlight bg-highlight-10 text-highlight",
};

const Button = ({
  children,
  className,
  color = "secondary",
  href,
  newTab,
  ...props
}) => {
  const attrs = {};
  if (newTab) {
    attrs["target"] = "_blank";
    attrs["rel"] = "noopener noreferrer";
  }

  const classes = cn(
    "flex items-center gap-8 px-16 w-fit h-48 rounded-md border-b-2 border-r-2 font-normal text-base transition",
    "hover:scale-105",
    BUTTON_COLORS[color],
    className
  );

  return href ? (
    <a className={classes} href={href} {...attrs} {...props}>
      {children}
    </a>
  ) : (
    <button className={classes} type="button" {...attrs} {...props}>
      {children}
    </button>
  );
};

export default Button;
