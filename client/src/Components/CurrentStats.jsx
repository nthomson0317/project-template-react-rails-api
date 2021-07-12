import React from 'react'
import Typography from '@material-ui/core/Typography';

export default function CurrentStats(props) {
    return (
        <div>
            <Typography 
            variant="h6"
            align="center"> Current Stats</Typography>
            <br></br>
              <Typography 
              variant="h6"
              align="center">Popular Openings</Typography>
              <br></br>
              <Typography 
              variant="h6"
              align="center">Number of Users</Typography>
              <br></br>
              <Typography 
              variant="h6"
              align="center">Number of Games Recorded</Typography>
            <br></br>
            <br></br>
            <Typography 
            variant="h6"
            align="center">Chess Puzzle</Typography>
                
                    <Typography 
                    variant="subtitle1"
                    align="center">Puzzle to come</Typography>

                
        </div>
    )
}
