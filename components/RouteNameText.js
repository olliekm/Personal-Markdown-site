"use client"
import React from 'react'
import { usePathname } from 'next/navigation'

function RouteNameText() {
    let pathname = usePathname()
    
    return (
    <div className='italic'>{pathname        
    }</div>
  )
}

export default RouteNameText