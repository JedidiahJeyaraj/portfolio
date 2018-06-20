import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
	render() {
		return (
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6}>
						<h2>Jedidiah Jeyaraj</h2>
						<img
							src="./images/profile.png"
							alt="Profile"
							style = {{height : '250px'}}
						/>
						<p style= {{width:'75%', margin: 'auto', paddingTop: '1em'}}>
						Hi, I'm Jedidiah Jeyaraj.<br/> I'm a very Tech Enthusiastic Guy always ready to learn new stuffs. I like challenges a lot and it's always fun to solve them.
						</p>
					</Cell>
					<Cell col={6}>
						<Grid>
							<Cell col={12} phone={12} align="middle">
							<h2>Contact Me</h2>
							</Cell>
							<Cell col={12} phone={12} align="middle">
							<hr />
							</Cell>
							<Cell col={12} phone={12}  align="middle">
							<div className="contact-list">

								<List>

								  <ListItem>
								    <ListItemContent style={{fontSize:'30px', fontFamily:'Anton', textAlign:'center	'}}>
										<Grid>
										<Cell col={4} phone={12} align="middle">
								    	<i className="fa fa-phone-square" aria-hidden="true"/>
										</Cell>
										<Cell col={8} phone={12} align="middle">
								    	+917418975940
										</Cell>
										</Grid>
								    </ListItemContent>
								  </ListItem>
									<ListItem>
								    <ListItemContent style={{fontSize:'16px', fontFamily:'Anton', textAlign:'center	'}}>
										<Grid>
										<Cell col={4} phone={12} align="middle">
								    	<i className="fa fa-envelope" aria-hidden="true"/>
										</Cell>
										<Cell col={8} phone={12} align="middle">
								    	jedidiahjeyaraj@gmail.com
										</Cell>
										</Grid>
								    </ListItemContent>
								  </ListItem>
									<ListItem>
								    <ListItemContent style={{fontSize:'20px', fontFamily:'Anton', textAlign:'center	'}}>
										<Grid>
										<Cell col={4} phone={12} align="middle">
								    	<i className="fa fa-skype" aria-hidden="true"/>
										</Cell>
										<Cell col={8} phone={12} align="middle">
								    	live:jedidiahjeyaraj_2
										</Cell>
										</Grid>
								    </ListItemContent>
								  </ListItem>


								</List>

							</div>
								</Cell>
						</Grid>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Contact;
