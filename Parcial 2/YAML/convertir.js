const fs = require('fs');
const yaml = require('js-yaml');

try {
    // Lee el contenido del archivo YAML
    const datosYAML = fs.readFileSync('datos.yaml', 'utf8');

    // Convierte el contenido YAML a un objeto JavaScript
    const datosObjeto = yaml.load(datosYAML);

    // Muestra el objeto JavaScript resultante
    console.log(datosObjeto);
} catch (error) {
    console.error('Error al leer el archivo YAML:', error);
}
