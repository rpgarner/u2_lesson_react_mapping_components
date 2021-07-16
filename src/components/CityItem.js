function CityItem(props) {
  return (
    <li className="city-item">
      <h3>Country: {props.country}</h3>
      <h5>Capitol: {props.capitol}</h5>
    </li>
  )
}

export default CityItem
