'use client'
import React from 'react'
import { ConfigProvider, theme as antdTheme } from 'antd'

export default function Providers({children}:{children:React.ReactNode}){
  return (
    <ConfigProvider
      theme={{
        token: { colorPrimary: '#e10600', colorLink: '#e10600', borderRadius: 12 },
        algorithm: antdTheme.defaultAlgorithm
      }}
    >
      {children}
    </ConfigProvider>
  )
}
