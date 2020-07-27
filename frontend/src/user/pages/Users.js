import React from "react";

import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max Schwarz",
      image:
        "https://avatars2.githubusercontent.com/u/28806196?s=460&u=47c7af126ded6a9b87114a7ae83ee0b95030ddc0&v=4",
      places: 3,
    },
  ];

  return <UserList items={USERS} />;
};

export default Users;
