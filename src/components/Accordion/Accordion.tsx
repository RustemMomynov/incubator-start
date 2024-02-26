import React from "react";

const Accordion = () => {
  return (
    <div style={{ color: "white" }}>
      <AccordionTitle />
      <AccordionBody />
    </div>
  );
};

const AccordionTitle = () => {
  return <div className="accordion__title">Menu</div>;
};

const AccordionBody = () => {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
};

export default Accordion;
