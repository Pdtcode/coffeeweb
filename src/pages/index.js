import Head from 'next/head'
import Hero from '../component/Hero'
import { SliderData } from '@/component/SliderData'
import Slider from '@/component/Slider'
import Footer from '@/component/Footer'

export default function Home() {
  return (
    <>
      <Hero heading=' Đá Coffee Truck' message='Đá Coffee is dedicated to give the best robusta coffee experience!'/>
      <Slider slides={SliderData}/>
    </>
  )
}
