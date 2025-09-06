import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Container, Paper, Button, RadioGroup, FormControlLabel, Radio} from "@mui/material";
import {useState} from "react";

export default function Person() {

    const formStyle = {padding: "0px 0px 10px 0px"}
    const [name, setName] = useState('')
    const [anotherName, setAnotherName] = useState('')
    const [guestStatus, setGuestStatus] = useState('')


    const handleClick = (e) => {
        e.preventDefault()
        const person = {
            name,
            anotherName,
            guestStatus
        }
        console.log(person)
        fetch("https://vladikarina.ru:8080/person/add", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(person)
        }).then(() => {
            console.log("new Person added")
        })
    }

    return (<Container className="containerStyle">
        <Paper elevation={3} className="paperStyleForm">
            <Box>
                <TextField id="outlined-basic" label="Имя и Фамилия" variant="outlined" style={formStyle} fullWidth
                           value={name}
                           onChange={(e) => setName(e.target.value)}/>
                <TextField id="outlined-basic" label="С кем вы будете? (имя, фамилия)" variant="outlined" style={formStyle} fullWidth
                           value={anotherName}
                           onChange={(e) => setAnotherName(e.target.value)}/>

                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="С удовольствием приду" control={<Radio />}
                                      label="С удовольствием приду"
                                      onChange={(e) => setGuestStatus(e.target.value)}/>


                    <FormControlLabel value="К сожалению, не смогу присутствовать" control={<Radio />}
                                      label="К сожалению, не смогу присутствовать"
                                      onChange={(e) => setGuestStatus(e.target.value)}/>


                    <FormControlLabel value="Сообщу позже" control={<Radio />}
                                      label="Сообщу позже"
                                      onChange={(e) => setGuestStatus(e.target.value)}/>
                </RadioGroup>

                <div className="container" style={{marginTop:"10px"}}>
                    <Button variant="contained" onClick={handleClick}>отправить</Button>
                </div>
            </Box>

        </Paper>
    </Container>);
}
