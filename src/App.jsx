import React from 'react'
import Header from "./components/header/Header"
import Team from './components/team/Team'
import EMPLOYEES from './MOCK_DATA.json'

const App = () => {
  return (
    <>
    <Header/>
    <Team emp={EMPLOYEES}/>
    </>
  )
}

export default App