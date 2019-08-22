import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
    render(){
        return(
            <div className="Header">
                <div>
                    <div className="Header_logo">
                        <h1>뚝딱러닝</h1>
                    </div>
		    <div className="Header_info">
			<ul>
				<li>OtherClass</li>
				<li>LogIn</li>
				<li>SignIn</li>
			</ul>
		    </div>
                </div>
            </div>
        )
    }
} 
