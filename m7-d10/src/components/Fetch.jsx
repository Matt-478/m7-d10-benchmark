import { useState, useEffect } from 'react'
import { CityWeather } from './CityWeather'
import {Container, Row, Col, InputGroup, FormControl} from 'react-bootstrap'

const Fetch = () => {

  const[weatherData, setWeatherData] = useState([])
  const[query, setQuery] = useState("paris")


  const fetchData = async() => {
    try {
      const resp = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=metric&appid=498a9e83b9c5ceefa6a13b4d1a998ff0")
      const data = await resp.json()
      if(resp.ok) {
        console.log(data)
        setWeatherData(data)
        console.log(weatherData)
      } else {
        console.log("issue with fetch")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // fetchData()
      fetchData()
  },)


  const handleChange = (e) => {
    setQuery(e.target.value)
  }


  // 498a9e83b9c5ceefa6a13b4d1a998ff0
  
  return(
    <>
      <Container>
        <Row>
        <Col md={4}>
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Search for your City..."
                value={query}
                onChange={handleChange}
              />
            </InputGroup>
          </Col>
          <Col md={8}>
            <h2>The Weather today in {query}</h2>
            <CityWeather cityProps={weatherData}/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Fetch