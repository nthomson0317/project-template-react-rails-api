import React from 'react'
import '@fontsource/roboto'
import Typography from '@material-ui/core/Typography';

export default function User(props) {

    const renderOpenings = () => {
        props.openings.map((openingObj) => {
            return (
            <div>
                <p>Hi</p>
            </div>
            
            )
        })
    }
    console.log(props)
    console.log(props.openings)
    return (
        <div>
            <Typography variant="h1">Welcome, {props.user.name} </Typography>
            <br></br>
            <br></br>
            <Typography variant="h4"> Username: {props.user.username}</Typography>
            <Typography variant="h4"> Rating: {props.user.rating} </Typography>
            <Typography variant="h4"> Country: {props.user.country}</Typography>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Typography variant="h3">Openings: </Typography>
            {renderOpenings}

            
            
        </div>
    )
}
