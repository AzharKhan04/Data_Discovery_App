import React from "react";
import DataCard from "../../Components/DataCard/DataCard";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import RadioButtonList from "../../Components/Filter/RadioButtonList";

const AssetFilter = ({ title, filterData, onChange }) => {

  return (
    <DataCard>
      <Typography variant={"h6"}>{title}</Typography>
      {filterData.map((filter, index) => {
        return (
          <React.Fragment>
            <Divider />

            {filter.type === "singleSelect" && (
              <RadioButtonList
                key={index}
                onChange={(val) => {
                  onChange(filter.key, val);
                }}
                title={filter.title}
                list={filter.data}
              />
            )}
            {filter.type === "text" && (
              <TextField
                onChange={(e) => {
                  onChange(filter.key, e.target.value);
                }}
                style={{ marginTop: "20px", marginBottom: "20px" }}
                id="filter-text"
                label={filter.title}
                variant="outlined"
                fullWidth
              />
            )}
          </React.Fragment>
        );
      })}
    </DataCard>
  );
};

export default AssetFilter;
