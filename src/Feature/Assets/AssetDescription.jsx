import React from "react";
import Typography from "@mui/material/Typography";

const AssetDescription = ({data}) => {
    return (
        <React.Fragment>
            <Typography variant="body2" color="text.secondary">
                  {data.description}
            </Typography>
        </React.Fragment>    
    )
}

export default AssetDescription;