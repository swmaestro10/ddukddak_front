import React from 'react';
import axios from 'axios';
import './tutorial.css';
import {book}from './book';

class Tutorial extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title : "Loading...",
			discription : "Loading...",
			page : 0
		};
		this.updateDiscription();
		this.pageDown = this.pageDown.bind(this);
		this.pageUp = this.pageUp.bind(this);
	}
	pageDown(){
		if(this.state.page > 0)
			this.setState({
				...this.state,
				page : this.state.page - 1
			});
	}
	pageUp(){
		if(this.state.page < book.length-1 )
			this.setState({
				...this.state,
				page : this.state.page + 1
			})
	}
	updateDiscription = async() => {
		const result = await axios.post(
			'http://ddukddak.io/class/enter',
			{
				token : 'Tc5Ly0FLEzgmJ7uU+NpzkedS8FpzL14dFVVvzhN+uaD6Y3iYBLpSD9v8ySsMTVdfAZRpKLpNeht1LeAPeKmNUagxw1y0XbekE95MQ+E5xa85WUuFW2dAkkheceuuBvucVJdvDq9YycIHfSPdJ/Nj2uVFMMxvQlt+TxCjYPNASl21N4bzz/5QvQmqIKeh2fQ8j8D/nwxzKOYItL7S1J3FKi+aeysmvXbgnXX11JvEtr+O2nZ2FFL+g1tWuFhJ1tyzC3IH84oNKMNIMeecdNrQ30GxM3ZTaUg7KPL/06zb81+r3lpE18vVAC6EKQ9oK6t2EeRnIZv8isZmA95d17GpeL+PlraKf3St5YTzXQnCYRJb+Q6rvk7+VaN8vSelQ2E0gbEdrb1VbxhEZn7FPyJzqrhazyTrx+EXFn+MN7GA9c1s7AzNUXSqaA==',
				class : '1'
			})
			.then(response => {
				this.setState({
					...this.state,
					title : response.data[1][0].name,
					discription : response.data[1][0].tutorial
				});
				console.log(response.data);
			})
			.catch(response => { console.log(response) });
	}
    render(){
        return (
			<section className="course_container">
				<div className="course_title">
					<h1>{this.state.title}</h1>
				</div>
				<div className="course_tutorial">
					<h4>Step {this.state.page} - {book[this.state.page].step}</h4>
					<p>{this.state.discription}</p>
					<p>{book[this.state.page].explain}</p>
					<p>{book[this.state.page].trying}</p>
				</div>
				<div className="course_progress">
					<div className="course_button" onClick={this.pageDown}>
						<p>previous</p>
					</div>
					<div className="course_button" onClick={this.pageUp}>
						<p>next</p>
					</div>					
				</div>
			</section>	
	)
    }
}

export default Tutorial;
