import * as React from "react";
import {Container, Paper} from "@mui/material";
import Box from "@mui/material/Box";

export default function PlaceInformation() {

    return (
        <Container className="containerStyle">
            <Paper elevation={3} className="paperStyle">
                <Box>
                    <h1>Место Проведения</h1>

                    <h3 className="textContent" style={{fontSize: "2rem"}}>
                        "Villa Небеса"
                        <tr/>
                        Ул. Техническая, 4б
                    </h3>

                    <div className="mapSize">
                        {/*55.764343, 49.130068*/}
                        <iframe className="mapSize" src="https://yandex.ru/map-widget/v1/-/CDBT4B17"></iframe>
                    </div>
                </Box>
            </Paper>
        </Container>
    );
}
