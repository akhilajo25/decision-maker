import React, {Component} from "react";
import TodoItems from "./TodoItems";

class TodoList extends Component {
	constructor(props){
		super(props);
		this.state = {items: [], assignedTask:'aaaaa'};
		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		
	}
	addItem(e){
		if(this._inputElement.value !== ""){
			var newItem = {
				text: this._inputElement.value, 
				key: Date.now()
			};
	
			this.setState((prevState) => {
				return {
					items: prevState.items.concat(newItem)
		
				};
			});
		
			this._inputElement.value = "";
		}
		console.log(this.state.items);
		e.preventDefault();
	}
	deleteItem(key){
		var filteredItems = this.state.items.filter(function(item) {
			return (item.key !== key);
		});
		console.log("Filtered ",filteredItems)
		
		this.setState({
			items: filteredItems
		});

	
	}
	generateRandomtask(){
		const lenoflist = (this.state.items).length;
		const randomNumber = Math.floor(Math.random() * lenoflist)
		console.log(Math.floor(Math.random() * lenoflist));
		console.log(this.state.items[randomNumber])
		var finalAssTask = this.state.items[randomNumber]
		this.setState({
			assignedTask:finalAssTask
		});
	}

	deleteAll(){
		
		this.setState({
			items:[]
		});
	}
	render(){
		const enabled = ((this.state.items).length)>0;
		return(

			<div className="todoListMain">
			  <div className="header">
				  <h1>Super Decision Maker</h1>
				  <p>Confused?? Put your choices in the hands of this app</p>
				  <div><h4>Your Options</h4><button 
				  
				  onClick={() => this.deleteAll()}
				  >
					  Remove all
					</button></div>
				  <button 
				  disabled={!enabled}
				  onClick={() => this.generateRandomtask()}
				  >
					  What should I do?
					</button>
					<br></br>
					<h1>{this.state.assignedTask.text}</h1>
				  <TodoItems entries={this.state.items} delete={this.deleteItem} doing={this.state.assignedTask} />
			    <form onSubmit={this.addItem}>
			      <input ref={(a) => this._inputElement = a} placeholder="Enter your option here">
			      </input>
			      <button type="submit">Add Option</button>
			    </form>
			  </div>
		        </div>
		);
	}
}

export default TodoList; 
