'use client'
import { toast } from 'sonner'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { generateGradientThumbnail } from '@/lib/utils'
import { createProjectStart, createProjectSuccess, createProjectFailure, addProject } from '@/redux/slice/projects'
import { fetchMutation } from 'convex/nextjs'
import { api } from '@/convex/_generated/api'
import { Id } from '@/convex/_generated/dataModel'





export const useProjectCreation = () => {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector((state) => state.profile)
    const projectsState = useAppSelector((state) => state.projects)
    const shapesState = useAppSelector((state) => state.shapes)


    const createProject = async (name?: string) => {


        if (!user?.id) {
            toast.error('Please sign in to create projects')
            return
        }

        dispatch(createProjectStart())
        try {
            const thumbnail = generateGradientThumbnail()


            const result = await fetchMutation(api.project.createProject, {
                userId: user.id as Id<'users'>,
                name: name || undefined,
                sketchesData: {
                    shapes: shapesState.shapes,
                    tool: shapesState.tool,
                    selected: shapesState.selected,
                    frameCounter: shapesState.frameCounter,
                },
                thumbnail,
            })
            dispatch(
                addProject({
                    _id: result.projectId,
                    name: result.name,
                    projectNumber: result.projectNumber,
                    thumbnail,
                    lastModified: Date.now(),
                    createdAt: Date.now(),
                    isPublic: false,
                })
            )
            dispatch(createProjectSuccess())
            toast.success('Project created successfully!')
        } catch (error) {
            dispatch(createProjectFailure('Failed to create project'))
            toast.error('Failed to create project')
        }


    }

    return {
        createProject,
        isCreating: projectsState.isCreating,
        projects: projectsState.projects,
        projectsTotal: projectsState.total,
        canCreate: !!user?.id,
    }

}
