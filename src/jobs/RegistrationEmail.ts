import Nodemailer from '../lib/nodemailer/Nodemailer'
import userRegistrationTemplate from '../templates/userRegistration'

export default {
  key: 'RegistrationEmail',
  async handle({ data }) {
    const { user } = data

    await Nodemailer.sendMail({
      from: process.env.NODEMAILER_SEND_FROM,
      to: `${user.names.firstName} ${user.names.lastName} <${user.email}>`,
      subject: 'User Registration',
      html: userRegistrationTemplate.template
    })
  }
}
