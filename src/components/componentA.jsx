import React from "react";
import { Contacto } from "../models/Contacto";
import ComponentB from "./componentB";

const ComponentA = () => {
  const contacto = new Contacto("juan", "romero", "juro@gmail.com", false);
  return (
    <div>
      <ComponentB contacto={contacto}></ComponentB>
    </div>
  );
};

export default ComponentA;
