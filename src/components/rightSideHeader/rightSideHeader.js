// react
import React, { useState } from "react";

// Styles
import "./rightSideHeader.scss";

// components
import Button from "../button/button";
import Card from "../card/card";
import Modal from "../modal/modal";

// icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import DeleteIcon from "@material-ui/icons/Delete";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CancelIcon from "@material-ui/icons/Cancel";

const RightSideHeader = () => {
  const [componentsData, setComponentsData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [itemTobeDeleted, setItemTobeDeleted] = useState();

  const openSmallModal = id => {
    setModalIsOpen(true);
    setItemTobeDeleted(id);
  };

  const onSmallModalClose = () => {
    setModalIsOpen(false);
  };

  const handleAddComponent = () => {
    const id = componentsData.length + 1;
    const data = [
      ...componentsData,
      {
        id,
        name: `Components ${id}`
      }
    ];
    setComponentsData(data);
  };

  const emptyComponentDisplay = () => {
    return (
      <div className="right-side-container-contents-2-no-components">
        <div className="right-side-container-contents-2-no-components-icon">
          <DashboardIcon fontSize="large" />
        </div>
        <p className="right-side-container-contents-2-no-components-content-1">
          No Components yet
        </p>
        <p className="right-side-container-contents-2-no-components-content-2">
          Create and configure components for which
        </p>
        <p className="right-side-container-contents-2-no-components-content-3">
          teaches will be entering marks
        </p>
      </div>
    );
  };

  const handleDeleteComponent = id => {
    onSmallModalClose();
    const data = componentsData.filter(item => {
      return id !== item.id;
    });
    setComponentsData(data);
  };

  const nonEmptyComponentsDisplay = () => {
    return (
      <div className="right-side-container-contents-2-components">
        {componentsData.length > 0 && (
          <div className="row">
            {componentsData.map(item => {
              const { id } = item;

              return (
                <div className="col-sm-4" key={item.name}>
                  <div className="right-side-container-contents-2-components-contents">
                    <div className="right-side-container-contents-2-components-contents-first">
                      <p>{item.name}</p>
                      <DeleteIcon onClick={() => openSmallModal(id)} />
                    </div>
                    <div className="right-side-container-contents-2-components-contents-second">
                      <p className="right-side-container-contents-2-components-contents-second-name">
                        {item.name}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  const getCardDisplay = () => {
    return (
      <Card name="Components">
        {componentsData.length === 0
          ? emptyComponentDisplay()
          : nonEmptyComponentsDisplay()}
      </Card>
    );
  };

  const getStaticCardData = (firstText, secondText) => {
    return (
      <div className="right-side-container-contents-1-content-details">
        <p>{firstText}</p>
        <div className="right-side-container-contents-1-content-details-container">
          <p className="right-side-container-contents-1-content-details-container-text">
            {secondText}
          </p>
          <ExpandMoreIcon />
        </div>
      </div>
    );
  };

  const getDummyCardDisplay = () => {
    return (
      <Card name="General Settings">
        <div className="right-side-container-contents-1-content">
          {getStaticCardData("Year", "Select item")}
          {getStaticCardData("Grade", "Select grade")}
          {getStaticCardData("Name", "Select section")}
          {getStaticCardData("Subject", "Health and safety standards")}
          {getStaticCardData("Term", "Select term")}
        </div>
      </Card>
    );
  };

  return (
    <>
      <div className="right-side-container">
        <div className="right-side-container-header">
          <div className="right-side-container-header-left">
            <p className="right-side-container-header-left-heading-1">
              Component Configuration
            </p>
            <p className="right-side-container-header-left-heading-2">
              Curriculam / <b>Component Configuration</b>
            </p>
          </div>
          <div className="header-right">
            <Button
              icon={true}
              onClick={() => handleAddComponent()}
              size="button-large"
            >
              Add a Component
            </Button>
          </div>
        </div>
        <div className="right-side-container-contents-1">
          {getDummyCardDisplay()}
        </div>
        <div className="right-side-container-contents-2">
          {getCardDisplay()}
        </div>
      </div>
      <Modal size="small" showModal={modalIsOpen} onClose={onSmallModalClose}>
        <div className="modal-body">
          <CancelIcon size="large" />
          <h4 className="modal-text-1">Are you sure</h4>
          <h4 className="modal-text-2">you want to delete component?</h4>
          <div className="modal-body-buttons">
            <Button
              icon={false}
              onClick={() => onSmallModalClose()}
              size="button-large"
              classname="button-gray"
            >
              No Cancel it
            </Button>
            <Button
              icon={false}
              onClick={() => handleDeleteComponent(itemTobeDeleted)}
              size="button-large"
            >
              Delete Component
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RightSideHeader;
