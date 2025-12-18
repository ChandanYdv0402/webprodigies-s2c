'use client'
import React, { useEffect, ReactNode } from 'react'
import { useAppDispatch } from '@/redux/store'
import { fetchProjectsSuccess } from '@/redux/slice/projects'

type Props = {
    children: ReactNode
    initialProjects: any // preloadQuery result with _valueJSON property
}

const ProjectsProvider = ({ children, initialProjects }: Props) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        // Initialize Redux state with SSR data
        if (initialProjects?._valueJSON) {
            const projectsData = initialProjects._valueJSON

            dispatch(
                fetchProjectsSuccess({
                    projects: projectsData,
                    total: projectsData.length,
                })
            )
        }
    }, [dispatch, initialProjects])

    return <>{children}</>
}

export default ProjectsProvider
