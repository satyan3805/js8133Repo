var parent = React.createElement("div",{id:"parent",xyz:"dummy_attrib"},
[React.createElement("h1",{},"HEADING TEXT"),React.createElement("p",{},"Some Paragraph Text")]);

var htmlRoot = document.getElementById("root");
var rootReact = ReactDOM.createRoot(htmlRoot);
rootReact.render(parent);