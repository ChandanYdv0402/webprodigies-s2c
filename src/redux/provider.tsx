'use client'
import React, { ReactNode, useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from './store'
import { RootState } from './store'
import { ReduxAuthSync } from '@/components/providers/ReduxAuthSync'

const ReduxProvider = ({
    children,
    preloadedState,
}: {
    children: ReactNode
    preloadedState?: Partial<RootState>
}) => {
    const storeRef = useRef<AppStore | null>(null)
    if (!storeRef.current) {
        storeRef.current = makeStore(preloadedState)
    }

    return <Provider store={storeRef.current!}>
        <ReduxAuthSync />
        {children}
    </Provider>
}

export default ReduxProvider
