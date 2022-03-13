import React from "react";
import Typography from "@mui/material/Typography";

const AssetOwners = ({ data }) => {
  let owners = "";
  owners = data
    .map((owner) => {
      return owner.userName;
    })
    .join(",");

  return (
    <React.Fragment>
      <div style={{ marginTop: "14px" }}>
        <Typography variant="body" color="primary">
          {"Asset Owners:"} {owners}
        </Typography>
      </div>
    </React.Fragment>
  );
};

export default AssetOwners;