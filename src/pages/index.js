import Hero from '../component/Hero'
import { SliderData } from '../component/SliderData'
import Slider from '../component/Slider'
import About from '../component/About'

export default function Home() {
  return (
    <>
      <Hero heading=' Đá Coffee Truck' message='Đá Coffee Truck is dedicated to give the best robusta coffee experience!'/>
      <Slider slides={SliderData}/>
      <About/>
    </>
  )
}
