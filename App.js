/**
 * 
 *  <div id="parent">
 *        <div id="child">
 *        <h1></h1>
 *        <div>
 *    </div>
 * 
 * 
 *   ReactElement(object) => HTML(browser understand)
*/
    const parent = React.createElement("div", {id: "parent"}, 
        React.createElement("div" ,{id: "child1"},[
           React.createElement("h1", {}, "I'm an h1 tag"),
            React.createElement("h2", {}, "I'm  an h2 tag")
        ]),
        React.createElement("div" ,{id: "child2"},[
            React.createElement("h1", {}, "I'm an h1 tag"),
             React.createElement("h2", {}, "I'm  an h2 tag")
         ]),
        );
        



// const heading = React.createElement(
//     "h1",
//     { id: "heading", xyz:"abc"},
//     "Hello world from React"
//     );

    console.log(parent);

    const root = ReactDOM.createRoot(document.getElementById("root"));  

    root.render(parent);
