import React, {Component} from "react";
import { connect } from "react-redux";
import WeatherChart from "../components/WeatherChart";
import GoogleMap from "../components/GoogleMap";

class WeatherList extends Component {
    constructor(props) {
        super(props);
    }
    renderWeather(cityData) {
        const {city} = cityData;
        const {name} = city;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const {lon, lat} = city.coord;
        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <WeatherChart  data={temps} color="blue" units="K" />
                <WeatherChart  data={pressure} color="red" units="hPa" />
                <WeatherChart data={humidity} color="green" units="%" />
            </tr>
        )
    }
    render(){
        return (
            <table className="table table-hover">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (K)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
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
