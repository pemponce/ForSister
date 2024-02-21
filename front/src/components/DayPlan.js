import * as React from "react";
import { Container, Paper } from "@mui/material";
import Box from "@mui/material/Box";

export default function DayPlan() {

    const H4Style = {
        lineHeight: "1.5rem"
    };

    return (
        <Container className="containerStyle">
            <Paper elevation={3} className="paperStyle">
                <Box>
                    <h1>План Дня</h1>

                    <div className="container">
                        <table className="table">
                            <tbody>
                            <tr>
                                <td>
                                    <div className="tdContent">16:00</div>
                                </td>
                                <td>
                                    <div className="glassImage" />
                                </td>
                                <td>
                                    <div className="tdContent">
                                        <h4 style={H4Style}>Сбор гостей, фуршет</h4>
                                        <p>Собираясь на торжество возьмите с собой свои улыбки и хорошее настроение</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="tdContent">16:30</div>
                                </td>
                                <td>
                                    <div className="weddingCeremonyImage" />
                                </td>
                                <td>
                                    <div className="tdContent">
                                        <h4 style={H4Style}>Церемония бракосочетания</h4>
                                        <p>Приготовьте платочки для трогательного момента</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="tdContent">17:00</div>
                                </td>
                                <td>
                                    <div className="FestiveBanquetImage" />
                                </td>
                                <td>
                                    <div className="tdContent">
                                        <h4 style={H4Style}>Праздничный банкет</h4>
                                        <p>Время танцев, вкусной еды, теплых пожеланий и развлечений</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="tdContent">00:00</div>
                                </td>
                                <td>
                                    <div className="EndOfTheEveningImage" />
                                </td>
                                <td>
                                    <div className="tdContent">
                                        <h4 style={H4Style}>Конец Банкета</h4>
                                        <p>К сожалению, даже такой волшебный вечер может закончиться</p>
                                    </div>
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
