import Navbar from '@/component/Navbar'
import Head from 'next/head'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <>
    <Head>
    <title> Đá Coffee</title>
    </Head>
    <Navbar/>
    <Component {...pageProps} />
  </>
  )
}
