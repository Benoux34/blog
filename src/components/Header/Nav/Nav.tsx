import React from "react";

const Nav = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-y-2 md:gap-y-0 gap-x-5 font-light text-xs">
      <p className="cursor-pointer">Popular</p>
      <p className="cursor-pointer">News</p>
      <p className="cursor-pointer">Top rated</p>
      <p className="cursor-pointer">All topics</p>
    </div>
  );
};

export { Nav };
