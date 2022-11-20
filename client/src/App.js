import './App.css';
import logo from './logo.png';
import SearchBar from './components/SearchBar'
import { useState } from "react";

function App() {
    const [symptomsChosen, setSymptomsChosen] = useState(Array(132).fill(0));

    return (
        <div className="App">
            <header className="App-header">
                <img className="logo" src={logo} />
                <span>
                    <SearchBar
                        symptomsChosen={symptomsChosen}
                        setSymptomsChosen={setSymptomsChosen}/>
                    <button className="diagnose-button">Diagnose</button>
                </span>
            </header>
        </div>
  );
}

export default App;
