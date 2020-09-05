import React, { useState } from "react";
import "./ListBuilder.css";
import DragNDrop from "../components/DragNDrop";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const data = [
    {title: 'group 1', items: ['1', '2', '3']},
    {title: 'group 2', items: ['4', '5']}
]

const ListBuilder = () => {
    return (
        <>
        <Pdf targetRef={ref} filename="new-order.pdf">
            {({ toPdf}) => <button onClick={toPdf}> Generate Pdf</button> }
        </Pdf>
          <header ref={ref} className="Drag-header">
             <DragNDrop data={data} />
          </header>
        </>
    );
}

export default ListBuilder;
