import React from 'react'
import { useState } from 'react'

function Cards() {

    const { cards, setCards } = useState("");

    return (
        <div>
            <button onClick={() => setCards(cards + 1)}>
                <ul className="card">{cards.map((card, index) => (
                    <li key={index} >{card.name}\n
                        {card.description}\n
                        {card.benefits}</li>

                ))}</ul>
            </button>
        </div>
    )
}

export default Cards
