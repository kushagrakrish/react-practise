// import React, { useState } from "react";

import { useState } from "react";

// const UpdatedComponent = (OriginalComponent, props) => {
//   const NewComponent = () => {
//     const [money, setMoney] = useState(10);
//     const handleAddMoney = () => {
//       setMoney(money * 2);
//     };
//     return <OriginalComponent {...props} />;
//   };
//   return NewComponent;
// };

// export default UpdatedComponent;

const UpdatedComponent = (Component) => {
  const [money, setMoney] = useState(10);
  const handleAddMoney = () => {
    setMoney(money * 2);
  };
};
({ ...props }) => (
  <div>
    <h1>This is Wrapper COmponent</h1>
    <Component {...props} />
  </div>
);

export default UpdatedComponent;
