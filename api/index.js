import express from 'express'
import mailgun from 'mailgun-js'

const mg = mailgun({
  username: 'api',
  apiKey: process.env.MAILGUN_KEY,
  host: process.env.MAILGUN_HOST,
  domain: process.env.MAILGUN_DOMAIN,
})

const app = express()
const router = express.Router()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})
router.use(express.json())

router.get('/status', (_, res) => res.status(200).send({ message: 'ok' }))

router.post('/order', (req, res) => {
  const { name, email, street, city, zip, order } = req.body

  const rows = order
    .map(
      (row) => `${row.quantity}x ${row.name} (id: ${row.id}) á ${row.price}kr`
    )
    .join('\n')
  const orderTotal = order.reduce(
    (acc, row) => acc + row.price * row.quantity,
    0
  )
  const text = `Order från ${name} | ${email}\n\n${street}, ${zip} ${city}\n\nOrder:\n${rows}\n\nTotalt: ${orderTotal}kr`

  const data = {
    from: `${name} <order@morsgarn.se>`,
    to: `${process.env.CONTACT_MAIL}`,
    subject: `Order från ${name} | ${email}`,
    text,
  }
  mg.messages().send(data, (error, body) => {
    if (error) {
      res.status(error.statusCode).send(error)
    }

    res.status(200).send(body)
  })
})

export default {
  path: '/api',
  handler: router,
}
