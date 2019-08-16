import React, {Component}from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import BlocklyDrawer, {Block, Category} from 'react-blockly-drawer';

import {fetchCode} from '../action/index';

import {helloWorld,test_operation,test_print,short_math} from './blocks';
import './block_terminal.css'

class BlockTerminal extends Component{
    constructor(props){
        super(props);
        this.state = {
            workspace : null
        };
    }
    onChangeState(code,workspace){
        this.props.fetchCode(code);
        this.setState({ workspace });
    }
    render(){
        return(
        <div className="block_terminal">
            <BlocklyDrawer
                workspaceXML = {this.workspace}
                tools={[helloWorld,test_operation,test_print,short_math]}
                onChange={(code,workspace) => {
                    if(code !== ""){
                        this.onChangeState(code,workspace);
                    }
                }}
                appearance = {
                    {
                        categories : {
                            Demo : {
                                colour : '270'
                            },
                            test : {
                                colour : '160'
                            },
                        },
                    }
                }>
				<Category name="Variables" custom="VARIABLE" />
				<Category name="Values" >
					<Block type="math_number" />
					<Block type="text" />
				</Category>                
            </BlocklyDrawer>
        </div>
        );
    }
} 

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchCode},dispatch);
}

export default connect(null,mapDispatchToProps)(BlockTerminal);
