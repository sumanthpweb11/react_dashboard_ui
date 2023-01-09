import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainContent.css";

const MainContent = () => {
  return (
    <div className="MainContent">
      <h1>Dashboard</h1>
      <Cards />
      <Table />
    </div>
  );
};

export default MainContent;
