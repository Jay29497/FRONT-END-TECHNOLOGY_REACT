import react from "react";

// Function
function testFunction(name) {
  return name.toLowerCase();
}

function App() {
  // Variables
  const title = "WELCOME TO REACT";
  const endTitle = "Be-practical Teach Solutions..!";

  const heading1 = react.createElement("h1", {id: "title1"}, "HEADING-1");
  const heading2 = react.createElement("h2", {id: "title2"}, "HEADING-2");
  const section = react.createElement("section", {id: "container"}, [
    heading1,
    heading2,
  ]);

  // Object
  const websiteLink = {url: "https://www.youtube.com/"};
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="bg-primary p-3 text-white text-center">
            {title + " " + endTitle}
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="lead border p-3">
            {heading1}
            {heading2}
            {section}
            <a href={websiteLink.url} target="_blank">
              Youtube
            </a>
            <br />
            FUNCTION CALLING : {testFunction(title)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
