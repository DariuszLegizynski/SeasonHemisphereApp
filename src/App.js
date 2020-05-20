import React from "react";
import SeasonDisplay from "./components/SeasonDisplay";
import GeoLocation from "./components/GeoLocation";

class App extends React.Component{
  render(){
    return (
      <div>
        <GeoLocation />
        <SeasonDisplay />
      </div>
    );
  }
}

export default App;
