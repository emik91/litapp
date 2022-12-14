const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
)

export default function handler(req, res) {
  client.lookups.v1
    .phoneNumbers(req.query.phone)
    .fetch({ type: ['carrier'] })
    .then((number) => {
      res.status(200).json({ valid: true, result: number })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ valid: false })
    })
}
