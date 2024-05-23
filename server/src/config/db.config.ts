import { Sequelize } from "sequelize-typescript"
// import env from "./env.config"

const sequelize =
	// env.NODE_ENV === "test" || env.NODE_ENV === "development"
	// 	?
	new Sequelize("main", "shahid", "123456", {
		host: "localhost",
		dialect: "postgres",
		logging: false,
	})
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

export default sequelize
