import React from "react";
import {Sparklines, SparklinesLine} from "react-sparklines";

const WeatherChart = (props) =>{
    return (
        <tr>
                <td>{props.name}</td>
                <td>
                    <Sparklines height={100} width={180} data={props.temps}>
                        <SparklinesLine color="blue"/> 
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height={130} width={180} data={props.pressure}>
                        <SparklinesLine color="red"/> 
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height={130} width={180} data={props.humidity}>
                        <SparklinesLine color="green"/> 
                    </Sparklines>
                </td>
        </tr>
    )
}

export default WeatherChart;