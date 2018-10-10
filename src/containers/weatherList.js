import React, {Component} from "react";
import { connect } from "react-redux";
import {Sparklines, SparklinesLine} from "react-sparklines";
import { join } from "path";

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
                <td>
                    <Sparklines height={100} width={180} data={temps}>
                        <SparklinesLine color="blue"/> 
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height={130} width={180} data={pressure}>
                        <SparklinesLine color="red"/> 
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height={130} width={180} data={humidity}>
                        <SparklinesLine color="green"/> 
                    </Sparklines>
                </td>
            </tr>
        )
    }
    // renderList = () => {
    //     if(this.props.weather) {
    //         return this.props.weather.map(city=> {
    //                 return ( <tr>
    //                             <td key={city.city.name}>{city.city.name}</td>
    //                             <td key={city.city.temp}>{city.list[0].main.temp}</td> 
    //                             <td key={city.city.pressure}>{city.list[0].main.pressure}</td>
    //                             <td key={city.city.humidty}>{city.list[0].main.humidity}</td>      
    //                         </tr>
    //                 )
    //         })
            
    //     }
        
    // }
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
