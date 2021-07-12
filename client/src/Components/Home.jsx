import React from 'react'
import '@fontsource/roboto'
import CurrentStats from './CurrentStats'
import Typography from '@material-ui/core/Typography';

export default function Home(props) {
    return (
        <div>
            <Typography variant="h2"className="header"
            color="primary">Open Chessame</Typography>
            <Typography variant="subtitle1"
            color="secondary">A Resource to Improve Your Chess Openings</Typography>
            <br></br>
            <br></br>
            <br></br>
            <CurrentStats></CurrentStats>
            
        </div>
    )
}
