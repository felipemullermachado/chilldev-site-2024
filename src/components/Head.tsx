import Helmet from 'next/head'

const DEFAULT_TITLE = 'Felipe Müller | Frontend Developer'
const DEFAULT_DESCRIPTION = 'Portfolio of Felipe Müller, front-end developer'
const openGraph = require('../assets/img/opengraph.jpg?v=2').default.src

export function Head({ title, description, pathname }: HeadProps) {
  return (
    <Helmet>
      <meta property="og:image" itemProp="image" content={openGraph} />
      <meta name="twitter:image" content={openGraph} />
      <title>{title || DEFAULT_TITLE}</title>
      <meta property="og:title" content={title || DEFAULT_TITLE} />
      <meta property="og:site_name" content="" />
      <meta name="description" content={description || DEFAULT_DESCRIPTION} />
      <meta
        property="og:description"
        content={description || DEFAULT_DESCRIPTION}
      />
      <link rel="canonical" href={canonicalUrl(pathname)} />
      <meta property="og:url" content={canonicalUrl(pathname)} />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <meta property="og:locale" content="en_US" />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff"></meta>
    </Helmet>
  )
}

const canonicalUrl = (pathname: string) => process.env.siteUrl + pathname

interface HeadProps {
  title?: string
  description?: string
  pathname: string
}
