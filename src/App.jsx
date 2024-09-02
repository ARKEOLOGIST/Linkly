import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Shortener from './Shortener/Shortener'

function App() {

  return (
    <>
      <div className={"pageBackground"}>
        <div className={"pageHeader"}>
          <Header/>
        </div>
        <div className={"pageShortener"}>
          <Shortener/>
        </div>
      </div>
    </>
  )
}

export default App
