import * as React from "react";
import {Container, Paper} from "@mui/material";
import Box from "@mui/material/Box";

export default function TopPagePhotos() {


    return (
        <Container className="containerStyle">
            <Paper elevation={3} className="paperStyle">
                <Box>
                    <div className="Photo">
                        <div className="ImgK"/>
                        <div className="GeorgRenata">
                            Георгий
                            <tr/>
                            <div style={{ fontSize: "60px" }}>
                                &
                            </div>
                            <tr/>
                            Рената
                        </div>
                    </div>
                </Box>
            </Paper>
        </Container>
    );
}
