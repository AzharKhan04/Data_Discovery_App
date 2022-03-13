import React from "react";
import AssetStatusBadge from "./AssetStatusBadge";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

const AssetHeading = ({ data, onNavigate }) => {
  return (
    <div style={{ display: "flex" }}>
      <div
        onClick={() => {
          onNavigate(data);
        }}
        style={{ flex: 1 }}
      >
        <Typography
          color="primary"
          style={{ cursor: "pointer" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {data.name} : {data.alias}
          {data.status && <AssetStatusBadge status={data.status} />}
        </Typography>
      </div>
      <div
        style={{
          textAlign: "end",
          flex: 1,
        }}
      >
        <Chip label={data.source} variant="outlined" />
      </div>
    </div>
  );
};

export default AssetHeading;
