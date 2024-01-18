import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

export function useBreakpoints() {
  dynamic(() => import('match-media'), { ssr: false })

  const [breakpoint, setBreakpoint] = useState<Breakpoint>()

  useEffect(() => {
    const getBreakpoint = () => {
      if (matchMedia('(max-width: 767px)').matches) setBreakpoint('phone')
      else if (matchMedia('(max-width: 1279px)').matches)
        setBreakpoint('tablet')
      else setBreakpoint('desktop')
    }
    getBreakpoint()
    window.addEventListener('resize', getBreakpoint)
    return () => window.removeEventListener('resize', getBreakpoint)
  }, [])

  return breakpoint
}
