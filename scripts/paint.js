"use strict";
import { vAvg, checkAvg, edadP } from "./validate.js"; // se importa el checkAvg desde "la ubicacion del modulo js"
const cardE = document.getElementById("cardsEstudiantes");
const students = [];

const paintCard = (typ) => {
  typ = typ.toUpperCase(); //esto vuelve todo a mayuscula
  const fragment = document.createDocumentFragment();
  const templateStudent = document.querySelector("#templateEstudiante").content;

  if (typ === "ESTUDIANTE") {
    for (let i of students) {
      // recorrer el array students con una variable del for
      const cloneTemp = templateStudent.cloneNode(true);
      cloneTemp.querySelector(".title-card").innerHTML =
        "Datos del <i>Estudiante</i>";
      cloneTemp.querySelector(
        ".data-card"
      ).innerHTML = `NOMBRE: ${i.nombre.toUpperCase()} APELLIDOS: ${i.apellidos.toUpperCase()}`;
      cloneTemp.querySelector(
        ".text-promedio"
      ).innerHTML = `EL PROMEDIO ES: ${i.promedio}`;
      cloneTemp.querySelector(".text-aprobado").innerHTML = `${checkAvg(
        i.promedio
      )}`;
      fragment.appendChild(cloneTemp);
    }
  } else {
    // tarea no entendi profesor xd
  }
  cardE.appendChild(fragment);
};

const addEstudents = (name, lastName, avg) => {
  //objeto literal de js
  //objetos tienen atributos o metodos
  let student = {
    nombre: name,
    apellidos: lastName,
    promedio: avg,
  };
  students.push(student);
  modalAlert("Se agrego Estudiante.");
};
const modalAlert = (cad) => {
  const alerta = document.createElement("div");
  const texto = document.createElement("p");
  const img = document.createElement("img");
  img.src = "./img/cancelar.png";
  img.className = "close";
  texto.setAttribute("class", "textAlert");
  alerta.setAttribute("id", "alerta");
  alerta.setAttribute("class", "alerta");
  texto.innerHTML = `<strong>${cad}</strong>`;
  alerta.appendChild(img);
  alerta.appendChild(texto);
  document.body.appendChild(alerta);
  img.onclick = function () {
    document.getElementById("alerta").remove();
  };
};
export { paintCard, addEstudents, modalAlert }; // fragment mini DOM
//queryselector
//

////////////////////////////////////////////////////////////////
/*PROFESORES*/

const cardP = document.getElementById("cardsProfesores");
const profes = [];

const paintCardprofes = (typ) => {
  typ = typ.toUpperCase(); //esto vuelve todo a mayuscula
  const fragmento = document.createDocumentFragment();
  const templateProfesor = document.querySelector("#templateProfesor").content;

  if (typ === "PROFESOR") {
    for (let i of profes) {
      // recorrer el array profes con una variable del for
      const cloneTemp = templateProfesor.cloneNode(true);
      cloneTemp.querySelector(".title-card").innerHTML ="Datos del <i>Profesor</i>";
      cloneTemp.querySelector(".data-card").innerHTML = `NOMBRE: ${i.nombre.toUpperCase()} APELLIDOS: ${i.apellidos.toUpperCase()}`;
      cloneTemp.querySelector(".text-promedio").innerHTML = `LA EDAD ES: ${i.edad}`;
      cloneTemp.querySelector(".text-aprobado").innerHTML = `Profesion: ${edadP(i.edad)}`;
      fragmento.appendChild(cloneTemp);
    }
  } else {
    // tarea no entendi profesor xd
  }
  cardP.appendChild(fragmento);
};

const addProfesores = (name, lastName, edad) => {
  //objeto literal de js
  //objetos tienen atributos o metodos
  let profe = {
    nombre: name,
    apellidos: lastName,
    edad: edad,
  };
  profes.push(profe);
  modalAlert("Se agrego profesor."); //modificar para el modal
};
const arrProfe = () => {
  console.log(profes);
  return profes;
};
export { paintCardprofes, addProfesores, arrProfe };
