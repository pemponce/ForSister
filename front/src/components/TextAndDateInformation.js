
import * as React from "react";
import {Container, Paper} from "@mui/material";
import Box from "@mui/material/Box";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DateCalendar, LocalizationProvider} from "@mui/x-date-pickers";
import {DemoContainer, DemoItem} from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";

export default function TextAndDateInformation() {

    require('dayjs/locale/ru')
    dayjs.locale('ru')

    var updateLocale = require('dayjs/plugin/updateLocale')
    dayjs.extend(updateLocale)

    dayjs.updateLocale('ru', {
        months: [
            "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль",
            "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
        ]
    })

    return (
        <Container className="containerStyle">
            <Paper elevation={3} className="paperStyle">
                <Box>
                    <div className="textContent">
                        <h1>Дорогие гости!</h1>
                        <tr/>
                        <tr/>
                        <h3>
                            В нашей жизни произойдет очень важное событие - свадьба!
                            Приглашаем вас присоединиться и разделить этот особенный день вместе. Подарите свою поддержку и добрые пожелания, а мы в свою очередь поделимся частичкой нашего счастья.
                        </h3>
                        <tr/>
                        <tr/>
                        <div>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DateCalendar', 'DateCalendar']} >
                                    <DemoItem>
                                        <DateCalendar style={{margin:"auto"}} defaultValue={dayjs('2024-06-9')} disabled/>
                                    </DemoItem>
                                </DemoContainer>
                            </LocalizationProvider>

                        </div>
                    </div>
                </Box>
            </Paper>
        </Container>
    );
}
