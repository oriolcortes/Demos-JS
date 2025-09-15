// S01 — Contador de cabinas (versión sin funciones ni if)
let contador = 0; // variable que cambia cada vez que se revisa una cabina

// Guardamos referencias a los elementos HTML
const elContador = document.getElementById("contador");
const btnSumar = document.getElementById("btnSumar");
const btnReset = document.getElementById("btnReset");
const elMensaje = document.getElementById("mensaje");

// Mostramos el valor inicial del contador
elContador.textContent = contador;

// Cuando hacemos clic en el botón de "Revisar cabina"
btnSumar.onclick = function () {
  contador = contador + 1; // suma 1
  elContador.textContent = contador; // muestra el nuevo valor
  elMensaje.textContent = "Cabina revisada 🚀"; // siempre muestra el mismo mensaje
};

// Cuando hacemos clic en el botón de "Reiniciar"
btnReset.onclick = function () {
  contador = 0; // vuelve a cero
  elContador.textContent = contador;
  elMensaje.textContent = ""; // borra el mensaje
};

// --- Ejemplo de coerción y comparaciones en consola ---
console.log("2" + 3); // "23" (coerción a string)
console.log("2" * 3); // 6 (coerción a number)
console.log("'5' == 5 ?", "5" == 5); // true (coerción)
console.log("'5' === 5 ?", "5" === 5); // false (estricto)
