// 'use client'
// import { ProjectSummary } from '@/redux/slice/projects'
// import { useAppSelector } from '@/redux/store'
// import React from 'react'

// const ProjectsList = () => {
//     const { projects, isLoading } = useAppSelector((state) => state.projects)

//     if (isLoading) return <div>Loading...</div>

//     return (
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             {projects.map((project: ProjectSummary) => (
//                 <div key={project._id} className="p-4 border rounded-lg shadow-sm bg-card hover:shadow-md transition-shadow">
//                     <h3 className="font-semibold text-lg">{project.name}</h3>
//                     <p className="text-sm text-muted-foreground">
//                         {new Date(project.lastModified).toLocaleDateString()}
//                     </p>
//                 </div>
//             ))}
//             {projects.length === 0 && (
//                 <div className="col-span-full text-center text-muted-foreground p-8">
//                     No projects found. Create one to get started.
//                 </div>
//             )}
//         </div>
//     )
// }

// export default ProjectsList
