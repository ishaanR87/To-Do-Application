import React from 'react'

export default function Card({taskObj, index}) {
  return (
        <div class = "card-wrapper mr-5">
            <div class = "card-top" style={{"background-color": "#5DC250"}}></div>
            <div class = "task-holder">
                <span class = "card-header" style={{"background-color": "#F2FAF1", "border-radius": "10px"}}>
                    {taskObj.Name}
                </span>
                <p style={{marginTop: 10}}>{taskObj.Description}</p>

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i class = "far fa-edit mr-3" style= {{ "color": "#5DC250"}} ></i>
                    <i class="fas fa-trash-alt" style= {{"color": "#5DC250"}} ></i>
                </div>
        </div>
        </div>
    );
};
  

