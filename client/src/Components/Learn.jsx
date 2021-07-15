import React from 'react'
import '@fontsource/roboto'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    root: {
      minWidth: 675,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  



export default function Learn() {
    return (
        <div style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
        <div style={{ 
            width: '600px'}}>
        <Typography variant="h3">
            LEARNING OPENING THEORY!
        </Typography>
        <Typography style={{ 
                color: 'rgba(0, 11, 26, 0.9)',
                width: "560"}}>
        <p>A chess opening or simply an opening refers to the initial moves of a chess game. The term can refer to the 
            initial moves by either side, White or Black, but an opening by Black may also be known as a defense. There
             are dozens of different openings, and hundreds of variants. The Oxford Companion to Chess lists 1,327 named
              openings and variants. These vary widely in character from quiet positional play to wild tactical play.
               In addition to referring to specific move sequences, the opening is the first phase of a chess game, the 
               other
                phases being the middlegame and the endgame.</p>
                </Typography>
<br></br>
<iframe width="560" height="315" src="https://www.youtube.com/embed/6IegDENuxU4?start=6" title="YouTube video player" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen></iframe>
<br></br>
<Typography style={{ 
                color: 'rgba(0, 11, 26, 0.9)'}}>
       <p> Opening moves that are considered standard (often catalogued in a reference work such as the Encyclopaedia of 
           Chess Openings) are referred to as "book moves", or simply "book". Reference works often present move sequences
            in simple algebraic notation, opening trees, or theory tables. When a game begins to deviate from known opening theory,
             the players are said to be "out of book". In some opening lines, the moves considered best for both sides have been
              worked out for twenty to twenty-five moves or more. Some analysis goes to thirty or thirty-five moves, as in the classical 
              King's Indian Defense and in the Najdorf variation of the Sicilian Defense. Professional chess players spend years studying
               openings, and continue doing so throughout their careers, as opening theory continues to evolve. Players at the club level
                also study openings but the importance of the opening phase is smaller there since games are rarely decided in the opening. 
                The study of openings 
        can become unbalanced if it is to the exclusion of tactical training and middlegame and endgame strategy.</p>
        </Typography>
<br></br>
<Typography style={{ 
                color: 'rgba(0, 11, 26, 0.9)'}}>
        <p>Wikipedia contributors. "Chess opening." Wikipedia, The Free Encyclopedia. Wikipedia, The Free Encyclopedia, 17 May. 2021.
             Web. 15 Jul. 2021.</p>
             </Typography>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}
