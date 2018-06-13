import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText, IconButton} from 'react-mdl';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab : 0
		};
	}

	toggleCategories() {
		if (this.state.activeTab === 0) {
			return(
				<Grid style={{padding:'10px'}}>
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
				
			);
		} else if (this.state.activeTab === 1) {
			return(
				<Grid style={{padding:'10px'}}>
					<Cell col={4}>
						<Card shadow={5} style={{ minWidth: '450', margin: '10px'}}>
							<CardTitle style={{color:'#fff', height:'176px', background:'#000 center / cover'}}>Angular Project #1
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
							<CardTitle style={{color:'#fff', height:'176px', background:'#000 center / cover'}}>Angular Project #1
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
							<CardTitle style={{color:'#fff', height:'176px', background:'#000 center / cover'}}>Angular Project #1
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
							<CardTitle style={{color:'#fff', height:'176px', background:'#000 center / cover'}}>Angular Project #1
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
			);
		} else if (this.state.activeTab === 2) {
			return(
				<Grid style={{padding:'10px'}}>
					<Cell col={4}>
						<Card shadow={5} style={{ minWidth: '450', margin: '10px'}}>
							<CardTitle style={{color:'#fff', height:'176px', background:'#000 center / cover'}}>PHP Project #1
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
							<CardTitle style={{color:'#fff', height:'176px', background:'#000 center / cover'}}>PHP Project #1
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
							<CardTitle style={{color:'#fff', height:'176px', background:'#000 center / cover'}}>PHP Project #1
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
							<CardTitle style={{color:'#fff', height:'176px', background:'#000 center / cover'}}>PHP Project #1
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
			);
		} else if (this.state.activeTab === 3) {
			return(
				<Grid style={{padding:'10px'}}>
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
			);
		} 
	}

	render() {
		return (
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})} ripple>
					<Tab>React</Tab>
					<Tab>Angular</Tab>
					<Tab>PHP</Tab>
					<Tab>MongoDB</Tab>
				</Tabs>

				
					<Grid>
						<Cell col={12}>
							<div className="content">{this.toggleCategories()}</div>
						</Cell>
					</Grid>
					
				
			</div>
		);
	}
}

export default Projects;