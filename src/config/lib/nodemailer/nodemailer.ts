console.log(
  'process.env.NODEMAILER_AUTH_USER:',
  process.env.NODEMAILER_AUTH_USER
)

console.log(
  'process.env.NODEMAILER_AUTH_PASS:',
  process.env.NODEMAILER_AUTH_PASS
)

export default {
  host: process.env.NODEMAILER_HOST,
  port: process.env.NODEMAILER_PORT,
  auth: {
    user: process.env.NODEMAILER_AUTH_USER,
    pass: process.env.NODEMAILER_AUTH_PASS
  },
  secure: false
  // logger: true,
  // debug: true
}
