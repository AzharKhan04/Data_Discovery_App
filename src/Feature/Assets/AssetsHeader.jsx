import { Typography } from "@mui/material";
import React from "react";

const AssetsHeader = ({title}) => {

    return (
        <React.Fragment>
            <Typography>
                {title}
            </Typography>
        </React.Fragment>    
    )

}

export default AssetsHeader;