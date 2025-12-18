import Navbar from '@/components/navbar'
import { SubscriptionEntitlementQuery } from '@/lib/convex-queries'
import { combinedSlug } from '@/lib/utils'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
  const { profile, entitlement } = await SubscriptionEntitlementQuery()
  // if (!entitlement._valueJSON) {
  //   //TODO: Remove billing hardcoded path
  //   // redirect(`/dashboard/${combinedSlug(profile?.name!)}`)
  // }
  return (
    <div className="grid grid-cols-1">
      <Navbar />
      {children}
    </div>
  )
}

export default Layout