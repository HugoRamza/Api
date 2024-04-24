// Importación de módulos necesarios para las pruebas
import assert from 'node:assert';     // Importa el módulo assert para realizar afirmaciones en las pruebas
import test from 'node:test';         // Importa el módulo test para definir casos de prueba individuales
import { maximo } from '../src/maximo.js'; // Importa la función maximo del archivo especificado para ser probada

// Define un caso de prueba utilizando la función 'test' del módulo 'node:test'
test('devuelve el máximo de tres números', () => {
    // Utiliza assert.strictEqual para verificar que el resultado de maximo(1, 2, 3) sea igual a 3
    // El tercer argumento es un mensaje que se mostrará si la prueba falla, indicando lo que se esperaba
    assert.strictEqual(maximo(1, 2, 3), 3, "El máximo de 1, 2, 3 debería ser 3");

    // Prueba la función maximo con todos los números negativos para verificar que retorna el mayor (-1)
    assert.strictEqual(maximo(-1, -2, -3), -1, "El máximo de -1, -2, -3 debería ser -1");

    // Prueba la función maximo con todos los números iguales (0) para confirmar que maneja este caso correctamente
    assert.strictEqual(maximo(0, 0, 0), 0, "El máximo de 0, 0, 0 debería ser 0");

    // Prueba la función maximo con números repetidos para asegurarse de que retorna correctamente el mayor
    assert.strictEqual(maximo(5, 1, 5), 5, "El máximo de 5, 1, 5 debería ser 5");
});
