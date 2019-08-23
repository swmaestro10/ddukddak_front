import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import './code_terminal.css';

class CodeTerminal extends Component {
    constructor(props){
        super(props);

        this.onSubmitCode = this.onSubmitCode.bind(this);
    }
    onSubmitCode= async() => {
        const result = await axios.post('http://ddukddak.io/class/sub/submit',{
                    token : 'Tc5Ly0FLEzgmJ7uU+NpzkedS8FpzL14dFVVvzhN+uaD6Y3iYBLpSD9v8ySsMTVdfAZRpKLpNeht1LeAPeKmNUagxw1y0XbekE95MQ+E5xa85WUuFW2dAkkheceuuBvucVJdvDq9YycIHfSPdJ/Nj2uVFMMxvQlt+TxCjYPNASl21N4bzz/5QvQmqIKeh2fQ8j8D/nwxzKOYItL7S1J3FKi+aeysmvXbgnXX11JvEtr+O2nZ2FFL+g1tWuFhJ1tyzC3IH84oNKMNIMeecdNrQ30GxM3ZTaUg7KPL/06zb81+r3lpE18vVAC6EKQ9oK6t2EeRnIZv8isZmA95d17GpeL+PlraKf3St5YTzXQnCYRJb+Q6rvk7+VaN8vSelQ2E0gbEdrb1VbxhEZn7FPyJzqrhazyTrx+EXFn+MN7GA9c1s7AzNUXSqaA==',
                    subclass : 1,
                    code : `'${this.props.code[0]}'`
            })
            .then(response => { 
		alert(response.data.result) })
            .catch(response => { console.log(response) });
    }
    renderCode() {
	let codeString = `${this.props.code[0]}`;
	let codeSplit = codeString.split(';');
	return codeSplit.map((code) => {
		if(code !== "")
			return (<li key={code} className="codes">>>> {code}</li>);
		return "";
	});
    }

    render(){
        return(
        <div className = "code_terminal">
            <div className = "code_generator">
                <h3>Text Code</h3>
            </div>
            <div className = "code_window">
                <div className="terminal">
			<ul>
                    		{this.renderCode()}
                	</ul>
		</div>
                <div 
                    className="code_submit"
                    onClick={this.onSubmitCode}>
                    <h3> Submit Code </h3>
                </div>
            </div>
        </div>
        );
    }
}

function mapStateToProps(state){
    return {
        code : state.code
    };
}

export default connect(mapStateToProps)(CodeTerminal);
