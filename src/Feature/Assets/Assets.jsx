import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import "./index.css";
import { getAssets } from "../../Services/data.service";
import AssetFilter from "./AssetFilter";
import AssetContainer from "./AssetContainer";
import Pagination from "../../Components/Pagination";
import { useParams } from "react-router-dom";
import filtersData from "../../Constants/FilterData";

const Assets = () => {
  let [dataset, setDataSet] = useState([]);
  let [filterData] = useState(filtersData);
  let [query, setQuery] = useState({ searchQuery: {} });
  let [totalRecords, setTotalRecords] = useState("");

  let [pageNo, setPageNo] = useState(0);
  let [pageSize, setPageSize] = useState(10);

  let { id } = useParams();

  useEffect(() => {
    let reqQuery = {
      assetType: id,
      pageNo: pageNo,
      pageSize: pageSize,
    };
    setQuery(reqQuery);
    getData(reqQuery);
  }, [id]);

  const getData = async (reqQuery) => {
    try {
      let newAssets = await getAssets(reqQuery);
      setDataSet(newAssets.data);
      setTotalRecords(newAssets.totalRecords);
    } catch (err) {}
  };

  const onChangeFilter = (key, val) => {
    let _query = {
      pageSize: 10,
      pageNo: 0,
      ...query,
      searchQuery: {
        ...query.searchQuery,
        [key]: val,
      },
    };
    setPageNo(0);
    setPageSize(10);
    setQuery(_query);
    getData(_query);
  };

  const onChangePage = (evt, val) => {
    setPageNo(val);
    let _query = {
      ...query,
      pageNo: val,
    };
    setQuery(_query);
    getData(_query);
  };
  const onPageSizeChange = (event) => {
    setPageSize(parseInt(event.target.value));
    setPageNo(0);

    let _query = {
      ...query,
      pageNo: 0,
      pageSize: parseInt(event.target.value),
    };
    setQuery(_query);

    getData(_query);
  };

  return (
    <React.Fragment>
      <Pagination
        pageNo={pageNo}
        count={totalRecords}
        handleChangePage={onChangePage}
        rowsPerPage={pageSize}
        handleChangeRowsPerPage={onPageSizeChange}
      />
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <AssetFilter
            onChange={onChangeFilter}
            filterData={filterData}
            title={`Filter By`}
          />
        </Grid>
        <Grid item xs={8}>
          {dataset.map((ds, index) => {
            return (
              <AssetContainer onNavigate={() => {}} key={index} data={ds} />
            );
          })}
        </Grid>
      </Grid>
      <Pagination
        pageNo={pageNo}
        count={totalRecords}
        handleChangePage={onChangePage}
        rowsPerPage={pageSize}
        handleChangeRowsPerPage={onPageSizeChange}
      />
    </React.Fragment>
  );
};

export default Assets;
