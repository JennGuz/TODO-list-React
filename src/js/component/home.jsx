import React, { useState } from "react";

//create your first component


let svg = {
	icon: <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M10 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
}

const Check = ({ task, onComplete, onDelete }) => {
	
	const [completed, setCompleted] = useState(false)

	const handleCompleted = () => {
		setCompleted(!completed);
		onComplete();
	}

	return (
		<>
			<div className="containerCheck">
				<div onClick={handleCompleted} className={`styleCompleted ${completed ? 'check' : 'unCheck'}`} />
				<span className={completed ? 'textCompleted' : ''}>{task} </span>
				<span className="iconDelete" onClick={onDelete}>{svg.icon}</span>
			</div>
		</>
	);
}



const Home = () => {

	const [task, setTask] = useState('');
	const [tasks, setTasks] = useState([]);
	let message;

	const handleDelete = (indexToDelete) => {
		setTasks(tasks.filter((_, index) => index !== indexToDelete));
	}

	const handleinputchange = (event) => {
		setTask(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (task.trim()) {
			setTasks([...tasks, task]);
			setTask('');
		}

	}

	// if(tasks.length === 0) return message = <p>No hay tareas, añadir tareas</p>;
	
		
	return (
		<>
			<div className="todoList">
				<div className="container">
					<h1>TO DO LIST</h1>
					<form onSubmit={handleSubmit}>
						<input type="text" placeholder="What needs to be done?" value={task} onChange={handleinputchange} />
					</form>
					<div className="tasks">
						<ul>
							{tasks.length === 0 ? (
								<p>Todavia no hay ninguna tarea, ¡Añade tu primera tarea!</p>
							) : (
								tasks.map((task, index) => (
									<Check key={index} task={task} onComplete={() => console.log(`Task ${index} completed!`)} onDelete={() => handleDelete(index)}/>
								))
							)
}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};


export default Home;
