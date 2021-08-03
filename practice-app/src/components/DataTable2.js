import React from "react";
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import "react-bootstrap-table2-filter/dist/reactimport filterFactory, { textFilter } from react-bootstrap-table2-filter";


// omit...
const columns = [
  ...users, {
  dataField: 'phone',
  text: 'Phone',
  filter: textFilter()
}];

<BootstrapTable keyField='id' data={ phone } columns={ columns } filter={ filterFactory() } />