
import React from 'react';
import Typography from "@mui/material/Typography";
import moment from 'moment';

const AssetDate = ({data}) => {

    return (
        <React.Fragment>
            <div style={{marginTop:'14px'}}>
            <Typography variant="body2" color="text.secondary">
                 {'created:'} {moment(data.created).format('MM/DD/YYYY')}
            </Typography>
            </div>
            <div style={{marginTop:'10px'}}>
            <Typography variant="body2" color="text.secondary">
                 {'last updated:'} {moment(data.updated).format('MM/DD/YYYY')}
            </Typography>
            </div>
        </React.Fragment>    

    )

}

export default AssetDate;