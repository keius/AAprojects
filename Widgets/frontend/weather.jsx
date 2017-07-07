import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {location: "", temp: ""};
  }

  componentDidMount() {
    let weather = this;
    function loadXMLDoc(lat, lon) {
      let request = new XMLHttpRequest();
      request.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&APPID=82f9a0c101dce3f5d1a952cdef03a478`, true);
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          let resp = JSON.parse(request.responseText);
          weather.setState({ location: resp.name, temp: resp.main.temp });
        }
      };
      request.send();
    }

    navigator.geolocation.getCurrentPosition(function(position) {
      loadXMLDoc(position.coords.latitude, position.coords.longitude);
    });
  }

  render() {
    return (
      <div>
        <h1>Weather</h1>
        <h1>City: {this.state.location} </h1>
        <h1>Temperature: {this.state.temp}° F</h1>
      </div>
    );
  }
}

export default Weather;
