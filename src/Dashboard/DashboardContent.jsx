import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

import "./index.css";
import { getAssets } from "../Services/data.service";
import AssetContainer from "../Feature/Assets/AssetContainer";

const DashboardContent = () => {
  let [dataset, setDataSet] = useState([]);

  useEffect(async () => {
    try {
      let reqQuery = {
        assetType: "database",
      };
      let newAssets = await getAssets(reqQuery);
      setDataSet(newAssets.data);
    } catch (err) {}
  }, []);

  const onNavigate = (data) => {};

  return (
    <div className="dasboard-content">
      <Grid item xs={12}>
        {dataset.map((ds, index) => {
          return (
            <Grid>
              <AssetContainer onNavigate={onNavigate} key={index} data={ds} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default DashboardContent;
