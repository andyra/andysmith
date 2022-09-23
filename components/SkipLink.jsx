import styled from "styled-components";

const StyledSkipLink = styled.a.attrs({
  className: "absolute top-0 bg-primary text-ground p-8"
})`
  left: -999rem;
  z-index: 100;

  &:focus-visible {
    left: 0;
  }
`;

const SkipLink = () => (
  <StyledSkipLink href="#main">Skip to Content</StyledSkipLink>
);

export default SkipLink;
