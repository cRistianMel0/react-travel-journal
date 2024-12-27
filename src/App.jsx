// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import Data from './data'


function App() {
  const elemets = Data.map(obj => {
    return <Entry
      key={obj.id}
      img={obj.img}
      title={obj.title}
      country={obj.country}
      googleMapsLink={obj.googleMapsLink} 
      dates={obj.dates}
      text={obj.text}
      />
  })

  return (
    <>
      <Header data={Data} />
      {elemets}
    </>
  )
}

export default App
