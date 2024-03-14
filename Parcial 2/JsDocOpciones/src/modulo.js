// modulo.js

/**
 * Suma dos números.
 *
 * @param {number} a - El primer número.
 * @param {number} b - El segundo número.
 * @returns {number} La suma de los dos números.
 */
function sumar(a, b) {
  return a + b;
}

/**
 * Resta dos números.
 *
 * @param {number} a - El primer número.
 * @param {number} b - El segundo número.
 * @returns {number} La resta de los dos números.
 */
function restar(a, b) {
  return a - b;
}

module.exports = {
  sumar,
  restar,
};
