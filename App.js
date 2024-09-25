/*
    for siblings inside a div tag add inside array
*/

const parent = React.createElement("div",{ id: "Parent" },
  [
    React.createElement("div",{ id: "child" },[
        React.createElement("h1",{ id: "heading" },"I'm an h1 tag") ,
        React.createElement("h2",{ id: "heading" },"I'm an h2 tag")
    ]),
    
    React.createElement("div",{ id: "child1" },[
        React.createElement("h1",{ id: "heading" },"I'm an h1 tag") ,
        React.createElement("h2",{ id: "heading" },"I'm an h2 tag")
    ])
  ]
);

console.log(parent); // return object

const rootContainer = document.getElementById("root");
const root = ReactDOM.createRoot(rootContainer);

root.render(parent);
