> [!IMPORTANT]
> 
> 📂 **Exercises folder:**  
> [🔗 Open class exercises](https://github.com/oriolcortes/Exercises-JS/tree/main/sessions/session01)


# 🚀 S01 — Fundamentos + DOM inmediato

## 🌌 Introducción a la temática

En este curso usaremos una **narrativa gamificada** para hacer el aprendizaje más motivador y memorable.  
Aprender a programar puede ser como construir una nave: pieza por pieza, sistema por sistema.  
Por eso la temática elegida es **Mission: Red Planet** 🪐.

En cada sesión avanzaremos un paso en la preparación del **viaje a Marte**: revisaremos cabinas, activaremos sistemas, resolveremos problemas en la consola de la nave y, poco a poco, nos acercaremos al lanzamiento.  
La idea es que **cada concepto de JavaScript tenga una aplicación práctica** en el panel de control de la misión.

Hoy asumiremos el rol de ingenieros de la tripulación y aprenderemos a **actualizar el panel de control** de la nave con JavaScript.  
Nuestro primer sistema será **el contador de cabinas revisadas**.

---

## 📚 Contenidos de la sesión

### 🔧 Fundamentos de JS
- **Variables y tipos de datos**
  - `var`, `let`, `const`
  - Primitivos: `string`, `number`, `boolean`, `null`, `undefined`
  - 🧠 **Tip:** Usa `const` por defecto; cambia a `let` solo si necesitas reasignar.
- **Truthy / Falsy**
  - Qué valores se consideran verdaderos o falsos en contexto lógico.
- **Comparaciones**
  - `==` (coerción) vs `===` (estricto).
  - ⚠️ **Importante:** Prefiere `===` para evitar sorpresas.
- **Coerción de tipos**
  - Implícita y explícita (`Number()`, `String()`).
- **Operadores**
  - Aritméticos: `+`, `-`, `*`, `/`, `%`
  - Lógicos: `&&`, `||`, `!`
  - **Template literals**: \`Hola ${nombre}\`
  - `try/catch/finally` para manejar errores simples.

---

### 🖥️ Primer contacto con el DOM
- `document.getElementById()`
- `element.textContent` vs `element.innerHTML`

> 💡 **Tip:**  
> Usa `textContent` para insertar solo texto.  
> Usa `innerHTML` solo cuando necesites insertar etiquetas HTML.

---

### 🧪 Mini-demo: *Contador de cabinas*

> 👨‍🚀 **Escenario:**  
> Antes de que la nave pueda despegar hacia Marte, el equipo debe **revisar cada cabina de la tripulación**.  
> Cada revisión se registra en el **panel de control**, que muestra el número total de cabinas revisadas.  
> 
> Tu tarea es programar ese panel para que:
> - Cada vez que pulses el botón de **“Revisar cabina”**, el contador aumente en 1.
> - El nuevo valor se muestre en la pantalla de control.
> - Aparezca un **mensaje sencillo** que confirme que se ha revisado una cabina.
> - Al pulsar el botón de **“Reiniciar”**, el contador vuelva a `0` y el mensaje se borre.

**Reto:**
1. Crear una variable `contador` que empiece en `0`.
2. Mostrar el valor inicial en el HTML.
3. Aumentar el contador en `1` al pulsar el botón.
4. Mostrar un mensaje cada vez que se revise una cabina.
5. Añadir un botón para reiniciar el contador.

---

## 🛠️ Preparación
- Crea `index.html` y `script.js`
- Vincula el JS al HTML con `<script src="script.js"></script>`
- Usa **Tailwind (CDN)** para estilos simples.

---

## ✅ Objetivos
- Ver cómo una variable de JS puede cambiar y reflejarse en el HTML.
- Practicar la suma con `+` y reasignación de variables.
- Introducir el concepto de eventos (`onclick`).
- Empezar a modificar el DOM desde JavaScript.