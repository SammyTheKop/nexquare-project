// react and react hooks
import React, { useState, useEffect, useRef } from "react";

// classnames package
import classnames from "classnames";

// prop-types
import { string, func, bool, node, oneOf } from "prop-types";

// styles
import "./modal.scss";

// custom hook
import handleClickOutside from "../../common-hooks/useHandleClickOutside";

const Modal = ({ classname, showModal, children, onClose, size, ...props }) => {
  const [isVisible, setVisibility] = useState(showModal);
  const modalRef = useRef(null);

  useEffect(() => {
    setVisibility(showModal);
  }, [showModal]);

  const closeModal = () => {
    setVisibility(false);
    onClose();
  };

  const handlekeyPress = e => {
    if (e.key === "Enter") {
      setVisibility(false);
      onClose();
    }
  };

  useEffect(() => {
    const handler = handleClickOutside(modalRef, closeModal);
    if (isVisible) {
      document.addEventListener("click", handler);
    }
    return () => {
      document.removeEventListener("click", handler);
    };
  });

  const handleEsc = e => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener("keydown", handleEsc, false);
    }
    return () => {
      document.removeEventListener("keydown", handleEsc, false);
    };
  });

  return (
    <div
      className={classnames(classname, "modal", { show: isVisible })}
      {...props}
      data-testid="modal-container"
    >
      <div className={classnames("modal-content", size)} ref={modalRef}>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: node.isRequired,
  classname: string,
  showModal: bool,
  onClose: func,
  size: oneOf(["large", "medium", "small"])
};

Modal.defaultProps = {
  classname: "",
  showModal: false,
  onClose: () => {},
  size: "medium"
};

export default Modal;
