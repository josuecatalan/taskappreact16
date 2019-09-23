import React, { Component } from 'react';
import './App.css';

// function HelloWorld(props) {
// 	return (
// 		<div className='hello'>
// 			<h3>{props.subtitle}</h3>
// 			{props.mytext}
// 		</div>
// 	);
// }

class HelloWorld extends Component {
	state = {
		show: true
	};

	///se crea una function para hacer bind en la class
	toggleShow = () => {
		this.setState({ show: !this.state.show });
	};

	///en los componentes por clase se usa un render antes que el return
	render() {
		if (this.state.show) {
			return (
				<div className='hello'>
					<h3>{this.props.subtitle}</h3>
					{this.props.mytext}
					<br />
					<br />
					<button onClick={this.toggleShow}>Ocultar Elemento!</button>
				</div>
			);
		} else {
			return (
				<div>
					<h1>Elemento Oculto!</h1>
					<br />
					<button onClick={this.toggleShow}>Reactivar Elemento!</button>
				</div>
			);
		}
	}
}

function App() {
	return (
		<div>
			This is my component:
			<HelloWorld mytext='Hello Josh' subtitle='lorem ipsum' />
			<HelloWorld mytext='Hola Mundo' subtitle='lorem ipsum' />
			<HelloWorld mytext='Hello!' subtitle='lorem ipsum' />
		</div>
	);
}

export default App;
