import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchTerminal} from '../action/index';

import './code_terminal.css';

let count = 0;

class CodeTerminal extends Component {
    constructor(props){
        super(props);
        this.onSubmitCode = this.onSubmitCode.bind(this);
	this.onTerminal = this.onTerminal.bind(this);
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
    onTerminal() {
	let stat = (this.props.terminal + 1)%2;
	if(stat === 1){
		this.props.fetchTerminal(stat);
	}else{
		this.props.fetchTerminal(stat);
	}
    }
    renderCode() {
	let codeString = `${this.props.code[0]}`;
	let codeSplit = codeString.split(';');
	return codeSplit.map((code) => {
		if(code !== ""){
			count = count + 1;
			return (<li key={count} className="codes">>>> {code}</li>);
		}
		return "";
	});
    }
    render(){
        return(
        <div className = "code_terminal">
	    <div className = "code_generator" onClick={this.onTerminal}>
                <h3>Text Code</h3>
            </div>
            <div className = "code_window">
                <div className={(this.props.terminal)?"terminal":"terminal_hidden"}>
			<ul className={(this.props.terminal)?"ul_vi":"ul_no"}>{this.renderCode()}</ul>
	    	</div>
	    	<div 
                    className="code_submit"
                    onClick={this.onSubmitCode}>
                    <h3> Submit </h3>
                </div>
            </div>
        </div>
        );
    }
}

function mapStateToProps(state){
    return {
        code : state.code,
	terminal : state.terminal
    };
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchTerminal},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(CodeTerminal);
