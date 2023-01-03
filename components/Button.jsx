import cn from "classnames";

const BUTTON_COLORS = {
  indigo: "border-indigo-25 bg-indigo-05 hover:border-indigo text-indigo",
  green: "border-green-50 hover:border-green bg-green-10 text-green",
  orange: "border-orange-50 hover:border-orange bg-orange-10 text-orange",
};

const Button = ({
  children,
  className,
  color = "indigo",
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
    "flex items-center gap-8 px-16 w-fit h-48 rounded-full border-2 font-normal text-base transition",
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
