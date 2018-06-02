import React, { Component } from 'react';
import {Grid, Cell} from "react-mdl";

class Landing extends Component {
	render() {
		return (
			<div style={{width: '100%', margin: 'auto'}}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img className="avatar-img"
							src="./images/profile.png"
							alt="Profile Image"
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
								<a href="https://www.google.com/" rel="noopener noreferer" target="_blank">
									<i className="fa fa-linkedin-square" aria-hidden="true" />
								</a>

								<a href="https://www.google.com/" rel="noopener noreferer" target="_blank">
									<i className="fa fa-github-square" aria-hidden="true" />
								</a>

								<a href="https://www.google.com/" rel="noopener noreferer" target="_blank">
									<i className="fa fa-youtube-square" aria-hidden="true" />
								</a>	

								<a href="https://www.google.com/" rel="noopener noreferer" target="_blank">
									<i className="fa fa-google-plus-square" aria-hidden="true" />
								</a>																

							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Landing;