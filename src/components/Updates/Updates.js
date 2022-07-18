import React from 'react';
import { UpdatesData } from '../../data/Data';
import './updates.css';

const Updates = () => {
  return (
    <div className="Updates">
        {UpdatesData.map((update, index)=>{
            return(
                <div className="update" key={index}>
                    <img src={update.img} alt="profile"/>
                    <div className="notification">
                        <div style={{marginBottom: '0.5rem'}}>
                            <span>{update.name}</span>&nbsp;
                            <span>{update.notification}</span>
                        </div>
                        <span>{update.time}</span>

                    </div>
                    
                    
                </div>
            )
        })}
    </div>
  )
}

export default Updates;
