import React, { useState, useEffect } from "react";
import DragNDrop from "../components/DragNDrop";
import "./ListBuilder.css";
import ExternalApi from "../pages/ExternalApi";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../components/Loading";

import Pdf from "react-to-pdf";
const ref = React.createRef();

// const data = [
//     {title: 'group 1', items: ['Rice, Flour, Beans ', 'Chicken, Pork, Beef']},
//     {title: 'group 2', items: ['Coffee, Tea', 'Tomatoes, Onions, Lettuce']}
// ]

const data = [
    {title: 'group 1', items: ['Rice, Flour, Beans ', 'Chicken, Pork, Beef']},
    {title: 'group 2', items: ['Coffee, Tea', 'Tomatoes, Onions, Lettuce']}
]

const ListBuilder = () => {
    const { isAuthenticated, isLoading, error } = useAuth0();

    if (error) {
        return <div>Oops... {error.message}</div>;
    }

    if (isLoading) {
     return <Loading />;
    }
    return (
    isAuthenticated ? (
     
        <>
        <Pdf targetRef={ref} filename="new-order.pdf">
            {({ toPdf}) => <button onClick={toPdf} className="pdf-Button"> Generate Pdf</button> }
        </Pdf>
          <header ref={ref} className="Drag-header">
             <DragNDrop data={data} />
          </header>
        </>
    ) : (
       <div>
        <ExternalApi />
       </div>
    )
    );
}

export default ListBuilder;
