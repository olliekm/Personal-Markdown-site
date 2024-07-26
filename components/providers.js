"use client"
import React from 'react'
import { ThemeProvider } from 'next-themes'
function Providers({children}) {
  return (
    <ThemeProvider attribute='class' enableSystem>{children}</ThemeProvider>
  )
}

export default Providers