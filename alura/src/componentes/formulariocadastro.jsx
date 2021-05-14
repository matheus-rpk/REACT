import React, { Component } from 'react';

 class formulariocadastro extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Título" />
                <textarea placeholder="Escreva sua nota..."></textarea>
                <button>Criar Nota</button>

            </form >
        )

    }
}

export default formulariocadastro;