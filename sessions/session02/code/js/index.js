/* S02 — Módulo de Combustible
   - Control de flujo: if/switch, while
   - Funciones (declarada vs. expresión)
   - Closure (factory) para encapsular estado
   - Sin rest/spread, sin métodos de arrays
*/

// ===== Factory con closure =====
function crearDeposito(capacidadMax, nivelInicial) {
  const max = capacidadMax;
  let nivel = nivelInicial;

  // Asegura límites 0..max
  function limitar() {
    if (nivel < 0) { nivel = 0; }
    if (nivel > max) { nivel = max; }
  }

  // Devuelve API pública; estado privado queda capturado (closure)
  return {
    cargar: function (q) {
      // coerción básica defensiva
      const cant = Number(q);
      if (cant !== cant) { cant = 0; } // NaN check
      nivel = nivel + cant;
      limitar();
    },
    consumir: function (q) {
      const cant = Number(q);
      if (cant !== cant) { cant = 0; }
      nivel = nivel - cant;
      limitar();
    },
    nivel: function () {
      return nivel;
    },
    capacidad: function () {
      return max;
    },
    estado: function () {
      let ratio = 0;
      if (max > 0) {
        ratio = nivel / max;
      }
      // switch(true) para tramos
      switch (true) {
        case (ratio >= 0.5): return "VERDE";
        case (ratio >= 0.2): return "ÁMBAR";
        default: return "ROJO";
      }
    },
    emergencia: function () {
      // consume en pasos fijos hasta 0
      const paso = 5;
      while (nivel > 0) {
        nivel = nivel - paso;
        if (nivel < 0) { nivel = 0; }
      }
    },
    reiniciar: function () {
      nivel = nivelInicial;
      limitar();
    }
  };
}

// ===== Instancia de depósito =====
const deposito = crearDeposito(100, 40); // capacidad 100, nivel inicial 40

// ===== Referencias DOM =====
const elCapMax = document.getElementById("capMax");
const elNivel = document.getElementById("nivel");
const elPorcentaje = document.getElementById("porcentaje");
const elEstado = document.getElementById("estado");
const elBar = document.getElementById("bar");
const elMaxLabel = document.getElementById("maxLabel");
const elMensaje = document.getElementById("mensaje");

const btnMas10 = document.getElementById("btnMas10");
const btnMenos10 = document.getElementById("btnMenos10");
const btnEmergencia = document.getElementById("btnEmergencia");
const btnReiniciar = document.getElementById("btnReiniciar");

// ===== Render de UI =====
function actualizarUI() {
  const max = deposito.capacidad();
  const niv = deposito.nivel();
  let ratio = 0;
  if (max > 0) {
    ratio = niv / max;
  }
  const pct = Math.round(ratio * 100);
  const estado = deposito.estado();

  elCapMax.textContent = String(max);
  elNivel.textContent = String(niv);
  elPorcentaje.textContent = String(pct) + "%";
  elEstado.textContent = estado;
  elMaxLabel.textContent = String(max);

  // Color por estado
  let colorClase = "bg-emerald-600";
  if (estado === "ÁMBAR") {
    colorClase = "bg-amber-500";
  } else if (estado === "ROJO") {
    colorClase = "bg-rose-600";
  }

  // Actualiza barra (clases y anchura)
  elBar.className = "h-4 " + colorClase + " transition-all";
  elBar.style.width = String(pct) + "%";

  // Mensaje informativo
  if (estado === "ROJO") {
    elMensaje.textContent = "⚠️ Nivel bajo. Carga recomendada.";
  } else if (estado === "ÁMBAR") {
    elMensaje.textContent = "ℹ️ Nivel moderado. Vigila el consumo.";
  } else {
    elMensaje.textContent = "✅ Nivel óptimo.";
  }
}

// ===== Eventos =====
btnMas10.onclick = function () {
  deposito.cargar(10);
  actualizarUI();
};

btnMenos10.onclick = function () {
  deposito.consumir(10);
  actualizarUI();
};

btnEmergencia.onclick = function () {
  deposito.emergencia();
  actualizarUI();
};

btnReiniciar.onclick = function () {
  deposito.reiniciar();
  actualizarUI();
};

// ===== Primera pintura =====
actualizarUI();
