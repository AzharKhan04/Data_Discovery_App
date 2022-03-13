import React, { memo } from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
import LockIcon from '@mui/icons-material/Lock';
import PendingIcon from '@mui/icons-material/Pending';
import ErrorIcon from '@mui/icons-material/Error';

const AssetStatusBadge = ({status}) => {
    
    const statusBadgeMap = {
        VERIFIED:<VerifiedIcon/>,
        ERROR:<ErrorIcon/>,
        LOCK:<LockIcon/>,
        PENDING:<PendingIcon/>
    }

    const statusBadgeColorMap = {
        VERIFIED:'green',
        ERROR:'red',
        LOCK:'grey',
        PENDING:'grey'
    }

    let _status = status.toUpperCase();
    return (
        <span className="asset-status-container" style={{color:statusBadgeColorMap[_status]}}>
          {statusBadgeMap[_status]}
        </span>
    )

}

export default memo(AssetStatusBadge);