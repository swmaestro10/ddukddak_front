import React, { Component } from 'react';

import BlockTerminal from '../container/block_terminal';
import CodeTerminal from '../container/code_terminal';
import './terminal_container.css';

export default class TerminalContainer extends Component {
    render(){
        return (
            <div className = "terminal_container">
                <BlockTerminal />
                <CodeTerminal / >
            </div>
        );
    }
}