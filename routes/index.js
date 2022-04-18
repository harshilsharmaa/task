const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const {userRoutes} = require("../api/user");


const options = {


	definition: {
		openapi: "3.0.0",
		info: {
			title: "Shopping Cart API",
			version: "1.0.0",
			description: "A simple Express Shoping Cart API",
      contact:{
        email: "harshilsharmaa0@gmail.com"
      }
		},
    host: process.env.DOMAIL_URL,
    basePath: "/api",
    produces: ["application/json"],
    schemes: ["https",'http'],
    securityDefinitions: {
      JWT: {
        type: "apiKey",
        in: "header",
        name: "Authorization",
      },
      API_KEY: {
        type: "apiKey",
        in: "header",
        name: "Auth-Token",
      },
    },
		servers: [
			{
				url: "http://localhost:4000",
			},
		],
	},
  apis: ["./api/**/*.routes.js"],


};


const specs = swaggerJsDoc(options);




const initialize = (app) => {


  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

  app.use("/api", userRoutes);
  

};

module.exports = { initialize };