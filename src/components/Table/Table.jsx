import classnames from "classnames";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { overrideTailwindClasses } from "tailwind-override";
import { useWindyTheme } from "../../context.jsx";

import { Input } from "../../index.js";

const Table = (tableProps) => {
  const {
    state: { table = {} },
  } = useWindyTheme();

  const {
    columns = [],
    data = [],
    color = table.color,
    search = false,
    ...props
  } = tableProps;

  const [searchValue, setSearchValue] = useState(null);

  const generateColumns = (array) => {
    if (!array || array.length <= 0) {
      return [];
    }
    return array.map((col) => (
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
      >
        {col}
      </th>
    ));
  };

  const generateRows = (array) => {
    if (!array || array.length <= 0) {
      return [];
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
    for (const col of columns) {
      if (row[col].toLowerCase().includes(value)) {
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

  return (
    <div className="flex flex-col">
      {search && (
        <div className="w-1/3 py-2">
          <Input
            color={color}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      )}
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="">
                <tr
                  className={overrideTailwindClasses(
                    classnames(generateArrowColor())
                  )}
                >
                  {generateColumns(columns)}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {generateRows(
                  !!searchValue && search
                    ? data.filter((row) => filterCallback(row, searchValue))
                    : data
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
