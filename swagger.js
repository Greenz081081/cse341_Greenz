const swaggerAutogen = require('swagger-autogen')()

const doc = {
  info: {
    title: 'Emerald API',
    description: 'Temple API'
  },
  host: 'localhost:8080',
  schemes: ['http']
}
const outputFile = './swagger.json'
const endpointsFiles = ['./routes/index.js']
// const endpointsFiles = ['./path/endpointsUser.js', './path/endpointsBook.js']

/* NOTE: if you use the express Router, you must pass in the
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc)

// swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
//   require('./routes/index') // Your project's root file
// })
