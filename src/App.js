import React, { Component } from 'react';
import QuakesList from './QuakesList'
import QuakeMap from './QuakeMap'
import './App.css' 

class App extends Component {
  constructor(){
    super();
    this.state = {
      quakes: []
    }
  }



  getQuakes = async() => {
    try{
      const quakes = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson')
      const quakesJson = await quakes.json();
      return quakesJson
    } catch (err){
      console.log(err, 'error in catch block!')
      return err

    }
  }

  componentDidMount(){
    this.getQuakes().then((data) =>{
      console.log(data, ' this is data in componentDidMount in App')
      // console.log(this.state, ' this is this state')
      // const quakes = data.features.map(q => q)
      // console.log(quakes)
      this.setState({quakes: data.features})
    });
  }


  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          <QuakeMap google={this.props.google} />
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          <QuakesList quakes={this.state.quakes}/>
        </div>
      </div>
    );
  }
}

export default App;







