import { SubscriptionEntitlementQuery } from '@/convex/query.config'
import { combinedSlug } from '@/lib/utils'
import { redirect } from 'next/navigation'

const page = async () => {
  const { entitlement, profile } = await SubscriptionEntitlementQuery()

  if (!entitlement?._valueJSON) {
    redirect(`/billing/${combinedSlug(profile?.name!)}`)
  }

  redirect(`/dashboard/${combinedSlug(profile?.name!)}`)
}

export default page
