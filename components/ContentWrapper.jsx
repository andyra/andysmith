import cn from "classnames";

const ContentWrapper = ({ children, className }) => {
  const classes = cn(
    "px-[var(--page-padding)] lg:mr-[var(--nav-width)]",
    className
  );

  return <div className={classes}>{children}</div>;
};

export default ContentWrapper;
