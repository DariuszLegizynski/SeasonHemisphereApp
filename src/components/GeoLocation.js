import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

class GeoLocation extends React.Component{

    state = {lat: null, errorMessage: ""};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message}) 
        );
    }

    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Latitude: Error, {this.state.errorMessage}</div>
        } else if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />
        } else{
            return <Loader message="Please accept location request" />
        }
    }

    render(){
        return(
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

export default GeoLocation;