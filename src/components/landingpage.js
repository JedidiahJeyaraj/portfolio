import React, { Component } from 'react';
import {Grid, Cell} from "react-mdl";

import profile from './profile.png';

class Landing extends Component {
	render() {
		return (
			<div style={{width: '100%', margin: 'auto', height:'100%'}}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img className="avatar-img"
							src= {profile}
							alt="Profile"
						/>
						<div className="banner-text">
							<h1>
								Software Developer | Web Developer | App Developer	 
							</h1>
							<hr/>
							<p>
								HTML | CSS | JAVASCRIPT | NODEJS | REACTJS
							</p>
							<div className="social-links">
								<Grid>
								<Cell col={3} phone={12}>
								<a href="https://www.google.com/" rel="noopener noreferer" >
									<i className="fa fa-linkedin-square" aria-hidden="true" />
								</a>
								</Cell>
								<Cell col={3} phone={12}>
								<a href="https://www.google.com/" rel="noopener noreferer" >
									<i className="fa fa-github-square" aria-hidden="true" />
								</a>
								</Cell>
								<Cell col={3} phone={12}>
								<a href="https://www.google.com/" rel="noopener noreferer" >
									<i className="fa fa-youtube-square" aria-hidden="true" />
								</a>	
								</Cell>
								<Cell col={3} phone={12}>
								<a href="https://www.google.com/" rel="noopener noreferer" >
									<i className="fa fa-google-plus-square" aria-hidden="true" />
								</a>	
								</Cell>															
								</Grid>
							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Landing;