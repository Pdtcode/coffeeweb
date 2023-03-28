import Head from 'next/head'
import Hero from '../component/Hero'
import { SliderData } from '@/component/SliderData'
import Slider from '@/component/Slider'
import Footer from '@/component/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title> Đá Coffee</title>
        <meta name="description" content="Đá Coffee that everyone is talking about!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/coffee.ico" />
      </Head>
      <Hero heading=' Đá Coffee' message='Đá Coffee is dedicated to give the best robusta coffee experience!'/>
      <Slider slides={SliderData}/>
      <Footer/>
    </>
  )
}
