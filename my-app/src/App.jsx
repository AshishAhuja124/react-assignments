import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageSlider from './Components/ImageSlider'
import Timer from './Components/Timer'
import CountdownTimer from './Components/CountdownTimer'
import Counter from './Components/Counter'
import FetchWithAxios from './Components/FetchWithAxios'

function App() {

  return (
    <>
      {/* <Timer duration={2 * 24 * 60 * 60 * 1000}/>
      <ImageSlider/> */}
      {/* <CountdownTimer /> */}
      {/* <Counter /> */}
      <FetchWithAxios />
    </>
  )
}

export default App
