import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="divide-y divide-solid divide-gray my-5">
      <div
        className="flex justify-between"
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <button className="text-left text-2xl">{title}</button>
        <div className="divide-y divide-solid divide-gray my-5">
          <div></div>
          <div></div>
        </div>
        <button className="text-xl lg:text-2xl min-w-max">{isActive ? "-" : "+"}</button>
      </div>
      {isActive && (
        <div className="accordion-content">
          <h1 className="text-start text-2xl my-4">{content}</h1>
        </div>
      )}
    </div>
  );
};

export default Accordion;
