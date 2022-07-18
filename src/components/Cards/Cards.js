import React from 'react';
import './cards.css';
import { CardData } from '../../data/Data';
import Card from '../Card/Card';

const Cards = () => {
  return (
<div className="Cards">
    {CardData.map((card, id)=>{
        return(
            <div className="cardContainer" key={id}>
                <Card 
                title= {card.title}
                circlebar={card.circlebar}
                value={card.value}
                icon={card.icon}
                series={card.series}
                color={card.color}
                />
            </div>
            
        )
    })}
</div>  )
}

export default Cards;


