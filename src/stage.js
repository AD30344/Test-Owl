import React from 'react';
import './List.css';


function Stage(props){
    console.log(props)
/*const participants = props.storeParticipants.map(participant => {
    let onStageSpan= {}
    if(!participant.onStage){
        //if they not on stage
       // onStageSpan = <div className="light-red-box"><div className="light-red"></div></div>
    }else{
        //They are on stage
       // onStageSpan = <div className="status-light-box"><div className="light-green"></div><br/><span className="stage-status">On Stage</span></div>
    }
    // if(!participant.inSession){
    //     //if they not in session
    // }else{

    // }
   /* return (    
        <div className="participant" id={participant.id}>
        <div>
            <img src={participant.avatar} />
        </div>
        <div className="Name-Status-Stage-Box">
            <span>{participant.name}</span>
            {onStageSpan}
        </div>
    </div>
    );
});
*/
   return(<div>
   <div className="stage">Stage</div>
   <div className="participant">
        <div>
            <img src= ""/>
        </div>
        <div className="Name-Status-Stage-Box">
            <span></span>
            
        </div>
    </div>
    </div>
   )
}






export default Stage;