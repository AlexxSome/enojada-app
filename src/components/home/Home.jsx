import React, {useState} from 'react';
import { Button, Grid} from "@mui/material";

const Home = () => {
    const [position, setPosition] = useState({ left: 250, top: 250 });

    const moveBtn = () => {
        const container = document.getElementById('container');
        const maxX = container.clientWidth - 50; // 50 es el ancho del botón
        const maxY = container.clientHeight - 20; // 20 es la altura del botón
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        setPosition({ left: newX, top: newY });
    };
    return (
        <Grid id="container" container spacing={2}>
            <Grid item xs={12}>
                <h2>¿ Estas enojada ?</h2>
            </Grid>
            <Grid item xs={4}>
                <Button className='btnMove' variant='contained' style={{ position: 'absolute', left: position.left, top: position.top }} onClick={moveBtn}
                        onMouseOver={moveBtn}>
                    Si
                </Button>
                <Button variant='contained' href='/enojada-app/response'>
                    No
                </Button>
            </Grid>
        </Grid>
    );
};

export default Home;
