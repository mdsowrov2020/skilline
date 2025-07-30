import React from "react";
import FeatureList from "./FeatureList";

const FeatureContents = () => {
  return (
    <div>
      <h3 className="text-blue text-2xl font-semibold">
        A <span className="text-primary">user interface</span> designed for the
        classroom
      </h3>

      <FeatureList />
    </div>
  );
};

export default FeatureContents;
