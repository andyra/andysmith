import cn from "classnames";

const Content = ({ children, className, py = "py-vbig" }) => {
  const classes = cn("px-vbig mx-auto", py, className);

  return <div className={classes}>{children}</div>;
};

export default Content;
