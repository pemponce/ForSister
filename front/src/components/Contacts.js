import * as React from "react";
import {Container, Paper} from "@mui/material";
import Box from "@mui/material/Box";

export default function Contacts() {

    return (
        <Container className="containerStyle">
            <Paper elevation={3} className="paperStyle">
                <Box>
                    <h1>Контакты</h1>

                    <div className="textContent">
                        <h3>
                            Если вы заблудились, готовите сюрприз или у вас
                            появились какие либо вопросы, вам с радостью поможет
                            наш замечательный организатор
                        </h3>
                        <tr/>
                        <h3>Организатор (Юлия): +79046789681</h3>
                        <a href="https://wa.me/+79046789681" target="_blank" rel="noreferrer">
                            <img
                                src="https://optim.tildacdn.com/tild3137-6364-4238-a161-613864323331/-/resize/43x/-/format/webp/photo.png"
                                alt="#"/>
                        </a>
                    </div>
                </Box>
            </Paper>
        </Container>
    );
}
