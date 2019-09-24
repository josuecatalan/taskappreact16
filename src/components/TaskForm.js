import React, { Component } from 'react';

class TaskForm extends Component {
	state = {
		title: '',
		description: ''
	};

	onSubmit = e => {
		this.props.addTask(this.state.title, this.state.description);
		e.preventDefault();
	};

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<label>Formulario de Tareas</label>
				<br />
				<input
					type='text'
					name='title'
					placeholder='Escribe una Tarea...'
					onChange={this.onChange}
					value={this.state.title}
				/>
				<br />
				<br />
				<textarea
					placeholder='Escribe una Descripcion...'
					name='description'
					cols='30'
					rows='10'
					onChange={this.onChange}
					value={this.state.description}
				/>
				<br />
				<button type='submit'>Guardar</button>
			</form>
		);
	}
}

export default TaskForm;
