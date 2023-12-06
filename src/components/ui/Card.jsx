const Card = ({ className, children }) => {
  return (
    <div className={`p-4 shadow-md rounded-xl relative bg-white ${className}`}>
      {children}
    </div>
  );
};

export default Card;
