import React from "react";
import Icon from "./Icon";

const SearchBar = ({}) => {
  return (
    <div className="flex items-center border rounded-md p-2">
      <Icon />
      <input
        type="text"
        className="w-full outline-none"
        placeholder="What are you looking for?"
      />
    </div>
  );
};

export default SearchBar;
