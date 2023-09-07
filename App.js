const heading = React.createElement(
    "div",
    {id: "parent"},
    [ React.createElement("div",{id: "child"},
        [React.createElement("h1",{},"I'm a h1 tag"),
        React.createElement("h2",{},"I'm a h2 tag")]
    ),
    React.createElement("div",{id: "child2"},
        [React.createElement("h1",{},"I'm a h1 tag"),
        React.createElement("h4",{},"I'm a h2 tag")]
    )]
)
const header = ReactDOM.createRoot(document.getElementById('header'));
header.render(heading);