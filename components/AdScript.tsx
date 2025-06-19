'use client'

import { useEffect } from 'react'

export default function AdScript() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//pl26937306.profitableratecpm.com/81/02/05/810205f7c9d4361ab3202aff108acf6c.js'
    script.async = true
    script.type = 'text/javascript'
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return null
}
