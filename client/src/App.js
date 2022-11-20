import './App.css';
import logo from './logo.png';
import SearchBar from './components/SearchBar'
import { useState, useEffect } from "react";
import axios from 'axios';

function App() {
    const [symptomsChosen, setSymptomsChosen] = useState(Array(132).fill(0));
    const [diagnosis, setDiagnosis] = useState(null);

    const onPredictClick = () => {
        axios.post('http://localhost:5000/prediction', {
            symptoms: symptomsChosen
        }).then(response => {
            setDiagnosis(response.data)
        })
    }

    return (
        <div className="App">
            <header className="App-header">
                <img className="logo" src={logo} />
                <span>
                    <SearchBar
                        symptomsChosen={symptomsChosen}
                        setSymptomsChosen={setSymptomsChosen}/>
                    <button onClick={onPredictClick} className="diagnose-button">Diagnose</button>
                </span>
                {diagnosis ? <h1>{diagnosis}</h1> : null}
            </header>
        </div>
  );
}

export default App;
