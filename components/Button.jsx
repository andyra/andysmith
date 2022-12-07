import cn from "classnames";

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
    "flex items-center gap-8 px-16 w-fit h-48 rounded-full border-2 font-normal text-base transition",
    color === "secondary" &&
      "border-secondary-25 bg-secondary-05 hover:border-secondary text-secondary",
    color === "tertiary" &&
      "border-tertiary-50 hover:border-tertiary bg-tertiary-10 text-tertiary",
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
