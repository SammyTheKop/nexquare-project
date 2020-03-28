// react
import React from "react";

// classnames package
import classnames from "classnames";

// prop-types
import { node, string, bool, func, oneOf } from "prop-types";

// styles
import "./button.scss";

// icons
import AddIcon from "@material-ui/icons/Add";

/**
 * @name Button
 * @description function to create the button component
 * @param classname
 * @param appearance
 * @param size
 * @param children
 * @param disabled
 * @param delay
 * @param handleClick
 * @param otherProps
 * @param icon
 * @returns button component
 */
const Button = ({
  classname,
  appearance,
  size,
  children,
  disabled,
  handleClick,
  icon,
  ...props
}) => {
  /**
   * @name clickHandler
   * @description Function handles the button click
   * @param {*} event
   */
  const clickHandler = event => {
    handleClick(event);
  };

  let disabledClassName = "";
  if (disabled) {
    disabledClassName = "button-disabled";
  }

  return (
    <div className="button-component">
      <button
        type="button"
        disabled={disabled}
        onClick={clickHandler}
        data-testid="button"
        className={classnames(
          classname,
          appearance,
          disabledClassName,
          size,
          "button"
        )}
        {...props}
      >
        <div className="button-contents">
          {icon && <AddIcon />}
          <p className="button-text">{children}</p>
        </div>
      </button>
    </div>
  );
};

Button.propTypes = {
  children: node.isRequired,
  disabled: bool,
  icon: bool,
  handleClick: func.isRequired,
  classname: string,
  appearance: string,
  size: oneOf([
    "button-medium",
    "button-large",
    "button-extra-large",
    "button-small",
    "button-extra-small"
  ])
};

Button.defaultProps = {
  disabled: false,
  classname: "",
  appearance: "",
  size: "button-medium",
  icon: false
};

export default Button;
