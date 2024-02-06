import React from "react";
import "./ButtonPage.scss";
import { Button } from "../../ui-kit";

export const ButtonPage: React.FC = () => {
  const handleButtonClick = (event: React.MouseEvent) => {
    console.log("[button click event]", event);
  };

  return (
    <div className="ButtonPage">
      <h2>Button</h2>
      <Button
        isDisabled={false}
        onClick={handleButtonClick}
      >
        Send
      </Button>
    </div>
  )
};