import React, { Component } from 'react';
import cardnota from './componentes/cardnota';

class listadenotas extends Components {
    render() {
        return (
            <section>
                <ul>
                    <li>
                        <cardnota />
                    </li>
                </ul>
                <ul>
                    <li>
                        <cardnota />
                    </li>
                </ul>
                <ul>
                    <li>
                        <cardnota />
                    </li>
                </ul>
            </section>

        )
    }
}


export default listadenotas;