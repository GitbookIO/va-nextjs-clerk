import { getAuth } from '@clerk/nextjs/server'
import type { NextApiRequest, NextApiResponse } from 'next'

const redirectUrl = process.env.NEXT_PUBLIC_GITBOOK_URL

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId, getToken } = getAuth(req)
  if (!userId) {
    res.redirect('/sign-in')
  } else {
    const token = await getToken({ template: 'GitBook' })
    res.redirect(`${redirectUrl}?jwt_token=${token}`)
  }
}
