import Ex5 from "./components/Ex5";
import Ex6 from "./components/Ex6";
import Ex7 from "./components/Ex7";
import Ex8 from "./components/Ex8";
import Ex9 from "./components/Ex9";
import Ex10 from "./components/Ex10";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="bg-success p-3 text-center text-white rounded">
            THIS IS APP COMPONENT..! (PARENT COMPONENT)
          </h1>
        </div>
      </div>
      <Ex5 
        img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
        name="Parent Card"
        lorem="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus consequatur quas laborum est corrupti itaque reiciendis maxime iusto dignissimos, culpa porro enim laboriosam cum, explicabo voluptates unde. Magnam, voluptatum dolore." 
      />
      <Ex6 
        img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
        name="Parent Card"
        lorem="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus consequatur quas laborum est corrupti itaque reiciendis maxime iusto dignissimos, culpa porro enim laboriosam cum, explicabo voluptates unde. Magnam, voluptatum dolore." 
      />
      <Ex7 />
      <Ex8 
        img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
        name="Parent Card"
        lorem="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus consequatur quas laborum est corrupti itaque reiciendis maxime iusto dignissimos, culpa porro enim laboriosam cum, explicabo voluptates unde. Magnam, voluptatum dolore." 
      />
      <Ex9 
        img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
        name="Parent Card"
        lorem="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus consequatur quas laborum est corrupti itaque reiciendis maxime iusto dignissimos, culpa porro enim laboriosam cum, explicabo voluptates unde. Magnam, voluptatum dolore." 
      />
      <Ex10 />
    </div>
  );
}

export default App;
