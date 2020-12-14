import { Application } from 'express'
import { router, setQueues, BullAdapter } from 'bull-board'

import users from './users/users'
import Queue from '../lib/queue/Queue'

const queuesAdapted = Queue.queues.map((queue) => new BullAdapter(queue.bull))

setQueues(queuesAdapted)

export default (app: Application): void => {
  app.use('/users', users)

  app.use('/admin/queues', router)
}
