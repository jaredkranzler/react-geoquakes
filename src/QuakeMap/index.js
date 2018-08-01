import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{}</div>;
 
class QuakeMap extends Component {
  static defaultProps = {
    center: {
      lat: 30.2682,
      lng: -97.74295
    },
    zoom: 11

  };



  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '113%', width: '108%', margin: '-30px 0px 0px -30px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom} 
        >
          <AnyReactComponent
            lat={30.2682}
            lng={-97.74295}
            text={'Kreyser Avrora'}
          />
         
        

        </GoogleMapReact>
      </div>
    );
  }
}


 
export default QuakeMap;