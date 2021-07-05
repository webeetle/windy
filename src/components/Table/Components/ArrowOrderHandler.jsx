import React, { useState } from "react";

const ArrowOrderHandler = ({
  onOrdering = () => null,
  defaultValue = false,
}) => {
  const [order, setOrder] = useState(defaultValue);

  const renderIconsHandler = () => {
    if (!order) {
      return (
        <ArrowDownIcon
          className=""
          onClick={() => {
            setOrder(!order);
            onOrdering(order);
          }}
        />
      );
    }
    return (
      <ArrowUpIcon
        className="h-3 w-3"
        onClick={() => {
          setOrder(!order);
          onOrdering(order);
        }}
      />
    );
  };

  return renderIconsHandler();
};

export default ArrowOrderHandler;

const ArrowUpIcon = ({ ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      class="h-3 w-3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M8 7l4-4m0 0l4 4m-4-4v18"
      />
    </svg>
  );
};

const ArrowDownIcon = ({ ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 17l-4 4m0 0l-4-4m4 4V3"
      />
    </svg>
  );
};
