const swaggerUI = require('swagger-ui-express');
const { SwaggerTheme, SwaggerThemeNameEnum } = require('swagger-themes');
const swaggerDocument = require('./swagger.json'); // Asegúrate de tener tu archivo swagger.json

const theme = new SwaggerTheme();
const options = {
  explorer: true,
  customCss: theme.getBuffer(SwaggerThemeNameEnum.DARK),
};

module.exports = { swaggerUI, swaggerDocument, options };
