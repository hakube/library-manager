import React from "react";
import Header from "../ui/Header";
import Content from "../ui/Content";

const Dashboard = () => {
  const setTitle = (title) => {
    document.title = title;
  };
  setTitle("Dashboard");
  return (
    <div className="appContainer">
      <Header />
      <Content />
    </div>
  );
};

export default Dashboard;
