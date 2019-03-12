import * as React from 'react';

function Card({ title, description, promocode, link }) {
    return (
        <article>
            <h3>{ title }</h3>
            <p>{ description }</p>
            <label>Промокод</label>
            <input value={promocode} type="text" readOnly />
            <a href={link}>Получить бонус</a>
        </article>
    );
}

export { Card as default };
