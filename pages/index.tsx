import { SignOutButton, SignedIn, SignedOut, useUser } from '@clerk/clerk-react'
import Link from 'next/link'
import Layout from '@/components/layout'

export default function Home() {
  
  const { user } = useUser()
  const gitBookDocs: string = process.env.NEXT_PUBLIC_GITBOOK_URL ?? '';

  return (
    <Layout>
      <h1>Welcome to your application{user ? `, ${user.firstName}` : ''}.</h1>
      <SignedIn>
        <p>You're logged in and can <Link href={gitBookDocs}>access our portal</Link>.</p>
      </SignedIn>
      <SignedOut>
        You must <Link href="/sign-in">sign in</Link> to access your portal.
      </SignedOut>
    </Layout>
  )
}
