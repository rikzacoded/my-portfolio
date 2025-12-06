

const Toast = ({ message }) => {
  return (
    <div
      className="fixed top-5 left-1/2 transform -translate-x-1/2 
                 bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg z-[9999]"
    >
      {message}
    </div>
  );
};

export default Toast;
