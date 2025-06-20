'use client'

import { ReactNode } from 'react'
import { Authenticated, AuthLoading, ConvexReactClient, Unauthenticated } from 'convex/react'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { SignInButton, useAuth } from '@clerk/nextjs'
import { Loading } from '@/components/auth/loading'

if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
  throw new Error('Missing NEXT_PUBLIC_CONVEX_URL in your .env file')
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL)

export default function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      <Authenticated>
        {children}
      </Authenticated>
       <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <AuthLoading>
        <Loading />
      </AuthLoading>

    </ConvexProviderWithClerk>
  )
}