// Importación de módulos necesarios para las pruebas
import { expect } from 'chai';           // Importa expect de Chai para realizar aserciones
import test from 'node:test';            // Importa el módulo test para definir casos de prueba individuales
import { maximo } from '../src/maximo.js'; // Importa la función maximo del archivo especificado para ser probada

// Define un caso de prueba utilizando la función 'test' del módulo 'node:test'
test('devuelve el máximo de tres números', () => {
    // Utiliza expect de Chai para hacer las aserciones
    expect(maximo(1, 2, 3)).to.equal(3, "El máximo de 1, 2, 3 debería ser 3");
    expect(maximo(-1, -2, -3)).to.equal(-1, "El máximo de -1, -2, -3 debería ser -1");
    expect(maximo(0, 0, 0)).to.equal(0, "El máximo de 0, 0, 0 debería ser 0");
    expect(maximo(5, 1, 5)).to.equal(5, "El máximo de 5, 1, 5 debería ser 5");
});
