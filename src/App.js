import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
const { compose, withProps } = require("recompose");
const { DrawingManager } = require("react-google-maps/lib/components/drawing/DrawingManager");
const inside = require('point-in-polygon');

let polygon = [53.928345012510064, 27.685260709192676, 53.928392390746545, 27.685679133799];
class App extends Component {
    onDrawingComplete(data) {
        console.log(data);
    }
    // onEnterZone() {
    //     fetch('https://fronspot-hack.herokuapp.com/notify')
    // }
    getPaths(polygon){
        var coordinates = (polygon.getPath().getArray());
        polygon = coordinates;
        return coordinates;
    }
    componentDidMount() {
        function success(pos) {
            console.log(pos);
            if(inside(pos, polygon)) {
                fetch('https://fronspot-hack.herokuapp.com/notify', {
                    method: 'POST'
                })
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => {
                    console.log(err);
                })
            } 
          }
          
          function error(err) {
            console.warn('ERROR(' + err.code + '): ' + err.message);
          }
          
          const options = {
            enableHighAccuracy: true,
            timeout: 3000,
            maximumAge: 0
          };
          
        window.navigator.geolocation.watchPosition(success, error, options);
    }
    render() {
        const MapWithADrawingManager = compose(
            withProps({
              googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDZHKGstATqMk8-lI3cxXTYqM76EjsmuM0&v=3.exp&libraries=geometry,drawing,places",
              loadingElement: <div style={{ height: `100%` }} />,
              containerElement: <div style={{ height: `400px` }} />,
              mapElement: <div style={{ height: `100%` }} />,
            }),
            withScriptjs,
            withGoogleMap
          )(props =>
            <GoogleMap
              defaultZoom={18}
              defaultCenter={new window.google.maps.LatLng(53.928285,27.6853224)}
            >
              <DrawingManager
                onPolygoncomplete={this.onDrawingComplete}
                defaultDrawingMode={window.google.maps.drawing.OverlayType.POLYGON}
                defaultOptions={{
                  drawingControl: true,
                  drawingControlOptions: {
                    position: window.google.maps.ControlPosition.TOP_CENTER,
                    drawingModes: [
                        window.google.maps.drawing.OverlayType.POLYGON
                    ],
                  },
                  circleOptions: {
                    fillColor: `#ffff00`,
                    fillOpacity: 1,
                    strokeWeight: 5,
                    clickable: false,
                    editable: true,
                    zIndex: 1,
                  },
                }}
                onPolygonComplete={(value) => console.log(this.getPaths(value))}  
              />
            </GoogleMap>
          );

          
        return (
            <div className="App">
                <MapWithADrawingManager />
            </div>
        );
    }
}

export default App;
