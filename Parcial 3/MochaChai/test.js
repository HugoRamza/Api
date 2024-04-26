// Se importa el módulo 'assert' que viene incorporado en Node.js. Este módulo se usa para realizar aserciones en las pruebas.
const assert = require('assert');

// Se define una suite de pruebas utilizando 'describe'. El primer argumento es un nombre o descripción de la suite de pruebas, en este caso 'Array'.
describe('Array', function() {

    // Dentro de la suite 'Array', se define una sub-suite para pruebas específicas del método 'indexOf()' de los arrays.
    describe('#indexOf()', function() {

        // Se define una prueba individual con 'it'. El primer argumento es una descripción de lo que debe hacer la prueba.
        // En este caso, la prueba verifica que el método 'indexOf()' debe retornar -1 cuando el valor buscado no está presente en el array.
        it('should return -1 when the value is not present', function() {

            // Se utiliza 'assert.equal' para comprobar que el resultado de [1,2,3].indexOf(4) es igual a -1.
            // Esto prueba que el método 'indexOf' funciona correctamente, ya que debería retornar -1 cuando el elemento no se encuentra en el array.
            assert.equal([1,2,3].indexOf(4), -1);
        });
    });
});
