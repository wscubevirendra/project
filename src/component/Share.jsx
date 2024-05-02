import React from 'react';
import { BiShareAlt } from "react-icons/bi";

const Share = ({ onClick, data }) => {
  return (
    <div className="absolute top-2 right-2">
      <button
       
        onClick={() => onClick(data)}
      >
        <BiShareAlt className="text-share2 md:text-2xl" />
      </button>
    </div>
  );
}

export default Share;
