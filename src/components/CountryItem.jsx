function CountryItem(props) {
    return (
        <li className="country-item" id={props.name}>
            <h3>country: {props.name}</h3>
            <h5>Capitol: {props.capitol} </h5>
        </li>
    )
}
export default CountryItem