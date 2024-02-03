import React from "react";
import { Layout } from "..";
import { Button } from "../../ui-kit";


export const App: React.FC = () => {
  const handleButtonClick = (event: React.MouseEvent) => {
    console.log("[button click event]", event);
  }

  return (
    <Layout>
      <h1>React Typescript Ui Library</h1>
      <hr />
      <h2>Button</h2>
      <Button onClick={handleButtonClick}>Send</Button>
      <Button isDisabled={true} onClick={handleButtonClick}>Send</Button>
    </Layout>
  );
};
