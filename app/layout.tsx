import type { Metadata } from 'next'
import './globals.css'
import 'antd/dist/reset.css'
import Providers from './providers'

export const metadata: Metadata = {
  title: 'LubeCo – Preview',
  description: 'Project based on the current Canvas preview',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
