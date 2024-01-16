import { Html, Head, Main, NextScript } from 'next/document'
import { Toaster } from 'react-hot-toast'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
        <NextScript />
      </body>
    </Html>
  )
}
