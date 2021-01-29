import React from "react";
import App from "../App";
import UserItem from "./UserItem";

function Users({ props }) {
  return (
    <div>
      {props.repos.map(({ props }) => {
        return <UserItem key={props.repos.id} />;
      })}
    </div>
  );
}

export default Users;
