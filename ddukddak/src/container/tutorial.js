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
			'http://ddukddak.io/user/signin',
			{
				params : {
					email : '1@test.com',
					pw : 'password'
				}
			})
			.then(response => { console.log(response) })
			.catch(response => { console.log(response) });
		this.setState({discription : result});
	}
    render(){
        return (
			<section className="course_container">
				<div className="course_title">
					<h1>Machine Learning TEST Class</h1>
				</div>
				<div className="course_tutorial">
					<h4>Step 1 - Training Data</h4>
					{this.state.discription}	
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
