import React, { useState } from "react";
import "./ListBuilder.css";
import DragNDrop from "../components/DragNDrop";

const data = [
    {title: 'group 1', items: ['1', '2', '3']},
    {title: 'group 2', items: ['4', '5']}
]

const ListBuilder = () => {
    return (
          <header className="Drag-header">
             <DragNDrop data={data} />
          </header>
    );
}

export default ListBuilder;
