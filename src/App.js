import React from 'react';
import './App.css';
import  Container from './components/Container';

function App() {

  const initialState = _ => ([...Array(9)].map((i, index) => ({
    id: index,
    set: false,
    isCross: true
 })))

const [singlePlayerMode, setMode] = React.useState(true);
const [win, setWin] = React.useState(false);
const [states, setStates] = React.useState(initialState());
const [crossPlayer, togglePlayer] = React.useState(true);
const [winBoxes, setWinBoxes] = React.useState([]);

const checkIfWin = () => {
    const winCons = [[0, 1, 2]
                    ,[3, 4, 5]
                    ,[6, 7, 8]
                    ,[0, 4, 8]
                    ,[2, 4, 6]
                    ,[0, 3, 6]
                    ,[1, 4, 7]
                    ,[2, 5, 8]]

    const sets = states.filter((s) => s.set === true)
    const crossSet = sets.filter((s) => s.isCross).map((cross) => cross.id).sort();
    const circleSet = sets.filter((s) => !s.isCross).map((circle) => circle.id).sort();

    winCons.forEach((winCon) => {
        if (winCon.every(elem => crossSet.includes(elem))) {
            setWin(true);
            setWinBoxes(winCon);
            return true;
        }

        if (winCon.every(elem => circleSet.includes(elem))) {
          setWin(true);
          setWinBoxes(winCon);
          return true;
        }
    })

    return false;
}

React.useEffect(checkIfWin,[states])

const clickHandler = (index) => {
   if (states[index].set) return;
   
   if(singlePlayerMode) {
    const unchecks = states.filter((s) => !s.set && s.id !==index)
    const randomIndex = unchecks[Math.floor(Math.random() * unchecks.length)].id;
    console.log(randomIndex)
    setStates((oldStates)=>
      (oldStates.map((oldState) => 
          {
              return randomIndex === oldState.id ? {
                          ...oldState,
                          set: true,
                          isCross: !crossPlayer
                      } : index === oldState.id ? {
                        ...oldState,
                        set: true,
                        isCross: crossPlayer
                    } : oldState
          }))
    );

  } else {
    setStates((oldStates)=>
        (oldStates.map((oldState) => 
            {
                return index === oldState.id ? {
                            ...oldState,
                            set: true,
                            isCross: crossPlayer
                        } : oldState
            }))
    );
      
    togglePlayer((player)=>!player)
    }
            

  } 

const restartGame = _ => {
    setWin(false);
    setStates(()=>initialState())
    setWinBoxes([]);
}

const setModeHandler = (value) => {
    setWin(false);
    setStates(()=>initialState())
    setWinBoxes([]);
    setMode(value)
}

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div>
        <input type="radio"  value="single" name="mode" checked={singlePlayerMode} onChange={_=>setModeHandler(true)} /> Single Player
        <input type="radio"  value="multi" name="mode" checked={!singlePlayerMode}  onChange={_=>setModeHandler(false)}/> MultiPlayer
      </div>
      { !singlePlayerMode && <p> {crossPlayer ? "X" : "O"} turns...</p>}
      { win && <div>You win</div>}
      <Container 
          win={win}
          clickBox={clickHandler}
          restartGame={restartGame}
          states={states}
          winBoxes={winBoxes}
        />
    </div>
  );
}

export default App;
