import React, {Component} from 'react';
import { connect } from "react-redux";
import { fetchWeather } from "../actions/index";
import {bindActionCreators} from "redux";

class SearchBar extends Component {
    constructor (props){
        super(props),
        this.state = {
            term: ""
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange (event) {
        const {value} = event.target;
        this.setState({
            term: value
        }) 
    }
    onFormSubmit (event) {
        event.preventDefault();
        // fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({
            term: ''
        })
    }
    render () {

        return (
                <form onSubmit={this.onFormSubmit}className="input-group">
                    <input 
                        placeholder="Search a city's weather"
                        value={this.state.term}
                        className="form-control " 
                        onChange={this.onInputChange} />
                    <span className ="input-group-btn" >
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </span>
                </form>
        )
    }
}


function mapDispatchToProps(dispatch){
   
    return bindActionCreators({fetchWeather:fetchWeather}, dispatch);
    // dispatch function takes all of our actions and passes them to all the other reducers
}


// Promote BookDetail from a component to a container
export default connect(null, mapDispatchToProps)(SearchBar);
