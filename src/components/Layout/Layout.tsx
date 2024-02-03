import React, { ReactNode } from "react";

interface ILayoutProps {
  children?: ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout-container">{children}</div>
    </div>
  );
};
