import React from "react";
import "./tabs.css";
import CameraIcon from './icons/CameraIcon.js';

const Tabs = () => {
  return (
    <ul className="tabs">
      <li className="icon"><CameraIcon /></li>
      <li className="is-active">Chats</li>
      <li>Status</li>
      <li>Calls</li>
    </ul>
  );
};

export default Tabs;
