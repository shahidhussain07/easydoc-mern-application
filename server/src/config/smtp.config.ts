import { createTransport } from "nodemailer"

const transporter = createTransport({
	port: 465,
	host: "smtp.gmail.com",
	auth: {
		user: "sh604780@gmail.com",
		pass: "shahid786",
	},
	secure: true,
})

export default transporter
