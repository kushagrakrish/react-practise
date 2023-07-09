import React from "react";
import UpdatedComponent from "./hoc";

const Person2 = ({ money, handleAddMoney }) => {
  return (
    <>
      <h1>Ram has this money $ {money}</h1>
      <button onClick={handleAddMoney}>Add Money</button>
    </>
  );
};

export default UpdatedComponent(Person2);
