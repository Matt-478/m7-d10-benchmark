import React from 'react'

export default class FetcheClass extends React.Component {

  state={
    weatherData: []
  }

  componentDidMount =  async() => {
    try {
      const resp = await fetch("https://api.openweathermap.org/data/2.5/weather?q=paris&appid=498a9e83b9c5ceefa6a13b4d1a998ff0")
      const data = await resp.json()
      // setWeatherData([data])
      if(resp.ok) {
        this.setState({weatherData: data})
        console.log(this.state.weatherData.main)
      } else {
        console.log("issue with fetch")
      }
    } catch (error) {
      console.log(error)
  }
}
  render(){
    return(
      <>
        <h3>here we'll display the fetching</h3>
        <h3>Current temp:</h3>
        <h4>{this.state.weatherData.name}</h4>
      </>
    )
  }
}