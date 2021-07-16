import './App.css'
import cities from './cities'
import CityItem from './components/CityItem'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'

function App() {
  return (
    <div className="flex-row">
      <LeftSidebar />
      <RightSidebar>
        <ul>
          {/* {cities.map((city) => (
            <li key={city.capitol}>
              <h3>Country: {city.country}</h3>
              <h5>Capitol: {city.capitol}</h5>
            </li>
          ))} */}
          {cities.map((city) => (
            <CityItem
              key={city.capitol}
              capitol={city.capitol}
              country={city.country}
            />
          ))}
        </ul>
      </RightSidebar>
    </div>
  )
}

export default App
