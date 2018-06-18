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
						gsdfjhgadfjhg adjfhg adhgf ahdgf adfg akdhfg akdhfg shdfg hgf jhdfg jhgf jsdgf 
						</p>
					</Cell>
					<Cell col={6}>
						<h2>Contact Me</h2>
						<hr />
						<div className="contact-list">
							<List>
							  <ListItem>
							    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
							    	<i className="fa fa-phone-square" aria-hidden="true"/>
							    	+917418975940
							    </ListItemContent>
							  </ListItem>
							  <ListItem>
							    <ListItemContent icon="person">Aaron Paul</ListItemContent>
							  </ListItem>
							  <ListItem>
							    <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
							  </ListItem>
							</List>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Contact;