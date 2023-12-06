const Card = ({ className, children }) => {
  return (
    <div
      className={`p-4 shadow-md rounded-xl relative bg-white overflow-y-auto max-h-[80vh] ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
