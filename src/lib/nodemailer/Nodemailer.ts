import nodemailer from 'nodemailer'
import mailConfig from '../../config/lib/nodemailer/nodemailer'

export default nodemailer.createTransport(mailConfig)
