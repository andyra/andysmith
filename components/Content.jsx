import cn from "classnames";

const Content = ({
  children,
  className,
  py = "py-[var(--page-padding)]",
  maxWidth = "max-w-screen-2xl"
}) => {
  const classes = cn(
    "px-[var(--page-padding)] lg:mr-[var(--nav-width)]",
    py,
    maxWidth,
    className
  );

  return <div className={classes}>{children}</div>;
};

export default Content;
