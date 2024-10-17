import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11);

    const teamStyle ={
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    const addPlayers = () =>{
        const newPlayer = team + 1;
        setTeam(newPlayer);
    }
    const reducePlayers = () =>{
        const newPlayer = team - 1;
        setTeam(newPlayer);
    }

    return(
        <div style={teamStyle}>
            <h3>Players: {team} </h3>
            <button onClick={addPlayers}>Add</button>
            <button onClick={reducePlayers}>Remove</button>
        </div>
    )
}