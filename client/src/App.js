import './App.css';
import logo from './logo.png';
import SearchBar from './components/SearchBar'
import { useState } from "react";
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
                <div className="diagnosis">
                    {diagnosis ?  (
                            <>
                                <h2>Diagnosis: {diagnosis}</h2>
                                <h3>What Should You Do?</h3>
                                <ul className="list">
                                    <li>Rest</li>
                                    <li>Stay hydrated</li>
                                    <li>Sip warm liquids</li>
                                    <li>Try saline nasal drops or sprays</li>
                                    <li>Relieve Pain/Fever (Tylenol, Advil)</li>
                                    <li>Visit hospital/doctor if condition worsens</li>
                                </ul>
                            </>
                        ) : null
                    }
                </div>
            </header>
        </div>
  );
}

export default App;
