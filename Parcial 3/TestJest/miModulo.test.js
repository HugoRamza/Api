// miModulo.test.js
const suma = require('./miModulo');

test('suma 1 + 2 para obtener 3', () => {
  expect(suma(1, 2)).toBe(3);
});
