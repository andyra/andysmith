import cn from "classnames";

const Divider = ({ className }) => (
  <hr className={cn("border-t-2 border-primary opacity-10", className)} />
);

export default Divider;
