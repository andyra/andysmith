import cn from "classnames";

const CALLOUT_COLORS = {
  default: "bg-primary-05 border-primary-25",
  info: "bg-indigo-05 border-info-10",
  positive: "bg-green-05 border-green-25",
  warning: "bg-orange-05 border-orange-25",
};

const Callout = ({ children, className, color = "default" }) => (
  <div className={cn("p-24 border rounded", CALLOUT_COLORS[color], className)}>
    {children}
  </div>
);

export default Callout;
