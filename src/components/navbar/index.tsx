'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
    const params = useSearchParams()
    const projectId = params.get('project')
    const profileName = params.get('profileName')
    const pathname = usePathname()
    const hasCanvas = pathname.includes ('canvas')
    const hasStyleGuide = pathname.includes ('style-guide')

    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 p-6 fixed top-0 left-0 right-0
            Z-50">
            <div className="flex items-center gap-4">
                <Link
                    href={`/dashboard/`}
                    className="w-8 h-8 rounded-full border-3 border-white bg-black flex    
                        items-center justify-center"
                >
                    <div className="w-4 h-4 rounded-full bg-white"></div>
                </Link>
                {!hasCanvas ||
                 (!hasStyleGuide && (
                <div className="lg: inline-block hidden rounded-full text-primary/60 border
                            border-white/[0.12] backdrop-blur-xl bg-white/[0.08] px-4 py-2 text-sm
                            saturate-150">
                    Project / {project?.name}
                </div>
                ))}
            </div>
        </div>
    )
}
