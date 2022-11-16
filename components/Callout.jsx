import cn from "classnames";

const CALLOUT_COLORS = {
  default: "bg-primary-10 border-primary-25",
  info: "bg-secondary-05 border-info-10",
  positive: "bg-positive-10 border-positive-25",
  warning: "bg-warning-10 border-warning-25",
};

const Callout = ({ children, className, color = "default" }) => (
  <div className={cn("p-24 border rounded", CALLOUT_COLORS[color], className)}>
    {children}
  </div>
);

export default Callout;
