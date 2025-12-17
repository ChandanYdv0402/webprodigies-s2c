'use client'

import { Link } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import React from 'react'

type Props = {}
 
const Navbar = (props : Props) => {
    const params = useSearchParams()
    const projectId = params.get('project')
    // const profileName = params.get('profileName')

        return(
            <div className="grid grid-cols-2 lg:grid-cols-3 p-6 fixed top-0 left-0 right-0
            Z-50">
                <div className="flex items-center gap-4">
                    <Link
                        href={`/dashboard/`}
                        className="w-8 h-8 rounded-full border-3 Iborder-white bg-black flex    
                        items-center justify-center"
                    >
                        <div className="w-4 h-4 rounded-full Ibg-white"></div>
                    </Link>
                    
                            <div className="lg: inline-block hidden rounded-full text-primary/60 border
                            Oborder-white/[0.12] backdrop-blur-xl ☐ bg-white/[0.08] px-4 py-2 text-sm
                            saturate-150">
                            Project
                            </div>
                        
                    </div>
                </div>
            </div>
        )
}
