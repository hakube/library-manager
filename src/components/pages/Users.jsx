import React from "react";
import Header from "../ui/Header";
import Content from "../ui/Content";

const Users = () => {
  const setTitle = (title) => {
    document.title = title;
  };
  setTitle("Users");
  return (
    <div className="appContainer">
      <Header />
      <Content />
      <div>Users area</div>
    </div>
  );
};

export default Users;
