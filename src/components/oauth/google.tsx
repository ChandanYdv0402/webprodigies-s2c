'use client'
import React from 'react'
import { Button } from '../ui/button'

import { useAuthActions } from '@convex-dev/auth/react'

type Props = {}

const Google = () => {
    const { signIn } = useAuthActions()
    return (

        <Button
            onClick={
                () => void signIn('google')}
            type="button"
            variant="outline">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-google"
            >
                <path d="M12 2a6 6 0 1 0 0 12a6 6 0 0 0 0-12z" />
                <path d="M5 12h14" />
            </svg>
        </Button>
    )
}

export default Google
