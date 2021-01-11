import React from 'react';
import { Grid, Card, CardHeader, Avatar, CardContent, Typography } from '@material-ui/core';
import useStyles from './style';
import { baseUrl} from '../shared/baseUrl';
const Profile = (props) => {
    const classes = useStyles();
    return(
        <div style={{marginBottom: "10vh"}}>
            {/* <h1>{props.user.firstname}</h1> */}
            <Grid container justify="center" spacing={4} >
                <Grid item xs={10} md={8}>
                    <Card className={classes.root}>
                        <CardContent >
                            <div className={classes.header}>
                            <Avatar alt={props.user.firstname} src={baseUrl + props.user.image} 
                            style={{ width: "100px" , height: "100px"}} />
                            </div>

                         <br/>
                        <h5 className={classes.cardTitle}>{props.user.firstname} {props.user.lastname}</h5>
                        <hr/>
                        <div className="row mb-2">
                            <div className="col-9 ml-5 "><Typography variant="subtitle1" className="col-4 d-inline-block"> Email: </Typography><Typography variant="subtitle1" className="d-inline"> {props.user.email}</Typography> </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-9 ml-5 "><Typography variant="subtitle1" className="col-4 d-inline-block"> Gender: </Typography> <Typography variant="subtitle1" className="d-inline"> {props.user.gender}</Typography> </div>
                        </div>
                        <div className="row">
                            <div className="col-9 ml-5 "><Typography variant="subtitle1" className="col-4 d-inline-block"> Books Read: </Typography> <Typography variant="subtitle1" className="d-inline"> 13</Typography> </div>
                        </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Profile;