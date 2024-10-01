import React from 'react';
import ReactDOM from "react-dom";

const elem = <span>This is a react elem, </span>;


// JSX -> babel transpiles -> React.createElement -> React Element - JS Object -> render(HTML Element)
const jsxHeading = ( <h1 className = "heading"  tabIndex='5'>
    {elem}
    This is jsx code heading
    </h1> )

console.log(jsxHeading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading); // o/p // This is a react elem, This is jsx code heading




// functional component
const TitleComp = () => {
    return <div>
                <h1 id='title'>World</h1>
            </div>
}
    


const HeadingComp = () => (
    <div id='container'>
        <h1>Hello</h1>
        {jsxHeading}
        {2+3}
        {console.log("hey")}
        <TitleComp />

        {/* <TitleComp></TitleComp> */}
        {/* {TitleComp()} */}
    </div>

)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComp />); 