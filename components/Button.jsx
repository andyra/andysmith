import cn from "classnames";

const BUTTON_COLORS = {
  secondary: {
    default:
      "border-secondary-50 hover:border-secondary bg-secondary-10 text-secondary",
    active: "border-primary-75 bg-secondary text-ground",
  },
  highlight: {
    default:
      "border-highlight-50 hover:border-highlight bg-highlight-10 text-highlight",
    active: "border-primary-75 bg-highlight text-ground",
  },
};

const Button = ({
  active,
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
    "flex items-center gap-8 px-16 w-fit min-h-48 rounded-md border-b-2 border-r-2 font-normal text-base transition",
    "hover:scale-105",
    active ? BUTTON_COLORS[color].active : BUTTON_COLORS[color].default,
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
