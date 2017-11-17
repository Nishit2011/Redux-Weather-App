import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{
constructor(props){

	super(props);

	this.state = {term:''};

	//binding the helper method to this context of state
	this.onInputChange = this.onInputChange.bind(this);
	this.onFormSubmit = this.onFormSubmit.bind(this);
}


onInputChange(event){

	//console.log(event.target.value);
	this.setState({term:event.target.value});
}

onFormSubmit(event){
	//this will prevent the form from submitting when pressed enter
event.preventDefault();

this.props.fetchWeather(this.state.term);
this.setState({term:''});

}
	render(){

		return(
			<div>
			<form className="input-group" onSubmit={this.onFormSubmit}>

			<input placeholder="Give a five day forecast in your favorite cities"
			className="form-control"
			value={this.state.term}
			onChange={this.onInputChange}/>	
			<span className="input-group-btn">
			<button type="submit" className="btn btn-secondary">
			Submit
			</button>
			</span>
			</form>

			</div>

			);
	}
}


/*//will bind action creator to this container*/
function mapDispatchToProps(dispatch){

	return bindActionCreators({fetchWeather}, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);