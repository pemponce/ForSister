import * as React from "react";
import { Container, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(updateLocale);
dayjs.updateLocale("ru", { weekStart: 1 }); // 1 = понедельник
dayjs.locale("ru");

export default function TextAndDateInformation() {
    return (
        <Container className="containerStyle">
            <Paper elevation={3} className="paperStyle">
                <Box>
                    <div className="textContent">
                        <h1>Дорогие гости!</h1>
                        <tr />
                        <h3>
                            В нашей жизни скоро состоится важное событие - наша свадьба!
                            <tr/>
                            Будем рады разделить с вами этот чудесный день!
                        </h3>
                        <tr />
                        <tr />
                        <div>
                            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
                                <DemoContainer components={["DateCalendar", "DateCalendar"]}>
                                    <DemoItem>
                                        <DateCalendar
                                            style={{ margin: "auto" }}
                                            defaultValue={dayjs("2025-11-29")}
                                            dayOfWeekFormatter={(day) => day}
                                            disabled
                                        />
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
