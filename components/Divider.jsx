import cn from "classnames";

const Divider = ({ className }) => (
  <hr className={cn("border-primary opacity-10", className)} />
);

export default Divider;
