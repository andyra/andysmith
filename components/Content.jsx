import cn from "classnames";
import styled from "styled-components";

const StyledContent = styled.div``;

const Content = ({ as, children, className, py = "py-vbig" }) => (
  <StyledContent as={as} className={cn("px-vbig mx-auto", py, className)}>
    {children}
  </StyledContent>
);

export default Content;
