import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import './code_terminal.css';

const TOKEN = '3fTNLrtYNwF2vP/cs9diXifNPn+/yMowugeHigEJ+oBIlHVlbSYeys4rh7EvSkjmdn0r6+gCC6klwrvbZmTvEtHpE/iaE9C2tfD3F2CpipgYz8axkHTc0UMhxAQ+3woT5q4GAEsJ/7Fvop7DlBRTY+0BekMG/++KmDRQpJqX7eY/FMLENdd2J4hVuXmd8oUH5g6RwAK/vVIzA8hvAIgRWnukez6+pgjR0nCvm2VRGpFz20KNl0AuzwEo+f+BoSeT9XG4dd1i8TSWUACkS71lw7ixA/+3Eix+WIX105sTciEFoblGaOvygAq6Mob8eRLGWOEA0jslJ0ay4ZTD3kn5AHPLh5Zdf89IzepKi0luuFCZ+vC9a+UMJ7QjNfsIBicOYemjFg1m+lWLBBCaD94U9sxgayFxI9k7ZqYCIXnkQy8bPgyI';

class CodeTerminal extends Component {
    constructor(props){
        super(props);

        this.onSubmitCode = this.onSubmitCode.bind(this);
    }
    onSubmitCode(){
        const result = axios({
            method : 'get',
            url : 'http://ddukddak.io/class/sub/submit',
            data : {
                
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