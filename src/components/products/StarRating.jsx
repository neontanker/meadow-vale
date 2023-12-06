import React from "react";

const StarRating = ({ rating }) => {
  return (
    <div className="flex m-1 justify-center">
      {[...Array(5)].map((_star, index) => {
        return (
          <div
            key={index}
            className={`bg-transparent border-none outline-none text-2xl cursor-default ${
              index < rating ? `text-yellow-400` : `text-gray-200`
            }`}
          >
            <span>&#9733;</span>
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
