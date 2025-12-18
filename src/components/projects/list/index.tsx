'use client'

import { useProjectCreation } from '@/hooks/use-project'
import React from 'react'
import { Plus } from 'lucide-react'

const ProjectsList = () => {
const { projects, canCreate } = useProjectCreation()

if (!canCreate) {
  return (
    <div className="text-center py-12">
      <p className="text-lg">Please sign in to view your projects.</p>
    </div>
  )
}


  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-foreground">
            Your Projects
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your design projects and continue where you left off.
          </p>
        </div>
        
      </div>
{projects.length === 0 ? (
  <div className="text-center py-20">
    <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-muted flex items-center justify-center">
      <Plus className="w-8 h-8 text-muted-foreground" />
    </div>

    <h3 className="text-lg font-medium text-foreground mb-2">
      No projects yet
    </h3>

    <p className="text-sm text-muted-foreground mb-6">
      Create your first project to get started
    </p>
  </div>
) : ()}



    </div>
  )
}

export default ProjectsList
