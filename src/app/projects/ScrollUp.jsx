'use client'

import { useEffect } from 'react'

export default function ScrollUp({x,y}) {
  useEffect(() => window.document.scrollingElement?.scrollTo(x ?? 0, y ?? 0), [])

  return null
}