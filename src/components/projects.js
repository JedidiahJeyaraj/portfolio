import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText, IconButton} from 'react-mdl';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab : 0
		};
	}


	render() {
		return (
			<div className="category-tabs" style= {{}}>
				<Grid style={{padding:'10px', backgroundColor:'white', opacity:'0.8'}} align="middle">
					<Cell col={12} style={{fontSize:'35px', fontFamily:'Anton', textAlign:'center	'}}>
						Projects
					</Cell>
				</Grid>
				<Grid style={{padding:'10px'}} align="middle">
					<Cell col={4}>
						<Card shadow={5} style={{ minWidth: '450', margin: '10px'}}>
							<CardTitle style={{color:'#fff', height:'176px', background:'#000 center / cover'}}>
								Web Project #1
							</CardTitle>
							<CardText>
								Karunya Land Documentation
							</CardText>
							<CardActions border>
								<Button ripple colored>Github</Button>
								{/*<Button ripple colored>CodePen</Button>
								<Button ripple colored>Live Demo</Button>*/}
							</CardActions>
							{/*<CardMenu style={{color:'#fff'}}>
								<IconButton name="share" />
							</CardMenu>*/}
						</Card>
					</Cell>
					<Cell col={4}>
						<Card shadow={5} style={{ minWidth: '450', margin: '10px'}}>
							<CardTitle style={{color:'#fff', height:'176px', background:'#000 center / cover'}}>React Project #1
							</CardTitle>
							<CardText>
							Some Test React Project
							</CardText>
							<CardActions border>
								<Button ripple colored>Github</Button>
								<Button ripple colored>CodePen</Button>
								<Button ripple colored>Live Demo</Button>
							</CardActions>
							<CardMenu style={{color:'#fff'}}>
								<IconButton name="share" />
							</CardMenu>
						</Card>
					</Cell>
					<Cell col={4}>
						<Card shadow={5} style={{ minWidth: '450', margin: '10px'}}>
							<CardTitle style={{color:'#fff', height:'176px', background:'#000 center / cover'}}>React Project #1
							</CardTitle>
							<CardText>
							Some Test React Project
							</CardText>
							<CardActions border>
								<Button colored>Github</Button>
								<Button colored>CodePen</Button>
								<Button colored>Live Demo</Button>
							</CardActions>
							<CardMenu style={{color:'#fff'}}>
								<IconButton name="share" />
							</CardMenu>
						</Card>
					</Cell>
					<Cell col={4}>
						<Card shadow={5} style={{ minWidth: '450', margin: '10px'}}>
							<CardTitle style={{color:'#fff', height:'176px', background:'#000 center / cover'}}>React Project #1
							</CardTitle>
							<CardText>
							Some Test React Project
							</CardText>
							<CardActions border>
								<Button colored>Github</Button>
								<Button colored>CodePen</Button>
								<Button colored>Live Demo</Button>
							</CardActions>
							<CardMenu style={{color:'#fff'}}>
								<IconButton name="share" />
							</CardMenu>
						</Card>
					</Cell>
				</Grid>

			</div>
		);
	}
}

export default Projects;
