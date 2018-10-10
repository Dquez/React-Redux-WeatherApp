import React, {Component} from "react";
import { connect } from "react-redux";
import {Sparklines, SparklinesLine} from "react-sparklines";
import WeatherChart from "../components/WeatherChart";

class WeatherList extends Component {
    constructor(props) {
        super(props);
    }
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        return (
            <tr key={name}>
                <td>{name}</td>
                <WeatherChart data={temps} color="blue" height={100} />
                <WeatherChart data={pressure} color="red" height={130} />
                <WeatherChart data={humidity} color="green" height={130}/>
            </tr>
        )
    }
    render(){
        return (
            <table className="table table-hover">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
            </thead>
            <tbody>
                {this.props.weather.map(this.renderWeather)}
            </tbody>
            </table>
        )
    }
}

function mapStateToProps(state){
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps)(WeatherList);
