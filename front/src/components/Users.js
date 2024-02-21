import * as React from 'react';
import {Container, Paper} from "@mui/material";
import Box from "@mui/material/Box";

export default function Users() {
    const [users, setUsers] = React.useState([])

    const cont = {
        width: "100%",
        maxWidth: "800px",
        padding: "15px",
        margin: "20px auto",
    }

    const trr = {
        borderBottom: "1px solid #eee",
        verticalAlign: "top",
        padding: "8px",
        textAlign: "left"
    }

    const tdStyle = {
        ...trr,
        width: "25%" // Задаем фиксированную ширину каждому полю
    }

    const tdStyleId = {
        ...trr,
        width: "5%" // Задаем фиксированную ширину каждому полю
    }

    const onClick = (e) => {
        fetch("http://localhost:8080/person/getAll")
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Paper elevation={3} className="paperStyle" style={{fontFamily: "sans-serif", height: "100% !important", minHeight:"900px"}}>
                <Box>
                    <button onClick={onClick}>List</button>
                    <div style={cont}>
                        <ul>
                            {users.map((list, index) => (
                                <table style={{margin: "auto", width: "100%"}}>
                                    <tbody>
                                    <tr>
                                        <td style={tdStyleId} width="20px">{list.id}</td>
                                        <td style={tdStyle}>{list.name}</td>
                                        <td style={tdStyle}>{list.anotherName}</td>
                                        <td style={tdStyle}>{list.guestStatus}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            ))}
                        </ul>
                    </div>
                </Box>
            </Paper>
        </Container>
    );
}
