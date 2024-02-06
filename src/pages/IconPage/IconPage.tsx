import React from "react";
import './IconPage.scss';
import { Icon } from "../../ui-kit";

export const IconPage: React.FC = () => {
 return (
  <div className="iconPage">
   <h2>Icon</h2>
   <Icon type="Pdf" />
  </div>
 )
}