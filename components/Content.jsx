import cn from "classnames";

const Content = ({ children, className, py = "py-[var(--page-padding)]" }) => {
  const classes = cn("px-[var(--page-padding)] mx-auto", py, className);

  return <div className={classes}>{children}</div>;
};

export default Content;
