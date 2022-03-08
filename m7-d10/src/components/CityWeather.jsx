import {Card} from 'react-bootstrap'

export const CityWeather = ({ cityProps }) => {
  return(
    <>

    <Card bg={"secondary"} >
    <Card.Header>Temperature</Card.Header>
    <Card.Body>
        <Card.Text>
        <Card.Title> Feels like {cityProps.main.temp}</Card.Title> 
           <p>Feels like {cityProps.main.temp}</p>
          <p>Actual temperature: {cityProps.main.temp_max}</p>
          <p>Todays highest: {cityProps.main.temp_max}</p>
          <p>Todays lowest: {cityProps.main.temp_min}</p>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card bg={"secondary"} className="mt-5">
    <Card.Header>Wind</Card.Header>
    <Card.Body>
        <Card.Text>
            <p>Speed {cityProps.wind.speed} km/hour</p>
            <p>Gust {cityProps.wind.gust} km/hour</p>
        </Card.Text>
      </Card.Body>
    </Card>
    {/* weather here */}
    </>
  )
}