import React from "react";
import "./ActivityList.css";
import Activity from "./Activity";

function ActivityList({ activities }) {
  const activityList = activities.map((item) => {
    return <Activity time={item.time} description={item.description} />;

  });

  return (
    activities.length > 0 && (
      <div className="list">
        <li>{activityList}</li>
      </div>
    )
  );
}

export default ActivityList;
