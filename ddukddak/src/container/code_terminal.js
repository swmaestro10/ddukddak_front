import React, { Component } from 'react';
import {connect} from 'react-redux';

import './code_terminal.css';

class CodeTerminal extends Component {
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
                <div className="code_submit">
                    {/* submit button */}
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