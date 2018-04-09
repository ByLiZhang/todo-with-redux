import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getList } from '../actions';
import { Link } from 'react-router-dom';

class List extends Component {
	componentDidMount(){
		this.props.getList();
	}

	render(){
		console.log('list.js PROPS:', this.props);
		const itemElements = this.props.list.map((item, index)=>{
			return(
				<li className='collection-item' key={index}>{item.title}</li>
			);
		});

		const style = {
			height: '60px',
		};

		return(
			<div>
				<div style={style}>
					<Link className='btn right' to='/add-item'>Add Item</Link>
				</div>
				<ul className='collection'>
					{itemElements}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		list: state.list.items
	}
}


export default connect(mapStateToProps, {getList: getList})(List);