import React from "react";

const Accordion = (props: any) => {
  return (
    <div style={{ color: "white" }}>
      <AccordionTitle title={props.titleValue} />
      <AccordionBody />
    </div>
  );
};

const AccordionTitle = (props: any) => {
  return <div className="accordion__title">{props.title}</div>;
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
