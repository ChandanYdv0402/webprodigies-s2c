import React from 'react'

//TODO: Add billing logic 

const page = () => {
  const {entitlement , profileName} = await SubscriptionEntitlementQuery()
  return (
    <div>page</div>
  )
}

export default page