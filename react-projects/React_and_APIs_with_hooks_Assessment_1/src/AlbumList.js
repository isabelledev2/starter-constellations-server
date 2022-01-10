import React, { useState, useEffect } from "react";

function AlbumList({ user = {} }) {
  const [albumList, setAlbumList] = useState([]);
  const doc = document.title;
  useEffect(() => {
    const abortController = new AbortController();

    document.title = "Awesome Album App";

    async function loadAlbums() {
      try {
        if (user.id) {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/albums?userId=${user.id}`,
            { signal: abortController.signal }
          );
          const albumsFromAPI = await response.json();
          setAlbumList(albumsFromAPI);
        }
      } catch (error) {
        if (error.name === "AbortError") {
        } else {
          throw error;
        }
      }
    }
    loadAlbums();

    return () => {
      abortController.abort();
      document.title = doc;
    };
  }, [user]);

  return (
    <div>
      <p>Please click on a user name to the left</p>
      <ul>
        {albumList.map((album) => (
          <li>
              {album.id} - {album.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumList;

