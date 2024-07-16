import React, { useState } from "react";
import './FormTodo.css';
import { useNavigate } from "react-router-dom";

const FormTodo = () => {
    const navigate = useNavigate();

    const [todo, setTodo] = useState({ key: 0, nomeTarefa: '', observacao: '' });

    const atualizarValor = (input) => {
        setTodo({ ...todo, [input.target.id]: input.target.value });
    }

    const salvar = () => {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        const novoTodo = { ...todo, key: todos.length };
        todos.push(novoTodo);
        localStorage.setItem('todos', JSON.stringify(todos));
        navigate(-1);
    }

    return (
        <div className="todo">
            <h3>Cadastrar Nova Tarefa</h3>
            <input
                className="input"
                type="text"
                onChange={atualizarValor}
                value={todo.nomeTarefa}
                id="nomeTarefa"
            />
            <input
                className="input"
                type="text"
                onChange={atualizarValor}
                value={todo.observacao}
                id="observacao"
            />
            <button className="button" onClick={salvar}>Salvar</button>
        </div>
    );
}

export default FormTodo;
