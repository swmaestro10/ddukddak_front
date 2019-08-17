import React from 'react';
import axios from 'axios';
import './tutorial.css';

class Tutorial extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {discription : ""};
		this.updateDiscription();
	}
	updateDiscription = async() => {
		const result = await axios.get(
			'http://ddukddak.io/class/enter',
			{
				params : {
					token:"Tc5Ly0FLEzgmJ7uU+NpzkedS8FpzL14dFVVvzhN+uaD6Y3iYBLpSD9v8ySsMTVdfAZRpKLpNeht1LeAPeKmNUagxw1y0XbekE95MQ+E5xa85WUuFW2dAkkheceuuBvucVJdvDq9YycIHfSPdJ/Nj2uVFMMxvQlt+TxCjYPNASl21N4bzz/5QvQmqIKeh2fQ8j8D/nwxzKOYItL7S1J3FKi+aeysmvXbgnXX11JvEtr+O2nZ2FFL+g1tWuFhJ1tyzC3IH84oNKMNIMeecdNrQ30GxM3ZTaUg7KPL/06zb81+r3lpE18vVAC6EKQ9oK6t2EeRnIZv8isZmA95d17GpeL+PlraKf3St5YTzXQnCYRJb+Q6rvk7+VaN8vSelQ2E0gbEdrb1VbxhEZn7FPyJzqrhazyTrx+EXFn+MN7GA9c1s7AzNUXSqaA==",
					class : "1"
				}
			});
		this.setState({discription : result});
	}
    render(){
        return (
			<section className="course_container">
				<div className="course_title">
					<h1>Machine Learning</h1>
				</div>
				<div className="course_tutorial">
					{this.state.discription}
				</div>
				<div className="course_progress">
					3
				</div>
			</section>	
	)
    }
}

export default Tutorial;