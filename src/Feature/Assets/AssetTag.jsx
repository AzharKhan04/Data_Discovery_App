import React from "react";
import Chip from "@mui/material/Chip";

const AssetTag = ({tags}) => {

    return (
        <div style={{ marginTop: "16px" }}>
        {tags &&
          tags.map((tag) => {
            return (
              <Chip
                style={{
                  padding: "4px",
                  marginRight: "4px",
                  color: "white",
                  backgroundColor: "rgb(57, 114, 209)",
                }}
                label={tag.name}
                size="small"
              />
            );
          })}
      </div>
    )

}

export default AssetTag;