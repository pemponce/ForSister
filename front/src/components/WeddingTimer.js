import * as React from "react";
import { useState, useEffect } from 'react';
import { Container, Paper } from "@mui/material";
import Box from "@mui/material/Box";

export default function WeddingTimer() {

    const Timer = () => {
        const [days, setDays] = useState(0);
        const [hours, setHours] = useState(0);
        const [minutes, setMinutes] = useState(0);
        const [seconds, setSeconds] = useState(0);

        const deadline = "November, 29, 2025";

        const getTime = () => {
            const time = Date.parse(deadline) - Date.now();

            setDays(Math.abs(Math.floor(time / (1000 * 60 * 60 * 24))));
            setHours(Math.abs(Math.floor((time / (1000 * 60 * 60)) % 24)));
            setMinutes(Math.abs(Math.floor((time / 1000 / 60) % 60)));
            setSeconds(Math.abs(Math.floor((time / 1000) % 60)));
        };

        useEffect(() => {
            const interval = setInterval(() => getTime(), 1000);

            return () => clearInterval(interval);
        }, []);

        return (
            <div className="textContent">
                <td className="timerComponentsSize"><div>{days} </div> <div>дней</div></td>
                <td className="timerComponentsSize"><div>{hours}</div> <div>часов</div></td>
                <td className="timerComponentsSize"><div>{minutes}</div> <div>минут</div></td>
                <td className="timerComponentsSize"><div>{seconds}</div> <div>секунд</div></td>
            </div>
        );
    };

    return (
        <Container className="containerStyle">
            <Paper elevation={3} className="paperStyle">
                <Box>
                    <div className="textContent">
                        <h1>До нашей свадьбы</h1>
                        <h3>осталось...</h3>
                    </div>
                    <div className="timerSize">
                        <Timer/>
                    </div>
                </Box>
            </Paper>
        </Container>
    );
}
