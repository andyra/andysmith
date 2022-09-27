import Link from "next/link";
import Content from "components/Content";

const Project = () => {
  return (
    <>
      <header className="space-y-[2vmax] py-[8vmax] bg-ground-accent">
        <Content className="max-w-screen-2xl space-y-[2vmax]">
          <hr className="border-primary opacity-10" />
          <h1 className="font-extrabold text-5xl">Project Name</h1>
          <hr className="border-primary opacity-10" />
          <p className="text-2xl">
            Maecenas at aliquam mi, sit amet condimentum magna. Vestibulum
            eleifend posuere est id consectetur. Mauris ac vulputate est. Sed
            auctor neque vel dui euismod, in lacinia est tempor.
          </p>
          <hr className="border-primary opacity-10" />
        </Content>
      </header>
      <Content className="max-w-screen-2xl space-y-[8vmax]">
        {[...Array(8)].map((e, i) => (
          <section className="space-y-[2vmax]" key={i}>
            <hr className="border-primary opacity-10" />
            <p className="flex flex-col items-baseline gap-12 font-medium text-xl max-w-screen-md">
              <span className="block font-mono text-accent">0{i + 1}</span>
              Etiam quis nunc quis leo lobortis interdum. Aenean sit amet
              convallis magna. Suspendisse potenti?
            </p>
            <hr className="border-primary opacity-10" />
            <div className="grid grid-cols-2 gap-48">
              <figure className="h-256 w-full bg-primary opacity-10" />
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
        ))}
      </Content>
      <footer className="bg-ground-accent">
        <Content>Next Project</Content>
      </footer>
    </>
  );
};

export default Project;
