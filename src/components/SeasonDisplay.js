import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
    summer: {
        seasonText: "Let's hit the beach!",
        seasonIcon: "massive sun icon"
    },
    winter: {
        seasonText: "Brr it is cold!",
        seasonIcon: "massive snowflake icon"
    }
}

const getSeason =(lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
    } else {
        return lat > 0 ? "winter" : "summer";
    }
}

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {seasonText, seasonIcon} = seasonConfig[season];

    return(
        <div className={`season-display ${season}`}>
            <i className={`icon-left ${seasonIcon}`} />
            <h1>{seasonText}</h1>
            <i className={`icon-right ${seasonIcon}`} />
        </div>
    );
}

export default SeasonDisplay;