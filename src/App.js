import React from 'react'
import countries from './countries'
import './App.css'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
import CountryItem from './components/CountryItem'

const App = () => {

  return (
    <div className="flex-row">
      <LeftSidebar />
      <RightSidebar>
        <ul>
          {
            // countries.map((country) => (
            //   <li key={country.capitol}>
            //     <h3>Country: {country.name}</h3>
            //     <h5>Capitol: {country.capitol}</h5>
            //   </li>
            // ))
            countries.map((country) => (
              <CountryItem
                key={country.capitol}
                capitol={country.capitol}
                name={country.name}
              />
            ))
          }
        </ul>
      </RightSidebar>
    </div>
  )
}

export default App
