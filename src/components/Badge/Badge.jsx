import React from "react";

import PropTypes from "prop-types";
import { overrideTailwindClasses } from "tailwind-override";
import classnames from "classnames";

const Badge = ({ text, color, rounded }) => {
  return (
    <div>
      <span>Badge</span>
    </div>
  );
};

Badge.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  rounded: PropTypes.string,
};

export default Badge;
