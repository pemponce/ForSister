import * as React from "react";
import { useState } from "react";
import { Container, Paper, Button, Collapse } from "@mui/material";
import Box from "@mui/material/Box";

export default function PlaceInformation() {
    const [showMap, setShowMap] = useState(false);

    const toggleMap = () => setShowMap(prev => !prev);

    return (
        <Container className="containerStyle">
            <Paper elevation={3} className="paperStyle">
                <Box>
                    <h1>Локация</h1>

                    <img
                        src="/img/location.JPG"          // файл лежит в public/img
                        alt="Ресторан «Троя»"
                        className="LocationImg"
                    />

                    <h4 className="textContent" style={{ fontSize: "2rem" }}>
                        «Троя»<br />
                        Алания, Владикавказ, улица Барбашова, 70
                    </h4>

                    <h3>Ресторан «Троя»</h3>

                    <Button
                        variant="contained"
                        onClick={toggleMap}
                        aria-expanded={showMap}
                        aria-controls="wedding-map"
                    >
                        {showMap ? "Скрыть карту" : "Показать карту"}
                    </Button>

                    <Collapse in={showMap} timeout={300} unmountOnExit>
                        <div className="mapSize" id="wedding-map">
                            <iframe
                                className="mapSize"
                                src="https://yandex.ru/map-widget/v1/-/CLQkBQ55"
                                frameBorder="0"
                                loading="lazy"
                                title="Карта — Ресторан «Троя»"
                            />
                        </div>
                    </Collapse>
                </Box>
            </Paper>
        </Container>
    );
}
