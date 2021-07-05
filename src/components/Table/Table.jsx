import classnames from "classnames";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { overrideTailwindClasses } from "tailwind-override";
import { useWindyTheme } from "../../context.jsx";

import { Input } from "../../index.js";
import ArrowOrderHandler from "./Components/ArrowOrderHandler.jsx";
import Pagination from "./Components/Pagination.jsx";

const Table = (tableProps) => {
  const {
    state: { table = {} },
  } = useWindyTheme();

  const {
    columns = [],
    data = [],
    color = table.color,
    search = false,
    onSearch = null,
    onSorting = null,
    paged = false,
    pageSize = 10,
    ...props
  } = tableProps;

  const [searchValue, setSearchValue] = useState(null);
  const [sortingParams, setSortingParams] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);

  const generateColumns = (array) => {
    if (!array || array.length <= 0) {
      return [];
    }
    return array.map(({ label, ordered, value }) => {
      if (ordered) {
        return (
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider "
          >
            <div className="flex items-center justify-between">
              {label}
              <ArrowOrderHandler
                onOrdering={(state) =>
                  setSortingParams({ mode: state, prop: value })
                }
              />
            </div>
          </th>
        );
      } else {
        return (
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
          >
            {label}
          </th>
        );
      }
    });
  };

  const generateRows = (array) => {
    if (!array || array.length <= 0) {
      return (
        <tr>
          <td
            colSpan={columns.length}
            className="py-2 text-center text-gray-400"
          >
            No Data
          </td>
        </tr>
      );
    }

    return array.map((value, idx) => (
      <tr key={idx}>{generateRowContent(value).map((x) => x)}</tr>
    ));
  };

  const generateRowContent = (object) => {
    const arr = [];
    for (const key in object) {
      arr.push(
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{object[key]}</div>
        </td>
      );
    }
    return arr;
  };

  const filterCallback = (row, value) => {
    for (const col of columns.map((x) => x.value)) {
      const regeEx = new RegExp(value, "ig");
      if (regeEx.test(row[col])) {
        return true;
      }
    }
  };

  const generateArrowColor = () => {
    switch (color) {
      case "gray":
        return {
          "bg-gray-500 text-white": color === "gray",
        };
      case "red":
        return {
          "bg-red-500 text-white": color === "red",
        };
      case "yellow":
        return {
          "bg-yellow-500 text-white": color === "yellow",
        };
      case "green":
        return {
          "bg-green-500 text-white": color === "green",
        };
      case "indigo":
        return {
          "bg-indigo-500 text-white": color === "indigo",
        };
      case "purple":
        return {
          "bg-purple-500 text-white": color === "purple",
        };
      case "pink":
        return {
          "bg-pink-500 text-white": color === "pink",
        };
      case "blue":
        return {
          "bg-blue-500 text-white": color === "blue",
        };
      case "transparent":
        return {
          "bg-transparent text-white": color === "transparent",
        };

      default:
        break;
    }
  };

  const filterRows = (rows) =>
    (rows = data.filter((row) => filterCallback(row, searchValue)));

  const orderingCallBack = (mode, a, b) => {
    if (typeof a === "string" && typeof b === "string") {
      if (mode) {
        return ("" + a).localeCompare(b);
      } else {
        return ("" + b).localeCompare(a);
      }
    }
    if (mode) {
      return -1;
    } else {
      return 1;
    }
  };

  const orderRows = (rows) => {
    console.log(sortingParams, "sortingParams");

    return rows.sort(
      (a, b) =>
        sortingParams.mode !== null &&
        orderingCallBack(
          sortingParams.mode,
          a[sortingParams.prop],
          b[sortingParams.prop]
        )
    );
  };

  const paginateRows = (rows) => {
    return rows.slice(currentPage * pageSize, pageSize * (currentPage + 1));
  };

  const evaluateRows = (data) => {
    let rows = [...data];
    if (!!searchValue && search) {
      if (typeof onSearch === "function") {
        onSearch(searchValue);
      }
      rows = filterRows(rows);
    }

    if (!!sortingParams) {
      if (typeof onSorting === "function") {
        onSorting(sortingParams);
      }
      rows = orderRows(rows);
    }

    if (!!paged) {
      rows = paginateRows(rows);
    }

    return rows;
  };

  return (
    <div className="flex-col">
      {search && (
        <div className="w-1/3 py-2">
          <Input
            color={color}
            value={searchValue}
            placeholder={"Search..."}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      )}
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr
                  className={overrideTailwindClasses(
                    classnames(generateArrowColor())
                  )}
                >
                  {generateColumns(columns)}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {generateRows(evaluateRows(data))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {paged && (
        <div>
          <Pagination
            onNext={() => setCurrentPage(currentPage + 1)}
            onBack={() => setCurrentPage(currentPage - 1)}
            maxPages={maxPage}
            currentPage={currentPage}
            totals={data.length}
          />
        </div>
      )}
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.any,
  data: PropTypes.any,
  search: PropTypes.bool,
  color: PropTypes.oneOf([
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
    "none",
  ]),
  className: PropTypes.string,
};

export default Table;
