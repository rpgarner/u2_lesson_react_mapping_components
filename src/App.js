import React from 'react'
import './App.css'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
import countries from './countries'


const App = () => {

  return (
    <div className="flex-row">
      <LeftSidebar />
      <RightSidebar countries={countries} />
    </div>
  )
}

export default App
