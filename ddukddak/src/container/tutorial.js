import React from 'react';
import axios from 'axios';
import './tutorial.css';

class Tutorial extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			title : "Loading...",
			discription : "Loading..."
		
		};
		this.updateDiscription();
	}
	updateDiscription = async() => {
		const result = await axios.post(
			'http://ddukddak.io/class/enter',
			{
				token : 'Tc5Ly0FLEzgmJ7uU+NpzkedS8FpzL14dFVVvzhN+uaD6Y3iYBLpSD9v8ySsMTVdfAZRpKLpNeht1LeAPeKmNUagxw1y0XbekE95MQ+E5xa85WUuFW2dAkkheceuuBvucVJdvDq9YycIHfSPdJ/Nj2uVFMMxvQlt+TxCjYPNASl21N4bzz/5QvQmqIKeh2fQ8j8D/nwxzKOYItL7S1J3FKi+aeysmvXbgnXX11JvEtr+O2nZ2FFL+g1tWuFhJ1tyzC3IH84oNKMNIMeecdNrQ30GxM3ZTaUg7KPL/06zb81+r3lpE18vVAC6EKQ9oK6t2EeRnIZv8isZmA95d17GpeL+PlraKf3St5YTzXQnCYRJb+Q6rvk7+VaN8vSelQ2E0gbEdrb1VbxhEZn7FPyJzqrhazyTrx+EXFn+MN7GA9c1s7AzNUXSqaA==',
				class : '1'
			})
			.then(response => {
					console.log(response.data);
					console.log(response.data.data[1].name);
					console.log(response.data.data[1].text_tutorial);
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
					<h4>Step 1 - Training Data</h4>
					<p>{this.state.discription}</p>
				</div>
				<div className="course_progress">
					<div className="course_button">
						<p>previous</p>
					</div>
					<div className="course_button">
						<p>next</p>
					</div>					
				</div>
			</section>	
	)
    }
}

export default Tutorial;
