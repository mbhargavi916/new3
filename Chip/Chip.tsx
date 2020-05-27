import * as React from "react";
import "./Chip.css";

export function Chip(props) {
  return (
    <a className="Chip" href={props.url}>
      <img className="Chip_Img" src={props.imageUrl} />
      <span className="Chip_Text">{props.label}</span>
    </a>
  );
}
