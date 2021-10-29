import React from 'react'
import {Container, Row, Col, InputGroup, FormControl} from 'react-bootstrap'
import { CityWeather } from './CityWeather'


export default class FetcheClass extends React.Component {

  state={
    weatherData: [],
    query: ""
  }

  componentDidUpdate = async() => {
    try {
      const resp = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + this.state.query + "&appid=498a9e83b9c5ceefa6a13b4d1a998ff0")
      const data = await resp.json()
      if(resp.ok) {
        this.setState({weatherData: data})
        console.log(this.state.weatherData)
      } else {
        console.log("issue with fetch")
      }
    } catch (error) {
      console.log(error)
  }

    handleChange = (e) => {
      this.setState({query: e.target.value})
  }
}
  render(){
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
                value={this.state.query}
                onChange={this.handleChange}
              />
            </InputGroup>
          </Col>
          <Col md={8}>
            <h2>The Weather today in {this.state.query}</h2>
            <CityWeather cityProps={this.state.weatherData}/>
          </Col>
        </Row>
      </Container>
    </>
    )
  }
}