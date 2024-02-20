import * as React from 'react';
import {Container, Paper} from "@mui/material";
import Box from "@mui/material/Box";

export default function Users() {
    const [users, setUsers] = React.useState([])

    const onClick = (e) => {
        fetch("http://localhost:8080/person/getAll")
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Paper elevation={3} className="paperStyle">
                <Box>
                    <div>
                        <button onClick={onClick}>List
                        </button>
                        <div>
                            <u1>
                                {
                                    users.map((list, index) => (

                                        <table style={{margin:"auto 25px"}}>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <div className="tdContent" key={index}>
                                                        {list.id}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="tdContent">
                                                        {list.name}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="tdContent">
                                                        {list.anotherName}
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                            ))}
                        </u1>
                    </div>
                </div>
            </Box>
        </Paper>
</Container>
)
    ;
}
