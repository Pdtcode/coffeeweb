import Navbar from '../component/Navbar'
import Head from 'next/head'
import '../styles/globals.css'
import Footer from '../component/Footer'

export default function App({ Component, pageProps }) {
  return (
  <>
    <Head>
    <title> Đá Coffee Truck</title>
        <meta name="description" content="Đá Coffee Truck that everyone is talking about!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/coffee.ico" />
    </Head>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
  </>
  )
}
