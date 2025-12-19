import { MoodBoardImagesQuery, StyleGuideQuery } from '@/convex/query.config'
import { TabsContent } from '@/components/ui/tabs'
import React from 'react'
import { StyleGuide } from '@/redux/api/style-guide'
import { MoodBoardImage } from '@/hooks/use-styles'
import { Palette } from 'lucide-react'

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

    const existingMoodBoardImages = await MoodBoardImagesQuery(projectId)
    const guideImages = existingMoodBoardImages.images
  ._valueJSON as unknown as MoodBoardImage[]



    return (
        <div>
            <TabsContent
                value="colours"
                className="space-y-8"
            >
                {!guideImages.length ? (
 <div className="space-y-8">
  <div className="text-center py-20">
    <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-muted flex items-center justify-center">
      <Palette className="w-8 h-8 text-muted-foreground" />
    </div>

    <h3 className="text-lg font-medium text-foreground mb-2">
      No colors generated yet
    </h3>

    <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
      Upload images to your mood board and generate an AI-powered
      style guide with colors and typography.
    </p>
  </div>
</div>

) : (
  <ThemeContent colorGuide={colorGuide} typographyGuide={typographyGuide} />
)}

            </TabsContent>
        </div>
    )
}


export default Page
