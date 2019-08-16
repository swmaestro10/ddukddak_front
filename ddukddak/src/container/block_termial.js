import React, {Component}from 'react';
import {connect} from 'react-redux';
import {bindActionCreator} from 'redux';

import {helloWorld,test_operation,test_print,short_math} from './blocks';

class BlockTerminal extends Component{
    constructor(props){
        super(props);
        this.state = {
            workspace : null
        };
    }




} 