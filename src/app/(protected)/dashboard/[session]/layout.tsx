import { SubscriptionEntitlementQuery } from '@/convex/query.config'
import { combinedSlug } from '@/lib/utils'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
  children: React.ReacrNode
}

const layout = async ({children }: Props) => {
  const { profileName , entitlement} = await SubscriptionEntitlementQuery()
  if (!entitlement._valueJSON){
    // TODO : remove the billing hardcoded path 
    redirect(`/dashboard/${combinedSlug(profileName!)}`)
  }
  return (
    <div>{children}</div>
  )
}

export default layout