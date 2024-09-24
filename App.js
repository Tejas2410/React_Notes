const heading = React.createElement("h1" , {id : "heading"} , "Hello World from React");

    console.log(heading); // return object
    

    const rootContainer = document.getElementById("root");
    const root = ReactDOM.createRoot(rootContainer);

    root.render(heading);

    