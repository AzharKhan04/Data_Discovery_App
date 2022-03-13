import React from "react";
import TablePagination from "@mui/material/TablePagination";

const Pagination = ({
  pageNo,
  count,
  handleChangePage,
  rowsPerPage,
  handleChangeRowsPerPage,
}) => {
  return (
    <TablePagination
      component="div"
      count={count}
      page={pageNo}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};

export default Pagination;
