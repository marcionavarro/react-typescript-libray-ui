import React, { DOMAttributes } from "react";
import classNames from "classnames";

import Pdf from "../assets/icon/files/Pdf.svg?react";
import { newGuid } from "../../utils/guid";
import "./Icon.scss"

export type IconType = | "Pdf";

const iconTypes = new Map([
 ["Pdf", <Pdf key={newGuid()} />]
])

interface IIconProps extends DOMAttributes<HTMLDivElement> {
 className?: string;
 type: IconType;
 width?: string;
}

const getIcon = (type: IconType): JSX.Element => iconTypes.get(type) as JSX.Element;

export const Icon: React.FC<IIconProps> = ({ className, type, width, ...rest }) => {
 return (
  <div className={classNames("Icon")} style={{ width: width }} {...rest}>
   {getIcon(type)}
  </div>
 )
}