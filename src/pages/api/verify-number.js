export default function handler(req, res) {
  if (req.query.phone.length < 13) {
    return res.status(500).json({ error: true })
  } else {
    return res.status(200).json({})
  }
}
