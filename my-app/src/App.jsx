import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageSlider from './Components/ImageSlider'
import Timer from './Components/Timer'
import CountdownTimer from './Components/CountdownTimer'
import Counter from './Components/Counter'
import FetchWithAxios from './Components/FetchWithAxios'
import FetchFromHook from './Components/FetchFromHook'
import AutoComplete from './Components/AutoComplete'
import FetchPost from './Components/FetchPost'
import FetchRecipes from './Components/FetchRecipes'

function App() {

  return (
    <>
      {/* <Timer duration={2 * 24 * 60 * 60 * 1000}/>
      <ImageSlider/> */}
      {/* <CountdownTimer /> */}
      {/* <Counter /> */}
      {/* <FetchWithAxios /> */}
      {/* <FetchFromHook /> */}
      {/* <AutoComplete /> */}
      {/* <FetchPost /> */}
      <FetchRecipes />
    </>
  )
}

export default App
