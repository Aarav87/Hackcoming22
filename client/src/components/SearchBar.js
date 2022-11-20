import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { symptoms } from "./Symptoms";
import Chip from '@mui/material/Chip';
import { useState } from "react"
import {Paper, styled} from "@mui/material";

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

function SearchBar( { symptomsChosen, setSymptomsChosen }) {
    const [tags, setTags] = useState([]);

    const handleOnSelect = (item) => {
        // Update the symptoms chosen
        const updatedSymptoms = symptomsChosen
        updatedSymptoms[item['id']] = 1
        setSymptomsChosen(updatedSymptoms)

        // Update the tags
        setTags(current => [...current, item['name']])
    }

    const formatResult = (item) => {
        return (
            <div style={{ height: '20px'}} >
                <p>{item.name}</p>
            </div>
        )
    }

    return (
        <div style={{ width: 700, float: 'left', paddingRight: '10px'}}>
            <ReactSearchAutocomplete
                placeholder="Enter a min of 3 symptoms"
                items={symptoms}
                onSelect={handleOnSelect}
                autoFocus
                formatResult={formatResult}
            />
            <Paper
                elevation={0}
                sx={{
                    display: 'flex',
                    justifyContent: 'left',
                    flexWrap: 'wrap',
                    listStyle: 'none',
                    p: 0.5,
                    m: 0,
                    borderRadius: '100px',
                    height: '20px',
                    backgroundColor: '#ededed'
                }}
                component="ul"
            >
                {tags?.map((tag, i) => (
                    <ListItem key={i}>
                        <Chip label={tag}/>
                    </ListItem>
                ))}
            </Paper>
        </div>
    )
}

export default SearchBar
