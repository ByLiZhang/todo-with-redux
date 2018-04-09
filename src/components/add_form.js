import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'; //reduxForm is a higher order component
import { connect } from 'react-redux';
import { addNewItem } from '../actions';

class AddForm extends Component {
	handleAddItem(values){
		console.log('New item:', values);
		this.props.addNewItem(values).then(()=>{
			this.props.history.push('/');
		});
	}

	// renderInput(props){
	// 	console.log('RenderInput Props:', props);
	// 	return (
	// 		<div>
	// 			<label>{props.label}</label>
	// 			<input {...props.input} type='text' />
	// 			<p className='red-text text-darken-2'>{props.meta.touched && props.meta.error}</p> 
	// 		</div>
	// 	);
	// }

	renderInput({input, label, meta:{touched, error}}){
		return (
			<div>
				<label>{label}</label>
				<input {...input} type='text' />
				<p className='red-text text-darken-2'>{touched && error}</p> 
			</div>
		);
	}

	render(){
		// console.log('AddForm props:', this.props);

		const { handleSubmit } = this.props;  //props from redux-form

		return (
			<div>
				<Link to='/' className='btn right'>Go Back</Link>
				<h3 className='center'>Add Item</h3>
				<form onSubmit={handleSubmit(this.handleAddItem.bind(this))}>
					<Field name='title' label='Item Title' component = {this.renderInput} />
					<Field name='details' label='Item Details' component = {this.renderInput} />
					<button>Add To Do Item</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const {title, details} = values;
	const errors = {};
	if(!title){
		errors.title = 'Please enter a title';
	} 
	if(!details){
		errors.details = 'Please give your item some details';
	}
	return errors;
}

AddForm = reduxForm({
	form: 'add_item',
	// validate  ES6 method
	validate: validate  //key must be validate
})(AddForm);

export default connect(null, {addNewItem})(AddForm);