import * as React from "react";
import {Container, Paper} from "@mui/material";
import Box from "@mui/material/Box";

export default function TopPagePhotos() {


    return (
        <Container className="containerStyle">
            <Paper elevation={3} className="paperStyle">
                <Box>
                    <div className="ImgK">
                        <div className="VladKarina">
                            Влад
                            <tr/>
                            И
                            <tr/>
                            Карина
                        </div>
                    </div>
                </Box>
            </Paper>
        </Container>
    );
}
