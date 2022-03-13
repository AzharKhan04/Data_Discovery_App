import * as React from "react";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import pages from "../../Constants/Pages";
import "./index.css";

const AppHeader = () => {
  let [active, setActive] = React.useState(1);

  return (
    <div className="app-header-container">
      <Link
        onClick={() => {
          setActive(1);
        }}
        style={{ textDecoration: "none" }}
        to={`/`}
      >
        <Typography style={{ cursor: "pointer" }} color="primary" variant="h4">
          {"Atlan"}
        </Typography>
      </Link>
      <div className="app-header-menu">
        {pages.map((page) => (
          <MenuItem key={page.id}>
            <Link
              onClick={() => {
                setActive(page.id);
              }}
              key={page.id}
              style={{ textDecoration: "none" }}
              to={`${page.link}`}
            >
              <Typography
                className={active === page.id ? "active" : "inactive"}
                color={"primary"}
                textAlign="center"
              >
                {page.label}
              </Typography>
            </Link>
          </MenuItem>
        ))}
      </div>
    </div>
  );
};

export default AppHeader;
