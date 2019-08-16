import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import './code_terminal.css';

class CodeTerminal extends Component {
    constructor(props){
        super(props);

        this.onSubmitCode = this.onSubmitCode.bind(this);
    }
    onSubmitCode(){
        const result = axios({
            method : 'get',
            url : `http://ddukddak.io/`
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