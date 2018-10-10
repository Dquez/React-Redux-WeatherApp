import React, {Component} from "react";
import { connect } from "react-redux";
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
            <WeatherChart key={name} name={name} temps={temps} pressure={pressure} humidity={humidity}/>
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
