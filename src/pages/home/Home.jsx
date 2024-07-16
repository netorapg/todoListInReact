import React, { useEffect, useState } from  "react";
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {

    const [todos, setTodos] = useState([]);
    
    useEffect(() => {
        const todosLocal = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(todosLocal);
    }, []);
    return (
        <div className="home">
            <h2>Minhas tarefas</h2>
            <Link to='/form-todo'>
                Nova Tarefa
            </Link>
            <ul>
                {todos.map(todo=>(
                    <li>{todo.nomeTarefa} - {todo.observacao}</li>
                ))}
            </ul>
        </div>
    );
}
export default Home