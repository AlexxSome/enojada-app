import React from 'react';
import  './response.css';
import {Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";

const Response = () => {
    return (
        <div>
            <h2>¡ Me alegra mucho saberlo mi amor, te quiero mucho !</h2>
            <Container>
                <Card>
                    <CardActionArea className='cardContainer'>
                        <CardMedia component='img' alt='we' image='/enojada-app/images/we-christmas.jpg' style={{width:'35%'}}/>
                        <CardContent className='content'>
                            <div>
                                <Typography gutterBottom variant="h5" component="h2">
                                    For You
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Eres de las personas más importantes en mi vida.
                                    En el camino que llevamos construyendo, abrazaré tus desafíos como míos, caminaré a tu lado y lucharé por nosotros para que construyamos una linda familia.
                                    Te quiero mucho.
                                </Typography>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Container>
        </div>
    );
};

export default Response;
