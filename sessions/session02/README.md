# 🚀 S02 — Estructuras de control

## 🌌 Contexto

Antes de despegar hacia Marte, la nave debe gestionar el **combustible** con seguridad. Programaremos un **módulo de depósito** que permita:

- **Cargar** combustible
- **Consumir** combustible
- **Simular emergencia** (consumo rápido hasta 0)

Todo usando **control de flujo** (`if/switch`, `while`) y un **factory (closure)** que encapsule el estado del depósito. Sin listas ni arrays.

---

## 📚 Contenidos de la sesión

### 🔧 Fundamentos de control y funciones

- **Control de flujo**: `if` / `else`, `switch`
- **Bucles**: `while` (para emergencia)
- **Funciones**: función **declarada** vs **expresión**
- **Ámbito**: **closure** para encapsular estado (factory simple)

---

## 🧩 Qué haremos

1. Crear un **factory** `crearDeposito(capacidadMax, nivelInicial)` que **encapsula** el nivel de combustible.
2. Devolver métodos:
   - `cargar(q)`, `consumir(q)`, `nivel()`, `estado()`, `emergencia()`, `reiniciar()`
3. Reglas con `if/switch`:
   - No bajar de `0` ni superar `capacidadMax`
   - Estado visual:
     - `VERDE` si nivel ≥ 50%
     - `ÁMBAR` si 20% ≤ nivel < 50%
     - `ROJO` si nivel < 20%
4. **Emergencia**: un `while` que consume en pasos (p. ej., de 5 en 5) hasta 0.

---

## 🛠️ Archivos y pautas

- Archivos: `index.html` + `index.js` (+ Tailwind CDN solo para estilos rápidos).
- Mantén el código **lineal y claro**: sin funciones avanzadas ni listas.

---

## 🧪 Pasos (code-along)

1. Implementar `crearDeposito` con estado privado `nivel`.
2. Añadir `cargar(q)` y `consumir(q)` con límites (0…capacidad).
3. Añadir `estado()` con `switch (true)` o con `if/else`.
4. Añadir `emergencia()` con `while` → nivel a 0 por pasos.
5. Conectar 4 botones: **+10**, **−10**, **Emergencia**, **Reiniciar** y refrescar UI.

> 💡 **Tip:** Primero que **funcione** (cargar/consumir/mostrar). Luego añade **estado** y **emergencia**.

---

## ✅ Criterios de éxito exprés

- El nivel **no** baja de `0` ni supera `capacidadMax`.
- El **estado** cambia correctamente (VERDE/ÁMBAR/ROJO).
- **Emergencia** deja el nivel en `0`.

---

## ⚠️ Errores comunes

- Olvidar **limitar** tras cargar/consumir.
- Calcular mal los umbrales del estado.
- No actualizar la UI después de cada acción.
