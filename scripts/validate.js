"use strict";
const validateString = (valor) => {
  // ternario -> abreviacion del if else
  let response = valor.length > 3 ? true : false; // signo ? es lo verdadero los : es lo falso
  return response;
};
const validateAvg = (num) => {
  let response = num >= 0 && num <= 5 ? true : false;
  return response;
};

const checkAvg = (value) => {
  let result = value >= 3 && value <= 5 ? "Aprobado" : "Reprobado";
  return result;
};

export { validateString, validateAvg as vAvg, checkAvg }; // exportar las funciones con alias de Avg
const edadP = (value) => {
  let edad = value >= 18 && value <= 90 ? "Profesor" : "No c";
  return edad;
};
export { edadP };
