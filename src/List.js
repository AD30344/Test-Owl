import React from 'react';
import './List.css';
function List(props) {
    console.log(props.storeParticipants);

    const participants = props.storeParticipants.map(participant => {
        let onStageSpan= {}
        if(!participant.onStage){
            //if they not on stage
            onStageSpan = <div className="light-red-box"><div className="light-red"></div></div>
        }else{
            //They are on stage
            onStageSpan = <div className="status-light-box"><div className="light-green"></div><br/><span className="stage-status">On Stage</span></div>
        }
        // if(!participant.inSession){
        //     //if they not insesstion
        // }else{

        // }
        return (
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

    return (
        <div className="participant-list">
            {participants}
        </div>
    )
}
export default List;