import React from "react";
import "./HobbyList.css";

function HobbyList(props) {
  const { hobbies } = props;
  const listItems = hobbies.map((hobby, index) => <li key={index}>{hobby}</li>);
 if (listItems.length > 0) {
  return (
  <div>                          
       <h4>Hobbies</h4>
       <ul>{listItems}</ul>
  </div>
  ); 
  }
  return <h4></h4>
}

export default HobbyList;
