"use strict";
import { validateString, checkAvg, vAvg, edadP } from "./validate.js";
import { paintCard, addEstudents } from "./paint.js";
import { modalAlert } from "./paint.js";
import { paintCardprofes, addProfesores, arrProfe } from "./paint.js";

const btnAgregar = document.getElementById("btnAgregar");
const btnMostrar = document.getElementById("btnMostrar");
// generar eventos
/*
    1. Colocando el metodo(evento) o el nombre en el atributo onClick, onmouseover, onmouseout en el atributo de la etiqueta*/
// ejemplo
/* 
   function test(){
      alert("Hola wuenas"); 
    }

    2. Mediante propiedad

    */
/*
     3. mediante el evento addevent...
    */
const selector = document.getElementById("opcion");
selector.onclick = function () {
  const dato = document.getElementById("opcion").value;
  if (dato == "estudiante") {
    btnAgregar.onclick = function () {
      const name = document.getElementById("nombre").value;
      const lastName = document.getElementById("apellido").value;
      const avg = parseFloat(document.getElementById("promedio").value);
      const op = document.getElementById("opcion").value;

      //console.log(`${name} ${lastName} ${avg} ${option}`);

      if (validateString(name) && validateString(lastName) && op != 0) {
        if (!isNaN(avg) && vAvg(avg)) {
          addEstudents(name, lastName, avg);
          document.getElementById("form").reset();
          document.getElementById("templateEstudiante").reset();
          document.getElementById("templateProfesor").reset();
        } else {
          document.getElementById("promedio").value = "";
          modalAlert("Promedio Invalido");
        }
      } else {
        modalAlert("Datos Invalidos, revisar los datos.");
      }
    };
    btnMostrar.addEventListener("click", function () {
      paintCard("ESTUDIANTE");
    });
  }
  if (dato == "profesor") {
    const labEdad = document.getElementById("edadlab");
    const inpEdad = document.getElementById("edad");
    const labProm = document.getElementById("labpromed");
    const inpProm = document.getElementById("promedio");

    labEdad.style.display = "inline-block";
    inpEdad.style.display = "inline-block";
    labProm.style.display = "none";
    inpProm.style.display = "none";

    btnAgregar.onclick = function () {
      const name = document.getElementById("nombre").value;
      const lastName = document.getElementById("apellido").value;
      const edad = parseFloat(document.getElementById("edad").value);
      const op = document.getElementById("opcion").value;

      //console.log(`${name} ${lastName} ${avg} ${option}`);

      if (validateString(name) && validateString(lastName) && op != 0) {
        if (!isNaN(edad) && edadP(edad)) {
          addProfesores(name, lastName, edad);
          document.getElementById("form").reset();
          document.getElementById("templateEstudiante").reset();
          document.getElementById("templateProfesor").reset();
        } else {
          document.getElementById("edad").value = "";
          modalAlert("Edad Invalido");
        }
      } else {
        modalAlert("Datos Invalidos, revisar los datos.");
      }
    };
    btnMostrar.addEventListener("click", function () {
      paintCardprofes("PROFESOR");
    });
  } else {
  }
};

//////////////////////////////////////////////

/*      */
