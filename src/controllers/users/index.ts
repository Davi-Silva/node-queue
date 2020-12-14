import { Request, Response } from 'express'

import Queue from '../../lib/queue/Queue'

export async function store(req: Request, res: Response): Promise<Response> {
  const { names, email, password } = req.body

  const user = {
    names,
    email,
    password
  }

  await Queue.add('RegistrationEmail', { user })

  return res.status(200).send(user)
}
