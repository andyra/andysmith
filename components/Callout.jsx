import cn from "classnames";

const CALLOUT_COLORS = {
  default: "bg-primary-05 border-primary-25",
  info: "bg-secondary-05 border-info-10",
  positive: "bg-secondary-05 border-secondary-25",
  warning: "bg-highlight-05 border-highlight-25",
};

const Callout = ({ children, className, color = "default" }) => (
  <div className={cn("p-24 border rounded", CALLOUT_COLORS[color], className)}>
    {children}
  </div>
);

export default Callout;
