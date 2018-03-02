import React, { Component } from 'react';

var Products = [
	{
		id: "1",
		title: "Milk",
		Price: "300"
	},	
	{
		id: "2",
		title: "Bread",
		Price: "300"
	},
	{
		id: "3",
		title: "Ice-Cream",
		Price: "300"
	},
	{
		id: "4",
		title: "Candy",
		Price: "300"
	},
];
class mid2 extends Component{
	constructor(props){
		super(props)

		this.state = {
			Products: Products,
			clicked: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.addTodo = this.addTodo.bind(this);
		this.handlePr = this.handlePr.bind(this);
			
	}

	handleChange(e){
		this.setState({value: e.target.value});

	}


	render(){
		return(
			<div>
	        	{
	            	this.state.movies.map(function(Products) {
	              		return(
	                		<div>
		              			<div key={Products.id} id={Products.id} title={Products.title} Price={Products.Price} >
		              				<h1>{Products.title}</h1>
		              			</div>
	                		</div>
	              		)
	            	})
          		}		
				
			</div>

		);
	}
}

export default mid2;

