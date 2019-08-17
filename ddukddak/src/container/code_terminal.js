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
        const result = await axios.get(
            'http://ddukddak.io/class/sub/submit',
            {
                params : {
                    token : "Tc5Ly0FLEzgmJ7uU+NpzkedS8FpzL14dFVVvzhN+uaD6Y3iYBLpSD9v8ySsMTVdfAZRpKLpNeht1LeAPeKmNUagxw1y0XbekE95MQ+E5xa85WUuFW2dAkkheceuuBvucVJdvDq9YycIHfSPdJ/Nj2uVFMMxvQlt+TxCjYPNASl21N4bzz/5QvQmqIKeh2fQ8j8D/nwxzKOYItL7S1J3FKi+aeysmvXbgnXX11JvEtr+O2nZ2FFL+g1tWuFhJ1tyzC3IH84oNKMNIMeecdNrQ30GxM3ZTaUg7KPL/06zb81+r3lpE18vVAC6EKQ9oK6t2EeRnIZv8isZmA95d17GpeL+PlraKf3St5YTzXQnCYRJb+Q6rvk7+VaN8vSelQ2E0gbEdrb1VbxhEZn7FPyJzqrhazyTrx+EXFn+MN7GA9c1s7AzNUXSqaA==",
                    subclass : "1",
                    code : `"${this.props.code[0]}"`
                }
            });
        console.log(result);
    }
    render(){
        return(
        <div className = "code_terminal">
            <div className = "code_generator">
                <h2>Python Code</h2>
            </div>
            <div className = "code_window">
                <div className="terminal">
                    {this.props.code[0]}
                </div>
                <div 
                    className="code_submit"
                    onClick={this.onSubmitCode}>
                    <h2> Submit Code </h2>
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