import data from "../Constants/Assets";

const getAssets = (requestData = {}) => {
  return new Promise((resolve, reject) => {
    let type = requestData.assetType;
    let searchQuery = requestData.searchQuery || {};

    let pageNo = requestData.pageNo || 0;
    let pageSize = requestData.pageSize || 10;

    let _data = data[type] || [];

    for (const key in searchQuery) {
      _data = _data.filter((d) => {
        if (typeof searchQuery[key] === "string" && searchQuery[key]) {
          if (Array.isArray(d[key])) {
            let isFound = d[key].find((d) => {
              return d.id == searchQuery[key];
            });
            if (isFound) {
              return true;
            } else {
              return false;
            }
          } else {
            return d[key] == searchQuery[key];
          }
        }
        return true;
      });
    }
    let totalRecords = _data.length;
    let start = pageNo * pageSize;
    let end = start + pageSize;

    _data = [..._data].slice(start, end);

    resolve({
      data: _data,
      pageNo: pageNo,
      totalRecords: totalRecords,
    });
  });
};

export { getAssets };