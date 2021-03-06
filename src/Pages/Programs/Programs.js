import React from 'react';
import Capsule from './Components/Capsule';
import { Link, useParams } from 'react-router-dom';
import { PagePrograms } from '../../Data/ProgramData';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    image: {
        // marginLeft: '100px',
        width: '500px',
        height: '400px',
        '@media screen and (max-width: 800px)':{
            width: '400px',
            margin: '0',
        }
    },
    text: {
        textAlign: 'left',
    },
    caption: {
        textAlign: 'left',
        fontSize: '14px',
        marginTop: '5px',
    },
    heading: {
        textAlign: 'left',
        marginTop: '20px',
    },
    button: {
        textAlign: 'left',
        marginTop: '30px',
        '@media screen and (max-width: 800px)':{
            marginTop: '40px',
            marginBottom: '-20px',
            textAlign: 'center',
        }
    },
    link: {
        textDecoration: 'none',
        color: '#FFFFFF',
        '@media screen and (max-width: 800px)':{
            fontSize: '17px',
        }
    }
});

const [Functional, Calisthenics, AnimalFlow] = PagePrograms;

const Programs = () => {
    const classes = useStyles();
    const { selectedProgram } = useParams();
    const program = selectedProgram === 'functional'
                    ? Functional: (selectedProgram === 'calisthenics')
                    ? Calisthenics: AnimalFlow;
    const registerWALink = `https://wa.me/919535580772?text=I%20want%20to%20enroll%20in%20${selectedProgram}
                            %20program.%20Can%20you%20provide%20me%20some%20more%20details?`;
    return(
        <div style={{marginTop: '120px'}}>
            <Grid container justify="space-around">
                <Grid item xs={12} md={5}>
                    <img alt="Program Item" className={classes.image} src={program.image} />
                </Grid>
                <Grid item xs={12} md={5}>
                    <Typography variant="h4" className={classes.text}>
                        {program.name}
                    </Typography>
                    <Typography variant="body1" className={classes.text}>
                        {program.description}
                    </Typography>
                    <Typography variant="h5" className={classes.heading}>
                        Benefits
                    </Typography>
                    <Typography className={classes.caption}>
                        {
                            program.benefits.map((benefit, index) => {
                                if(index !== program.benefits.length - 1)
                                    return <span key={benefit}> {benefit} | </span>;
                                return <span key={benefit}> {benefit} </span>;
                            })
                        }
                    </Typography>
                    <Capsule data={program.benefitsCapsule} />
                    <Typography variant="h5" className={classes.heading}>
                        Workout Highlights
                    </Typography>
                    <Typography className={classes.caption}>
                        {
                            program.popularWorkouts.map((workout, index) => {
                                if(index !== program.popularWorkouts.length - 1)
                                    return <span key={workout}> {workout} |</span>;
                                return <span key={workout}> {workout} </span>;
                            })
                        }
                    </Typography>
                    <Capsule data={program.workoutsCapsule} />
                    <div className={classes.button}>
                        <Button variant="contained" color="primary">
                            <Link className={classes.link} to={{pathname: registerWALink}} target="_blank">
                                Register
                            </Link>
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Programs;