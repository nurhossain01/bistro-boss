import React from 'react';

const SectionTitle = ({ heading, subHeading}) => {
  return (
    <div className="text-center w-2/5 mx-auto">
      <h4 className="text-yellow-300">
        {heading}
      </h4>
      <div className="divider"></div>
      <h2>{subHeading}</h2>
      <div className="divider"></div>
    </div>
  );
};

export default SectionTitle;