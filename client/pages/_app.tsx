import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { TwitterProvider } from '../context/TwitterContext'
import '../lib/hexStyles.css'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <TwitterProvider>
      <Component {...pageProps} />
    </TwitterProvider>
    
  )
}

export default MyApp