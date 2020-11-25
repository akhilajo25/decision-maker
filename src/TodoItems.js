import React, {Component} from "react";

class TodoItems extends Component {
	constructor(props){
		super(props);
		this.createTasks = this.createTasks.bind(this);
	}
	createTasks(item){
		return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
	}
	delete(key){
		this.props.delete(key);
	}
	render(){
		var todoEntries = this.props.entries;
		var listItems = todoEntries.map(this.createTasks);
		//var aa = this.props.doing;

		return(
			
				
			<ul className="theList">
				<h4>Your Options</h4>
				{listItems}
				

				
			</ul>
			
		);
	}
};

export default TodoItems;
