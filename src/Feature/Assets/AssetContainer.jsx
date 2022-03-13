import React from "react";
import DataCard from "../../Components/DataCard/DataCard";
import AssetDate from "./AssetDate";
import AssetDescription from "./AssetDescription";
import AssetHeading from "./AssetHeading";
import AssetTag from "./AssetTag";
import AssetOwners from './AssetOwners'
import "./index.css";

const AssetContainer = ({data,onNavigate}) => {

    return (
    <React.Fragment>
        <DataCard>
            <AssetHeading onNavigate={onNavigate} data={data}/>
            <AssetDescription data={data}/>
            <AssetTag tags= {data.tags}/>
            <AssetDate data={data}/>
            <AssetOwners data={data.owners}/>
        </DataCard>
    </React.Fragment>
    )

}

export default AssetContainer;