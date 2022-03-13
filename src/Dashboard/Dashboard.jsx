import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardContent from "./DashboardContent";
import './index.css';

const Dashboard = () => {

    return (
      <div className="dashboard-container">
        <DashboardHeader/>
        <DashboardContent />
       </div>
    )

}


export default React.memo(Dashboard);