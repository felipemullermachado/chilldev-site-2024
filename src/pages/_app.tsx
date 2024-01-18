import 'reset-css'
import '../assets/styles/global.styl'
import type { AppProps } from 'next/app'
 
export default function App({ Component, pageProps, router: { asPath } }: AppProps) {
  const pathname = asPath.split('?')[0]
  return <Component pathname={pathname} {...pageProps} />
}