import Link from "next/link";
import Content from "components/Content";
import Divider from "components/Divider";

const Project = () => {
  return (
    <>
      <header className="space-y-[2vmax] py-[8vmax] bg-secondary-25">
        <Content className="max-w-screen-2xl space-y-[2vmax]">
          <h1 className="font-extrabold text-3xl md:text-5xl">Project Name</h1>
          <Divider />
          <p className="text-lg md:text-xl max-w-prose">
            Maecenas at aliquam mi, sit amet condimentum magna. Vestibulum
            eleifend posuere est id consectetur. Mauris ac vulputate est. Sed
            auctor neque vel dui euismod, in lacinia est tempor.
          </p>
          <p className="text-lg opacity-50">
            Sketch • Figma • Bla • Stakeholders
          </p>
        </Content>
      </header>
      <Content className="max-w-screen-2xl space-y-vbig">
        {[...Array(8)].map((e, i) => (
          <>
            <section className="space-y-vbig" key={i}>
              <p className="font-medium text-lg md:text-2xl max-w-screen-lg">
                <span className="block font-normal text-lg text-tertiary opacity-75">
                  0{i + 1}.
                </span>
                How can we show non-binary relationships within a hierarchical
                layout?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-48">
                <figure className="h-256 w-full bg-secondary-25" />
                <div className="space-y-8">
                  <h3 className="font-semibold">
                    Nulla facilisi. Nam laoreet lacinia enim.
                  </h3>
                  <p>
                    Fusce convallis id augue nec efficitur. Proin porttitor,
                    tellus in lacinia bibendum, nulla massa posuere nibh, quis
                    placerat sem ligula eu arcu. Nullam ut eleifend risus.
                    Curabitur porttitor leo vitae scelerisque rutrum. Phasellus
                    quis tortor at est bibendum ultrices. Nullam gravida eget
                    sapien ut bibendum.
                  </p>
                </div>
              </div>
            </section>
            <Divider />
          </>
        ))}
      </Content>
      <footer className="bg-tertiary-10">
        <Content>Next Project</Content>
      </footer>
    </>
  );
};

export default Project;
