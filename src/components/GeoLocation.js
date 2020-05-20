import React from "react";

class GeoLocation extends React.Component{
    constructor(props){
        super(props);

        this.state={lat: null, errorMessage: "" };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat: position.coords.latitude});
            },
            err => {
                this.setState({errorMessage: err.message});
            }
        );
    }
    
    render(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Latitude: Error, {this.state.errorMessage}</div>
        } else if(!this.state.errorMessage && this.state.lat){
            return <div>Latitude: {this.state.lat}</div>
        } else{
            return<div>Loading, please wait.</div>
        }
    }
}

export default GeoLocation;