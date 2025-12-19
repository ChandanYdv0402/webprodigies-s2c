import { Palette } from 'lucide-react'
import React from 'react'

export const NoStyleGuide = () => {
    return (
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
    )
}
