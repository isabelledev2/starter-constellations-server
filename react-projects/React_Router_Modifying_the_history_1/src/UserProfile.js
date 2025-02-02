import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

function UserProfile() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const history = useHistory();

  useEffect(() => {
    const abortController = new AbortController();
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      signal: abortController.signal,
    })
      .then((response) => response.json())
      .then(setUser)
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      });

    return () => {
      abortController.abort(); // cancels any pending request or response
    };
  }, [userId]);

  const rows = Object.entries(user).map(([key, value]) => (
    <div key={key}>
      <label>{key}</label>: {JSON.stringify(value)}
      <hr />
    </div>
  ));

  const deleteHandler = (event) => {
    // This will be successful but will not actually delete the user.
    fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      { method: "DELETE" } // the delete method tells the API to delete the user
    )
      .then((response) => response.json())
      .then(() => history.push("/"))
      .then((data) => console.log("deleteHandler is not fully implemented"));
  };

  if (user.id) {
    return (
      <div>
        <button type="button" onClick={deleteHandler}>
          Delete
        </button>
        {rows}
      </div>
    );
  }
  return "Loading...";
}

export default UserProfile;
