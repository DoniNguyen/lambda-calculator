import React from "react";

const SpecialsButton = props => {
  return (
    <button className="special_button">
      {props.button/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default SpecialsButton