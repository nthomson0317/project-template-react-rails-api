import React from 'react'
import '@fontsource/roboto'
import CurrentStats from './CurrentStats'
import Typography from '@material-ui/core/Typography';

export default function Home(props) {
    return (
        <div style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
            <Typography variant="h2"className="header"
             style={{ 
                color: 'rgba(210, 220, 231, 1)'}}>Open Chessame</Typography>
            <Typography variant="subtitle1"
            style={{ 
                color: 'rgba(210, 220, 231, 1)'}}>A Resource to Improve Your Chess Openings</Typography>
            <br></br>
            <br></br>
            <br></br>
            {/* <CurrentStats></CurrentStats> */}
            
        </div>
    )
}
