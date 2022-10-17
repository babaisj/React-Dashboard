
import React from 'react';




export default function Scorecard(props) {
    
    return (
        <div className='scroreBox mb-2'>
            <div className='d-flex align-items-center justify-content-between mb-1'>
                <p className='mb-0'>{props.title}</p>
                <i className="material-icons-outlined" style={{color:props.color,}}>{props.icon}</i>
            </div>
            <h2 className='score mb-1'>{props.score}</h2>
            <div>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: props.progress, backgroundColor: props.color }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" >{props.progress}</div>
                   
        
     
                </div>
            </div>

        </div>
    )
}
