import {convexAuthNextjsToken} from "@convex-dev/auth/nextjs"
import {preloadedQueryResult, preloadQuery} from "convex/nextjs"
import { api } from "@/convex/_generated/api"
import { ConvexUserRaw , normalizeProfile } from "@/types/user"
import { preload } from "react-dom"


export const ProfileQuery  = async () => {
    return await preloadQuery(
        api.user.getCurrentUser,
        {},
        {token: await convexAuthNextjsToken()}
    )
}

export const SubscriptionEntitlementQuery = async () => { 

    const rawProfile = await  ProfileQuery()
    const profile = normalizeProfile(
        rawProfile._valueJSON as unknow as ConvexUserRaw | null 
    )
}


const entitlement = await preloadedQuery(
    api.subscriptions.getEntitlement,
    {
        userId: profile?.id as  ,
    },
    {
        token: await convexAuthNextjsToken()
    }
)