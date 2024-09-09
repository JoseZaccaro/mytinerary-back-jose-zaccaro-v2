
import swaggerJsdoc from 'swagger-jsdoc';
import * as swaggerUi from 'swagger-ui-express';
import * as YAML from 'yaml';
import fs from 'fs';
// import swaggerFile from 'swagger.yml';
const file = fs.readFileSync('./swagger.yml', 'utf8')

const swaggerFile = YAML.parse(file);

// const options = {
//     definition: {
//         openapi: '3.0.0',
//         info: {
//             title: 'Swagger Express API',
//             version: '1.0.0',
//             description: 'A Express API with Swagger documentation',
//         },
//         servers: [
//             {
//                 url: 'http://localhost:3000/api',
//                 description: 'Local server'
//             },
//             {
//                 url: 'https://mytinerary-backend.onrender.com/api',
//                 description: 'Heroku server'
//             }
//         ],
//         tags: [
//             {
//                 name: "User",
//                 description: "User routes"
//             },
//             {
//                 name: "City",
//                 description: "City routes"
//             },
//             {
//                 name: "Authentication",
//                 description: "Authentication routes"
//             }
//         ]


//     },

// };

// const specs = swaggerJsdoc(options);

export {
    // specs,
    swaggerUi,
    swaggerFile
};

