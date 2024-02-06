import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../../routes";
import { Layout } from "..";
import "./App.scss";
import { ButtonPage, HomePage, IconPage } from "../../pages";


export const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path={ROUTES.BUTTON} element={<ButtonPage />} />
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.ICON} element={<IconPage />} />
        </Routes>
      </Layout>
    </div>
  );
};
