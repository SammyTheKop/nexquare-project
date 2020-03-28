import React from "react";
import "./container.scss";

import RightSideHeader from "../rightSideHeader/rightSideHeader";

// icons
import SchoolIcon from "@material-ui/icons/School";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import AccessibleIcon from "@material-ui/icons/Accessible";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AddCommentIcon from "@material-ui/icons/AddComment";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import AddToHomeScreenIcon from "@material-ui/icons/AddToHomeScreen";
import AdjustIcon from "@material-ui/icons/Adjust";

const Container = () => {
  const curriculamData = [
    "Mark entry",
    "Rule Setup",
    "Component Configuration",
    "Copy Template",
    "Mark Upload",
    "View Report Card",
    "Marks Card",
    "Add Report card term",
    "Subject-card entry status",
    "external exam upload"
  ];

  const curriculamIcons = [
    <SchoolIcon />,
    <AccessibilityIcon />,
    <AccessibleIcon />,
    <AccountBoxIcon />,
    <AddCommentIcon />,
    <AddLocationIcon />,
    <AddToHomeScreenIcon />,
    <AdjustIcon />
  ];

  return (
    <div className="home-contents">
      <div className="home-contents-left-menu">
        <div className="home-contents-left-menu-icons">
          {curriculamIcons.map(item => {
            return (
              <div className="home-contents-left-menu-icons-container">
                {item}
              </div>
            );
          })}
        </div>
        <div className="home-contents-left-menu-names">
          <p className="home-contents-left-menu-names-first">Curriculam</p>
          {curriculamData.map(item => {
            return (
              <p
                className={`home-contents-left-menu-names-remaining ${item}`}
                key={item}
              >
                {item}
              </p>
            );
          })}
          <p className="home-contents-left-menu-names-last">
            <span class="copyright">&copy; Powered by Nexquare</span>
          </p>
        </div>
      </div>
      <div className="home-contents-right-menu">
        <RightSideHeader />
      </div>
    </div>
  );
};

export default Container;
