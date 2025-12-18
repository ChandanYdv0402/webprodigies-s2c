'use client'
import React, { ReactNode, useRef } from 'react'
import { makeStore } from './store'
import { RootState } from './store'

const ReduxProvider = ({
  children,
  preloadedState,
}: {
  children: ReactNode
  preloadedState?: Partial<RootState>
}) => {
  const storeRef = useRef(makeStore(preloadedState))
}

export default ReduxProvider
