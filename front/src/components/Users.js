import * as React from 'react';
import {Container, Paper} from "@mui/material";
import Box from "@mui/material/Box";

export default function Users() {
    const [users, setUsers] = React.useState([])

    const trr = {
        margin: "auto",
        borderBottom: "1px solid #eee",
        verticalAlign: "top",
        padding: "8px",
        textAlign: "left"
    }

    const tdStyle = {
        ...trr,
        width: "25%"
    }

    const tdStyleId = {
        ...trr,
        width: "5%"
    }



    const onClick = (e) => {
        fetch("http://localhost:8080/person/getAll")
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Paper elevation={3} className="paperStyle"
                   style={{fontFamily: "sans-serif", height: "100% !important", minHeight: "900px"}}>
                <Box>
                    <button onClick={onClick}>List</button>
                    <div className="container" style={{margin:0}}>
                        <ul style={{width:"100%"}}>
                            {users.map((list, index) => (
                                <table className="table" style={{width:"100%"}}>
                                    <tbody>
                                    <tr>
                                        <td style={tdStyleId} width="20px">
                                            <div className="divC">{list.id}</div>
                                        </td>
                                        <td style={tdStyle}>
                                            <div className="divC">{list.name}</div>
                                        </td>
                                        <td style={tdStyle}>
                                            <div className="divC">{list.anotherName}</div>
                                        </td>
                                        <td style={tdStyle}>
                                            <div className="divC">{list.guestStatus}</div>
                                        </td>
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
