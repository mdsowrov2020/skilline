import React from "react";

const Heading = ({ title, highlightedText, description, className = "" }) => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl font-semibold mb-4 text-blue">
        {title} <span className="text-primary">{highlightedText}</span>
      </h2>
      <p className={`text-blue-gray text-base  mx-auto ${className}`}>
        {description}
      </p>
    </div>
  );
};

export default Heading;
