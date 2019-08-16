import React, { Component } from 'react';

import BlockTerminal from '../container/block_termial';
import CodeTerminal from '../container/code_terminal';

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