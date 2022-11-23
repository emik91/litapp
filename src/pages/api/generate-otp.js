import jwt from 'jsonwebtoken'
import supabase from '@/services/supabase'

export default async function handler(req, res) {
  const user = jwt.verify(
    req.headers['sb-access-token'],
    process.env.SUPABASE_JWT_SECRET
  )

  if (!user) {
    res.status(401).json({ error: 'Unauthorized' })

    return
  }

  const otp = Math.floor(100000 + Math.random() * 900000)

  const { error } = await supabase.auth.admin.updateUserById(user.sub, {
    password: otp.toString(),
  })

  console.info(`[${new Date().toISOString()}] OTP for ${user.email} is ${otp}`)

  if (error) {
    res.status(500).json({ error: error.message })

    return
  }

  return res.status(200).json({})
}
