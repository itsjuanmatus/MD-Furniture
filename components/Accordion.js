import Link from "next/link";
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
        <h2 className="text-2xl">
          <button>{title}</button>
        </h2>
        <div className="divide-y divide-solid divide-gray my-5">
          <div></div>
          <div></div>
        </div>
        <button className="text-2xl">{isActive ? "-" : "+"}</button>
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
