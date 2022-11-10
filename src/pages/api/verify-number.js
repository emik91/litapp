export default function handler(req, res) {
  if (req.body.phone.length < 10) {
    return res.status(500).json({ error: true })
  } else {
    return res.status(200).json({})
  }
}
