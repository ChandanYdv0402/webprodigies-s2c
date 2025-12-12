import { SubscriptionEntitlementQuery } from '@/convex/query.config'
import { redirect } from 'next/navigation'  // FIXED

//TODO: remove billing hardcoded  path 
const page = async () => {   
  const { entitlement, profileName } = await SubscriptionEntitlementQuery()

  if (!entitlement._valueJSON) {
    //redirect(`/billing/${combinedSlug(profileName!)}`)   
    redirect(`/dashboard/${combinedSlug(profileName!)}`)   

  
}
redirect(`/dashboard/${combinedSlug(profileName!)}`)   
}

export default page
