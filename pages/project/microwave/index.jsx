import cn from "classnames";
import Content from "components/Content";

// Subcomponents
// ----------------------------------------------------------------------------

const SensorCooking = ({}) => {
  const BUTTONS = [
    "Popcorn",
    "Sensor reheat",
    "Custom Help",
    "Fresh vegetables",
    "Rice",
    "Baked potatoes",
    "Ground meat",
    "Poultry",
    "Fish/ seafood",
    "Frozen entrees",
    "Frozen snacks",
    "Frozen vegetables"
  ];

  return (
    <section className="bg-gray-300">
      <h3 className="text-lg italic py-16 text-green-800">Sensor Cooking</h3>
      <ul className="grid grid-cols-3 leading-none">
        {BUTTONS.map(label => (
          <li
            className="flex items-center justify-center py-12 px-24 relative"
            key={label}
          >
            <span
              className={cn(
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                label === "Custom Help"
                  ? "h-56 w-56 border-4 border-white"
                  : "h-20 w-20 bg-white"
              )}
            />
            <span className="relative">{label}</span>
          </li>
        ))}
        <li />
      </ul>
    </section>
  );
};

const MoreFromYourMicrowave = ({}) => {
  const BUTTONS = [
    "Breakfast Bar",
    "Lunch on the Run",
    "One Dish Dinners",
    "Super Defrost",
    "Compu Defrost",
    "Beverage Center"
  ];

  return (
    <section>
      <h3 className="text-lg italic py-16 text-green-800">
        More from your Microwave
      </h3>
      <ul className="grid grid-cols-3 leading-none">
        {BUTTONS.map((label, index) => (
          <li
            className={cn(
              "flex items-center justify-center py-8 px-24 italic",
              index < 3 ? "bg-gray-300" : "border-b-2 border-gray-300",
              index % 3 !== 2
                ? index < 3
                  ? "border-r-2 border-white"
                  : "border-r-2 border-gray-300"
                : ""
            )}
            key={label}
          >
            {label}
          </li>
        ))}
        <li />
      </ul>
    </section>
  );
};

const NumberPad = ({}) => {
  const buttonClasses = cn(
    "flex flex-col items-center justify-center py-8 px-32 border-b border-gray-300 relative"
  );

  return (
    <section className="pt-40 px-12">
      <ul className="grid grid-cols-5 font-sans border-t border-gray-300">
        {[...Array(10)].map((el, index) => (
          <li
            className="flex items-center justify-center p-8 border-b border-gray-300 text-2xl"
            key={index}
          >
            {`${index + 1}`.charAt(`${index + 1}`.length - 1)}
          </li>
        ))}
      </ul>
      <ul className="grid grid-cols-3">
        {["Kitchen Timer", "Clock", "Minute Plus", "Power Level"].map(label => (
          <li className={buttonClasses} key={label}>
            {label}
          </li>
        ))}
        <li className={buttonClasses}>
          Stop
          <br />
          Clear
          <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-1/2 h-2 bg-primary" />
        </li>
        <li className={buttonClasses}>
          <div className="text-lg text-green-800 text-center">Start</div>
          Touch On
          <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-1/2 h-2 bg-primary" />
        </li>
      </ul>
    </section>
  );
};

// Component
// ----------------------------------------------------------------------------

const Microwave = ({}) => {
  return (
    <Content>
      <div className="w-480 font-serif text-center">
        <SensorCooking />
        <MoreFromYourMicrowave />
        <NumberPad />
      </div>
    </Content>
  );
};

export default Microwave;
