import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Map } from 'react-leaflet';
const { LeafletMap, TileLayer, Marker, Popup } = Map;

class App extends Component {
    
    constructor() {
    super()
        this.state = {
            lat: 51.505,
            lng: -0.09,
            zoom: 13
        }
    }

    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <div className="App">
                <LeafletMap center={position} zoom={this.state.zoom}>
                    {/* <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    /> */}
                    <Marker position={position}>
                        <Popup>
                            <span>A pretty CSS3 popup. <br /> Easily customizable.</span>
                        </Popup>
                    </Marker>
                </LeafletMap>
            </div>
        );
    }
}

export default App;
