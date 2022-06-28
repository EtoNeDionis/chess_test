import React, {useEffect} from 'react'
import './styles/App.css';
import BoardComponent from "./components/BoardComponent";
import {Board} from "./classes/Board"
import {useState} from "react";

function App() {

    const [board, setBoard] = useState(new Board())

    //start game
    useEffect(() => {
        restart()
    }, [])

    function restart() {
        const newBoard = new Board()
        newBoard.initCells()
        newBoard.initFiguresClassic()
        setBoard(newBoard)
    }

    return (
        <div className="App">
            <BoardComponent
                board={board}
                setBoard={setBoard}
            />
        </div>
    );
}

export default App;
