import cn from "classnames";

// • Sections are outermost wrappers inside the <main> element.
// • Container is the inner element that sets max-width, columns, vertical spacing, etc.
//
// • Large headers are lg, 1 col.
// • Normal sections are md, 1 col.
// • Double columns are xl, 2 col.
//
// <section className="px-page py-page">
//   <Container cols={1}>
//     ...
//   </Container>
// </section>

const WIDTHS = {
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
};

const Container = ({ children, className, width = "md" }) => {
  const classes = cn(
    "grid grid-cols-1 gap-page mx-auto",
    WIDTHS[width],
    className
  );

  return <div className={classes}>{children}</div>;
};

export default Container;
