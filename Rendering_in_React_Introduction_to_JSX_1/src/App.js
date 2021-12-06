import React from "react";
import ReactDOM from "react-dom";


function App(){
const x = 4;
const y = 6;
  const z = (x + y);
const website = "https://www.thinkful.com/";
  const linkText = "Website";
  

const element = (
  <main>
  <body>
  <div>
    <p class="paragraph">Purchased {x} shirts and {y} pants for a total of {z} items</p>
    <a href = {website}>{linkText}</a>;
  </div>
    </body>
  </main>
);
  return element;
}

export default App;