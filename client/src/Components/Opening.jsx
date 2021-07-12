import React from 'react'
import '@fontsource/roboto'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


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



const deleteHandler = () => {
    



}









export default function Opening(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
    <div>
        <br></br>
        <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h3" component="h2">
          {props.opening.name}
        </Typography>
        <Typography variant="body2" component="p">
          {props.opening.moves}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={deleteHandler}>Delete</Button>
      </CardActions>
    </Card>
    <br></br>
    </div>
    )
}
