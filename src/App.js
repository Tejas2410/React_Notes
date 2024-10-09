import React from 'react';
import ReactDOM from "react-dom";

import Header from './components/Header';
import Body from './components/Body';





// {{ means  one curly brace is to write js code and other is js object
// functional component are normal javascipt function that return some peice of jsx
// props : it is argument to a function.



const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); 