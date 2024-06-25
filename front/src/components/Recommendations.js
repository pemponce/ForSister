import * as React from "react";
import {Container, Paper} from "@mui/material";
import Box from "@mui/material/Box";

export default function Recommendations() {

    return (
        <Container className="containerStyle">
            <Paper elevation={3} className="paperStyle">
                <Box>
                    <h1>Пожелания</h1>

                    <div className="textContent">
                        <h3>
                            Мы просим Вас не дарить цветы - мы не успеем насладиться их красотой.
                        </h3>
                        <h3>
                            Будем благодарны, если вы воздержитесь от криков "Горько" на празднике.
                            Для нас поцелуй - знак выражения чувств, он не может быть по заказу.
                        </h3>
                        <h3>
                            Так же, чтобы все могли как следует отдохнуть и повеселиться на нашем празднике,
                            очень просим мам и пап приходить без маленьких детей
                        </h3>
                        <h3>
                            Не беспокойтесь о нарядах, нам очень важно, чтобы этот особенный день вы провели вместе с
                            нами!
                            Но если вы захотите поддержать концепцию нашей свдьбы, вы можете использовать
                        </h3>
                        <table className="tablePalette"
                               style={{borderCollapse: "unset", borderColor: "red !important"}}>
                            <tbody style={{margin: "auto", alignContent: "center", border: "none !important"}}>
                            <tr>
                                <td>
                                    <div className="circleColorPalette"
                                         style={{backgroundColor: "rgb(255, 255, 255)"}}></div>
                                </td>
                                <td>
                                    <div className="circleColorPalette"
                                         style={{backgroundColor: "rgb(248, 224, 222)"}}></div>
                                </td>
                                <td>
                                    <div className="circleColorPalette"
                                         style={{backgroundColor: "rgb(253, 198, 178)"}}></div>
                                </td>
                                <td>
                                    <div className="circleColorPalette"
                                         style={{backgroundColor: "rgb(255, 190, 152)"}}></div>
                                </td>

                            </tr>
                            </tbody>
                        </table>
                        <table className="tablePalette"
                               style={{borderCollapse: "unset", borderColor: "red !important"}}>
                            <tbody>
                            <tr style={{alignContent: "center"}}>

                                <td>
                                    <div className="circleColorPalette"
                                         style={{backgroundColor: "rgb(230, 159, 163)"}}></div>
                                </td>
                                <td>
                                    <div className="circleColorPalette"
                                         style={{backgroundColor: "rgb(191, 211, 236)"}}></div>
                                </td>
                                <td>
                                    <div className="circleColorPalette"
                                         style={{backgroundColor: "rgb(0, 0, 0)"}}></div>
                                </td>
                            </tr>

                            </tbody>
                        </table>

                    </div>
                </Box>
            </Paper>
        </Container>
    );
}
