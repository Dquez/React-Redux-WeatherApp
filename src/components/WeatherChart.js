import React from "react";
import {Sparklines, SparklinesLine} from "react-sparklines";

const WeatherChart = (props) =>{
    return (
                 <td>
                    <Sparklines height={props.height} width={180} data={props.data}>
                        <SparklinesLine color={props.color}/> 
                    </Sparklines>
                </td>
    )
}

export default WeatherChart;