import React from 'react';
import Player from "./components/Players";
import Allplayers from "./Allplayers";

function PlayersList() {
    return (
        <div>
            <h1>Football Players</h1>
            <div style={{ display: 'flex', justifyContent: 'inline' }}>
                {Allplayers.map(
                    (player) => (
                        <Player data={player} />
                    ))}
            </div>

        </div>
    );
};
export default PlayersList;