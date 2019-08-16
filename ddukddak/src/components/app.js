import React, { Component } from 'react';

import Header from './header';
import Tutorial from '../container/tutorial';
import TerminalContainer from './termial_container';

export default class App extends Component {
    render(){
        return(
            <div>
                <Header />
                <Tutorial />
                <TerminalContainer />
            </div>
        );
    }
}