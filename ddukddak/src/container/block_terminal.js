import React, {Component}from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import BlocklyDrawer, {Block, Category} from 'react-blockly-drawer';

import {fetchCode} from '../action/index';

import {blocks} from './blocks';

import './block_terminal.css'

class BlockTerminal extends Component{
    constructor(props){
        super(props);
        this.state = {workspace : ''};
        // workspace있으면 불러오는 코드 추가 필요
    }
    onChangeState(code,workspace){
        this.props.fetchCode(code,workspace);
    }
    render(){
        return(
        <div className="block_terminal">
            <BlocklyDrawer
                workspaceXML = {this.state.workspace}
                tools={blocks}
                onChange={(code,workspace) => {
                        this.onChangeState(code,workspace);
                }}
                appearance = {
                    {
                        categories : {
                            Model : {colour : '50'},
                            Data : { colour : '200' },
                            modelLayer : { colour : '150' },
                            Training : { colour : '100' },
                            Demo : { colour : '270' },
                            test : { colour : '160' },
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
