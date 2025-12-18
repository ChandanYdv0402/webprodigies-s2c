import { StyleGuideQuery } from '@/lib/convex-queries'
import { TabsContent } from '@components/ui/tabs'
import React from 'react'

type Props = {
  searchParams: Promise<{
    project: string
  }>
}

const Page = async ({ searchParams }: Props) => {
  const projectId = (await searchParams).project
  const existingStyleGuide = await StyleGuideQuery(projectId)

  if (!existingStyleGuide) {
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
}

export default Page
