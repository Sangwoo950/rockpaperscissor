import React from "react";

const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img
        className="item-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-UzWirBFsOzX3yClLVTOCBS_a74jb1GMbFg&usqp=CAU"
      />
      <h2>WIN</h2>
    </div>
  );
};

export default Box;
