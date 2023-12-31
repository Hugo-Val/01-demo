import { ReactNode, ReactElement } from 'react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import '@/styles/globals.css'
import { type } from 'os'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)
}

export default MyApp