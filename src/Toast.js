import React from "react";

const Toast = ({ message }) => {
  return (
    <div className="fixed top-5 right-5 z-[9999] bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg animate-slideIn">
      {message}
    </div>
  );
};

export default Toast;
