import cn from "classnames";

const CALLOUT_COLORS = {
  default: "bg-primary-05 border-primary-25",
  info: "bg-secondary-05 border-info-10",
  positive: "bg-positive-05 border-positive-25",
  warning: "bg-warning-05 border-warning-25",
};

const Callout = ({ children, className, color = "default" }) => (
  <div className={cn("p-24 border rounded", CALLOUT_COLORS[color], className)}>
    {children}
  </div>
);

export default Callout;
