import React, { useState } from "react";
import UpdatedComponent from "./hoc";

const Person1 = ({ money, handleAddMoney }) => {
  return (
    <>
      <h1>Kushagra has this money $ {money}</h1>
      <button onClick={handleAddMoney}>Add Money</button>
    </>
  );
};

export default UpdatedComponent(Person1);
