import { StyleGuideQuery } from '@/convex/query.config'
import { TabsContent } from '@/components/ui/tabs'
import React from 'react'
import { StyleGuide } from '@redux/api/style-guide'

type Props = {
    searchParams: Promise<{
        project: string
    }>
}

const Page = async ({ searchParams }: Props) => {
    const projectId = (await searchParams).project

    if (!projectId || projectId === 'null') {
        return <div>Project not found</div>
    }

    const existingStyleGuide = await StyleGuideQuery(projectId)

    const guide =
        existingStyleGuide.styleGuide?._valueJSON as StyleGuide


    const colorguide = existingStyleGuide.styleGuide?._valueJSON as unknown as StyleGuide

    const colorGuide = colorguide?.colorSections || []
    const typographyGuide = colorguide?.typographySections || []

    


    return (
        <div>
            <TabsContent
                value="colours"
                className="space-y-8"
            >

            </TabsContent>
        </div>
    )
}


export default Page
