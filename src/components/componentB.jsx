import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "../models/Contacto";

const ComponentB = ({ contacto }) => {
  return (
    <div>
      <h2>Nombre: {contacto.Nombre}</h2>
      <h2>Apellido: {contacto.Apellido} </h2>
      <h2>Email: {contacto.Email}</h2>
      <h2>
        Estado:{" "}
        {contacto.Conectado ? "Contacto En Linea" : "Contacto No Disponible"}
      </h2>
    </div>
  );
};

ComponentB.propTypes = { contacto: PropTypes.instanceOf(Contacto) };

export default ComponentB;
