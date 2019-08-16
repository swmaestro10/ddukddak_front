import React, { Component } from 'react';

import Header from './header';
import Tutorial from '../container/tutorial';
import TerminalContainer from './terminal_container';
import './app.css'

export default class App extends Component {
    render(){
        return(
            <div className="app">
                <Header />
                <Tutorial />
                <TerminalContainer />
            </div>
        );
    }
}