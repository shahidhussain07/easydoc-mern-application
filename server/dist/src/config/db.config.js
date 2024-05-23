"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
// import env from "./env.config"
const sequelize = 
// env.NODE_ENV === "test" || env.NODE_ENV === "development"
// 	?
new sequelize_typescript_1.Sequelize("main", "shahid", "123456", {
    host: "localhost",
    dialect: "postgres",
    logging: false,
});
// : new Sequelize("postgres://shahid:123456@localhost:5432/main", {
// 		dialect: "postgres",
// 		// dialectOptions: {
// 		// 	ssl: {
// 		// 		require: true,
// 		// 		rejectUnauthorized: false,
// 		// 	},
// 		},
// 		logging: false,
//   })
exports.default = sequelize;
