                                        // this is one element

// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "This is React code"
// );
    
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);   

//this is nested elements
//createElement creates an Object

                                           //WE HAVE TO CREAte

/* <div id = parent>
    <div id = child>
        <h1>I'm h1 tag</h1>
    </div>
</div> 
*/

// const parent = React.createElement("div",{id: "parent"},
//     React.createElement("div",{id:"child"},
//     React.createElement("h1",{},"I'm h1 tag"),
//     ),
// );


// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent); 

                                            //NOW TO CREATE SIBLINGS

/* <div id = parent>
    <div id = child>
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div> 
*/

// const parent = React.createElement("div",{id: "parent"},
//     React.createElement("div",{id:"child"},
//     [React.createElement("h1",{},"I'm h1 tag"),
//         React.createElement("h1",{},"I'm h2 tag")
//     ]),
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent); 



                                          //NOW TO CREATE SIBLINGS    //we have to create an array

/* <div id = parent>
    <div id = child>
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
    <div id = child2>
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div> 
  */

const parent = React.createElement("div",{id: "parent"},
    [React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I'm h1 tag"),
            React.createElement("h2",{},"I'm h2 tag")
        ]),
        React.createElement("div",{id:"child2"},
            [React.createElement("h1",{},"I'm h1 tag"),
                React.createElement("h2",{},"I'm h2 tag")
            ]),
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); 

