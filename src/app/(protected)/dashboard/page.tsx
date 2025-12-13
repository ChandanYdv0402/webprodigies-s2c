import React from 'react'
import { SubscriptionEntitlementQuery } from '@/convex/query.config'
import { usePreloadedQuery } from 'convex/react'

//TODO: Add billing logic 

const page = async () => {
  const { entitlement, profile } = await SubscriptionEntitlementQuery()
  return (
    <div>page</div>
  )
}

export default page