// Libraries
import React, { Component } from 'react';
import { createPortal } from 'react-dom';

// Root
const modalRoot = document.body;

// Component
class Modal extends Component {
	constructor(props) {
		super(props);
		this.el = document.createElement('div');
	}

	componentDidMount() {
		modalRoot.appendChild(this.el);
	}

	componentWillUnmount() {
		modalRoot.removeChild(this.el);
	}

	render() {
		return createPortal(this.props.children, this.el);
	}
}

export default Modal;
