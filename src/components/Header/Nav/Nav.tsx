import React from "react";

const Nav = () => {
  return (
    <div className="flex items-center gap-x-5 font-light text-xs">
      <a href="/">Home</a>
      <p className="cursor-pointer">Popular</p>
      <p className="cursor-pointer">News</p>
      <p className="cursor-pointer">Top rated</p>
      <p className="cursor-pointer">All topics</p>
    </div>
  );
};

export { Nav };
