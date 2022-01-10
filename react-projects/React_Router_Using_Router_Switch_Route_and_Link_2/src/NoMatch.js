import React from 'react';
import { useLocation } from "react-router-dom";

function NoMatch() {
  const location = useLocation();

  return (
    <h1>
      404 Not Found for <code>{location.pathname}</code>
    </h1>
  );
}

export default NoMatch;