import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
const { compose, withProps } = require("recompose");
const { DrawingManager } = require("react-google-maps/lib/components/drawing/DrawingManager");


class App extends Component {
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
              defaultZoom={8}
              defaultCenter={new window.google.maps.LatLng(-34.397, 150.644)}
            >
              <DrawingManager
                defaultDrawingMode={window.google.maps.drawing.OverlayType.CIRCLE}
                defaultOptions={{
                  drawingControl: true,
                  drawingControlOptions: {
                    position: window.google.maps.ControlPosition.TOP_CENTER,
                    drawingModes: [
                        window.google.maps.drawing.OverlayType.CIRCLE,
                        window.google.maps.drawing.OverlayType.POLYGON,
                        window.google.maps.drawing.OverlayType.POLYLINE,
                        window.google.maps.drawing.OverlayType.RECTANGLE,
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
