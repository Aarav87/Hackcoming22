import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { symptoms } from "./Symptoms";

function SearchBar( { symptomsChosen, setSymptomsChosen }) {
    const handleOnSelect = (item) => {
        const updatedSymptoms = symptomsChosen
        updatedSymptoms[item['id']] = 1
        setSymptomsChosen(updatedSymptoms)

        console.log(updatedSymptoms)
        console.log(item, item['id'])
    }

    const formatResult = (item) => {
        return (
            <div style={{ height: '20px'}} >
                <p>{item.name}</p>
            </div>
        )
    }

    return (
        <div style={{ width: 700, float: 'left', paddingRight: '20px'}}>
            <ReactSearchAutocomplete
                placeholder="Enter your symptoms"
                items={symptoms}
                onSelect={handleOnSelect}
                autoFocus
                formatResult={formatResult}
            >

            </ReactSearchAutocomplete>
        </div>
    )
}

export default SearchBar
