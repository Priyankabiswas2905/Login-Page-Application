import React, { Component, Fragment } from "react";

import { data } from "./tabledata";

class SimpleTable extends Component {
  render() {
    const { user } = data;
    console.log(user);
    return (
      <div style={{ maxWidth: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            backgroundColor: "black",
            color: "white",
            height: "4rem",
            paddingTop: "1.5rem",
            fontWeight: "bold",
            fontSize: "14px"
          }}
        >
          <div>Name</div>
          <div>Age</div>
          <div>Gender</div>
          <div>Email</div>
          <div>Phone</div>
        </div>

        <div>
          {user.map((data, index) => {
            console.log(data);

            const { id, name, age, gender, email, phoneNo } = data;
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: "1.5rem"
                }}
              >
                <div>{name}</div>
                <div>{age}</div>
                <div>{gender}</div>
                <div>{email}</div>
                <div>{phoneNo}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SimpleTable;
