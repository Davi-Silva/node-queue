import 'dotenv/config'
import Queue from './lib/queue/Queue'

try {
  Queue.process()
} catch (err) {
  console.log(err)
}
