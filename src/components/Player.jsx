import { useState } from "react";


export default function Player ({initialName, symbol}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [ isEditing, setIsEditing] = useState(false);

function handleEditClick() {
    setIsEditing((editing) => !editing); // The function you pass will be called by
     //react and will automatically get the current state
}

function handleChange(event) {
    setPlayerName(event.target.value);
}

let editablePlayerName = <span className="player-name">{playerName}</span>;

if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
}

    return (
        <li>
        <span id="player">
            {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
      </li>
    );
}